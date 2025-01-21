import { useState } from 'react'
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useToast
} from '@chakra-ui/react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const toast = useToast()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to your server or a third-party service
    console.log('Form submitted:', formData)
    toast({
      title: "Message sent.",
      description: "Thank you for your message. We will get back to you soon!",
      status: "success",
      duration: 5000,
      isClosable: true,
    })
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <Container maxW="container.xl" py={12}>
      <VStack spacing={12} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center">Contact Us</Heading>
        
        <Text textAlign="center">
          Have questions or ready to start your data and AI journey? Get in touch with us, and we'll be happy to help.
        </Text>

        
        <Box textAlign="center">
          <Heading as="h2" size="xl" mb={4} color="brand.600">Our Office</Heading>
          <Text>SaltLake Kolkata India</Text>
          <Text>Phone: (91) 62893290271</Text>
          <Text>Email: misron.consulting@gmail.com</Text>
        </Box>
      </VStack>
    </Container>
  )
}

export default Contact

