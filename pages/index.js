import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  SimpleGrid,
  Stack,
  Text,
  Tooltip,
  IconButton,
  useBreakpointValue,
  VStack
} from "@chakra-ui/react";
import Image from 'next/image';
import NavigationMenu from "../components/NavigationMenu";
import { MdOutlinePerson } from "react-icons/md";
import { IoMail } from "react-icons/io5";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import Link from "next/link";
import ScrollToTop from "../components/ScrollToTop";
import LanguagesAndTools from "../components/LanguagesAndTools";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [1, 2, 3, 4, 5, 6].map(num => `/Preview_${num}.png`);

  const [isAnimating, setIsAnimating] = useState(false);

  const maxCardWidth = "50rem";
  const imageHeight = useBreakpointValue({ base: "200px", md: "300px", lg: "400px" });
  const fontSize = useBreakpointValue({ base: "3xl", md: "4xl" });
  const skillsFontSize = useBreakpointValue({ base: "2xl", md: "3xl" });

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [currentImageIndex]);

  const changeImage = (direction) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentImageIndex((prevIndex) => {
      if (direction === 'next') {
        return (prevIndex + 1) % images.length;
      } else {
        return (prevIndex - 1 + images.length) % images.length;
      }
    });
  };

  return (
    <Box maxWidth="100vw" overflowX="hidden"> {/* Add this wrapper */}
      <VStack spacing={8} align="stretch">
        <NavigationMenu />
        <ScrollToTop />

        {/* Update the Flex component */}
        <Flex
          minHeight="75vh"
          alignItems="center"
          justifyContent="center"
          p={4}
          id="section1"
          width="100%"
        >
          <Box textAlign="center" w={["90%", "80%", "70%", "60%"]} maxWidth="100%">
            <Text fontSize={fontSize} fontWeight="bold" mb={4}>
              Hi, I'm Tarkan 👋
            </Text>
            <Text fontSize={["sm", "md"]} color="gray.500" mb={6}>
              Hi, I'm Tarkan Zarrouk, a 16-year-old self-taught web developer passionate about creating websites and eager to turn this into a full-fledged career. I love solving problems, learning new technologies, and can't wait to collaborate with other developers to push the boundaries of what's possible on the web.
            </Text>
            <Stack direction={["column", "row"]} spacing={4} justify="center">
              <Link href="/resume.pdf" target="_blank">
                <Button gap="5px" w="full" _hover={{ bg: "blue.300", color: "black" }}>
                  Resume
                  <MdOutlinePerson />
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/tarkan-zarrouk" target="_blank">
                <Button gap="5px" w="full" _hover={{ bg: "blue.300", color: "black" }}>
                  Connect With Me
                  <IoMail />
                </Button>
              </Link>
            </Stack>
          </Box>
        </Flex>

        {/* Update the Skills section */}
        <Box id="section2" px={[4, 8, 16]} width="100%">
          <Text as="b" fontSize={skillsFontSize} mb={4}>
            Skills
          </Text>
          <Box>
            <LanguagesAndTools />
          </Box>
        </Box>

        {/* Update the Projects section */}
        <Box id="section3" textAlign="center" px={[4, 8, 16]} width="100%">
          <Text as="b" fontSize={skillsFontSize} mb={8}>
            Projects
          </Text>
          <VStack spacing={8} align="center">
            <Card maxW={maxCardWidth} w="100%">
              <CardHeader position="relative" h={imageHeight}>
                <Box position="relative" w="100%" h="100%">
                  <AnimatePresence initial={false}>
                    <motion.div
                      key={currentImageIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      style={{ position: 'absolute', width: '100%', height: '100%' }}
                    >
                      <Image
                        src={images[currentImageIndex]}
                        alt={`Preview ${currentImageIndex + 1}`}
                        layout="fill"
                        objectFit="cover"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "/placeholder.png";
                        }}
                      />
                    </motion.div>
                  </AnimatePresence>
                </Box>
                <IconButton
                  icon={<ChevronLeftIcon />}
                  position="absolute"
                  left="0"
                  bg="black"
                  top="50%"
                  transform="translateY(-50%)"
                  onClick={() => changeImage('prev')}
                  aria-label="Previous image"
                  zIndex="1"
                  isDisabled={isAnimating}
                />
                <IconButton
                  icon={<ChevronRightIcon />}
                  position="absolute"
                  right="0"
                  bg="black"
                  top="50%"
                  transform="translateY(-50%)"
                  onClick={() => changeImage('next')}
                  aria-label="Next image"
                  zIndex="1"
                  isDisabled={isAnimating}
                />
                <Link href="https://www.github.com/larrythefatcat/blogging-platform">
                  <Button bg="lightGreen" color="black">
                    Visit Me!
                  </Button>
                </Link>
              </CardHeader>
              <CardBody>
                <Text as="b" fontSize={["xl", "2xl"]} mb={2}>
                  Blogging Application
                </Text>
                <Text fontSize={["md", "lg"]}>
                  This project was created using React, NextJS, TailwindCSS, NextUI, and Firebase (Firestore, Firebase Auth, and Storage).
                  I was able to learn how I can manage the backend and frontend understanding the fundamentals of DBM (Database Management)!
                </Text>
              </CardBody>
            </Card>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
}
