import {
    Box,
    Flex,
    Link,
    Spacer,
    IconButton,
    Text,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import NavIcon from "@/public/NavBarBrandIcon.png";
import Image from "next/image";
import { useRouter } from "next/router";



export default function NavigationMenu() {
    const router = useRouter();

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
                <Box
                    display={["none", "flex", "flex"]}
                >
                    <Link mr="40px">
                        <Text fontSize={["sm", "lg"]} color="#7e9199">
                            Home
                        </Text>
                    </Link>
                    <Link mr="40px">
                        <Text fontSize={["sm", "lg"]} color="#7e9199">
                            Skills
                        </Text>
                    </Link>
                </Box>
                <Menu>
                    <MenuButton>
                        <IconButton
                            aria-label="Open Menu"
                            icon={<HamburgerIcon />}
                            display={["flex", "flex", "none", "none"]}
                        />
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Home</MenuItem>
                        <MenuItem>Skills</MenuItem>
                    </MenuList>
                </Menu>
            </Flex>
        </div>
    );
}
