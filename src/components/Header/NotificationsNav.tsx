import { HStack, Icon } from '@chakra-ui/react'
import { Bell, UserPlus } from 'phosphor-react'

export const NotificationsNav = () => {
  return (
    <HStack
      spacing={['6', '8']}
      mx={['6', '8']}
      pr={['6', '8']}
      py="1"
      color="gray.300"
      borderRightWidth={1}
      borderColor="gray.700"
    >
      <Icon as={Bell} fontSize="22px" />
      <Icon as={UserPlus} fontSize="22px" />
    </HStack>
  )
}
