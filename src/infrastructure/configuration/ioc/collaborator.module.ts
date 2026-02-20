import { Module } from '@nestjs/common';
import { PrismaModule } from '../../configuration/database/prisma.module';
import { CollaboratorController } from '../../../modules/collaborators/collaborator.controller';
import { CollaboratorService } from '../../../modules/collaborators/collaborator.service';
import { CreateCollaboratorUseCase } from '../../../application/use-cases/create-collaborator.use-case';
import { PrismaCollaboratorRepository } from '../../repository/prisma-collaborator.repository';
import { CollaboratorRepository } from '../../../application/repository/collaborator.repository';

@Module({
  imports: [PrismaModule],
  controllers: [CollaboratorController],
  providers: [
    CollaboratorService,
    CreateCollaboratorUseCase,
    {
      provide: CollaboratorRepository,
      useClass: PrismaCollaboratorRepository,
    },
  ],
  exports: [CollaboratorService],
})
export class CollaboratorModule {}
