import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Body,
  HttpCode,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import type { Product } from './products.service';

@Controller('api/products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  findAll(): Product[] {
    return this.productsService.findAll();
  }

  @Post()
  @HttpCode(201)
  create(@Body() createProductDto: CreateProductDto): Product {
    try {
      return this.productsService.create(createProductDto);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown error';
      throw new BadRequestException(message);
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    try {
      return this.productsService.remove(parseInt(id, 10));
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown error';
      throw new NotFoundException(message);
    }
  }
}
