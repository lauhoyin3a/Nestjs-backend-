import { CategoryDto } from './dto/category.dto';
import { CategoryService } from './category.service';

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

@Controller('category')
export class CategoryController {
  constructor(private CategoryService: CategoryService) {}
  @Post('create')
  create(@Body() dto: CategoryDto) {
    return this.CategoryService.create_category(dto);
  }

  @Get('get/:id')
  get(@Param('id') id) {
    return this.CategoryService.get_category(id);
  }

  @Get('getAll')
  getAll() {
    return this.CategoryService.getAll();
  }
  @UseGuards(JwtGuard)
  @Put('update/:id')
  update(@Param('id') id: string, @Body() categoryDto: CategoryDto) {
    console.log(categoryDto);
    return this.CategoryService.update(id, categoryDto);
  }
  @UseGuards(JwtGuard)
  @Delete('delete/:id')
  delete(@Param('id') id) {
    return this.CategoryService.delete(id);
  }
}
