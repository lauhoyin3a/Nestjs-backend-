import { SectionDto } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable, UseGuards } from '@nestjs/common';
import { SectionUpdateDto } from './dto';
import { JwtGuard } from 'src/auth/guard';
@Injectable()
export class SectionService {
  constructor(private prisma: PrismaService) {}

  create_section(dto: SectionDto) {
    try {
      const newSection = this.prisma.section.create({
        data: dto,
      });
      return newSection;
    } catch (error) {
      throw error;
    }
  }

  get_section(id: string) {
    console.log('Section id:', id);

    try {
      const Section = this.prisma.section.findUnique({
        where: {
          id: Number(id),
        },
      });

      return Section;
    } catch (error) {
      throw error;
    }
  }

  getAll() {
    try {
      const Section = this.prisma.section.findMany();

      return Section;
    } catch (error) {
      throw error;
    }
  }

  @UseGuards(JwtGuard)
  async update(id: string, dto: SectionUpdateDto) {
    try {
      console.log(dto);
      const Section = await this.prisma.section.update({
        where: {
          id: Number(id),
        },
        data: {
          name: dto.name,
          type: dto.type,
          content: dto.content,
          order: dto.order,
          is_locked: dto.is_locked,
        },
      });

      return Section;
    } catch (error) {
      throw error;
    }
  }

  @UseGuards(JwtGuard)
  delete(id: string) {
    try {
      const Section = this.prisma.section.delete({
        where: {
          id: Number(id),
        },
      });
      return Section;
    } catch (error) {
      throw error;
    }
  }
}
