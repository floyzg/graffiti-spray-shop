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
import { createProduct, deleteProduct, getProducts } from "./controllers/productController.js";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE"],
  })
);
app.use(express.json());
app.use("/assets", express.static(path.join(__dirname, "assets")));

// routes
app.get("/api/products", getProducts);
app.post("/api/products", createProduct);
app.delete("/api/products/:id", deleteProduct);
// app.get("/api/products", (req, res) => {
//   console.log("server: hit route!");
//   res.json([{ test: true }]);
// });

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
