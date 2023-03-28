import { ReviewDto } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable, UseFilters, UseGuards } from '@nestjs/common';
import { ReviewUpdateDto } from './dto';
import { JwtGuard } from 'src/auth/guard';
@Injectable()
export class ReviewService {
  constructor(private prisma: PrismaService) {}

  create_review(dto: ReviewDto) {
    try {
      const newReview = this.prisma.review.create({
        data: dto,
      });
      return newReview;
    } catch (error) {
      throw error;
    }
  }

  get_review(id: string) {
    console.log('Review id:', id);

    try {
      const Review = this.prisma.review.findUnique({
        where: {
          id: Number(id),
        },
      });

      return Review;
    } catch (error) {
      throw error;
    }
  }

  getAll() {
    try {
      const Review = this.prisma.review.findMany();

      return Review;
    } catch (error) {
      throw error;
    }
  }
  @UseGuards(JwtGuard)
  async update(id: string, dto: ReviewUpdateDto) {
    try {
      console.log(dto);
      const Review = await this.prisma.review.update({
        where: {
          id: Number(id),
        },
        data: {
          content: dto.content,
          course_rating: dto.course_rating,
        },
      });

      return Review;
    } catch (error) {
      throw error;
    }
  }
  @UseGuards(JwtGuard)
  delete(id: string) {
    try {
      const Review = this.prisma.review.delete({
        where: {
          id: Number(id),
        },
      });
      return Review;
    } catch (error) {
      throw error;
    }
  }
}
