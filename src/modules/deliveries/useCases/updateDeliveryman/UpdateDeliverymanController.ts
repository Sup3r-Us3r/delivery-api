import { Request, Response } from 'express';
import { UpdateDeliverymanUseCase } from './UpdateDeliverymanUseCase';

export class UpdateDeliverymanController {
  async handle(request: Request, response: Response) {
    const { id: delivery_id } = request.params;
    const { deliverymanId: deliveryman_id } = request;

    const updateDeliverymanUseCase = new UpdateDeliverymanUseCase();

    const delivery = await updateDeliverymanUseCase.execute({
      delivery_id,
      deliveryman_id
    })

    return response.json(delivery);
  }
}
