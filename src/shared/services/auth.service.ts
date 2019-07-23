import { JwtService } from '@nestjs/jwt'
import { Injectable } from '@nestjs/common'
import { JwtPayload } from '../interfaces/jwt-payload.interface'

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService
    ) {
  }

  async createToken() {
    const user: JwtPayload = { username: 'xuxinha@gmail.com' }
    const accessToken = this.jwtService.sign(user)
    return {
      expiresIn: 3600,
      accessToken
    }
  }

  async validateUser(payload: JwtPayload): Promise<any> {
    return await this.accountService.findOneByUsername(payload.username)
  }

}