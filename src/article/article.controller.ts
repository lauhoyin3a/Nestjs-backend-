import { ArticleService } from './article.service';

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
import { ArtDto, UpdateDto } from './dto';
import { Delete, UseGuards } from '@nestjs/common/decorators';
import { JwtGuard } from '../auth/guard';
@Controller('article')
export class ArticleController {
  constructor(private ArticleService: ArticleService) {}
  @Post('create-article')
  create(@Body() artDto: ArtDto) {
    console.log('created article');
    return this.ArticleService.create_article(artDto);
  }
  @Get('get/:id')
  get(@Param('id') id) {
    return this.ArticleService.get_article(id);
  }

  @Get('getAll')
  getAll() {
    return this.ArticleService.getAll();
  }
  @UseGuards(JwtGuard)
  @Put('update/:id')
  update(@Param('id') id: string, @Body() updateDto: UpdateDto) {
    console.log(updateDto);
    return this.ArticleService.update(id, updateDto);
  }
  @UseGuards(JwtGuard)
  @Delete('delete/:id')
  delete(@Param('id') id) {
    return this.ArticleService.delete(id);
  }
}
