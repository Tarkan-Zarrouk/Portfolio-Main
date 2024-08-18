import { AbsoluteCenter, Box, Center, Flex, Text, VStack } from "@chakra-ui/react";
import NavigationMenu from "./components/NavigationMenu";

export default function Home() {
  return (
    <>
      <NavigationMenu />
      <Flex
        height="75vh"
        alignItems="center"
        justifyContent="center"
        p={4}
      >
        <Box textAlign="center">
          <Text fontSize="4xl" fontWeight="bold">
            Hi, I'm Tarkan 👋
          </Text>
          <Text fontSize="md" w={["100%", "50%"]} mx={["none", "auto"]} color="gray.500">
            Hi, I’m Tarkan Zarrouk, a 16-year-old self-taught web developer passionate about creating websites and eager to turn this into a full-fledged career. I love solving problems, learning new technologies, and can’t wait to collaborate with other developers to push the boundaries of what’s possible on the web.
          </Text>
        </Box>
      </Flex>
    </>
  );
}
