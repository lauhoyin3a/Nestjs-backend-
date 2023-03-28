import { UseGuards } from '@nestjs/common/decorators';
import { JwtGuard } from 'src/auth/guard';
import { SectionService } from './section.service';
import {
  Controller,
  Post,
  Body,
  ParseIntPipe,
  Get,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { SectionDto, SectionUpdateDto } from './dto';

@Controller('section')
export class SectionController {
  constructor(private SectionService: SectionService) {}
  @Post('create/')
  create(@Body() Dto: SectionDto) {
    return this.SectionService.create_section(Dto);
  }

  @Get('get/:id')
  get(@Param('id') id) {
    return this.SectionService.get_section(id);
  }

  @Get('getAll')
  getAll() {
    return this.SectionService.getAll();
  }
  @UseGuards(JwtGuard)
  @Put('update/:id')
  update(@Param('id') id: string, @Body() Dto: SectionUpdateDto) {
    console.log(Dto);
    return this.SectionService.update(id, Dto);
  }
  @UseGuards(JwtGuard)
  @Delete('delete/:id')
  delete(@Param('id') id) {
    return this.SectionService.delete(id);
  }
}
