import { Box } from "@chakra-ui/react"
import { ReactNode } from "react"

interface Props {
  children: ReactNode
}
const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      width={{ base: "300px", xl: "250px" }}
      borderRadius={10}
      overflow="hidden"
      bg="green"
    >
      {children}
    </Box>
  )
}

export default GameCardContainer
