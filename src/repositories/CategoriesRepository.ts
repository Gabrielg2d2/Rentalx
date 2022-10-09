import { Category } from '../models/Category'

interface ICreateProps {
  name: string
  description: string
}

export interface ICreateReturn {
  id: string
  name: string
  description: string
  created_at: Date
  status: number
}

export class CategoriesRepository {
  private readonly categories: Category[]

  constructor() {
    this.categories = []
  }

  async create({ name, description }: ICreateProps): Promise<ICreateReturn> {
    return await new Promise((resolve, reject) => {
      if (this.findByName(name)) {
        return reject(new Error('Category already exists'))
      }

      const category = new Category({
        name,
        description
      })

      const categoryCreated = {
        id: new Date().getTime().toString(),
        created_at: new Date(),
        status: 201,
        ...category
      }

      this.categories.push(categoryCreated)

      resolve(categoryCreated)
    })
  }

  async list(): Promise<Category[]> {
    return await new Promise((resolve) => {
      resolve(this.categories)
    })
  }

  findByName(name: string): boolean {
    const category = this.categories.some((category) => category.name === name)
    return category
  }
}
