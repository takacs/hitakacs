import { Container, Box, Heading, Image } from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="teal" p={3} mb={6} align="center">
        Hey there, I&apos;m Takacs a Python developer exploring Full Stack!
      </Box>

      <Box display={{md:'flex'}}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
          David Takacs
          </Heading>
          <p> Big moves! </p>
        </Box>
        <Box 
          flexShrink={0}
          mt={{base: 4, md: 0}}
          ml={{md: 6}}
          align="center">
          <Image 
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/bebop.jpg"
            alt="Profile Image" />
        </Box>
      </Box>
    </Container>
)
}

export default Page
