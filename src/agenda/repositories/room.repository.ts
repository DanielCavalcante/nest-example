import { Injectable } from '@nestjs/common'
import { Room } from '../models/room.model'

@Injectable()
export class RoomRepository {
  async findOneById(id: string): Promise<Room> {
    return new Room('123123')
  }
}