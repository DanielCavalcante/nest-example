import { Controller, Post, Body } from '@nestjs/common'
import { RoomBookService } from '../services/room-book.services'

@Controller('v1/rooms')
export class AgendaController {
  constructor(
    private readonly service: RoomBookService
  ) { }

  @Post()
  async Book(@Body() body: any) {
    await this.service.Book(body.customer, body.room)
  }
}