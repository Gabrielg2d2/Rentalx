import { Request, Response } from 'express'
import { ImportCategoryUseCase } from './ImportCategoryUseCase'

export class ImportCategoryController {
  constructor(private readonly importCategoryUseCase: ImportCategoryUseCase) {}

  handle(request: Request, response: Response): Response {
    const { file } = request

    if (!file) {
      return response.status(400).json({ error: 'File not found' })
    }

    this.importCategoryUseCase.execute(file)

    return response.send()
  }
}
