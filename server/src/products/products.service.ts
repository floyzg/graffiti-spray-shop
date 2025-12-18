import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';

export interface Product extends CreateProductDto {
  id: number;
}

@Injectable()
export class ProductsService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Neon Pink Blaster',
      brand: 'Montana Premium',
      color: 'Pink',
      price: 12.99,
      image: 'pink.svg',
      accent: '#FF10F0',
    },
    {
      id: 2,
      name: 'Electric Blue',
      brand: 'Ironlak pro',
      color: 'Blue',
      price: 14.99,
      image: 'blue.svg',
      accent: '#0077FF',
    },
    {
      id: 3,
      name: 'Lime Shock',
      brand: 'Belton Molotow',
      color: 'Green',
      price: 11.99,
      image: 'green.svg',
      accent: '#32FF32',
    },
    {
      id: 4,
      name: 'Fire Orange',
      brand: 'Montana Gold',
      color: 'Orange',
      price: 13.99,
      image: 'orange.svg',
      accent: '#FF6B35',
    },
    {
      id: 5,
      name: 'Royal Purple',
      brand: 'Ironlak Sugar',
      color: 'Purple',
      price: 12.49,
      image: 'purple.svg',
      accent: '#8B5CF6',
    },
    {
      id: 6,
      name: 'Shock Yellow',
      brand: 'Montana Black',
      color: 'Yellow',
      price: 10.99,
      image: 'yellow.svg',
      accent: '#FACC15',
    },
    {
      id: 7,
      name: 'Blood Red',
      brand: 'Beltom Premium',
      color: 'Red',
      price: 9.99,
      image: 'red.svg',
      accent: '#EF4444',
    },
    {
      id: 8,
      name: 'Chrome Silver',
      brand: 'Montana Cans',
      color: 'Silver',
      price: 15.99,
      image: 'silver.svg',
      accent: '#D1D5DB',
    },
    {
      id: 9,
      name: 'Chrome Silver Duplicate',
      brand: 'Montana Cans',
      color: 'Silver',
      price: 15.99,
      image: 'silver.svg',
      accent: '#D1D5DB',
    },
    {
      id: 10,
      name: 'Blood Red',
      brand: 'Beltom Premium',
      color: 'Red',
      price: 9.99,
      image: 'red.svg',
      accent: '#EF4444',
    },
  ];

  findAll(): Product[] {
    return this.products;
  }

  create(createProductDto: CreateProductDto): Product {
    const { name, brand, color, price, image, accent } = createProductDto;

    if (!name || !brand || !color || !image || !price || !accent) {
      throw new Error('Заполните данные корректно!');
    }

    const newProduct: Product = {
      id:
        this.products.length > 0
          ? Math.max(...this.products.map((p) => p.id)) + 1
          : 1,
      name,
      brand,
      color,
      price: Number(price),
      image,
      accent,
    };

    this.products.push(newProduct);
    return newProduct;
  }

  remove(id: number): { message: string } {
    const index = this.products.findIndex((product) => product.id === id);

    if (index === -1) {
      throw new Error(`Продукт с ID ${id} не найден.`);
    }

    this.products.splice(index, 1);
    return { message: `Продукт с ID ${id} удален.` };
  }
}
