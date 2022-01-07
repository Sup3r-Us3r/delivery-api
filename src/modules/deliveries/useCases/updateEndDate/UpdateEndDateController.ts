import { Request, Response } from 'express';
import { UpdateEndDataUseCase } from './UpdateEndDataUseCase';

export class UpdateEndDateController {
  async handle(request: Request, response: Response) {
    const { id: delivery_id } = request.params;
    const { deliverymanId: deliveryman_id } = request;

    const updateEndDataUseCase = new UpdateEndDataUseCase();

    const delivery = await updateEndDataUseCase.execute({
      delivery_id,
      deliveryman_id
    })

    return response.json(delivery);
  }
}
