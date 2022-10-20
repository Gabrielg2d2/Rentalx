import { SpecificationRepository } from '../../implementations/SpecificationRepository'

describe('unit - SpecificationRepository', () => {
  const mockSpecificationReturn = {
    id: '1',
    name: 'Specification name Test',
    description: 'Specification description Test',
    created_at: new Date('2022-10-10T02:02:39'),
    status: 201
  }

  const specification = {
    name: 'Specification name Test',
    description: 'Specification description Test'
  }

  let specificationRepository: SpecificationRepository

  beforeEach(() => {
    jest.clearAllMocks()
    specificationRepository = new SpecificationRepository()
  })

  it('should be able to create a new specification spyOn', () => {
    const somethingSpy = jest
      .spyOn(specificationRepository, 'create')
      .mockReturnValue({
        id: '1',
        name: 'Specification name Test',
        description: 'Specification description Test',
        created_at: new Date('2022-10-10T02:02:39'),
        status: 201
      })

    specificationRepository.create(specification)

    const response = somethingSpy.mock.results[0].value

    expect(somethingSpy).toHaveBeenCalled()
    expect(somethingSpy).toHaveBeenCalledTimes(1)
    expect(response).toHaveProperty('id')
    expect(response).toHaveProperty('name')
    expect(response).toHaveProperty('description')
    expect(response).toHaveProperty('created_at')
    expect(response).toHaveProperty('status')
    expect(response.id).toBe(mockSpecificationReturn.id)
    expect(response.name).toBe(mockSpecificationReturn.name)
  })

  it('should filter through name with findByName', () => {
    const somethingSpy = jest
      .spyOn(specificationRepository, 'findByName')
      .mockReturnValue(specification)

    specificationRepository.findByName('Specification name Test')

    const response = somethingSpy.mock.results[0].value

    expect(somethingSpy).toHaveBeenCalled()
    expect(somethingSpy).toHaveBeenCalledTimes(1)

    expect(response).toHaveProperty('name')
    expect(response).toHaveProperty('description')

    expect(response.name).toBe(mockSpecificationReturn.name)
    expect(response.description).toBe(mockSpecificationReturn.description)
  })
})
