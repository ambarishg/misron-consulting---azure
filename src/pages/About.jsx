import { Box, Container, Heading, Text, VStack, UnorderedList, ListItem } from "@chakra-ui/react";

const About = () => {
  return (
    <Container maxW="container.xl" py={12}>
      <VStack spacing={12} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center" color="brand.600">
          About Misron Consulting
        </Heading>

        <Box>
          <Heading as="h2" size="xl" mb={4} color="brand.600">
            Our Mission
          </Heading>
          <Text fontSize="lg" lineHeight="tall">
            At Misron Consulting, we are dedicated to empowering organizations with innovative data and AI-driven solutions. Our mission is to unlock the full potential of data, enabling businesses to achieve transformative growth, operational excellence, and a competitive edge in their respective industries.
          </Text>
        </Box>

        <Box>
          <Heading as="h2" size="xl" mb={4} color="brand.600">
            Our Expertise
          </Heading>
          <Text fontSize="lg" mb={4} lineHeight="tall">
            With a proven track record in data science, machine learning, and artificial intelligence, our team of seasoned professionals specializes in delivering tailored solutions to address complex business challenges. Our core competencies include:
          </Text>
          <UnorderedList spacing={2} fontSize="lg" pl={6}>
            <ListItem>Advanced data analytics and visualization</ListItem>
            <ListItem>End-to-end machine learning model development and deployment</ListItem>
            <ListItem>Natural Language Processing (NLP) and computer vision solutions</ListItem>
            <ListItem>Scalable big data processing and management</ListItem>
            <ListItem>Strategic AI consulting and implementation</ListItem>
          </UnorderedList>
        </Box>

        <Box>
          <Heading as="h2" size="xl" mb={4} color="brand.600">
            Our Approach
          </Heading>
          <Text fontSize="lg" lineHeight="tall">
            We pride ourselves on a client-centric methodology, fostering close collaboration to deeply understand your unique challenges and objectives. By combining industry expertise with cutting-edge technology, we design and implement customized solutions that deliver measurable results and drive sustainable success.
          </Text>
        </Box>

        <Box>
          <Heading as="h2" size="xl" mb={4} color="brand.600">
            Shaping the Future Together
          </Heading>
          <Text fontSize="lg" lineHeight="tall">
            At Misron Consulting, we are committed to pushing the boundaries of innovation in data and AI. We invite you to partner with us as we redefine what’s possible. Whether your goal is to optimize operations, uncover actionable insights, or pioneer groundbreaking products, our team is here to guide you toward achieving your vision in the data-driven era.
          </Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default About;