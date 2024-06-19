import React from "react"
import { Box, Flex } from "@chakra-ui/react"

const Footer = () => {
  return (
    <Box backgroundColor='#18181b'>
      <footer>
        <Flex
          margin='0 auto'
          px={12}
          color='white'
          justifyContent='center'
          alignItems='center'
          maxWidth='1024px'
          height={16}
        >
          <p>© 2024 Wade</p>
        </Flex>
        <Flex margin='0 auto'
          fontSize={10}
          color='white'
          justifyContent='center'
          alignItems='center'
          maxWidth='1024px'>
          <p>
            * Not really, my name is Wade, and the Avatar image is supplied by Meta for the project
          </p>
        </Flex>
        <Flex margin='0 auto'
          fontSize={10}
          color='white'
          justifyContent='center'
          alignItems='center'
          maxWidth='1024px'>
          <p>
            ** Sort of
          </p>
        </Flex>
        <Flex margin='0 auto'
          fontSize={10}
          color='white'
          justifyContent='center'
          alignItems='center'
          maxWidth='1024px'
          paddingBottom={4}>
          <p>
            *** Aspirationally
          </p>
        </Flex>
      </footer>
    </Box>
  )
}
export default Footer
