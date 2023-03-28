import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { ArticleModule } from './article/article.module';
import { CategoryModule } from './category/category.module';
import { CourseController } from './course/course.controller';
import { CourseService } from './course/course.service';
import { CourseModule } from './course/course.module';
import { SubscriptionModule } from './subscription/subscription.module';
import { OrderModule } from './order/order.module';
//import { ChapterModule } from './chapter/chapter.module';
import { ChapterController } from './chapter/chapter.controller';
import { ChapterService } from './chapter/chapter.service';
import { ChapterModule } from './chapter/chapter.module';
import { SectionModule } from './section/section.module';
import { OrderCourseModule } from './order/order_course/order_course.module';
import { ReviewService } from './review/review.service';
import { ReviewModule } from './review/review.module';
import { UserProfileService } from './user_profile/user_profile.service';
import { UserProfileModule } from './user_profile/user_profile.module';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    UserModule,
    BookmarkModule,
    PrismaModule,

    ArticleModule,

    CategoryModule,

    CourseModule,

    SubscriptionModule,

    OrderModule,

    ChapterModule,

    SectionModule,

    OrderCourseModule,

    ReviewModule,

    UserProfileModule,

    //ChapterModule,
  ],
  controllers: [ChapterController],
  providers: [ChapterService, ReviewService, UserProfileService],
})
export class AppModule {}
