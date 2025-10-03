import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaModule } from '../../infrastructure/configuration/database/prisma.module';
import { LoginUseCase } from '../../application/use-cases/login.use-case';
import { PrismaUserRepository } from '../../infrastructure/repository/prisma-user.repository';
import { UserRepository } from '../../application/repository/user.repository';

@Module({
  imports: [
    JwtModule.register({}),
    PrismaModule
  ],
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
