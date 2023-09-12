
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  async signIn(login, pass) {
   const user =  await this.validateUser(login, pass);
    const payload = { sub: user.id, login: user.login };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }


  async validateUser(login: string, pass: string): Promise<any> {
    const user = await this.userService.findOneByLogin(login);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }else{
        throw new UnauthorizedException();
    }
  }
}