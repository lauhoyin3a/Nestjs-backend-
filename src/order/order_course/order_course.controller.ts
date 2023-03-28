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
import { JwtGuard } from 'src/auth/guard';

import { OrderCourseDto, OrderCourseUpdateDto } from './dto';
import { OrderCourseService } from './order_course.service';
@Controller('order_course')
export class OrderCourseController {
  constructor(private order_courseService: OrderCourseService) {}
  @Post('create')
  create(@Body() dto: OrderCourseDto) {
    return this.order_courseService.create_order_course(dto);
  }

  @Get('get/:id')
  get(@Param('id') id) {
    return this.order_courseService.get_order_course(id);
  }

  @Get('getAll')
  getAll() {
    return this.order_courseService.getAll();
  }
  @UseGuards(JwtGuard)
  @Put('update/:id')
  update(@Param('id') id: string, @Body() Dto: OrderCourseUpdateDto) {
    console.log(Dto);
    return this.order_courseService.update(id, Dto);
  }
  @UseGuards(JwtGuard)
  @Delete('delete/:id')
  delete(@Param('id') id) {
    return this.order_courseService.delete(id);
  }
}
