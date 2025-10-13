import {
  Controller,
  Post,
  Body,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { CollaboratorService } from './collaborator.service';
import { CreateCollaboratorDto } from '../../application/dto/create-collaborator.dto';
import { CreateCollaboratorOutputDto } from '../../application/dto/create-collaborator-output.dto';

@Controller('collaborators')
export class CollaboratorController {
  constructor(private readonly collaboratorService: CollaboratorService) {}

  @Post()
  async create(
    @Body() data: CreateCollaboratorDto,
  ): Promise<CreateCollaboratorOutputDto> {
    try {
      const result = await this.collaboratorService.createCollaborator(data);
      return result;
    } catch (error: unknown) {
      //  Corrige "Unsafe assignment of an `any` value"
      const message =
        error instanceof Error
          ? error.message
          : 'Erro desconhecido ao criar colaborador.';

      console.error('[CollaboratorController] Erro ao criar colaborador:', {
        message,
        raw: error,
      });

      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          message: 'Erro ao criar colaborador. Verifique os dados enviados.',
          error: message,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
