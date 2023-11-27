import { SimpleGrid, Text } from "@chakra-ui/react"
import useGames from "../hooks/useGames"
import GameCard from "./GameCard"
import GameCardSkeleton from "./GameCardSkeleton"

const GameGrid = () => {
  const { games, error, isLoading } = useGames()
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <div>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={10}
        padding="10px"
        justifyItems="center"
      >
        {isLoading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {games.map((game) => {
          console.log(game.name)
          return <GameCard key={game.id} game={game} />
        })}
      </SimpleGrid>
    </div>
  )
}

export default GameGrid
