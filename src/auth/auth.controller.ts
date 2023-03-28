import { AuthService } from './auth.service';
import { Controller, Post, Body, ParseIntPipe } from '@nestjs/common';
import { Request } from 'express';
import { AuthDto, LoginDto } from './dto';
import { type } from 'os';

@Controller('auth') // /auth
export class AuthController {
  constructor(private AuthService: AuthService) {}
  @Post('signup') // /auth/signup
  signup(@Body() dto: AuthDto) {
    //@Body is req.body
    //ParseIntPipe change password string into number
    // create an object and put dto inside
    console.log('123');
    return this.AuthService.signup(dto);
  } // endpoint

  @Post('login')
  login(@Body() dto: LoginDto) {
    return this.AuthService.login(dto);
  } //endpoint
}
