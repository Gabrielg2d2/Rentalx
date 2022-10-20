import { ICategory } from '../../models/Category'
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository'

export class ListCategoriesUseCase {
  constructor(private readonly categoriesRepository: ICategoriesRepository) {}

  execute(): ICategory[] {
    const categories = this.categoriesRepository.list()

    return categories
  }
}
