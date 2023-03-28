import { SubscriptionDto } from './dto/subscription.dto';
import { SubscriptionService } from './subscription.service';

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

@Controller('Subscription')
export class SubscriptionController {
  constructor(private SubscriptionService: SubscriptionService) {}
  @Post('create')
  create(@Body() dto: SubscriptionDto) {
    return this.SubscriptionService.create_subscription(dto);
  }

  @Get('get/:id')
  get(@Param('id') id) {
    return this.SubscriptionService.get_subscription(id);
  }

  @Get('getAll')
  getAll() {
    return this.SubscriptionService.getAll();
  }
  @UseGuards(JwtGuard)
  @Put('update/:id')
  update(@Param('id') id: string, @Body() subscriptionDto: SubscriptionDto) {
    console.log(SubscriptionDto);
    return this.SubscriptionService.update(id, subscriptionDto);
  }
  @UseGuards(JwtGuard)
  @Delete('delete/:id')
  delete(@Param('id') id) {
    return this.SubscriptionService.delete(id);
  }
}
