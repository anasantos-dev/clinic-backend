import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PrismaModule } from '../database/prisma.module';
import { AuthController } from 'src/modules/auth/auth.controller';
import { AuthService } from 'src/modules/auth/auth.service';
import { PrismaUserRepository } from 'src/infrastructure/repository/prisma-user.repository';


@Module({
  imports: [JwtModule.register({}), PrismaModule], 
  controllers: [AuthController],
  providers: [
    AuthService,
    {
      provide: 'UserRepository',
      useClass: PrismaUserRepository,
    },
  ],
})
export class AuthModule {}
