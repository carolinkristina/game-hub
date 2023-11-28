import { GameQuery } from "../App"
import useData from "./useData"
import { Platform } from "./usePlatforms"
export interface Game {
  id: number
  name: string
  background_image: string
  parent_platforms: { platform: Platform }[]
  metacritic: number
}

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre ? gameQuery.genre.id : null,
        platforms: gameQuery.platform ? gameQuery.platform.id : null,
      },
    },
    [gameQuery]
  )

export default useGames
