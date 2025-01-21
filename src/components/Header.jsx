import { Box, Flex, Link, Button, useDisclosure, VStack, IconButton } from "@chakra-ui/react"
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons"
import { Link as RouterLink } from "react-router-dom"

const Header = () => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Box bg="brand.900" color="white">
      <Flex maxW="container.xl" mx="auto" px={4} py={6} align="center" justify="space-between">
        <Link as={RouterLink} to="/" fontSize="2xl" fontWeight="bold">
          Misron Consulting
        </Link>
        <Flex display={{ base: "none", md: "flex" }} alignItems="center">
          <Link as={RouterLink} to="/" mr={6} _hover={{ color: "brand.200" }}>
            Home
          </Link>
          <Link as={RouterLink} to="/about" mr={6} _hover={{ color: "brand.200" }}>
            About
          </Link>
          <Link as={RouterLink} to="/services" mr={6} _hover={{ color: "brand.200" }}>
            Services
          </Link>
          {/* <Link as={RouterLink} to="/partners" mr={6} _hover={{ color: "brand.200" }}>
            Partners
          </Link> */}
          <Link as={RouterLink} to="/contact" _hover={{ color: "brand.200" }}>
            Contact
          </Link>
          
        </Flex>
        <IconButton
          display={{ base: "block", md: "none" }}
          onClick={onToggle}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          variant="outline"
          aria-label="Toggle menu"
        />
      </Flex>
      {isOpen && (
        <Box pb={4} display={{ md: "none" }}>
          <VStack spacing={4} align="stretch">
            <Link as={RouterLink} to="/" onClick={onToggle}>
              Home
            </Link>
            <Link as={RouterLink} to="/about" onClick={onToggle}>
              About
            </Link>
            <Link as={RouterLink} to="/services" onClick={onToggle}>
              Services
            </Link>
            <Link as={RouterLink} to="/contact" onClick={onToggle}>
              Contact
            </Link>
          </VStack>
        </Box>
      )}
    </Box>
  )
}

export default Header

