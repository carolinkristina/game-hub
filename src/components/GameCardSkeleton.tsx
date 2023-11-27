import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react"

const GameCardSkeleton = () => {
  return (
    <Card>
      <Skeleton height="160px" />
      <CardBody minHeight="130px">
        <SkeletonText />
      </CardBody>
    </Card>
  )
}

export default GameCardSkeleton
