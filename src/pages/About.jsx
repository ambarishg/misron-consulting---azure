import { Box, Container, Heading, Text, VStack, UnorderedList, ListItem } from "@chakra-ui/react"

const About = () => {
  return (
    <Container maxW="container.xl" py={12}>
      <VStack spacing={12} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center">
          About Misron Consulting
        </Heading>

        <Box>
          <Heading as="h2" size="xl" mb={4} color="brand.600">
            Our Mission
          </Heading>
          <Text>
            At Misron Consulting, our mission is to empower businesses with cutting-edge data and AI technologies. We
            believe in harnessing the power of data to drive innovation, efficiency, and growth across industries.
          </Text>
        </Box>

        <Box>
          <Heading as="h2" size="xl" mb={4} color="brand.600">
            Our Expertise
          </Heading>
          <Text mb={4}>
            With years of experience in data science, machine learning, and artificial intelligence, our team of experts
            is equipped to tackle complex challenges and deliver transformative solutions.
          </Text>
          <UnorderedList spacing={2}>
            <ListItem>Advanced data analytics and visualization</ListItem>
            <ListItem>Machine learning model development and deployment</ListItem>
            <ListItem>Natural Language Processing (NLP) and computer vision</ListItem>
            <ListItem>Big data processing and management</ListItem>
            <ListItem>AI strategy consulting and implementation</ListItem>
          </UnorderedList>
        </Box>

        <Box>
          <Heading as="h2" size="xl" mb={4} color="brand.600">
            Our Approach
          </Heading>
          <Text>
            We take a collaborative approach to every project, working closely with our clients to understand their
            unique challenges and goals. Our solutions are tailored to meet specific business needs, ensuring maximum
            impact and ROI.
          </Text>
        </Box>

        <Box>
          <Heading as="h2" size="xl" mb={4} color="brand.600">
            Join Us in Shaping the Future
          </Heading>
          <Text>
            As we continue to push the boundaries of what's possible with data and AI, we invite you to join us on this
            exciting journey. Whether you're looking to optimize your operations, gain deeper insights, or create
            innovative products, Misron Consulting is here to help you succeed in the data-driven era.
          </Text>
        </Box>
      </VStack>
    </Container>
  )
}

export default About

