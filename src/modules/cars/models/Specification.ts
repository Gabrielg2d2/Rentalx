export interface ISpecification {
  name: string
  description: string
}

export class Specification {
  name: string
  description: string

  constructor({ name, description }: ISpecification) {
    this.name = name
    this.description = description
  }
}
