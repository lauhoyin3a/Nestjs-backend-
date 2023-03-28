import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { UseGuards } from '@nestjs/common/decorators';
import { JwtGuard } from '../auth/guard';

import { ChapterDto, ChapterUpdateDto } from './dto';
import { ChapterService } from './chapter.service';
@Controller('chapter')
export class ChapterController {
  constructor(private chapterService: ChapterService) {}
  @Post('create')
  create(@Body() dto: ChapterDto) {
    return this.chapterService.create_chapter(dto);
  }

  @Get('get/:id')
  get(@Param('id') id) {
    return this.chapterService.get_chapter(id);
  }

  @Get('getAll')
  getAll() {
    return this.chapterService.getAll();
  }
  @UseGuards(JwtGuard)
  @Put('update/:id')
  update(@Param('id') id: string, @Body() Dto: ChapterUpdateDto) {
    console.log(Dto);
    return this.chapterService.update(id, Dto);
  }
  @UseGuards(JwtGuard)
  @Delete('delete/:id')
  delete(@Param('id') id) {
    return this.chapterService.delete(id);
  }
}
