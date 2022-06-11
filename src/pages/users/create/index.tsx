import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
} from '@chakra-ui/react'
import Link from 'next/link'
import { Input } from '../../../components/Form/Input'
import { Header } from '../../../components/Header'
import { Sidebar } from '../../../components/Sidebar'

import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useMutation } from 'react-query'
import { api } from '../../../services/api'
import { queryClient } from '../../../services/queryClient'
import { useRouter } from 'next/router'

interface User {
  name: string
  email: string
  password: string
  password_confirmation: string
}

const schema = yup.object().shape({
  email: yup.string().email('E-mail invalido').required('E-mail obrigatório'),
  name: yup.string().required('Nome obrigatório'),
  password: yup
    .string()
    .required('Senha obrigatório')
    .min(6, 'No mínimo 6 caracteres'),
  password_confirmation: yup
    .string()
    .oneOf([null, yup.ref('password')], 'As senhas precisam ser iguais'),
})

export default function CreateUser() {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<User>({
    shouldFocusError: false,
    resolver: yupResolver(schema),
  })

  const createUser = useMutation(
    async (user: User) => {
      const { data } = await api.post('users', {
        user: {
          ...user,
          created_at: new Date(),
        },
      })

      return data.user
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('users')
      },
    }
  )

  const handleCreateUser: SubmitHandler<User> = async (data) => {
    await createUser.mutateAsync(data)

    router.push('/users')
  }

  return (
    <Box>
      <Header />

      <Flex w="full" my="6" maxW={1480} mx="auto" px="6">
        <Sidebar />

        <Box
          as="form"
          onSubmit={handleSubmit(handleCreateUser)}
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p={['6', '8']}
        >
          <Heading size="lg" fontWeight="normal">
            Criar usuário
          </Heading>

          <Divider my="6" borderColor="gray.700" />

          <VStack spacing={['6', '8']}>
            <SimpleGrid spacing={['6', '8']} minChildWidth="240px" w="full">
              <Input
                {...register('name')}
                error={errors.name}
                label="Nome completo"
              />
              <Input
                {...register('email')}
                error={errors.email}
                label="E-mail"
              />
            </SimpleGrid>

            <SimpleGrid spacing={['6', '8']} minChildWidth="240px" w="full">
              <Input
                {...register('password')}
                error={errors.password}
                label="Senha"
                type="password"
              />
              <Input
                {...register('password_confirmation')}
                error={errors.password_confirmation}
                label="Confirmação da senha"
                type="password"
              />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users" passHref>
                <Button
                  as="a"
                  colorScheme="whiteAlpha"
                  isDisabled={isSubmitting}
                >
                  Cancelar
                </Button>
              </Link>
              <Button colorScheme="pink" type="submit" isLoading={isSubmitting}>
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}
