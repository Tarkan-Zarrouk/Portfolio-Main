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
                px={["1rem", "2rem", "5rem"]}
                py={["1rem", "1.5rem", "2rem"]}
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
                    display={["none", "none", "flex", "flex"]}
                >
                    <Link mr="40px" onClick={() => router.push("/")}>
                        <Text fontSize="lg" color="#7e9199">
                            Home
                        </Text>
                    </Link>
                    <Link mr="40px" onClick={() => router.push("/skills")}>
                        <Text fontSize="lg" color="#7e9199">
                            Skills
                        </Text>
                    </Link>
                    <Link mr="40px" onClick={() => router.push("/certifications")}>
                        <Text fontSize="lg" color="#7e9199">
                            Certifications
                        </Text>
                    </Link>
                    <Link mr="40px" onClick={() => router.push("/contact")}>
                        <Text fontSize="lg" color="#7e9199">
                            Contact
                        </Text>
                    </Link>
                </Box>
                <IconButton
                    aria-label="Open Menu"
                    icon={<HamburgerIcon />}
                    display={["flex", "flex", "none", "none"]}
                    onClick={onOpen}
                />
            </Flex>

            <Drawer placement="right" onClose={onClose} size="full" isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Checkout Below!</DrawerHeader>
                    <DrawerBody textAlign="center" mx="auto">
                        <Link display="block" mb="10px" onClick={() => { router.push("/"); onClose(); }}>Home</Link>
                        <Link display="block" mb="10px" onClick={() => { router.push("/skills"); onClose(); }}>Skills</Link>
                        <Link display="block" mb="10px" onClick={() => { router.push("/certifications"); onClose(); }}>Certifications</Link>
                        <HStack>
                                <Link href="https://www.github.com/LarryTheFatCat">
                                    <Button>
                                        <FaGithub />
                                    </Button>
                                </Link>
                                <Link href="https://www.linkedin.com/in/tarkan-zarrouk/">
                                    <Button>
                                        <FaLinkedin />
                                    </Button>
                                </Link>
                                <Link href="https://stackoverflow.com/users/19522243/larrythecat">
                                    <Button>
                                        <FaStackOverflow />
                                    </Button>
                                </Link>
                        </HStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </div>
    );
}
