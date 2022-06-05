import { Button, Flex, Stack } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useForm, SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'
import { Input } from '../components/Form/Input'
import { yupResolver } from '@hookform/resolvers/yup'

interface Credentials {
  email: string
  password: string
}

const schema = yup.object().shape({
  email: yup.string().email('E-mail invalido').required('E-mail obrigatório'),
  password: yup.string().required('Senha obrigatório'),
})

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<Credentials>({
    shouldFocusError: false,
    resolver: yupResolver(schema),
  })

  const handleSignIn: SubmitHandler<Credentials> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log(data)
  }

  return (
    <Flex h="100vh" align="center" justify="center">
      <Flex
        as="form"
        onSubmit={handleSubmit(handleSignIn)}
        width="100%"
        maxW={420}
        flexDir="column"
        bg="gray.800"
        p={8}
        borderRadius={8}
      >
        <Stack spacing={8}>
          <Input
            {...register('email')}
            label="E-mail"
            placeholder="mail@provider.com"
            error={errors.email}
          />
          <Input
            {...register('password')}
            error={errors.password}
            label="Password"
            placeholder="*******"
            type="password"
          />
        </Stack>

        <Button
          type="submit"
          mt="6"
          colorScheme="pink"
          size="lg"
          borderRadius="4px"
          isLoading={isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
