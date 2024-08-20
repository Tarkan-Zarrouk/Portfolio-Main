import { Box, Button, ButtonGroup, Flex, SimpleGrid, Stack, Text, Tooltip } from "@chakra-ui/react";
import NavigationMenu from "../components/NavigationMenu";
import { MdOutlinePerson } from "react-icons/md";
import { IoMail } from "react-icons/io5";
import Link from "next/link";
import ScrollToTop from "../components/ScrollToTop";
import LanguagesAndTools from "../components/LanguagesAndTools";


export default function Home() {
  return (
    <>
      <NavigationMenu />
      <ScrollToTop />
      <Flex
        height="75vh"
        alignItems="center"
        justifyContent="center"
        p={4}
        id="section1"
      >
        <Box textAlign="center">
          <Text fontSize="4xl" fontWeight="bold">
            Hi, I'm Tarkan 👋
          </Text>
          <Text fontSize="md" w={["100%", "50%"]} mx={["none", "auto"]} color="gray.500">
            Hi, I’m Tarkan Zarrouk, a 16-year-old self-taught web developer passionate about creating websites and eager to turn this into a full-fledged career. I love solving problems, learning new technologies, and can’t wait to collaborate with other developers to push the boundaries of what’s possible on the web.
          </Text>
          <ButtonGroup mt="10px">
            <Stack direction={["column", "row"]}>
              <Link href="/resume.pdf" target="_blank">
                <Button gap="5px" _hover={{ bg: "blue.300", color: "black" }}>
                  Resume
                  <MdOutlinePerson />
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/tarkan-zarrouk" target="_blank">
                <Button gap="5px" _hover={{ bg: "blue.300", color: "black" }}>
                  Connect With Me
                  <IoMail />
                </Button>
              </Link>
            </Stack>
          </ButtonGroup>
        </Box>
      </Flex>
      <Box id="section2" px={["1rem", "2rem", "5rem"]}>
        <Text as="b" fontSize="3xl">
          Skills
        </Text>
        <Box>
          <LanguagesAndTools />
        </Box>
      </Box>
    </>
  );
}
