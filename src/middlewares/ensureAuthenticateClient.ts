import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import { AppError } from '../errors/AppError';

import jwtOptions from '../config/jwt';

interface IPayload {
  sub: string;
}

export async function ensureAuthenticateClient(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('Token is missing', 401);
  }

  const [bearer, token] = authHeader.split(' ');

  if (bearer !== 'Bearer') {
    throw new AppError('Invalid token', 401);
  }

  try {
    const { sub: clientId } = verify(token, jwtOptions.secretClient) as IPayload;

    request.clientId = clientId;

    return next();
  } catch {
    throw new AppError('Invalid token', 401);
  }
}
