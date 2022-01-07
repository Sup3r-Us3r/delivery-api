import { prisma } from '../../../../database/prismaClient';

export class FindAllDeliveriesUseCase {
  async execute(client_id: string) {
    const deliveries = await prisma.clients.findFirst({
      where: { id: client_id },
      select: {
        id: true,
        username: true,
        deliveries: true
      }
    });

    return deliveries;
  }
}
