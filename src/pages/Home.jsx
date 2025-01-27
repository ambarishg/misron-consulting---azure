import { Box, Button, Container, Heading, Image, Text, SimpleGrid, VStack, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Home = () => {
  return (
    <Container maxW="container.xl" py={12} bg="gray.50">
      <VStack spacing={20}>
        {/* Welcome Section */}
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">
          {/* Text Section */}
          <Box textAlign={{ base: "center", md: "left" }}>
            <Heading as="h1" size="2xl" mb={6} color="blue.800" fontWeight="bold">
              Welcome to Misron Consulting
            </Heading>
            <Text fontSize="xl" mb={8} color="gray.600" lineHeight="tall">
              Empowering Your Business with Advanced Data and AI Solutions
            </Text>
            <Button 
              as={RouterLink} 
              to="/contact" 
              colorScheme="blue" 
              size="lg" 
              variant="solid"
              _hover={{ transform: "scale(1.05)", boxShadow: "lg" }}
              transition="all 0.2s"
            >
              Get Started
            </Button>
          </Box>

          {/* Image Section */}
          <Image 
            src="/COLAB.jpg" // Ensure this path is correct
            alt="Professional Collaboration"
            borderRadius="lg"
            boxSize={{ base: '100%', md: '500px' }}
            objectFit="cover"
            shadow="md"
            _hover={{ transform: "scale(1.02)", boxShadow: "xl" }}
            transition="transform 0.3s, box-shadow 0.3s"
          />
        </SimpleGrid>

        {/* Services Section */}
        <Box>
          <Heading as="h2" size="xl" mb={8} textAlign="center" color="blue.800" fontWeight="semibold">
            Our Professional Services
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            {[
              { title: "Data Engineering", description: "Build robust data pipelines and architectures to support data-driven decision making." },
              { title: "Data Analytics", description: "Transform raw data into actionable insights to drive strategic decisions." },
              { title: "Machine Learning", description: "Leverage cutting-edge ML models to address complex business challenges." },
              { title: "AI Consulting", description: "Receive expert guidance on integrating AI seamlessly into your operations." },
            ].map((service, index) => (
              <Box 
                key={index} 
                borderWidth={1} 
                borderRadius="lg" 
                p={6} 
                shadow="md" 
                bg="white" 
                transition="all 0.3s" 
                _hover={{ shadow: "xl", transform: "translateY(-10px)", bg: "blue.50" }}
              >
                <Heading as="h3" size="md" mb={4} color="blue.800" fontWeight="medium">
                  {service.title}
                </Heading>
                <Text color="gray.600" lineHeight="tall">{service.description}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>

        {/* Why Choose Us Section */}
        <Box 
          textAlign="center" 
          maxW="800px" 
          mx="auto"
          bgGradient="linear(to-r, blue.50, white)"
          p={8}
          borderRadius="lg"
          boxShadow="md"
        >
          <Heading as="h2" size="xl" mb={6} color="blue.800" fontWeight="semibold">
            Why Choose Misron Consulting?
          </Heading>
          <Text mb={8} color="gray.600" lineHeight="tall">
            We combine deep expertise in data science and artificial intelligence to deliver innovative solutions that drive measurable business growth.
          </Text>
          <Link 
            as={RouterLink} 
            to="/about" 
            color="blue.500" 
            fontWeight="semibold"
            _hover={{ textDecoration: "underline", color: "blue.600" }}
          >
            Discover More About Us
          </Link>
        </Box>

        {/* Call-to-Action Section */}
        <Box 
          bgGradient="linear(to-r, blue.500, blue.600)" 
          p={8} 
          borderRadius="lg" 
          width="full" 
          boxShadow="lg" 
          textAlign="center"
          color="white"
        >
          <Heading as="h2" size="xl" mb={6} fontWeight="semibold">
            Ready to Harness the Power of Data and AI?
          </Heading>
          <Text mb={8} lineHeight="tall">
            Contact us today to explore how we can help transform your business through innovative solutions.
          </Text>
          <Button 
            as={RouterLink} 
            to="/contact" 
            colorScheme="whiteAlpha" 
            size="lg"
            _hover={{ transform: "scale(1.05)", bg: "white", color: "blue.600" }}
            transition="all 0.2s"
          >
            Contact Us
          </Button>
        </Box>
      </VStack>
    </Container>
  );
}

export default Home;