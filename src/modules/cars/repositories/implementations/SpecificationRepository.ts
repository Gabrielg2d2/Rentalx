import { Specification } from '../../models/Specification'
import {
  ISpecificationRepository,
  ICreateSpecificationDTO,
  ISpecificationRepositoryReturn
} from '../ISpecificationRepository'

export class SpecificationRepository implements ISpecificationRepository {
  private readonly specifications: Specification[]

  private static INSTANCE: SpecificationRepository

  constructor() {
    this.specifications = []
  }

  public static getInstance(): SpecificationRepository {
    if (!SpecificationRepository.INSTANCE) {
      SpecificationRepository.INSTANCE = new SpecificationRepository()
    }
    return SpecificationRepository.INSTANCE
  }

  create({
    name,
    description
  }: ICreateSpecificationDTO): ISpecificationRepositoryReturn {
    const isExist = this.findByName(name)

    if (isExist) {
      throw new Error('Specification already exists!')
    }

    const specification = new Specification({ name, description })

    const specificationCreated = {
      id: new Date().getTime().toString(),
      created_at: new Date(),
      ...specification
    }

    this.specifications.push(specificationCreated)
    return specificationCreated
  }

  findByName(name: string): boolean {
    const specification = this.specifications.some(
      (specification) => specification.name === name
    )
    return specification
  }
}
