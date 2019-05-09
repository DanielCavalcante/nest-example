'use strinc'
import { Jarvis } from 'src/utils/jarvis';
import { Contract } from './contract';
import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from '../dtos/create-customer.dto';

@Injectable()
export class CreateCustomerContract implements Contract {

  errors: any[];
  
  validate(model: CreateCustomerDto): boolean {
    const jarvis = new Jarvis();

    jarvis.hasMinLen(model.name, 5, 'Invalid name')
    jarvis.isEmail(model.email, 'Invalid email')
    jarvis.isFixedLen(model.document, 11, 'Invalid CPF')
    jarvis.hasMinLen(model.password, 6, 'Invalid password')
    this.errors = jarvis.errors

    return jarvis.isValid()
  }

}