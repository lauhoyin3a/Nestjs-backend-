import { PrismaClient } from '@prisma/client';
import {ConfigService} from '@nestjs/config'
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor(config: ConfigService) {
    super({
      datasources: {
        db: {
          url: config.get('DATABASE_URL'),
        },
      },
    }); //call the constructor of the class
console.log(config.get('DATABASE_URL'))
  }
}
