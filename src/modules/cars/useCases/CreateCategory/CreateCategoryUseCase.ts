import { ICategory } from '../../models/Category'
import {
  ICategoriesRepository,
  ICreateProps
} from '../../repositories/ICategoriesRepository'

export class CreateCategoryUseCase {
  constructor(private readonly categoriesRepository: ICategoriesRepository) {}

  execute({ name, description }: ICreateProps): ICategory {
    const response = this.categoriesRepository.create({
      name,
      description
    })

    return response
  }
}
