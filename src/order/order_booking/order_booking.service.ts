import { OrderBookingDto } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable, UseFilters, UseGuards } from '@nestjs/common';
import { OrderBookingUpdateDto } from './dto';
import { JwtGuard } from 'src/auth/guard';
@Injectable()
export class OrderBookingService {
  constructor(private prisma: PrismaService) {}

  create_order_booking(dto: OrderBookingDto) {
    try {
      const newOrderBooking = this.prisma.order_Booking.create({
        data: dto,
      });
      return newOrderBooking;
    } catch (error) {
      throw error;
    }
  }

  get_order_booking(id: string) {
    console.log('OrderBooking id:', id);

    try {
      const OrderBooking = this.prisma.order_Booking.findUnique({
        where: {
          id: Number(id),
        },
      });

      return OrderBooking;
    } catch (error) {
      throw error;
    }
  }

  getAll() {
    try {
      const OrderBooking = this.prisma.order_Booking.findMany();

      return OrderBooking;
    } catch (error) {
      throw error;
    }
  }
  @UseGuards(JwtGuard)
  async update(id: string, dto: OrderBookingUpdateDto) {
    try {
      console.log(dto);
      const OrderBooking = await this.prisma.order_Booking.update({
        where: {
          id: Number(id),
        },
        data: {
          status: dto.status,
          service_duration: dto.service_duration,
          service_price: dto.service_price,
          start_dt: dto.start_dt,
          end_dt: dto.end_dt,
          zoom_link: dto.zoom_link,
          file_path: dto.file_path,
        },
      });

      return OrderBooking;
    } catch (error) {
      throw error;
    }
  }
  @UseGuards(JwtGuard)
  delete(id: string) {
    try {
      const OrderBooking = this.prisma.order_Booking.delete({
        where: {
          id: Number(id),
        },
      });
      return OrderBooking;
    } catch (error) {
      throw error;
    }
  }
}
