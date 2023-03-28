import { OrderCourseDto } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable, UseFilters, UseGuards } from '@nestjs/common';
import { OrderCourseUpdateDto } from './dto';
import { JwtGuard } from 'src/auth/guard';
@Injectable()
export class OrderCourseService {
  constructor(private prisma: PrismaService) {}

  create_order_course(dto: OrderCourseDto) {
    try {
      const newOrderCourse = this.prisma.order_Course.create({
        data: dto,
      });
      return newOrderCourse;
    } catch (error) {
      throw error;
    }
  }

  get_order_course(id: string) {
    console.log('OrderCourse id:', id);

    try {
      const OrderCourse = this.prisma.order_Course.findUnique({
        where: {
          id: Number(id),
        },
      });

      return OrderCourse;
    } catch (error) {
      throw error;
    }
  }

  getAll() {
    try {
      const OrderCourse = this.prisma.order_Course.findMany();

      return OrderCourse;
    } catch (error) {
      throw error;
    }
  }
  @UseGuards(JwtGuard)
  async update(id: string, dto: OrderCourseUpdateDto) {
    try {
      console.log(dto);
      const OrderCourse = await this.prisma.order_Course.update({
        where: {
          id: Number(id),
        },
        data: {
          course_status: dto.course_status,
          course_name: dto.course_name,
          course_price: dto.course_price,
        },
      });

      return OrderCourse;
    } catch (error) {
      throw error;
    }
  }
  @UseGuards(JwtGuard)
  delete(id: string) {
    try {
      const OrderCourse = this.prisma.order_Course.delete({
        where: {
          id: Number(id),
        },
      });
      return OrderCourse;
    } catch (error) {
      throw error;
    }
  }
}
