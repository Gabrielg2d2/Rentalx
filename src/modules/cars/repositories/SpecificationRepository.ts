import { Specification } from '../models/Specification'
import {
  ISpecificationRepository,
  ICreateSpecificationDTO,
  ISpecificationRepositoryReturn
} from './ISpecificationRepository'

export class SpecificationRepository implements ISpecificationRepository {
  private readonly specifications: Specification[]

  constructor() {
    this.specifications = []
  }

  create({
    name,
    description
  }: ICreateSpecificationDTO): ISpecificationRepositoryReturn {
    const specification = new Specification({ name, description })

    const isExist = this.specifications.some(
      (specification) => specification.name === name
    )

    if (isExist) {
      return {
        status: 400,
        message: 'Specification already exists'
      }
    }

    const specificationCreated = {
      id: new Date().getTime().toString(),
      created_at: new Date(),
      status: 201,
      ...specification
    }

    this.specifications.push(specificationCreated)
    return specificationCreated
  }

  findByName(name: string): ICreateSpecificationDTO | undefined {
    const specification = this.specifications.find(
      (specification) => specification.name === name
    )
    return specification
  }
}
