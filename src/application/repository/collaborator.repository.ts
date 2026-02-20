import { CollaboratorEntity } from '../../domain/collaborators/entities/collaborator.entity';

export abstract class CollaboratorRepository {
  /**
   * Cria um novo colaborador no sistema.
   * @param data - Entidade de colaborador.
   * @returns O colaborador criado.
   */
  abstract create(data: CollaboratorEntity): Promise<CollaboratorEntity>;
}
