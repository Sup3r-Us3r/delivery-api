import { Request, Response } from 'express';
import { FindAllDeliveriesDeliverymanUseCase } from './FindAllDeliveriesDeliverymanUseCase';

export class FindAllDeliveriesDeliverymanController {
  async handle(request: Request, response: Response) {
    const { deliverymanId } = request;

    const findAllDeliveriesDeliverymanUseCase = new FindAllDeliveriesDeliverymanUseCase();

    const deliveries = await findAllDeliveriesDeliverymanUseCase
      .execute(deliverymanId);

    return response.json(deliveries);
  }
}
