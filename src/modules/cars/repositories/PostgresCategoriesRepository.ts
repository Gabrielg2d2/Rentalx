import { Category, ICategory } from '../models/Category'
import { ICategoriesRepository, ICreateProps } from './ICategoriesRepository'

export class PostgresCategoriesRepository implements ICategoriesRepository {
  findByName(name: string): boolean {
    console.log(name)
    return true
  }

  async list(): Promise<Category[]> {
    return []
  }

  async create({ name, description }: ICreateProps): Promise<ICategory> {
    return {
      name,
      description
    }
  }
}
