import { Box, Button, Container, Heading, Image, Text, SimpleGrid, VStack, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Home = () => {
  return (
    <Container maxW="container.xl" py={12} bg="#F4F6F9">
      <VStack spacing={16}>
        {/* Welcome Section */}
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">
          {/* Text Section */}
          <Box textAlign={{ base: "center", md: "left" }}>
            <Heading as="h1" size="2xl" mb={4} color="#007DC5">
              Welcome to Misron Consulting
            </Heading>
            <Text fontSize="xl" mb={8} color="#333">
              Empowering Your Business with Advanced Data and AI Solutions
            </Text>
            <Button as={RouterLink} to="/contact" colorScheme="blue" size="lg" variant="solid">
              Get Started
            </Button>
          </Box>

          {/* Image Section */}
          {/* <Image 
            src="/COLAB.jpg" // Ensure this path is correct
            alt="Professional Collaboration"
            borderRadius="md"
            boxSize={{ base: '100%', md: '500px' }}
            objectFit="cover"
          /> */}
        </SimpleGrid>

        {/* Services Section */}
        <Box>
          <Heading as="h2" size="xl" mb={8} textAlign="center" color="#007DC5">
            Our Professional Services
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            {[
              { title: "Data Analytics", description: "Transform raw data into actionable insights to drive strategic decisions." },
              { title: "Machine Learning", description: "Leverage cutting-edge ML models to address complex business challenges." },
              { title: "AI Consulting", description: "Receive expert guidance on integrating AI seamlessly into your operations." },
            ].map((service, index) => (
              <Box key={index} borderWidth={1} borderRadius="lg" p={6} shadow="md" bg="white" transition="0.3s" _hover={{ shadow: "lg", transform: "scale(1.02)" }}>
                <Heading as="h3" size="md" mb={2} color="#007DC5">
                  {service.title}
                </Heading>
                <Text color="#555">{service.description}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>

        {/* Why Choose Us Section */}
        <Box textAlign="center">
          <Heading as="h2" size="xl" mb={4} color="#007DC5">
            Why Choose Misron Consulting?
          </Heading>
          <Text mb={8} color="#333">
            We combine deep expertise in data science and artificial intelligence to deliver innovative solutions that drive measurable business growth.
          </Text>
          <Link as={RouterLink} to="/about" color="#FFC708" fontWeight="semibold">
            Discover More About Us
          </Link>
        </Box>

        {/* Call-to-Action Section */}
        <Box bg="#FFFFFF" p={8} borderRadius="lg" width="full" boxShadow="md">
          <Heading as="h2" size="xl" mb={4} textAlign="center" color="#007DC5">
            Ready to Harness the Power of Data and AI?
          </Heading>
          <Text textAlign="center" mb={8} color="#333">
            Contact us today to explore how we can help transform your business through innovative solutions.
          </Text>
          <Box textAlign="center">
            <Button as={RouterLink} to="/contact" colorScheme="blue" size="lg">
              Contact Us
            </Button>
          </Box>
        </Box>
      </VStack>
    </Container>
  );
}

export default Home;
