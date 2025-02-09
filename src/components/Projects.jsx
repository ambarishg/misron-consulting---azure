import {
    Box,
    Image,
    Text,
    Flex,
    Heading,
    useColorModeValue,
    Stack,
  } from "@chakra-ui/react";
  import ReactPlayer from "react-player";
  import { FaYoutube, FaExternalLinkAlt } from "react-icons/fa"; // Import icons
  import { IconButton } from "@chakra-ui/react";
  
  function Projects() {
    // Define consistent color values using useColorModeValue for light and dark modes
    const bg = useColorModeValue("white", "gray.800"); // Background color
    const textColor = useColorModeValue("gray.700", "gray.300"); // Text color
    const headingColor = useColorModeValue("blue.600", "blue.400"); // Heading color
    const borderColor = useColorModeValue("gray.200", "gray.700"); // Border color
  
    return (
      <Box
        bg={bg}
        borderWidth="1px"
        borderRadius="xl" // Slightly more rounded corners
        overflow="hidden"
        borderColor={borderColor}
      >
        <Image
          src="./aibeehealth.png" // Replace with your project image URL
          alt="AI Bee Health"
          objectFit="cover" // Maintain aspect ratio and cover the entire box
          height={{ base: "80px", md: "100px" }} // Increased image height, responsive
          width="100%" // Ensure image takes full width of the container
        />
  
        <Box p={6}>
          <Flex align="center" justify="space-between" mb={4}>
            <Heading
              mt={1}
              fontWeight="semibold"
              as="h3"
              lineHeight="tight"
              color={headingColor} // Use the defined heading color
              fontSize={{ base: "xl", md: "2xl" }} // Increased font size for better readability, responsive
            >
              AI Bee Health
            </Heading>
          </Flex>
  
          <Text mt={2} color={textColor} fontSize="md">
            AI Bee Health is an innovative solution leveraging advanced deep
            learning models to detect and predict bee diseases, ensuring healthier
            bee colonies and optimized honey production. This project represents
            our commitment to sustainable agriculture and technological
            innovation.
          </Text>
  
          {/* YouTube Video Player */}
          <Box mt={6} position="relative" paddingTop="56.25%">
            {/* 16:9 aspect ratio */}
            <ReactPlayer
              url="https://www.youtube.com/watch?v=hDdE1aI0mOM" // Replace with your YouTube video ID
              width="100%"
              height="100%"
              style={{ position: "absolute", top: 0, left: 0 }}
              controls={true}
            />
          </Box>
          <Stack
            mt={4}
            direction="row"
            spacing={4}
            align="center"
            justify="flex-start"
          >
            <IconButton
              aria-label="Watch on YouTube"
              icon={<FaYoutube />}
              size="lg"
              colorScheme="red"
              onClick={() =>
                window.open(
                  "https://www.youtube.com/watch?v=hDdE1aI0mOM",
                  "_blank"
                )
              } // Replace with your YouTube video ID
            />
            <IconButton
              aria-label="Learn More"
              icon={<FaExternalLinkAlt />}
              size="lg"
              colorScheme="blue"
              onClick={() =>
                window.open("https://aibeehealth.ca", "_blank")
              } // Replace with your project URL
            />
          </Stack>
        </Box>
      </Box>
    );
  }
  
  export default Projects;
  