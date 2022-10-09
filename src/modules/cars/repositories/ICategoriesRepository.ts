import { ICategory } from '../models/Category'

export interface ICreateProps {
  name: string
  description: string
}

export interface ICreateReturn {
  id: string
  name: string
  description: string
  created_at: Date
  status: number
}

export interface ICategoriesRepository {
  findByName: (name: string) => boolean
  list: () => Promise<ICategory[]>
  create: ({ name, description }: ICreateProps) => Promise<ICategory>
}
