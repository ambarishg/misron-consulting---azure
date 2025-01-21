import { Box, Container, Heading, Text, SimpleGrid, VStack, UnorderedList, ListItem, Button } from "@chakra-ui/react"
import { Link as RouterLink } from "react-router-dom"

const Services = () => {
  const services = [
    {
      title: "Data Analytics",
      description: "Transform your raw data into actionable insights with our advanced analytics solutions.",
      features: [
        "Data cleaning and preprocessing",
        "Exploratory data analysis",
        "Interactive dashboards and visualizations",
        "Predictive analytics",
      ],
    },
    {
      title: "Machine Learning",
      description: "Leverage the power of machine learning to solve complex problems and make accurate predictions.",
      features: [
        "Custom ML model development",
        "Model training and optimization",
        "Automated machine learning (AutoML)",
        "Model deployment and monitoring",
      ],
    },
    {
      title: "AI Consulting",
      description: "Get expert guidance on integrating AI into your business processes and strategy.",
      features: [
        "AI readiness assessment",
        "AI strategy development",
        "Use case identification and prioritization",
        "AI ethics and governance",
      ],
    },
    {
      title: "Natural Language Processing",
      description: "Unlock insights from text data and improve human-computer interactions.",
      features: [
        "Text classification and sentiment analysis",
        "Named entity recognition",
        "Chatbot development",
        "Language translation and summarization",
      ],
    },
  ]

  return (
    <Container maxW="container.xl" py={12}>
      <VStack spacing={12} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center">
          Our Services
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          {services.map((service, index) => (
            <Box key={index} borderWidth={1} borderRadius="lg" p={6} shadow="md" bg="white">
              <Heading as="h2" size="xl" mb={4} color="brand.600">
                {service.title}
              </Heading>
              <Text mb={4}>{service.description}</Text>
              <Heading as="h3" size="md" mb={2}>
                Key Features:
              </Heading>
              <UnorderedList spacing={2}>
                {service.features.map((feature, featureIndex) => (
                  <ListItem key={featureIndex}>{feature}</ListItem>
                ))}
              </UnorderedList>
            </Box>
          ))}
        </SimpleGrid>

        <Box textAlign="center">
          <Heading as="h2" size="xl" mb={4}>
            Ready to Get Started?
          </Heading>
          <Text mb={4}>Contact us today to learn more about how our services can benefit your business.</Text>
          <Button as={RouterLink} to="/contact" colorScheme="brand" size="lg">
            Contact Us
          </Button>
        </Box>
      </VStack>
    </Container>
  )
}

export default Services

