import { Box, BoxProps, Container } from '@chakra-ui/react'
import * as React from 'react'

export default function Footer(props: BoxProps) {
  return (
    <Box as="footer" role="contentinfo" bg="bg-accent" {...props}>
      <Container>

      </Container>
    </Box>
  )
}