import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { CollaboratorModule } from './infrastructure/configuration/ioc/collaborator.module';

@Module({
  imports: [AuthModule, CollaboratorModule],
})
export class AppModule {}
