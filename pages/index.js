import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="gray" p={3} mb={6} align="center">
        hi, i&apos;m takacs!
      </Box>

      <Box display={{md:'flex'}}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            hi takacs!
          </Heading>
          <p> Local person </p>
        </Box>
      </Box>
   
    </Container>
)
}

export default Page
