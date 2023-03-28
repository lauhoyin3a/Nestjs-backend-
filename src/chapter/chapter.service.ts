import { ChapterDto } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable, UseFilters, UseGuards } from '@nestjs/common';
import { ChapterUpdateDto } from './dto';
import { JwtGuard } from 'src/auth/guard';
@Injectable()
export class ChapterService {
  constructor(private prisma: PrismaService) {}

  create_chapter(dto: ChapterDto) {
    try {
      const newChapter = this.prisma.chapter.create({
        data: dto,
      });
      return newChapter;
    } catch (error) {
      throw error;
    }
  }

  get_chapter(id: string) {
    console.log('Chapter id:', id);

    try {
      const Chapter = this.prisma.chapter.findUnique({
        where: {
          id: Number(id),
        },
      });

      return Chapter;
    } catch (error) {
      throw error;
    }
  }

  getAll() {
    try {
      const Chapter = this.prisma.chapter.findMany();

      return Chapter;
    } catch (error) {
      throw error;
    }
  }
  @UseGuards(JwtGuard)
  async update(id: string, dto: ChapterUpdateDto) {
    try {
      console.log(dto);
      const Chapter = await this.prisma.chapter.update({
        where: {
          id: Number(id),
        },
        data: {
          name: dto.name,
          order: dto.order,
        },
      });

      return Chapter;
    } catch (error) {
      throw error;
    }
  }
  @UseGuards(JwtGuard)
  delete(id: string) {
    try {
      const Chapter = this.prisma.chapter.delete({
        where: {
          id: Number(id),
        },
      });
      return Chapter;
    } catch (error) {
      throw error;
    }
  }
}
