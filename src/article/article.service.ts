import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { ArtDto, UpdateDto } from './dto';

@Injectable()
export class ArticleService {
  constructor(private prisma: PrismaService) {}

  create_article(dto: ArtDto) {
    console.log(dto);
    try {
      const newArticle = this.prisma.article.create({
        data: {
          owner_id: dto.owner_id,
          category_id: dto.category_id,
          title: dto.title,
          cover_image: dto.cover_image,
          content: dto.content,
        },
      });
      return newArticle;
    } catch (error) {
      throw error;
    }
  }

  get_article(id: string) {
    console.log('article id:', id);

    try {
      const Article = this.prisma.article.findUnique({
        where: {
          id: Number(id),
        },
      });

      return Article;
    } catch (error) {
      throw error;
    }
  }

  getAll() {
    try {
      const Article = this.prisma.article.findMany();

      return Article;
    } catch (error) {
      throw error;
    }
  }

  async update(id: string, dto: UpdateDto) {
    try {
      console.log(dto);
      const Article = await this.prisma.article.update({
        where: {
          id: Number(id),
        },
        data: {
          title: dto.title,
          cover_image: dto.cover_image,
          content: dto.content,
        },
      });

      return Article;
    } catch (error) {
      throw error;
    }
  }

  delete(id: string) {
    try {
      const Article = this.prisma.article.delete({
        where: {
          id: Number(id),
        },
      });
      return Article;
    } catch (error) {
      throw error;
    }
  }
}
