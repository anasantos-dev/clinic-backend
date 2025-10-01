import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  async validateUser(email: string, password: string) {
    // Simulação de usuário (depois vamos buscar no banco)
    const user = { id: 1, email: 'admin@clinica.com', passwordHash: await bcrypt.hash('123456', 10) };

    const isPasswordValid = await bcrypt.compare(password, user.passwordHash);
    if (user && isPasswordValid) {
      return { id: user.id, email: user.email };
    }
    throw new UnauthorizedException('Credenciais inválidas');
  }
}
