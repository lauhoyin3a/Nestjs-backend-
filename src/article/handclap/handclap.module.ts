import { HandClapService } from './handclap.service';
import { HandClapController } from './handclap.controller';
import { Module, Controller } from '@nestjs/common';

@Module({
  controllers: [HandClapController],
  providers: [HandClapService],
})
export class HandClapModule {}
