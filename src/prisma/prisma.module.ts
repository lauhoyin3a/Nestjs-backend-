import { Module, Global } from '@nestjs/common';
import { MetadataStorage } from 'class-validator';
import { PrismaService } from './prisma.service';


 // prismaservice will be  available to all the modules in the app
@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService], // export so that auth module can use the service
})
export class PrismaModule {}
