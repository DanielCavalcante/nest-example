import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Product } from 'src/store/entities/product.entity'

@Injectable()
export class ProductService {
  constructor(@InjectRepository(Product) private readonly repository: Repository<Product>) {

  }

  async get(): Promise<Product[]> {
    return await this.repository.find()
  }

  async post(product: Product) {
    return this.repository.save(product)
  }

  async put(id: number, product: Product) {
    return this.repository.update(id, product)
  }

  async delete(id: number) {
    return this.repository.delete(id)
  }
  
}
