import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../configuration/database/prisma.service';
import { CollaboratorRepository } from '../../application/repository/collaborator.repository';
import { CollaboratorEntity } from '../../domain/collaborators/entities/collaborator.entity';
import { Prisma } from '@prisma/client';

@Injectable()
export class PrismaCollaboratorRepository implements CollaboratorRepository {
  private readonly logger = new Logger(PrismaCollaboratorRepository.name);

  constructor(private readonly prisma: PrismaService) {}

  async create(data: CollaboratorEntity): Promise<CollaboratorEntity> {
    this.logger.log(`Salvando colaborador: ${data.fullName}`);

    // Define o tipo esperado pelo Prisma
    const prismaData: Prisma.CollaboratorCreateInput = {
      fullName: data.fullName,
      cpf: data.cpf,
      phone: data.phone,
      birthDate: data.birthDate,
      registration: data.registration,
      position: data.position,
      specialty: data.specialty,
      admissionDate: data.admissionDate,
      corporateEmail: data.corporateEmail,
      password: data.password,
      accessLevel: data.accessLevel,
      active: data.active ?? true,
    };

    // Prisma agora entende o tipo perfeitamente
    const created = await this.prisma.collaborator.create({
      data: prismaData,
    });

    this.logger.log(
      ` Colaborador criado com sucesso: ${created.corporateEmail}`,
    );

    // Retorna a entidade com segurança de tipo
    return created as unknown as CollaboratorEntity;
  }
}
