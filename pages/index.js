import { Box, Button, ButtonGroup, Flex, SimpleGrid, Text, Tooltip } from "@chakra-ui/react";
import NavigationMenu from "./components/NavigationMenu";
import { MdOutlinePerson } from "react-icons/md";
import { IoMail } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import HtmlIcon from "@/public/html_icon.png";
import CssIcon from "@/public/css_icon.png";
import PythonIcon from "@/public/python_icon.png";
import JavascriptIcon from "@/public/javascript_icon.png"
import GitIcon from "@/public/git_icon.png";
import GitHubIcon from "@/public/github_icon.png";


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
      <Box px={["1rem", "2rem", "5rem"]}>
        <Text as="b" fontSize="3xl">
          Skills
        </Text>
        <Box>
          <SimpleGrid minChildWidth='320px' spacing='40px'>
            <Box pl="1rem">
              <Text as="b" fontSize="2xl" textDecor="underline">
                Languages
              </Text>
              <br />
              <Tooltip hasArrow label="HTML From 2022 - Present" placement="bottom" borderRadius="1rem">
                <Button mt="1rem" borderRadius="50%" height="4rem" width="auto" bg="white">
                  <Image src={HtmlIcon} width={40} />
                </Button>
              </Tooltip>
              <Tooltip hasArrow label="CSS From 2022 - Present" placement="bottom" borderRadius="1rem">
                <Button mt="1rem" borderRadius="50%" height="4rem" width="auto" bg="white" ml="10px">
                  <Image src={CssIcon} width="40" />
                </Button>
              </Tooltip>
              <Tooltip hasArrow label="Python From 2024 - Present" borderRadius="1rem">
                <Button mt="1rem" borderRadius="50%" height="4rem" width="auto" bg="white" ml="10px">
                  <Image src={PythonIcon} width="40" />
                </Button>
              </Tooltip>
              <Tooltip hasArrow label="JavaScript From 2023 - Present" borderRadius="1rem">
                <Button mt="1rem" borderRadius="50%" height="4rem" width="auto" bg="white" ml="10px">
                  <Image src={JavascriptIcon} width="40" />
                </Button>
              </Tooltip>
              <br />
              <br />
              <Text as="b" textDecor="underline" fontSize="2xl">Version Control Management</Text>
              <br />
              <Tooltip hasArrow label="Git From 2022 - Present">
                <Button mt="1rem" borderRadius="50%" height="4rem" width="auto" bg="white" ml="10px">
                  <Image src={GitIcon} width="40" />
                </Button>
              </Tooltip>
              <Tooltip hasArrow label="GitHub 2021 - Present">
                <Button mt="1rem" borderRadius="50%" height="4rem" width="auto" bg="white" ml="10px">
                  <Image src={GitHubIcon} width="40" />
                </Button>
              </Tooltip>
            </Box>
            <Box bg='tomato' height='80px'>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
}
