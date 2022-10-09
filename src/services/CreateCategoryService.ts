import {
  ICategoriesRepository,
  ICreateProps
} from '../repositories/ICategoriesRepository'

export class CreateCategoryService {
  constructor(private readonly categoriesRepository: ICategoriesRepository) {}

  async execute({ name, description }: ICreateProps): Promise<ICreateProps> {
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
