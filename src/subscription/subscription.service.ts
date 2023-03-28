import { Injectable, ParseIntPipe } from '@nestjs/common';
import { SubscriptionDto, UpdateDto } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SubscriptionService {
  constructor(private prisma: PrismaService) {}

  create_subscription(dto: SubscriptionDto) {
    try {
      const newSubscription = this.prisma.subscription.create({
        data: {
          name: dto.name,
          content: dto.content,
          price: dto.price,
          period: dto.period,
        },
      });
      return newSubscription;
    } catch (error) {
      throw error;
    }
  }

  get_subscription(id: string) {
    console.log('Subscription id:', id);

    try {
      const Subscription = this.prisma.subscription.findUnique({
        where: {
          id: Number(id),
        },
      });

      return Subscription;
    } catch (error) {
      throw error;
    }
  }

  getAll() {
    try {
      const Subscription = this.prisma.subscription.findMany();

      return Subscription;
    } catch (error) {
      throw error;
    }
  }

  async update(id: string, dto: UpdateDto) {
    try {
      console.log(dto);
      const Subscription = await this.prisma.subscription.update({
        where: {
          id: Number(id),
        },
        data: {
          name: dto.name,
          content: dto.content,
          price: dto.price,
          period: dto.period,
        },
      });

      return Subscription;
    } catch (error) {
      throw error;
    }
  }

  delete(id: string) {
    try {
      const Subscription = this.prisma.subscription.delete({
        where: {
          id: Number(id),
        },
      });
      return Subscription;
    } catch (error) {
      throw error;
    }
  }
}
