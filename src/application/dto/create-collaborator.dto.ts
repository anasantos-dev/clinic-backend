import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsString,
  IsEmail,
  IsBoolean,
  IsOptional,
  MinLength,
} from 'class-validator';

export class CreateCollaboratorDto {
  //  Dados pessoais
  @ApiProperty({ description: 'Nome completo do colaborador' })
  @IsString()
  fullName!: string;

  @ApiProperty({ description: 'CPF do colaborador' })
  @IsString()
  cpf!: string;

  @ApiProperty({ description: 'Telefone' })
  @IsString()
  phone!: string;

  @ApiProperty({ description: 'Data de nascimento (YYYY-MM-DD)' })
  @IsString()
  birthDate!: string;

  //  Dados profissionais
  @ApiProperty({ description: 'Matrícula / registro' })
  @IsString()
  registration!: string;

  @ApiProperty({ description: 'Cargo' })
  @IsString()
  position!: string;

  @ApiProperty({ description: 'Especialidade' })
  @IsString()
  specialty!: string;

  @ApiProperty({ description: 'Data de admissão (YYYY-MM-DD)' })
  @IsString()
  admissionDate!: string;

  //  Dados de acesso
  @ApiProperty({ description: 'E-mail corporativo' })
  @IsEmail()
  corporateEmail!: string;

  @ApiProperty({ description: 'Senha (mínimo 6 caracteres)' })
  @IsString()
  @MinLength(6, { message: 'A senha deve ter pelo menos 6 caracteres.' })
  password!: string;

  @ApiProperty({ description: 'Confirmação de senha' })
  @IsString()
  confirmPassword!: string;

  @ApiProperty({ description: 'Nível de acesso' })
  @IsString()
  accessLevel!: string;

  //  Dados adicionais
  @ApiPropertyOptional({ description: 'Indica se o colaborador está ativo' })
  @IsOptional()
  @IsBoolean()
  active?: boolean = true;
}
