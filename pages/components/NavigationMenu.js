"use client";
import {
    Box,
    Flex,
    Link,
    Spacer,
    Text,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import NavIcon from "@/public/NavBarBrandIcon.png";
import Image from "next/image";


export default function NavigationMenu() {

    return (
        <div>
            <Flex
                px={["0rem", "2rem", "5rem"]}
                py={["0rem", "1.5rem", "2rem"]}
                minH="60px"
                alignItems="center"
            >
                <Box>
                    <Image
                        onClick={() => window.location.reload()}
                        style={{ cursor: "pointer" }}
                        src={NavIcon}
                        width={250}
                        height={250}
                    />
                </Box>
                <Spacer />
                <Box display={["none", "flex", "flex"]}>
                    <Link href="#section1" mr="40px">
                        <Text fontSize={["sm", "lg"]} color="#7e9199">
                            Home
                        </Text>
                    </Link>
                    <Link href="#section2" mr="40px">
                        <Text fontSize={["sm", "lg"]} color="#7e9199">
                            Skills
                        </Text>
                    </Link>
                </Box>
                <Menu>
                    <MenuButton display={["flex", "none", "none", "none"]}>
                        <HamburgerIcon />
                    </MenuButton>
                    <MenuList>
                        <MenuItem href="#section1">Home</MenuItem>
                        <MenuItem href="#section2">Skills</MenuItem>
                    </MenuList>
                </Menu>
            </Flex>
        </div>
    );
}
