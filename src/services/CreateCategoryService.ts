import {
  CategoriesRepository,
  ICreateReturn
} from '../repositories/CategoriesRepository'

interface IRequest {
  name: string
  description: string
}

export class CreateCategoryService {
  constructor(private readonly categoriesRepository: CategoriesRepository) {}

  async execute({ name, description }: IRequest): Promise<ICreateReturn> {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name)

    if (categoryAlreadyExists) {
      throw new Error('Category already exists!')
    }

    const response = await this.categoriesRepository.create({
      name,
      description
    })

    return response
  }
}
