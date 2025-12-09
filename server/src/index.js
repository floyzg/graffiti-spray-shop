/**
 * Entry point for the server application.
 *
 * Что будет разрабатываться в этом модуле:
 * - Загрузка конфигурации окружения и инициализация подключения к БД.
 * - Создание и настройка Express-приложения (парсеры, CORS, статические файлы).
 * - Регистрация маршрутов (auth, products, users и т.д.).
 * - Подключение middleware для обработки ошибок и логирования.
 * - Запуск HTTP-сервера на указанном порту.
 *
 * TODO: реализовать последовательность инициализации и экспорт/запуск сервера.
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const articles = require('./models/Product.js');
const PORT = 3000;
const DATA_FILE = path.join(__dirname, 'Product.js');

const loadArticles = () => {
    delete require.cache[require.resolve(DATA_FILE)];
    return require(DATA_FILE);
};

const saveArticles = (articles) => {
    const dataToWrite = `module.exports = ${JSON.stringify(articles, null, 2)};`;
    fs.writeFileSync(DATA_FILE, dataToWrite, 'utf-8');
};

const getRequestBody = (req) => {
    return new Promise((resolve, reject) => {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            try {
                resolve(JSON.parse(body));
            } catch (error) {
                reject(new Error('Неверный формат JSON'));
            }
        });
        req.on('error', reject);
    });
};

const server = http.createServer(async(req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); 
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');


    if (req.method === 'OPTIONS') {
        res.statusCode = 204;
        res.end();
        return;
    }

    if (req.method === 'GET' && req.url === '/api/articles') {
        const articles = loadArticles();
        res.statusCode = 200;
        res.end(JSON.stringify(articles));
        return;
    }

    if (req.method === 'POST' && req.url === '/api/articles') {
        try {
            const newArticle = await getRequestBody(req);
            const articles = loadArticles();

            newArticle.id = `art-${Date.now()}`;
            articles.push(newArticle);

            saveArticles(articles);
            res.statusCode = 201;
            res.end(JSON.stringify(newArticle));
            
        } catch (error) {
            res.statusCode = 400;
            res.end(JSON.stringify({ message: error.message }));
        }
        return;
    }

    if (req.method === 'DELETE' && req.url.startsWith('/api/articles/')) {
        const articleId = req.url.split('/').pop();
        let articles = loadArticles();
        
        const initialLength = articles.length;
        articles = articles.filter(article => article.id !== articleId);

        if (articles.length === initialLength) {
            res.statusCode = 404;
            res.end(JSON.stringify({ message: `Продукт с ID ${articleId} не найдена` }));
            return;
        }

        saveArticles(articles);
        res.statusCode = 200;
        res.end(JSON.stringify({ message: `Статья с ID ${articleId} удалена` }));
        return;
    }

    res.statusCode = 404;
    res.end(JSON.stringify({ message: 'Эндпоинт не найден' }));
});

server.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}.`);
    console.log(`Эндпоинты: /api/articles (GET, POST, DELETE /api/articles/:id)`);
});
