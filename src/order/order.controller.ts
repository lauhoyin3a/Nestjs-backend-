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
import { OrderUpdateDto } from './dto';
import { OrderDto } from './dto';
import { OrderService } from './order.service';
@Controller('order')
export class OrderController {
  constructor(private orderService: OrderService) {}
  @Post('create')
  create(@Body() dto: OrderDto) {
    return this.orderService.create_order(dto);
  }

  @Get('get/:id')
  get(@Param('id') id) {
    return this.orderService.get_order(id);
  }

  @Get('getAll')
  getAll() {
    return this.orderService.getAll();
  }
  @UseGuards(JwtGuard)
  @Put('update/:id')
  update(@Param('id') id: string, @Body() Dto: OrderUpdateDto) {
    console.log(Dto);
    return this.orderService.update(id, Dto);
  }
  @UseGuards(JwtGuard)
  @Delete('delete/:id')
  delete(@Param('id') id) {
    return this.orderService.delete(id);
  }
}
