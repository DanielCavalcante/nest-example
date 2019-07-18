import { Controller, Get, Post, Put, Delete, Param, Body, UseInterceptors } from '@nestjs/common';
import { ProductService } from 'src/store/services/product.service'
import { Product } from 'src/store/entities/product.entity'

@Controller('v1/products')
export class ProductController {
    
}