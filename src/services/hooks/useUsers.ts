import { useQuery } from 'react-query'
import { api } from '../api'

type User = {
  id: string
  name: string
  email: string
  created_at: string
}

type GetUsersResponse = {
  users: User[]
  totalCount: number
}

export const getUsers = async (page: number): Promise<GetUsersResponse> => {
  const { data, headers } = await api.get('users', {
    params: {
      page,
    },
  })

  const users = data.users.map((user) => ({
    ...user,
    created_at: new Date(user.created_at).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }),
  }))

  const totalCount = Number(headers['x-total-count'])

  return { users, totalCount }
}

export const useUsers = (page: number) => {
  return useQuery(['users', page], () => getUsers(page), {
    staleTime: 100 * 60 * 10, //10min
  })
}
