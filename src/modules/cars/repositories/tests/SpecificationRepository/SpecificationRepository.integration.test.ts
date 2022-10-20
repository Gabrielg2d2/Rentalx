import { SpecificationRepository } from '../../implementations/SpecificationRepository'

describe('integration - SpecificationRepository', () => {
  const specification = {
    name: 'Specification name Test',
    description: 'Specification description Test'
  }
  let specificationRepository: SpecificationRepository

  beforeEach(() => {
    jest.clearAllMocks()
    specificationRepository = new SpecificationRepository()
  })

  it('should return a status and an error message', () => {
    specificationRepository.create(specification)
    const response = specificationRepository.create({
      name: 'New name',
      description: 'New description'
    })

    expect(response).toHaveProperty('name')
    expect(response).toHaveProperty('description')
  })

  it('should be able to create a new specification', () => {
    const response = specificationRepository.create(specification)

    expect(response).toHaveProperty('id')
    expect(response).toHaveProperty('name')
    expect(response).toHaveProperty('description')
    expect(response).toHaveProperty('created_at')
  })

  it('should filter through name with findByName', () => {
    specificationRepository.create(specification)

    const response = specificationRepository.findByName(
      'Specification name Test'
    )

    expect(response).toBe(true)
  })
})
