import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { HandClapDto } from '../dto';
import { Handclap } from '@prisma/client';

@Injectable()
export class HandClapService {
  constructor(private prisma: PrismaService) {}

  async create_handclap(dto: HandClapDto) {
    try {
      const newHandClap = await this.prisma.handclap.create({
        data: {
          user_id: dto.user_id,
          article_id: dto.article_id,
          count: 0,
        },
      });
      return newHandClap;
    } catch (error) {
      throw error;
    }
  }

  async get_handclap(dto: HandClapDto) {
    const HandClap = await this.prisma.handclap.findMany({
      where: {
        user_id: dto.user_id,
        article_id: dto.article_id,
      },
    });

    return HandClap;
  }
  async getAll_handclap() {
    const HandClap = await this.prisma.handclap.findMany({});

    return HandClap;
  }

  async clap(id: string) {
    const handClap = await this.prisma.handclap.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!handClap) {
      throw new Error('Handclap not found');
    }

    const updatedHandClap = await this.prisma.handclap.update({
      where: {
        id: Number(id),
      },
      data: {
        count: handClap.count + 1,
      },
    });

    return updatedHandClap;
  }

  async delete(id: string) {
    try {
      const HandClap = await this.prisma.handclap.delete({
        where: {
          id: Number(id),
        },
      });
      return HandClap;
    } catch (error) {
      throw error;
    }
  }
}
