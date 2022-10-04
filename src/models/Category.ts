interface ICategory {
  name: string
  description: string
}

export class Category {
  name: string
  description: string

  constructor({ name, description }: ICategory) {
    this.name = name
    this.description = description
  }
}
