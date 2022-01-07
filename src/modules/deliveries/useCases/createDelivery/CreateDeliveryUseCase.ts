import { prisma } from '../../../../database/prismaClient';
import { AppError } from '../../../../errors/AppError';

interface ICreateDelivery {
  item_name: string;
  client_id: string;
}

export class CreateDeliveryUseCase {
  async execute({ item_name, client_id }: ICreateDelivery) {
    try {
      const delivery = await prisma.deliveries.create({
        data: {
          item_name,
          client_id,
        }
      });

      return delivery;
    } catch {
      throw new AppError('Error registering delivery');
    }
  }
}
