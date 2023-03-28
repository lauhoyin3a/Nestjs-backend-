import { UserProfileDto } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable, UseGuards } from '@nestjs/common';
import { UserProfileUpdateDto } from './dto';
import { JwtGuard } from 'src/auth/guard';
@Injectable()
export class UserProfileService {
  constructor(private prisma: PrismaService) {}

  create_user_profile(dto: UserProfileDto) {
    try {
      const newUserProfile = this.prisma.user_profile.create({
        data: dto,
      });
      return newUserProfile;
    } catch (error) {
      throw error;
    }
  }

  get_user_profile(id: string) {
    console.log('UserProfile id:', id);

    try {
      const UserProfile = this.prisma.user_profile.findUnique({
        where: {
          id: Number(id),
        },
      });

      return UserProfile;
    } catch (error) {
      throw error;
    }
  }

  getAll() {
    try {
      const UserProfile = this.prisma.user_profile.findMany();

      return UserProfile;
    } catch (error) {
      throw error;
    }
  }
  @UseGuards(JwtGuard)
  async update(id: string, dto: UserProfileUpdateDto) {
    try {
      console.log(dto);
      const UserProfile = await this.prisma.user_profile.update({
        where: {
          id: Number(id),
        },
        data: {},
      });

      return UserProfile;
    } catch (error) {
      throw error;
    }
  }
  @UseGuards(JwtGuard)
  delete(id: string) {
    try {
      const UserProfile = this.prisma.user_profile.delete({
        where: {
          id: Number(id),
        },
      });
      return UserProfile;
    } catch (error) {
      throw error;
    }
  }
}
