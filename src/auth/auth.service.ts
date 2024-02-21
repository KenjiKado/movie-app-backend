import { BadRequestException, Injectable } from '@nestjs/common';
import { genSalt, hash, compare } from 'bcryptjs';
import { PrismaService } from '../prisma/prisma.service';
import { AuthDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(private readonly prismaService: PrismaService) {}

  async register(dto: AuthDto) {
    const isExist = this.prismaService.user.findUnique({
      where: {
        email: dto.email,
      },
    });

    if (isExist) {
      throw new BadRequestException('User with this email already exists');
    } else {
      return this.prismaService.user.create({
        data: dto,
      });
    }
  }
}
