import {
    Box,
    Container,
    Heading,
    Text,
    SimpleGrid,
    VStack,
    UnorderedList,
    ListItem,
    Button,
    useColorModeValue,
    Stack,
    Icon,
  } from "@chakra-ui/react";
  import { Link as RouterLink } from "react-router-dom";
  import { motion } from "framer-motion";
  import { FaHandshake, FaLightbulb, FaRocket, FaUsers } from "react-icons/fa";
  
  const MotionBox = motion(Box);
  
  const CoInnovationServices = () => {
    const services = [
      {
        title: "Ideation Workshops",
        description:
          "Collaborate with our experts and partners to generate innovative ideas and concepts for new products and services.",
        features: [
          "Facilitated brainstorming sessions",
          "Design thinking methodologies",
          "Market research and trend analysis",
          "Concept validation",
        ],
        icon: FaLightbulb,
      },
      {
        title: "Joint Development",
        description:
          "Co-create and develop new products and services with our engineering and design teams.",
        features: [
          "Agile development methodologies",
          "Shared resources and expertise",
          "Regular progress updates and feedback sessions",
          "Intellectual property protection",
        ],
        icon: FaHandshake,
      },
      {
        title: "Technology Integration",
        description:
          "Seamlessly integrate your technology with our platform to create innovative solutions for our customers.",
        features: [
          "API development and integration",
          "SDK development",
          "Joint marketing and sales initiatives",
          "Technical support and training",
        ],
        icon: FaRocket,
      },
      {
        title: "Ecosystem Partnerships",
        description:
          "Join our ecosystem of partners to access new markets, customers, and opportunities.",
        features: [
          "Access to our customer base",
          "Co-marketing opportunities",
          "Shared resources and expertise",
          "Joint events and conferences",
        ],
        icon: FaUsers,
      },
      {
        title: "Pilot Programs",
        description:
          "Test new products and services with our customers in a real-world environment.",
        features: [
          "Access to our customer base",
          "Feedback and insights from real users",
          "Iterative development and refinement",
          "Metrics and analytics to track performance",
        ],
      },
      {
        title: "Go-to-Market Strategy",
        description:
          "Develop a comprehensive go-to-market strategy to launch your new product or service successfully.",
        features: [
          "Market analysis and segmentation",
          "Pricing and packaging strategy",
          "Sales and marketing plan",
          "Launch execution and support",
        ],
      },
    ];
  
    const cardBg = useColorModeValue("white", "gray.800");
    const cardBorder = useColorModeValue("gray.200", "gray.700");
    const headingColor = useColorModeValue("brand.600", "brand.200");
    const textColor = useColorModeValue("gray.600", "gray.300");
    const iconColor = useColorModeValue("brand.500", "brand.300");
  
    return (
      <Container maxW="container.xl" py={{ base: 8, md: 16 }}>
        <VStack spacing={{ base: 8, md: 16 }} align="stretch">
          {/* Page Heading */}
          <Heading
            as="h1"
            size={{ base: "lg", md: "xl" }}
            textAlign="center"
            fontWeight="bold"
            color={headingColor}
          >
            Co-Innovation and Co-Creation Services
          </Heading>
  
          <Text textAlign="center" fontSize="xl" color={textColor}>
            Partner with us to unlock new possibilities and create groundbreaking products and services together.
          </Text>
  
          {/* Services Grid */}
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={{ base: 6, md: 10 }}>
            {services.map((service, index) => (
              <MotionBox
                key={index}
                borderWidth={1}
                borderRadius="lg"
                p={{ base: 6, md: 8 }}
                shadow="md"
                bg={cardBg}
                borderColor={cardBorder}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              >
                <VStack align="start" spacing={{ base: 3, md: 4 }}>
                  <Stack direction="row" align="center">
                    <Icon as={service.icon} boxSize={6} color={iconColor} />
                    <Heading as="h3" size={{ base: "lg", md: "xl" }} color={headingColor}>
                      {service.title}
                    </Heading>
                  </Stack>
  
                  <Text fontSize={{ base: "md", md: "lg" }} color={textColor}>
                    {service.description}
                  </Text>
                  <Heading as="h4" size={{ base: "md", md: "lg" }} color="brand.500">
                    Key Features:
                  </Heading>
                  <UnorderedList spacing={2} color={textColor}>
                    {service.features.map((feature, featureIndex) => (
                      <ListItem key={featureIndex} fontSize={{ base: "sm", md: "md" }}>
                        {feature}
                      </ListItem>
                    ))}
                  </UnorderedList>
                </VStack>
              </MotionBox>
            ))}
          </SimpleGrid>
  
          {/* Call to Action Section */}
          <Box textAlign="center" mt={{ base: 8, md: 16 }}>
            <Heading
              as="h2"
              size={{ base: "lg", md: "xl" }}
              mb={{ base: 4, md: 6 }}
              fontWeight="bold"
              color={headingColor}
            >
              Let&apos;s Build the Future Together
            </Heading>
            <Text fontSize={{ base: "md", md: "lg" }} mb={{ base: 4, md: 6 }} color={textColor}>
              Contact us today to discuss how we can co-innovate and co-create amazing products and services.
            </Text>
            <Button
              as={RouterLink}
              to="/contact"
              colorScheme="brand"
              size={{ base: "md", md: "lg" }}
              px={{ base: 6, md: 8 }}
              py={{ base: 4, md: 6 }}
              fontSize={{ base: "md", md: "lg" }}
              fontWeight="bold"
            >
              Get in Touch
            </Button>
          </Box>
        </VStack>
      </Container>
    );
  };
  
  export default CoInnovationServices;
  
  