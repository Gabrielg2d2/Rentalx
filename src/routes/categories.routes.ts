import { Router } from 'express'
import { CategoriesRepository } from '../repositories/CategoriesRepository'

const categoriesRoutes = Router()

const categoriesRepository = new CategoriesRepository()

categoriesRoutes.post('/categories', (request, response) => {
  const { name, description } = request.body

  categoriesRepository
    .create({ name, description })
    .then((category) => response.status(201).json(category))
    .catch((error) => response.status(400).json({ error: error.message }))
})

categoriesRoutes.get('/categories', (request, response) => {
  categoriesRepository
    .list()
    .then((categories) => response.status(200).json(categories))
    .catch((error) => response.status(400).json({ error: error.message }))
})

export { categoriesRoutes }
