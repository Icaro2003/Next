import { Request, Response } from 'express';
import { CreateUsuarioUseCase } from '../../../application/user/use-cases/CreateUserUseCase';
import { CreateUserValidator } from '../../../application/user/validators/CreateUserValidator';

export class CreateUsuarioController {
  constructor(private createUsuarioUseCase: CreateUsuarioUseCase) { }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const dto = request.body;

      const errors = CreateUserValidator.validate(dto);

      if (errors.length > 0) {
        return response.status(400).json({
          message: 'Erro na validação do cadatro de usuário',
          errors: errors
        });
      }

      const result = await this.createUsuarioUseCase.execute(dto);

      return response.status(201).json(result);
    } catch (error: any) {
      return response.status(400).json({
        message: 'Erro ao cadastrar usuário',
        error: error.message
      });
    }
  }
}