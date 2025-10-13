import { CollaboratorEntity } from '../../domain/collaborators/entities/collaborator.entity';

export class CreateCollaboratorOutputDto {
  id!: string;
  fullName!: string;
  cpf!: string;
  phone!: string;
  birthDate!: string;
  registration!: string;
  position!: string;
  specialty!: string;
  admissionDate!: string;
  corporateEmail!: string;
  accessLevel!: string;
  active!: boolean;
  createdAt!: Date;
  updatedAt!: Date;

  static toDto(entity: CollaboratorEntity): CreateCollaboratorOutputDto {
    return {
      id: String(entity.id ?? ''),
      fullName: entity.fullName ?? '',
      cpf: entity.cpf ?? '',
      phone: entity.phone ?? '',
      birthDate: entity.birthDate ?? '',
      registration: entity.registration ?? '',
      position: entity.position ?? '',
      specialty: entity.specialty ?? '',
      admissionDate: entity.admissionDate ?? '',
      corporateEmail: entity.corporateEmail ?? '',
      accessLevel: entity.accessLevel ?? '',
      active: entity.active ?? true,
      createdAt: entity.createdAt ?? new Date(),
      updatedAt: entity.updatedAt ?? new Date(),
    };
  }
}
