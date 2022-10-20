import { SpecificationRepository } from '../../repositories/implementations/SpecificationRepository'
import { CreateSpecificationController } from './CreateSpecificationController'
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase'

const specificationsRepository = SpecificationRepository.getInstance()

const specificationUseCase = new CreateSpecificationUseCase(
  specificationsRepository
)

const specificationController = new CreateSpecificationController(
  specificationUseCase
)

export { specificationController }
