import { CourseDto } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable, UseGuards } from '@nestjs/common';
import { UpdateDto } from './dto';
import { JwtGuard } from 'src/auth/guard';
@Injectable()
export class CourseService {
  constructor(private prisma: PrismaService) {}

  create_course(dto: CourseDto) {
    try {
      const newCourse = this.prisma.course.create({
        data: dto,
      });
      return newCourse;
    } catch (error) {
      throw error;
    }
  }

  get_course(id: string) {
    console.log('Course id:', id);

    try {
      const Course = this.prisma.course.findUnique({
        where: {
          id: Number(id),
        },
      });

      return Course;
    } catch (error) {
      throw error;
    }
  }

  getAll() {
    try {
      const Course = this.prisma.course.findMany();

      return Course;
    } catch (error) {
      throw error;
    }
  }

  @UseGuards(JwtGuard)
  async update(id: string, dto: UpdateDto) {
    try {
      console.log(dto);
      const Course = await this.prisma.course.update({
        where: {
          id: Number(id),
        },
        data: {
          status: dto.status,

          name: dto.name,

          price: dto.price,

          total_duration: dto.total_duration,

          cover_image: dto.cover_image,

          intro_video: dto.intro_video,

          short_description: dto.short_description,

          long_description: dto.long_description,

          start_at: dto.start_at,
        },
      });

      return Course;
    } catch (error) {
      throw error;
    }
  }

  @UseGuards(JwtGuard)
  delete(id: string) {
    try {
      const Course = this.prisma.course.delete({
        where: {
          id: Number(id),
        },
      });
      return Course;
    } catch (error) {
      throw error;
    }
  }
}
