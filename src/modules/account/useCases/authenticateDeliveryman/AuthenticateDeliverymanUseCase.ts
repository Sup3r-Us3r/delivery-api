import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import jwtOptions from '../../../../config/jwt';

import { prisma } from '../../../../database/prismaClient';
import { AppError } from '../../../../errors/AppError';

interface IAuthenticateDeliveryman {
  username: string;
  password: string;
}

export class AuthenticateDeliverymanUseCase {
  async execute({ username, password }: IAuthenticateDeliveryman) {
    const client = await prisma.deliveryman.findFirst({
      where: { username }
    });

    if (!client) {
      throw new AppError('Username or password is wrong');
    }

    const passwordIsValid = await compare(password, client.password);

    if (!passwordIsValid) {
      throw new AppError('Username or password is wrong');
    }

    const token = sign({ username }, jwtOptions.secretDeliveryman, {
      subject: client.id,
      expiresIn: jwtOptions.expiresIn
    });

    return { token };
  }
}
