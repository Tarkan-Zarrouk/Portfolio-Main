import { Box, Button, ButtonGroup, Flex, Spacer, Text } from "@chakra-ui/react";
import NavigationMenu from "./components/NavigationMenu";
import { useRouter } from "next/router";
import { MdOutlinePerson } from "react-icons/md";
import { IoMail } from "react-icons/io5";
import Link from "next/link";


export default function Home() {
  const router = useRouter();
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
          <ButtonGroup mt="10px">
            <a href="/resume.pdf" target="_blank">
              <Button gap="5px" _hover={{ bg: "blue.300", color: "black" }}>
                Resume
                <MdOutlinePerson />
              </Button>
            </a>
            <Link href="https://www.linkedin.com/in/tarkan-zarrouk" target="_blank">
              <Button gap="5px" _hover={{ bg: "blue.300", color: "black" }}>
                Contact Me
                <IoMail />
              </Button>
            </Link>
          </ButtonGroup>
        </Box>
      </Flex>
    </>
  );
}
