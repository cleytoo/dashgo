import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

export const Profile = ({
  showProfileData = true,
}: {
  showProfileData?: boolean
}) => {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Cleyton vinicius</Text>
          <Text color="gray.300" fontSize={'sm'}>
            cleyton@dev.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Cleyton vinicius"
        src="https://github.com/vininice.png"
      />
    </Flex>
  )
}
