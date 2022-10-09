import { Specification } from '../models/Specification'
import {
  ISpecificationRepository,
  ICreateSpecificationDTO
} from './ISpecificationRepository'

export class SpecificationRepository implements ISpecificationRepository {
  private readonly specifications: Specification[]

  constructor() {
    this.specifications = []
  }

  create({ name, description }: ICreateSpecificationDTO): void {
    const specification = new Specification({ name, description })

    const specificationCreated = {
      id: new Date().getTime().toString(),
      created_at: new Date(),
      status: 201,
      ...specification
    }

    this.specifications.push(specificationCreated)
  }

  findByName(name: string): ICreateSpecificationDTO | undefined {
    const specification = this.specifications.find(
      (specification) => specification.name === name
    )
    return specification
  }
}
