import { background, extendTheme, theme } from "@chakra-ui/react";
import { color } from "framer-motion";

// const { Input } = theme.components;

const styles = extendTheme({
    config: {
        initialColorMode: "dark",
        useSystemColorMode: false,
    },
    background: {
        primary: {
            50: "#f0f9ff",
            100: "#e0f2fe",
            200: "#c7e4fc",
            300: "#a5d3f8",
            400: "#81c8f5",
            500: "#63b3eb",
            600: "#4fa1e9",
            700: "#4398e6",
            800: "#3783e3",
            900: "#317cdd",
        },
        secondary: {
            100: "#f6f8fa",
        },
    },
});

export default styles;
