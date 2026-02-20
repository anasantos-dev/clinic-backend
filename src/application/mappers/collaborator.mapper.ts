import { CollaboratorEntity } from 'src/domain/collaborators/entities/collaborator.entity';
import { CreateCollaboratorDto } from '../dto/create-collaborator.dto';
import { CreateCollaboratorOutputDto } from '../dto/create-collaborator-output.dto';

/**
 * Mapper responsável por converter entre DTOs e a entidade Collaborator.
 */
export class CollaboratorMapper {
  /**
   * Converte o DTO recebido da requisição (CreateCollaboratorDto)
   * para a entidade de domínio (CollaboratorEntity).
   */
  static toEntity(dto: CreateCollaboratorDto): CollaboratorEntity {
    return {
      fullName: dto.fullName,
      cpf: dto.cpf,
      phone: dto.phone,
      birthDate: dto.birthDate,
      registration: dto.registration,
      position: dto.position,
      specialty: dto.specialty,
      admissionDate: dto.admissionDate,
      corporateEmail: dto.corporateEmail,
      password: dto.password,
      confirmPassword: dto.confirmPassword,
      accessLevel: dto.accessLevel,
      active: dto.active ?? true, // valor padrão
    };
  }

  /**
   * Converte a entidade retornada do banco para o DTO de saída.
   * Remove dados sensíveis (como senha).
   */
  static toOutputDto(entity: CollaboratorEntity): CreateCollaboratorOutputDto {
    return {
      id: String(entity.id ?? ''),
      fullName: entity.fullName,
      cpf: entity.cpf,
      phone: entity.phone,
      birthDate: entity.birthDate,
      registration: entity.registration,
      position: entity.position,
      specialty: entity.specialty,
      admissionDate: entity.admissionDate,
      corporateEmail: entity.corporateEmail,
      accessLevel: entity.accessLevel,
      active: entity.active,
      createdAt: entity.createdAt!,
      updatedAt: entity.updatedAt!,
    };
  }
}
