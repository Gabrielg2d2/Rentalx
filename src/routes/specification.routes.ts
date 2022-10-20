import { Router } from 'express'
import { specificationController } from '../modules/cars/useCases/CreateSpecification'

export const specificationsRoutes = Router()

specificationsRoutes.post('/', (request, response) => {
  specificationController.handle(request, response)
})
