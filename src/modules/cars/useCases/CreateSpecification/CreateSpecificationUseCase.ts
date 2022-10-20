import { ISpecificationRepository } from '../../repositories/ISpecificationRepository'

interface IRequest {
  name: string
  description: string
}

export class CreateSpecificationUseCase {
  constructor(
    private readonly specificationRepository: ISpecificationRepository
  ) {}

  execute({ name, description }: IRequest): void {
    this.specificationRepository.create({ name, description })
  }
}
