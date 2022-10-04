import { Router } from 'express'
import { CategoriesRepository } from '../repositories/CategoriesRepository'

const categoriesRoutes = Router()

categoriesRoutes.post('/categories', (request, response) => {
  const { name, description } = request.body

  const categoriesRepository = new CategoriesRepository()

  categoriesRepository
    .create({ name, description })
    .then((category) => {
      return response.status(201).json(category)
    })
    .catch((error) => {
      return response.status(400).json({ error: error.message })
    })
})

export { categoriesRoutes }
