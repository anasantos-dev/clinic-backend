import { Injectable, Logger, BadRequestException } from '@nestjs/common';
import { CollaboratorRepository } from '../repository/collaborator.repository';
import { CollaboratorEntity } from '../../domain/collaborators/entities/collaborator.entity';
import { CreateCollaboratorOutputDto } from '../dto/create-collaborator-output.dto';
import { CollaboratorMapper } from '../mappers/collaborator.mapper';
import * as bcrypt from 'bcrypt';

interface PasswordFields {
  password: string;
  confirmPassword: string;
}

@Injectable()
export class CreateCollaboratorUseCase {
  private readonly logger = new Logger(CreateCollaboratorUseCase.name);

  constructor(
    private readonly collaboratorRepository: CollaboratorRepository,
  ) {}

  async execute(
    data: CollaboratorEntity & PasswordFields,
  ): Promise<CreateCollaboratorOutputDto> {
    this.logger.log(` Iniciando criação do colaborador: ${data.fullName}`);

    // 1 Validar senhas
    if (!data.password || !data.confirmPassword) {
      this.logger.warn('Campos de senha estão ausentes.');
      throw new BadRequestException('Senha e confirmação são obrigatórias.');
    }

    if (data.password !== data.confirmPassword) {
      this.logger.warn('As senhas não coincidem.');
      throw new BadRequestException('As senhas não coincidem.');
    }

    // 2 Criptografar senha (corrigido)
    let hashedPassword: string;
    try {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      const result = await bcrypt.hash(String(data.password), 10);
      hashedPassword = result as string;
    } catch (error) {
      this.logger.error('Erro ao criptografar senha:', error);
      throw new BadRequestException('Erro ao processar a senha.');
    }

    const collaboratorToSave: CollaboratorEntity = {
      ...data,
      password: hashedPassword,
    };

    // 3 Persistir no banco
    const created =
      await this.collaboratorRepository.create(collaboratorToSave);

    this.logger.log(
      ` Colaborador criado com sucesso: ${created.corporateEmail}`,
    );

    // 4 Retornar DTO seguro (sem senha)
    return CollaboratorMapper.toOutputDto(created);
  }
}
