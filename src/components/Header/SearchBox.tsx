import { Flex, Icon, Input } from '@chakra-ui/react'
import { MagnifyingGlass } from 'phosphor-react'

export const SearchBox = () => {
  return (
    <Flex
      as="label"
      flex="1"
      py="4"
      px="8"
      ml="6"
      maxW={400}
      alignSelf="center"
      color="gray.200"
      position="relative"
      bg="gray.800"
      borderRadius="full"
    >
      <Input
        color="gray.50"
        variant={'unstyled'}
        placeholder="Buscar na plataforma"
        px={'4'}
        mr={'4'}
        _placeholder={{
          color: 'gray.400',
        }}
      />

      <Icon as={MagnifyingGlass} fontSize="22px" />
    </Flex>
  )
}
