import {
    Box,
    Flex,
    Link,
    Spacer,
    IconButton,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    HStack,
    Button,
    Text,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import NavIcon from "@/public/NavBarBrandIcon.png";
import Image from "next/image";
import { useRouter } from "next/router";
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";



export default function NavigationMenu() {
    const router = useRouter();
    const { isOpen, onOpen, onClose } = useDisclosure();

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
                    display={["flex", "flex"]}
                >
                    <Link mr="40px" onClick={() => router.push("/")}>
                        <Text fontSize={["sm", "lg"]} color="#7e9199">
                            Home
                        </Text>
                    </Link>
                    <Link mr="40px" onClick={() => router.push("/Skills")}>
                        <Text fontSize={["sm", "lg"]} color="#7e9199">
                            Skills
                        </Text>
                    </Link>
                </Box>

            </Flex>
        </div>
    );
}
