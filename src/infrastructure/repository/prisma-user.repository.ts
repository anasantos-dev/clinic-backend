import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../application/repository/user.repository';
import { UserEntity } from '../../domain/auth/entities/user.entity';
import { PrismaService } from '../configuration/database/prisma.service';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findByEmail(email: string): Promise<UserEntity | null> {
    const user = await this.prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
        email: true,
        password: true
      }
    });
    if (!user) return null;

    return new UserEntity(user.id, user.email, user.password);
  }
}
