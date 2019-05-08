'use strict'
import { Controller, Get, Post, Put, Delete, Param, Body, UseInterceptors } from '@nestjs/common';
import { Customer } from '../models/customer.model';
import { ValidatorInterceptor } from 'src/interceptors/validator.interceptor';
import { CreateCustomerContract } from '../contracts/customer.contracts';

@Controller('v1/customers')
export class CustomerController {
  @Get()
  get() {
    return 'customers'
  }

  @Get(':document')
  getById(@Param('document') document) {
    return `costumer ${document}`
  }

  @Post()
  @UseInterceptors(new ValidatorInterceptor(new CreateCustomerContract()))
  post(@Body() body: Customer) {
    return body
  }

  @Put(':document')
  put(@Param('document') document, @Body() body) {
    return { customer: document, data: body }
  }

  @Delete(':document')
  delete(@Param('document') document) {
    return document
  }
}