export interface ICreateSpecificationDTO {
  name: string
  description: string
}

export interface ISpecificationRepositoryReturn {
  id: string
  name: string
  description: string
  status: number
  created_at: Date
}

export interface ISpecificationRepository {
  create: ({
    name,
    description
  }: ICreateSpecificationDTO) => ISpecificationRepositoryReturn
  findByName: (name: string) => ICreateSpecificationDTO | undefined
}
