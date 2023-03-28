import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { OrderDto, OrderUpdateDto } from './dto';

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}

  create_order(dto: OrderDto) {
    try {
      const newOrder = this.prisma.order.create({
        data: {
          user_id: dto.user_id,
          status: dto.status,
          type: dto.type,
          payment_method: dto.payment_method,
          redeem_coupon_id: dto.redeem_coupon_id,
          total_amount: dto.total_amount,
        },
      });
      return newOrder;
    } catch (error) {
      throw error;
    }
  }

  get_order(id: string) {
    console.log('Order id:', id);

    try {
      const Order = this.prisma.order.findUnique({
        where: {
          id: Number(id),
        },
      });

      return Order;
    } catch (error) {
      throw error;
    }
  }

  getAll() {
    try {
      const Order = this.prisma.order.findMany();

      return Order;
    } catch (error) {
      throw error;
    }
  }

  async update(id: string, dto: OrderUpdateDto) {
    try {
      console.log(dto);
      const Order = await this.prisma.order.update({
        where: {
          id: Number(id),
        },
        data: {
          status: dto.status,
          type: dto.type,
          payment_method: dto.payment_method,
          redeem_coupon_id: dto.redeem_coupon_id,
          total_amount: dto.total_amount,
        },
      });

      return Order;
    } catch (error) {
      throw error;
    }
  }

  delete(id: string) {
    try {
      const Order = this.prisma.order.delete({
        where: {
          id: Number(id),
        },
      });
      return Order;
    } catch (error) {
      throw error;
    }
  }
}
