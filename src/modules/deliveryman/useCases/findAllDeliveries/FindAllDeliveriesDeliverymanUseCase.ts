import { prisma } from '../../../../database/prismaClient';

export class FindAllDeliveriesDeliverymanUseCase {
  async execute(deliveryman_id: string) {
    const deliveries = await prisma.deliveryman.findFirst({
      where: { id: deliveryman_id },
      select: {
        id: true,
        username: true,
        deliveries: true
      }
    });

    return deliveries;
  }
}
