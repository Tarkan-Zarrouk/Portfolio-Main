import { ArrowUpIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
    const [visibility, setVisibility] = useState(false);
    function toggleVisible() {
        const scrolled = document.documentElement.scrollTop;
        scrolled > 150 ? setVisibility(true) : setVisibility(false);
    }
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    useEffect(() => {
        window.addEventListener("scroll", toggleVisible);
    })
    return (
        <Button display={visibility ? "block" : "none"} position="fixed" bottom="1rem" right="1rem" onClick={scrollToTop}>
            <ArrowUpIcon />
        </Button>
    )
}