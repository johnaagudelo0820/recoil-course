import {Container, Heading, Text} from '@chakra-ui/layout'
import {Select} from '@chakra-ui/select'
import {atom, useRecoilState} from 'recoil'

const userIdState = atom<number | undefined>({
  key: 'userId',
  default: undefined,
})

export const Async = () => {
  const [userId, setUserId] = useRecoilState(userIdState)

  return (
    <Container py={10}>
      <Heading as="h1" mb={4}>
        View Profile
      </Heading>
      <Heading as="h2" size="md" mb={1}>
        Choose a user:
      </Heading>
      <Select
        placeholder="Choose a user"
        mb={4}
        value={userId}
        onChange={(event) => {
          const value = event.target.value
          setUserId(value ? parseInt(value) : undefined)
        }}
      >
        <option value="1">User 1</option>
        <option value="2">User 2</option>
        <option value="3">User 3</option>
      </Select>
      {userId !== undefined && (
        <div>
          <Heading as="h2" size="md" mb={1}>
            User data:
          </Heading>
          <Text>
            <b>Name:</b> Example Value
          </Text>
          <Text>
            <b>Phone:</b> Example Value
          </Text>
        </div>
      )}
    </Container>
  )
}
