import { Injectable } from '@nestjs/common';
import { CreateCollaboratorDto } from '../../application/dto/create-collaborator.dto';
import { CreateCollaboratorUseCase } from '../../application/use-cases/create-collaborator.use-case';
import { CollaboratorEntity } from 'src/domain/collaborators/entities/collaborator.entity';
import { CreateCollaboratorOutputDto } from 'src/application/dto/create-collaborator-output.dto';
import { CollaboratorMapper } from 'src/application/mappers/collaborator.mapper';

@Injectable()
export class CollaboratorService {
  constructor(
    private readonly createCollaboratorUseCase: CreateCollaboratorUseCase,
  ) {}

  async createCollaborator(
    data: CreateCollaboratorDto,
  ): Promise<CreateCollaboratorOutputDto> {
    // Converte o DTO em entidade de domínio
    const entity: CollaboratorEntity = CollaboratorMapper.toEntity(data);

    // Garante que 'active' tenha valor padrão
    entity.active = entity.active ?? true;

    // Envia para o caso de uso (com confirmPassword junto)
    return await this.createCollaboratorUseCase.execute({
      ...entity,
      confirmPassword: data.confirmPassword,
    });
  }
}
