import { Box, Image, Text, Button, Flex, Heading, Stack, useColorModeValue } from "@chakra-ui/react";

function Projects() {
  // Define consistent color values using useColorModeValue for light and dark modes
  const bg = useColorModeValue("white", "gray.800"); // Background color
  const textColor = useColorModeValue("gray.700", "gray.300"); // Text color
  const headingColor = useColorModeValue("blue.600", "blue.400"); // Heading color
  const borderColor = useColorModeValue("gray.200", "gray.700"); // Border color
  const buttonBg = useColorModeValue("blue.500", "blue.700"); // Button background color
  const buttonHoverBg = useColorModeValue("blue.700", "blue.500"); // Button hover background color

  return (
    <Box
      bg={bg}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      borderColor={borderColor}
      boxShadow="md" // Add a subtle shadow for depth
    >
      <Image
        src="./aibeehealth.png" // Replace with your project image URL
        alt="AI Bee Health"
        objectFit="cover" // Maintain aspect ratio and cover the entire box
        height="200px" // Set a fixed height for the image
        
      />

      <Box p={6}>
        <Flex align="center" mb={2}>
          {/* Add project tags or labels here if needed */}
        </Flex>
        <Heading
          mt={1}
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
          color={headingColor} // Use the defined heading color
          fontSize="xl" // Increase font size for better readability
        >
          AI Bee Health
        </Heading>
        <Text mt={2} color={textColor}>
          AI Bee Health is a project that uses advanced deep learning models to detect bee diseases,
          ensuring healthier bee colonies and improved honey production.
        </Text>

        
      </Box>
    </Box>
  );
}

export default Projects;
