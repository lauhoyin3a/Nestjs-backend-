import { Injectable } from '@nestjs/common';
import { PassportStrategy } from "@nestjs/passport";
import {Strategy} from 'passport-jwt';
import { ExtractJwt } from "passport-jwt";
import { PrismaService } from 'src/prisma/prisma.service';
import {ConfigService} from '@nestjs/config'
import { validate } from 'class-validator';


@Injectable()
export class JwtStrategy extends PassportStrategy(
    Strategy,
    'jwt',
){
    constructor(config: ConfigService, private prisma: PrismaService){
        super({
            
            jwtFromRequest:
              ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: config.get('JWT_SECRET'),
          });
        }
 async validate(payload: {
    sub: number;
    email: string;
 }){
    const user=
    await this.prisma.user.findUnique(
        {
            where:{
                id: payload.sub,
                
            }
        })
           
       
        delete user.hash;
        return user;
    
     
    



}}