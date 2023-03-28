import { UseGuards } from '@nestjs/common/decorators';
import { JwtGuard } from 'src/auth/guard';
import { CourseService } from './course.service';
import {
  Controller,
  Post,
  Body,
  ParseIntPipe,
  Get,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { CourseDto,UpdateDto } from './dto';


@Controller('course')
export class CourseController {
  constructor(private CourseService: CourseService) {}
  @Post('create/')
  create(@Body() Dto: CourseDto) {
     return this.CourseService.create_course(Dto);
  }

  @Get('get/:id')
  get(@Param('id') id) {
    return this.CourseService.get_course(id);
  }

  @Get('getAll')
  getAll() {
    return this.CourseService.getAll();
  }
  @UseGuards(JwtGuard)
  @Put('update/:id')
  update(@Param('id') id: string, @Body() Dto: UpdateDto) {
    console.log(Dto);
    return this.CourseService.update(id, Dto);
  }
  @UseGuards(JwtGuard)
  @Delete('delete/:id')
  delete(@Param('id') id) {
    return this.CourseService.delete(id);
  }
}
