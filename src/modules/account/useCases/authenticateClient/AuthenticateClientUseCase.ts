import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import jwtOptions from '../../../../config/jwt';

import { prisma } from '../../../../database/prismaClient';
import { AppError } from '../../../../errors/AppError';

interface IAuthenticateClient {
  username: string;
  password: string;
}

export class AuthenticateClientUseCase {
  async execute({ username, password }: IAuthenticateClient) {
    const client = await prisma.clients.findFirst({
      where: { username }
    });

    if (!client) {
      throw new AppError('Username or password is wrong');
    }

    const passwordIsValid = await compare(password, client.password);

    if (!passwordIsValid) {
      throw new AppError('Username or password is wrong');
    }

    const token = sign({ username }, jwtOptions.secretClient, {
      subject: client.id,
      expiresIn: jwtOptions.expiresIn
    });

    return { token };
  }
}
