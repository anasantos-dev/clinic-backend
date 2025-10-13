import { Module } from '@nestjs/common';
import { PrismaModule } from '../database/prisma.module';
import { AuthController } from 'src/modules/auth/auth.controller';
import { AuthService } from 'src/modules/auth/auth.service';
import { LoginUseCase } from 'src/application/use-cases/login.use-case';
import { PrismaUserRepository } from 'src/infrastructure/repository/prisma-user.repository';
import { UserRepository } from 'src/application/repository/user.repository';

@Module({
  imports: [PrismaModule],
  controllers: [AuthController],
  providers: [
    AuthService,
    LoginUseCase,
    {
      provide: UserRepository,
      useClass: PrismaUserRepository,
    },
  ],
})
export class AuthModule {}
