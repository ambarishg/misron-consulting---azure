import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  UnorderedList,
  ListItem,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaChartLine, FaRobot, FaLanguage, FaDatabase, FaLightbulb } from "react-icons/fa";

const MotionBox = motion(Box);

const About = () => {
  const headingColor = useColorModeValue("brand.700", "brand.200");
  const textColor = useColorModeValue("gray.700", "gray.300");
  const iconColor = useColorModeValue("brand.500", "brand.200");

  return (
    <Container maxW="container.xl" py={16}>
      <VStack spacing={16} align="stretch">
        {/* Main Heading */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          textAlign="center"
        >
          <Heading
            as="h1"
            size="2xl"
            fontWeight="bold"
            bgGradient="linear(to-r, brand.600, brand.400)"
            bgClip="text"
          >
            About Misron Consulting
          </Heading>
          <Text fontSize="lg" color={textColor} mt={4}>
            Empowering organizations with innovative data and AI solutions.
          </Text>
        </MotionBox>

        {/* Mission Section */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Heading as="h2" size="xl" mb={6} color={headingColor}>
            Our Mission
          </Heading>
          <Text fontSize="lg" color={textColor} lineHeight="tall">
            At Misron Consulting, we are committed to empowering organizations through innovative data and AI-driven solutions. Our mission is to unlock the full potential of data, enabling businesses to achieve transformative growth, operational excellence, and a sustainable competitive advantage in their respective sectors.
          </Text>
        </MotionBox>

        {/* Expertise Section */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Heading as="h2" size="xl" mb={6} color={headingColor}>
            Our Expertise
          </Heading>
          <Text fontSize="lg" color={textColor} mb={6} lineHeight="tall">
            With a proven track record in data science, machine learning, and artificial intelligence, our team of experienced professionals specializes in delivering tailored solutions to address complex business challenges. Our core competencies include:
          </Text>
          <UnorderedList spacing={4} fontSize="lg" pl={6}>
            <ListItem display="flex" alignItems="center">
              <Icon as={FaChartLine} color={iconColor} mr={3} />
              Advanced data analytics and visualization techniques.
            </ListItem>
            <ListItem display="flex" alignItems="center">
              <Icon as={FaRobot} color={iconColor} mr={3} />
              Comprehensive machine learning model development and deployment.
            </ListItem>
            <ListItem display="flex" alignItems="center">
              <Icon as={FaLanguage} color={iconColor} mr={3} />
              Natural Language Processing (NLP) and computer vision applications.
            </ListItem>
            <ListItem display="flex" alignItems="center">
              <Icon as={FaDatabase} color={iconColor} mr={3} />
              Scalable big data processing and management solutions.
            </ListItem>
            <ListItem display="flex" alignItems="center">
              <Icon as={FaLightbulb} color={iconColor} mr={3} />
              Strategic AI consulting and implementation services.
            </ListItem>
          </UnorderedList>
        </MotionBox>

        {/* Approach Section */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Heading as="h2" size="xl" mb={6} color={headingColor}>
            Our Approach
          </Heading>
          <Text fontSize="lg" color={textColor} lineHeight="tall">
            We pride ourselves on a client-centric methodology that fosters close collaboration to thoroughly understand your unique challenges and objectives. By combining industry expertise with advanced technology, we design and implement customized solutions that deliver measurable results and drive sustainable success.
          </Text>
        </MotionBox>

        {/* Future Section */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Heading as="h2" size="xl" mb={6} color={headingColor}>
            Shaping the Future Together
          </Heading>
          <Text fontSize="lg" color={textColor} lineHeight="tall">
            At Misron Consulting, we are dedicated to pushing the boundaries of innovation in data and AI. We invite you to partner with us as we redefine what is possible in your organization. Whether your goal is to optimize operations, uncover actionable insights, or pioneer groundbreaking products, our team is here to guide you toward achieving your vision in this data-driven era.
          </Text>
        </MotionBox>
      </VStack>
    </Container>
  );
};

export default About;
