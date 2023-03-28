import { HandClapModule } from './handclap/handclap.module';
import { ArticleController } from './article.controller';
import { Module, Controller } from '@nestjs/common';
import { ArticleService } from './article.service';

@Module({
  imports: [HandClapModule],
  controllers: [ArticleController],
  providers: [ArticleService],
})
export class ArticleModule {}
