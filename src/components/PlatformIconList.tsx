import { IconType } from "react-icons"
import {
  FaWindows,
  FaLinux,
  FaApple,
  FaAndroid,
  FaXbox,
  FaPlaystation,
} from "react-icons/fa"
import { MdPhoneIphone } from "react-icons/md"
import { SiNintendo } from "react-icons/si"
import { BsGlobe } from "react-icons/bs"
import { HStack, Icon } from "@chakra-ui/react"
import { Platform } from "../hooks/useGames"

interface Props {
  platforms: Platform[]
}
const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    android: FaAndroid,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    web: BsGlobe,
  }
  return (
    <HStack marginY={2}>
      {platforms.map((platform) => (
        <Icon as={iconMap[platform.slug]} color="gray.500" />
      ))}
    </HStack>
  )
}

export default PlatformIconList
