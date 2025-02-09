import { Box, Button, Container, Heading, Image, Text, SimpleGrid, VStack, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Home = () => {
  return (
    <Container maxW="container.xl" py={{ base: 6, md: 12 }} bg="gray.50">
      <VStack spacing={{ base: 12, md: 20 }}>
        {/* Welcome Section */}
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 6, md: 10 }} alignItems="center">
          {/* Text Section */}
          <Box textAlign={{ base: "center", md: "left" }}>
            <Heading as="h1" size={{ base: "xl", md: "2xl" }} mb={{ base: 4, md: 6 }} color="blue.800" fontWeight="bold">
              Welcome to Misron Consulting
            </Heading>

            <Text as="span" fontSize={{base:"md",md:"lg"}} fontStyle="italic" color="gray.500">
              A boutique consultancy firm
            </Text>

            <Text fontSize={{ base: "lg", md: "xl" }} mb={{ base: 6, md: 8 }} color="gray.600" lineHeight="tall">
              Empowering Your Business with Advanced Data and AI Solutions <br/>

            </Text>
            <Button 
              as={RouterLink} 
              to="/contact" 
              colorScheme="blue" 
              size={{ base: "md", md: "lg" }} 
              variant="solid"
              _hover={{ transform: "scale(1.05)", boxShadow: "lg" }}
              transition="all 0.2s"
            >
              Get Started
            </Button>
          </Box>

            <Box
            textAlign="center"
            borderRadius="md"
            overflow="hidden"
            boxShadow="md"
            bg="white"
            display="flex"          // Enable Flexbox
            justifyContent="center" // Center horizontally
            alignItems="center"     // Center vertically
          >
            <Image
              src="/MISRONLOGO.png"
              alt="MISRON Consulting Logo"
              width={{ base: '80%', md: '60%', lg: '50%' }}
              height="auto"
              objectFit="contain"
              borderRadius="md"
            />
        </Box>

        </SimpleGrid>

        {/* Services Section */}
        <Box>
          <Heading as="h2" size={{ base: "lg", md: "xl" }} mb={{ base: 6, md: 8 }} textAlign="center" color="blue.800" fontWeight="semibold">
            Our Professional Services
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={{ base: 6, md: 8 }}>
            {[
              { title: "Data Engineering", description: "Develop robust data pipelines and architectures that facilitate data-driven decision-making." },
              { title: "Data Analytics", description: "Transform raw data into actionable insights that inform strategic decisions." },
              { title: "Machine Learning", description: "Utilize advanced machine learning models to tackle complex business challenges." },
              { title: "AI Consulting", description: "Receive expert guidance on the seamless integration of AI into your operations." },
              { title: "Natural Language Processing", description: "Employ NLP techniques to analyze and generate human language for improved communication." },
              { title: "Computer Vision", description: "Implement computer vision solutions to interpret and process visual information effectively." },
              { title: "Generative AI", description: "Explore innovative generative models to create new content and enhance creativity." },
            ].map((service, index) => (
              <Box 
                key={index} 
                borderWidth={1} 
                borderRadius="lg" 
                p={{ base: 4, md: 6 }} 
                shadow="md" 
                bg="white" 
                transition="all 0.3s" 
                _hover={{ shadow: "xl", transform: "translateY(-10px)", bg: "blue.50" }}
              >
                <Heading as="h3" size={{ base: "md", md: "lg" }} mb={{ base: 2, md: 4 }} color="blue.800" fontWeight="medium">
                  {service.title}
                </Heading>
                <Text fontSize={{ base: "sm", md: "md" }} color="gray.600" lineHeight="tall">{service.description}</Text>
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
          p={{ base: 6, md: 8 }}
          borderRadius="lg"
          boxShadow="md"
        >
          <Heading as="h2" size={{ base: "lg", md: "xl" }} mb={{ base: 4, md: 6 }} color="blue.800" fontWeight="semibold">
            Why Choose Misron Consulting?
          </Heading>
          <Text mb={{ base: 4, md: 8 }} color="gray.600" lineHeight="tall">
            We combine deep expertise in data science and artificial intelligence to deliver innovative solutions that drive measurable business growth.
          </Text>
          <Link 
            as={RouterLink} 
            to="/about" 
            color="blue.500" 
            fontWeight="semibold"
            _hover={{ textDecoration: "underline", color:"blue.600"}}
          >
            Discover More About Us
          </Link>
        </Box>

        {/* Call-to-Action Section */}
        <Box 
          bgGradient="linear(to-r, blue.500, blue.600)" 
          p={{ base: 6, md: 8 }} 
          borderRadius="lg"
          width="full"
          boxShadow="lg"
          textAlign="center"
          color="white"
        >
          <Heading as="h2" size={{ base:"lg", md:"xl"}} mb={{base:"4",md:"6"}} fontWeight='semibold'>
            Ready to Harness the Power of Data and AI?
          </Heading>
          <Text mb={{base:"4",md:"8"}} lineHeight='tall'>
            Contact us today to discover how we can help transform your business through innovative solutions.
          </Text>
          <Button 
            as={RouterLink} 
            to="/contact"
            colorScheme='whiteAlpha'
            size={{base:'md',md:'lg'}}
            _hover={{
              transform:'scale(1.05)',
              bg:'white',
              color:'blue.600'
            }}
            transition='all .2s'
          >
            Contact Us
          </Button>
        </Box>
      </VStack>
    </Container>
  );
}

export default Home;
