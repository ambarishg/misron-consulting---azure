import { Box, Container, Heading, Text, SimpleGrid, VStack, UnorderedList, ListItem, Button, useColorModeValue } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const Services = () => {
  const services = [
    {
      title: "Data Engineering",
      description: "Build robust, scalable, and efficient data pipelines to power your data-driven decisions.",
      features: [
        "Design and implementation of ETL/ELT pipelines",
        "Data warehouse and data lake architecture",
        "Real-time data streaming solutions",
        "Data integration from multiple sources",
        "Data quality and governance frameworks",
      ],
    },
    {
      title: "Data Analytics",
      description: "Transform raw data into actionable insights with advanced analytics solutions.",
      features: [
        "Data cleaning and preprocessing",
        "Exploratory data analysis",
        "Interactive dashboards and visualizations",
        "Predictive analytics and reporting",
      ],
    },
    {
      title: "Machine Learning",
      description: "Leverage machine learning to solve complex problems and make accurate predictions.",
      features: [
        "Custom ML model development",
        "Model training and optimization",
        "Automated machine learning (AutoML)",
        "Model deployment and monitoring",
      ],
    },
    {
      title: "AI Consulting",
      description: "Expert guidance on integrating AI into your business processes and strategy.",
      features: [
        "AI readiness assessment",
        "AI strategy development",
        "Use case identification and prioritization",
        "AI ethics and governance",
      ],
    },
    {
      title: "Natural Language Processing",
      description: "Unlock insights from text data and enhance human-computer interactions.",
      features: [
        "Text classification and sentiment analysis",
        "Named entity recognition",
        "Chatbot and virtual assistant development",
        "Language translation and summarization",
      ],
    },
    {
      title: "Computer Vision",
      description: "Enable machines to interpret and analyze visual data for automation and decision-making.",
      features: [
        "Object detection and recognition",
        "Image and video analysis",
        "Facial recognition and biometric systems",
        "Augmented reality (AR) solutions",
        "Real-time video processing and analytics",
      ],
    },
    {
      title: "Generative AI",
      description: "Harness the power of generative AI to create innovative solutions and automate creative processes.",
      features: [
        "Text generation and content creation",
        "Image and video synthesis",
        "AI-driven design and art generation",
        "Personalized recommendation systems",
        "Fine-tuning and deployment of generative models",
      ],
    },
    
  ];

  const cardBg = useColorModeValue("white", "gray.800");
  const cardBorder = useColorModeValue("gray.200", "gray.700");

  return (
    <Container maxW="container.xl" py={16}>
      <VStack spacing={16} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center" fontWeight="bold" color="brand.600">
          Our Services
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {services.map((service, index) => (
            <MotionBox
              key={index}
              borderWidth={1}
              borderRadius="lg"
              p={8}
              shadow="lg"
              bg={cardBg}
              borderColor={cardBorder}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
            >
              <VStack align="start" spacing={4}>
                <Heading as="h2" size="xl" color="brand.600">
                  {service.title}
                </Heading>
                <Text fontSize="lg" color="gray.600">
                  {service.description}
                </Text>
                <Heading as="h3" size="md" color="brand.500">
                  Key Features:
                </Heading>
                <UnorderedList spacing={2} color="gray.600">
                  {service.features.map((feature, featureIndex) => (
                    <ListItem key={featureIndex}>{feature}</ListItem>
                  ))}
                </UnorderedList>
              </VStack>
            </MotionBox>
          ))}
        </SimpleGrid>

        <Box textAlign="center">
          <Heading as="h2" size="xl" mb={6} fontWeight="bold" color="brand.600">
            Ready to Get Started?
          </Heading>
          <Text fontSize="lg" mb={6} color="gray.600">
            Contact us today to learn how our services can drive your business forward.
          </Text>
          <Button
            as={RouterLink}
            to="/contact"
            colorScheme="brand"
            size="lg"
            px={8}
            py={6}
            fontSize="lg"
            fontWeight="bold"
          >
            Contact Us
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Services;