import {
  IsString,
  IsEmail,
  IsBoolean,
  IsOptional,
  MinLength,
} from 'class-validator';

export class CreateCollaboratorDto {
  //  Dados pessoais
  @IsString()
  fullName!: string;

  @IsString()
  cpf!: string;

  @IsString()
  phone!: string;

  @IsString()
  birthDate!: string;

  //  Dados profissionais
  @IsString()
  registration!: string;

  @IsString()
  position!: string;

  @IsString()
  specialty!: string;

  @IsString()
  admissionDate!: string;

  //  Dados de acesso
  @IsEmail()
  corporateEmail!: string;

  @IsString()
  @MinLength(6, { message: 'A senha deve ter pelo menos 6 caracteres.' })
  password!: string;

  @IsString()
  confirmPassword!: string;

  @IsString()
  accessLevel!: string;

  //  Dados adicionais
  @IsOptional()
  @IsBoolean()
  active?: boolean = true;
}
