import { HandClapService } from './handclap.service';

import {
  Controller,
  Post,
  Body,
  ParseIntPipe,
  Get,
  Put,
  Param,
} from '@nestjs/common';
import { Request } from 'express';
import { HandClapDto } from '../dto';
import { Delete, UseGuards } from '@nestjs/common/decorators';
import { JwtGuard } from 'src/auth/guard';
@Controller('article/handclap')
export class HandClapController {
  constructor(private HandClapService: HandClapService) {}
  @Post('create/')
  create(@Body() Dto: HandClapDto) {
    console.log('created handclap');
    return this.HandClapService.create_handclap(Dto);
  }
  @Get('get/')
  get(@Body() Dto: HandClapDto) {
    return this.HandClapService.get_handclap(Dto);
  }

  @Get('getAll/')
  getAll() {
    return this.HandClapService.getAll_handclap();
  }

  @Put('clap/:id')
  clap(@Param('id') id) {
    return this.HandClapService.clap(id);
  }
  @Delete('delete/:id')
  delete(@Param('id') id) {
    return this.HandClapService.delete(id);
  }
}
