import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import React from "react"

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <div
      style={{
        borderRadius: "10px",
        backgroundColor: "aliceblue",
        color: "black",
      }}
    >
      <VStack>
        <Image
          src={imageSrc}
          alt='image'
          borderRadius='10px'
        />
        <VStack
          padding={4}
          alignItems='flex-start'
        >
          <Heading size='md'>{title}</Heading>
          <Text color='gray.500'>{description}</Text>
          <HStack cursor='pointer'>
            <p>See more</p>
            <FontAwesomeIcon
              icon={faArrowRight}
              size='1x'
            />
          </HStack>
        </VStack>
      </VStack>
    </div>
  )
  return null
}

export default Card
