import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { UseGuards } from '@nestjs/common/decorators';
import { JwtGuard } from 'src/auth/guard';

import { ReviewDto, ReviewUpdateDto } from './dto';
import { ReviewService } from './review.service';
@Controller('review')
export class ReviewController {
  constructor(private reviewService: ReviewService) {}
  @Post('create')
  create(@Body() dto: ReviewDto) {
    return this.reviewService.create_review(dto);
  }

  @Get('get/:id')
  get(@Param('id') id) {
    return this.reviewService.get_review(id);
  }

  @Get('getAll')
  getAll() {
    return this.reviewService.getAll();
  }
  @UseGuards(JwtGuard)
  @Put('update/:id')
  update(@Param('id') id: string, @Body() Dto: ReviewUpdateDto) {
    console.log(Dto);
    return this.reviewService.update(id, Dto);
  }
  @UseGuards(JwtGuard)
  @Delete('delete/:id')
  delete(@Param('id') id) {
    return this.reviewService.delete(id);
  }
}
