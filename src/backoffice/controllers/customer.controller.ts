'use strict'
import { Controller, Get, Post, Put, Delete, Param, Body, UseInterceptors } from '@nestjs/common';
import { ValidatorInterceptor } from 'src/interceptors/validator.interceptor';
import { CreateCustomerContract } from '../contracts/customer.contracts';
import { Result } from '../models/result.model';
import { CreateCustomerDto } from '../dtos/create-customer.dto';

@Controller('v1/customers')
export class CustomerController {
  @Get()
  get() {
    return 'customers'
  }

  @Get(':document')
  getById(@Param('document') document) {
    return new Result(null, true, [], null)
  }

  @Post()
  @UseInterceptors(new ValidatorInterceptor(new CreateCustomerContract()))
  post(@Body() body: CreateCustomerDto) {
    return new Result('Created!', true, body, null)
  }

  @Put(':document')
  put(@Param('document') document, @Body() body) {
    return new Result('Updated!', true, body, null)
  }

  @Delete(':document')
  delete(@Param('document') document) {
    return new Result('Removed!', true, null, null)
  }
}