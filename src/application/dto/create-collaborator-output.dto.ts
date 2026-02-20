import { ApiProperty } from '@nestjs/swagger';
import { CollaboratorEntity } from '../../domain/collaborators/entities/collaborator.entity';

export class CreateCollaboratorOutputDto {
  @ApiProperty()
  id!: string;
  @ApiProperty()
  fullName!: string;
  @ApiProperty()
  cpf!: string;
  @ApiProperty()
  phone!: string;
  @ApiProperty()
  birthDate!: string;
  @ApiProperty()
  registration!: string;
  @ApiProperty()
  position!: string;
  @ApiProperty()
  specialty!: string;
  @ApiProperty()
  admissionDate!: string;
  @ApiProperty()
  corporateEmail!: string;
  @ApiProperty()
  accessLevel!: string;
  @ApiProperty()
  active!: boolean;
  @ApiProperty()
  createdAt!: Date;
  @ApiProperty()
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
