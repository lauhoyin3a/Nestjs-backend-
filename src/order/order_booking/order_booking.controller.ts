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
  
  import { OrderBookingDto, OrderBookingUpdateDto } from './dto';
  import { OrderBookingService } from './order_booking.service';
  @Controller('order_booking')
  export class OrderBookingController {
    constructor(private order_bookingService: OrderBookingService) {}
    @Post('create')
    create(@Body() dto: OrderBookingDto) {
      return this.order_bookingService.create_order_booking(dto);
    }
  
    @Get('get/:id')
    get(@Param('id') id) {
      return this.order_bookingService.get_order_booking(id);
    }
  
    @Get('getAll')
    getAll() {
      return this.order_bookingService.getAll();
    }
    @UseGuards(JwtGuard)
    @Put('update/:id')
    update(@Param('id') id: string, @Body() Dto: OrderBookingUpdateDto) {
      console.log(Dto);
      return this.order_bookingService.update(id, Dto);
    }
    @UseGuards(JwtGuard)
    @Delete('delete/:id')
    delete(@Param('id') id) {
      return this.order_bookingService.delete(id);
    }
  }
  