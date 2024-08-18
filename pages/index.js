import { Box, Button, ButtonGroup, Flex, SimpleGrid, Stack, Text, Tooltip } from "@chakra-ui/react";
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
import ReactIcon from "@/public/react_icon.png";
import TailwindIcon from "@/public/tailwindcss_icon.png";
import BootstrapIcon from "@/public/bootstrap_icon.png";
import SassIcon from "@/public/sass_icon.png";
import WindowsIcon from "@/public/windows_icon.png";
import PopOsIcon from "@/public/popos_icon.png";
import MacIosOS from "@/public/macosios_icon.png";
import VsCodeIcon from "@/public/vscode_icon.png";
import IntellijIcon from "@/public/intellij_icon.png";
import ScrollToTop from "./components/ScrollToTop";


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
            Hi, I&apos;m Tarkan 👋
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
          <SimpleGrid pb="10rem" minChildWidth='320px' spacing='40px'>
            <Box pl="1rem">
              <Text as="b" fontSize="2xl" textDecor="underline">
                Languages
              </Text>
              <br />
              <Tooltip flexWrap="wrap" hasArrow label="HTML From 2022 - Present" placement="bottom" borderRadius="1rem">
                <Button mt="1rem" borderRadius="50%" height="4rem" width="auto" bg="white">
                  <Image src={HtmlIcon} width={40} />
                </Button>
              </Tooltip>
              <Tooltip hasArrow label="CSS From 2022 - Present" placement="bottom" borderRadius="1rem">
                <Button mt="1rem" borderRadius="50%" height="4rem" width="auto" bg="white" ml="10px">
                  <Image src={CssIcon} width="40" />
                </Button>
              </Tooltip>
              <Tooltip hasArrow label="Python From 2024 - Present" placement="bottom" borderRadius="1rem">
                <Button mt="1rem" borderRadius="50%" height="4rem" width="auto" bg="white" ml="10px">
                  <Image src={PythonIcon} width="40" />
                </Button>
              </Tooltip>
              <Tooltip hasArrow label="JavaScript From 2023 - Present" placement="bottom" borderRadius="1rem">
                <Button mt="1rem" borderRadius="50%" height="4rem" width="auto" bg="white" ml="10px">
                  <Image src={JavascriptIcon} width="40" />
                </Button>
              </Tooltip>
              <br />
              <br />
              <Text as="b" textDecor="underline" fontSize="2xl">Version Control Management</Text>
              <br />
              <Tooltip hasArrow label="Git From 2022 - Present" placement="bottom">
                <Button mt="1rem" borderRadius="50%" height="4rem" width="auto" bg="white" ml="10px">
                  <Image src={GitIcon} width="40" />
                </Button>
              </Tooltip>
              <Tooltip hasArrow label="GitHub 2021 - Present" placement="bottom" borderRadius="1rem">
                <Button mt="1rem" borderRadius="50%" height="4rem" width="auto" bg="white" ml="10px">
                  <Image src={GitHubIcon} width="40" />
                </Button>
              </Tooltip>
            </Box>
            <Box pl="1rem">
              <Text as="b" fontSize="2xl" textDecor="underline">
                Libraries & Frameworks
              </Text>
              <br />
              <Tooltip hasArrow label="React.JS From 2024 - Present" placement="bottom" borderRadius="1rem">
                <Button mt="1rem" borderRadius="50%" height="4rem" width="auto" bg="white" ml="10px">
                  <Image src={ReactIcon} width="40" />
                </Button>
              </Tooltip>
              <Tooltip hasArrow label="TailwindCSS From 2024 - Present" placement="bottom" borderRadius="1rem">
                <Button mt="1rem" borderRadius="50%" height="4rem" width="auto" bg="white" ml="10px">
                  <Image src={TailwindIcon} width="40" />
                </Button>
              </Tooltip>
              <Tooltip hasArrow label="Bootstrap From 2023 - Present" placement="bottom" borderRadius="1rem">
                <Button mt="1rem" borderRadius="50%" height="4rem" width="auto" bg="white" ml="10px">
                  <Image src={BootstrapIcon} width="40" />
                </Button>
              </Tooltip>
              <Tooltip hasArrow label="SasS From 2022 - Present" placement="bottom" borderRadius="1rem">
                <Button mt="1rem" borderRadius="50%" height="4rem" width="auto" bg="white" ml="10px">
                  <Image src={SassIcon} width="40" />
                </Button>
              </Tooltip>
              <br />
              <br />
              <Text as="b" fontSize="2xl" textDecor="underline">
                Other Tools & / Or Services
              </Text>
              <br />
              <Tooltip hasArrow label="Windows From 2014 - Present" placement="bottom" borderRadius="1rem">
                <Button mt="1rem" borderRadius="50%" height="4rem" width="auto" bg="white" ml="10px">
                  <Image src={WindowsIcon} width="40" />
                </Button>
              </Tooltip>
              <Tooltip hasArrow label="PopOs! From 2019 - 2020" placement="bottom" borderRadius="1rem">
                <Button mt="1rem" borderRadius="50%" height="4rem" width="auto" bg="white" ml="10px">
                  <Image src={PopOsIcon} width="40" />
                </Button>
              </Tooltip>
              <Tooltip hasArrow label="iOS & MacOS From 2018 - Present & 2024 - Present" placement="bottom" borderRadius="1rem">
                <Button mt="1rem" borderRadius="50%" height="4rem" width="auto" bg="white" ml="10px">
                  <Image src={MacIosOS} width="40" />
                </Button>
              </Tooltip>
              <Tooltip hasArrow label="VSCode From 2022 - Present" placement="bottom" borderRadius="1rem">
                <Button mt="1rem" borderRadius="50%" height="4rem" width="auto" bg="white" ml="10px">
                  <Image src={VsCodeIcon} width="40" />
                </Button>
              </Tooltip>
              <Tooltip hasArrow label="IntelliJ IDEA From 2022 - Present" placement="bottom" borderRadius="1rem">
                <Button mt="1rem" borderRadius="50%" height="4rem" width="auto" bg="white" ml="10px">
                  <Image src={IntellijIcon} width="40" />
                </Button>
              </Tooltip>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
}
