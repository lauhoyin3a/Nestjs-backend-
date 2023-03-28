import { Injectable } from '@nestjs/common';
import { CategoryDto } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  create_category(dto: CategoryDto) {
    try {
      const newCategory = this.prisma.category.create({
        data: {
          name: dto.name,
          description: dto.description,
          cover_image: dto.cover_image,
        },
      });
      return newCategory;
    } catch (error) {
      throw error;
    }
  }

  get_category(id: string) {
    console.log('category id:', id);

    try {
      const Category = this.prisma.category.findUnique({
        where: {
          id: Number(id),
        },
      });

      return Category;
    } catch (error) {
      throw error;
    }
  }

  getAll() {
    try {
      const Category = this.prisma.category.findMany();

      return Category;
    } catch (error) {
      throw error;
    }
  }

  async update(id: string, dto: CategoryDto) {
    try {
      console.log(dto);
      const Category = await this.prisma.category.update({
        where: {
          id: Number(id),
        },
        data: {
          name: dto.name,
          cover_image: dto.cover_image,
          description: dto.description,
        },
      });

      return Category;
    } catch (error) {
      throw error;
    }
  }

  delete(id: string) {
    try {
      const Category = this.prisma.category.delete({
        where: {
          id: Number(id),
        },
      });
      return Category;
    } catch (error) {
      throw error;
    }
  }
}
