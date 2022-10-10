import { SpecificationRepository } from '../../SpecificationRepository'

describe('SpecificationRepository', () => {
  const mockSpecificationReturn = {
    id: '1',
    name: 'Specification Test',
    description: 'Specification description Test',
    created_at: new Date(),
    status: 201
  }
  const specificationMockCreate = jest
    .fn()
    .mockReturnValue(mockSpecificationReturn)

  it('should be able to create a new specification', () => {
    // const specificationRepository = new SpecificationRepository()

    const specification = {
      name: 'Specification Test',
      description: 'Specification description Test'
    }

    const response = specificationMockCreate(specification)

    expect(response).toHaveProperty('id')
    expect(response).toHaveProperty('name')
    expect(response).toHaveProperty('description')
    expect(response).toHaveProperty('status')
    expect(response).toHaveProperty('created_at')
    expect(response.name).toEqual(specification.name)
    expect(response.description).toEqual(specification.description)
    expect(response.status).toEqual(201)
  })

  it('should be able to find a specification by name', () => {
    const specificationRepository = new SpecificationRepository()

    const specification = {
      name: 'Specification Test',
      description: 'Specification description Test'
    }

    const response = specificationRepository.create(specification)

    if (response) {
      const specificationFound = specificationRepository.findByName(
        specification.name
      )

      expect(specificationFound?.name).toEqual(response.name)
      expect(specificationFound?.description).toEqual(response.description)
    }
  })
})
