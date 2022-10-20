import { Category } from '../../models/Category'
import { ICategoriesRepository, ICreateProps } from '../ICategoriesRepository'

export class CategoriesRepository implements ICategoriesRepository {
  private readonly categories: Category[]

  private static INSTANCE: CategoriesRepository

  private constructor() {
    this.categories = []
  }

  public static getInstance(): CategoriesRepository {
    if (!CategoriesRepository.INSTANCE) {
      CategoriesRepository.INSTANCE = new CategoriesRepository()
    }

    return CategoriesRepository.INSTANCE
  }

  findByName(name: string): boolean {
    const category = this.categories.some((category) => category.name === name)
    return category
  }

  create({ name, description }: ICreateProps): Category {
    if (this.findByName(name)) {
      throw new Error('Category already exists')
    }

    const category = new Category({ name, description })

    const categoryCreated = {
      ...category,
      created_at: new Date(),
      id: new Date().getTime().toString()
    }

    this.categories.push(categoryCreated)

    return categoryCreated
  }

  list(): Category[] {
    return this.categories
  }
}
