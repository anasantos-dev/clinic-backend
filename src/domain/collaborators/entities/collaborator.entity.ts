/**
 * Entidade de domínio que representa um Colaborador.
 *
 * Essa camada é totalmente isolada da infraestrutura e define apenas
 * os dados centrais e o comportamento da entidade no domínio.
 */
export class CollaboratorEntity {
  id?: number;

  //  Dados pessoais
  fullName!: string;
  cpf!: string;
  phone!: string;
  birthDate!: string;

  //  Dados profissionais
  registration!: string;
  position!: string;
  specialty!: string;
  admissionDate!: string;

  //  Dados de acesso
  corporateEmail!: string;
  password!: string;
  confirmPassword?: string;

  accessLevel!: string;

  //  Dados adicionais
  active: boolean = true;

  //  Metadados automáticos
  createdAt?: Date;
  updatedAt?: Date;

  constructor(partial: Partial<CollaboratorEntity>) {
    Object.assign(this, partial);
  }
}
