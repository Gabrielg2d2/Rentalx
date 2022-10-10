export interface ICreateSpecificationDTO {
  name: string
  description: string
}

interface ISpecificationRepositoryReturnSuccess {
  id: string
  name: string
  description: string
  status: number
  created_at: Date
}

interface ISpecificationRepositoryReturnError {
  status: number
  message: string
}

export type ISpecificationRepositoryReturn =
  | ISpecificationRepositoryReturnSuccess
  | ISpecificationRepositoryReturnError

export interface ISpecificationRepository {
  create: ({
    name,
    description
  }: ICreateSpecificationDTO) => ISpecificationRepositoryReturn
  findByName: (name: string) => ICreateSpecificationDTO | undefined
}
