// backend/src/database/prisma.module.ts
import { Global, Module } from '@nestjs/common';
import { PrismaService } from 'src/infrastructure/configuration/database/prisma.service';


@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService], 
})
export class PrismaModule {}
