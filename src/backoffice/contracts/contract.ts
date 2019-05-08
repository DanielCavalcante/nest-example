'use strict'

export interface Contract {
  errors: any[]
  validate(model: any): boolean
}