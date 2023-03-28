import { Module } from '@nestjs/common';
import { UserProfileController } from './user_profile.controller';

@Module({
  controllers: [UserProfileController]
})
export class UserProfileModule {}
