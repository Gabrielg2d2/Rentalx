import fs from 'fs'
import { parse } from 'csv-parse'
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository'

interface IImportCategoryProps {
  name: string
  description: string
}

export class ImportCategoryUseCase {
  constructor(private readonly categoriesRepository: ICategoriesRepository) {}

  async loadCategories(
    file: Express.Multer.File
  ): Promise<IImportCategoryProps[]> {
    return await new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path)
      const categories: IImportCategoryProps[] = []

      const parseFile = parse()

      stream.pipe(parseFile)

      parseFile
        .on('data', (line) => {
          const [name, description] = line
          categories.push({ name, description })
        })
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        .on('end', async () => {
          await fs.promises.unlink(file.path)
          resolve(categories)
        })
        .on('error', (err) => reject(err))
    })
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file)

    categories.map((category) => {
      const { name, description } = category
      const isExist = this.categoriesRepository.findByName(name)

      if (!isExist) {
        this.categoriesRepository.create({ name, description })
      }

      return category
    })
  }
}
