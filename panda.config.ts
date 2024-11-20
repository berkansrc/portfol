import { defineConfig } from "@pandacss/dev"
import { container } from "./src/utils/panda/container"
export default defineConfig({

    patterns: {
        container,
    },
    preflight: true,
    include: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            semanticTokens: {
                colors: {
                    primary: {
                        DEFAULT: {
                            value: "#008000"
                        },
                        dark: {
                            value: "#7f24f5"
                        }
                    },
                    dark: {
                        DEFAULT: {
                            value: "#323232"
                        }
                    },
                    white: {
                        DEFAULT: {
                            value: "#fff"
                        },
                        ligther: {
                            value: "#B3B6B9"
                        }
                    }
                }
            },
            keyframes:{
                spin:{
                    "100%":{transform:"rotate(100deg)"}
                }
            }
        }
    },
    
    exclude: [],
    jsxFramework: "react",
    outdir: "styled-system",
})