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
  import { JwtGuard } from '../auth/guard';
  import { UserProfileUpdateDto } from './dto';
  import { UserProfileDto } from './dto';
  import { UserProfileService } from './user_profile.service';
  @Controller('user_profile')
  export class UserProfileController {
    constructor(private user_profileService: UserProfileService) {}
    @Post('create')
    create(@Body() dto: UserProfileDto) {
      return this.user_profileService.create_user_profile(dto);
    }
  
    @Get('get/:id')
    get(@Param('id') id) {
      return this.user_profileService.get_user_profile(id);
    }
  
    @Get('getAll')
    getAll() {
      return this.user_profileService.getAll();
    }
    @UseGuards(JwtGuard)
    @Put('update/:id')
    update(@Param('id') id: string, @Body() Dto: UserProfileUpdateDto) {
      console.log(Dto);
      return this.user_profileService.update(id, Dto);
    }
    @UseGuards(JwtGuard)
    @Delete('delete/:id')
    delete(@Param('id') id) {
      return this.user_profileService.delete(id);
    }
  }
  