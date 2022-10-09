import { Router } from 'express'
import { CategoriesRepository } from '../repositories/CategoriesRepository'
import { CreateCategoryService } from '../services/CreateCategoryService'

const categoriesRoutes = Router()

const categoriesRepository = new CategoriesRepository()

categoriesRoutes.post('/categories', (request, response) => {
  const { name, description } = request.body

  const createCategoryService = new CreateCategoryService(categoriesRepository)

  const category = createCategoryService.execute({ name, description })

  return response.status(201).json(category)
})

categoriesRoutes.get('/categories', (request, response) => {
  categoriesRepository
    .list()
    .then((categories) => response.status(200).json(categories))
    .catch((error) => response.status(400).json({ error: error.message }))
})

export { categoriesRoutes }
