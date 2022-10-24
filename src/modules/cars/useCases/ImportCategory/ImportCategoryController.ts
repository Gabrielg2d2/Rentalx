import { Request, Response } from 'express'
import { ImportCategoryUseCase } from './ImportCategoryUseCase'

export class ImportCategoryController {
  constructor(private readonly importCategoryUseCase: ImportCategoryUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { file } = request

    if (!file) {
      return response.status(400).json({ error: 'File not found' })
    }

    await this.importCategoryUseCase.execute(file)

    return response.send()
  }
}
