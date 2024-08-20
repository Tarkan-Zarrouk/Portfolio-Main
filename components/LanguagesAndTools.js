import { Box, Button, SimpleGrid, Text, Tooltip } from "@chakra-ui/react";
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

export default function LanguagesAndTools() {
    return (
        <SimpleGrid pb="10rem" minChildWidth='320px' spacing='40px'>
            <Box pl="1rem">
                <Text as="b" fontSize="2xl" textDecor="underline">
                    Languages
                </Text>
                <br />
                <Tooltip flexWrap="wrap" hasArrow label="HTML From 2022 - Present" placement="bottom" borderRadius="1rem">
                    <Button mt="1rem" borderRadius="50%" height="4rem" width="4rem" bg="white" mr="1rem">
                        <Image src={HtmlIcon} width={50} height={50} />
                    </Button>
                </Tooltip>
                <Tooltip hasArrow label="CSS From 2022 - Present" placement="bottom" borderRadius="1rem">
                    <Button mt="1rem" borderRadius="50%" height="4rem" width="4rem" bg="white" mr="1rem">
                        <Image src={CssIcon} width="40" />
                    </Button>
                </Tooltip>
                <Tooltip hasArrow label="Python From 2024 - Present" placement="bottom" borderRadius="1rem">
                    <Button mt="1rem" borderRadius="50%" height="4rem" width="4rem" bg="white" mr="1rem">
                        <Image src={PythonIcon} width="40" />
                    </Button>
                </Tooltip>
                <Tooltip hasArrow label="JavaScript From 2023 - Present" placement="bottom" borderRadius="1rem">
                    <Button mt="1rem" borderRadius="50%" height="4rem" width="4rem" bg="white" mr="1rem">
                        <Image src={JavascriptIcon} width="40" />
                    </Button>
                </Tooltip>
                <br />
                <br />
                <Text as="b" textDecor="underline" fontSize="2xl">Version Control Management</Text>
                <br />
                <Tooltip hasArrow label="Git From 2022 - Present" placement="bottom">
                    <Button mt="1rem" borderRadius="50%" height="4rem" width="4rem" bg="white" mr="1rem">
                        <Image src={GitIcon} width="40" />
                    </Button>
                </Tooltip>
                <Tooltip hasArrow label="GitHub 2021 - Present" placement="bottom" borderRadius="1rem">
                    <Button mt="1rem" borderRadius="50%" height="4rem" width="4rem" bg="white" mr="1rem">
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
                    <Button mt="1rem" borderRadius="50%" height="4rem" width="4rem" bg="white" mr="1rem">
                        <Image src={ReactIcon} width="40" />
                    </Button>
                </Tooltip>
                <Tooltip hasArrow label="TailwindCSS From 2024 - Present" placement="bottom" borderRadius="1rem">
                    <Button mt="1rem" borderRadius="50%" height="4rem" width="4rem" bg="white" mr="1rem">
                        <Image src={TailwindIcon} width="40" />
                    </Button>
                </Tooltip>
                <Tooltip hasArrow label="Bootstrap From 2023 - Present" placement="bottom" borderRadius="1rem">
                    <Button mt="1rem" borderRadius="50%" height="4rem" width="4rem" bg="white" mr="1rem">
                        <Image src={BootstrapIcon} width="40" />
                    </Button>
                </Tooltip>
                <Tooltip hasArrow label="SasS From 2022 - Present" placement="bottom" borderRadius="1rem">
                    <Button mt="1rem" borderRadius="50%" height="4rem" width="4rem" bg="white" mr="1rem">
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
                    <Button mt="1rem" borderRadius="50%" height="4rem" width="4rem" bg="white" mr="1rem">
                        <Image src={WindowsIcon} width="40" />
                    </Button>
                </Tooltip>
                <Tooltip hasArrow label="PopOs! From 2019 - 2020" placement="bottom" borderRadius="1rem">
                    <Button mt="1rem" borderRadius="50%" height="4rem" width="4rem" bg="white" mr="1rem">
                        <Image src={PopOsIcon} width="40" />
                    </Button>
                </Tooltip>
                <Tooltip hasArrow label="iOS & MacOS From 2018 - Present & 2024 - Present" placement="bottom" borderRadius="1rem">
                    <Button mt="1rem" borderRadius="50%" height="4rem" width="4rem" bg="white" mr="1rem">
                        <Image src={MacIosOS} width="40" />
                    </Button>
                </Tooltip>
                <Tooltip hasArrow label="VSCode From 2022 - Present" placement="bottom" borderRadius="1rem">
                    <Button mt="1rem" borderRadius="50%" height="4rem" width="4rem" bg="white" mr="1rem">
                        <Image src={VsCodeIcon} width="2rem" />
                    </Button>
                </Tooltip>
                <Tooltip hasArrow label="IntelliJ IDEA From 2022 - Present" placement="bottom" borderRadius="1rem">
                    <Button mt="1rem" borderRadius="50%" height="4rem" width="4rem" bg="white" mr="1rem">
                        <Image src={IntellijIcon} width="40" />
                    </Button>
                </Tooltip>
            </Box>
        </SimpleGrid>
    )
}