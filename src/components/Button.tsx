import { cva } from "../../styled-system/css";
import { styled } from "../../styled-system/jsx";


const $buttonStyle = cva({
    base: {
        display: "inline-block",
        borderRadius: "full",
        fontWeight: "600",
        outline: "0",
        textAlign: "center",
        borderWidth: "2px",
        borderStyle: "solid",
        transitionDuration: "0.5s",
        transitionProperty:
            "box-shadow, background-color, border-color",
        "&:not(:disabled)": {
            _hover: {
                cursor: "pointer",
            },
        },
        _disabled: {
            cursor: "not-allowed"
        }
    },
    variants: {
        color: {
            primary: {
                backgroundColor: "primary",
                color: "white",
                borderColor: "primary",
                "&:not(:disabled)": {
                    _hover: {
                        backgroundColor: "primary.dark"
                    }
                },
            },
        },
        size: {
            xs: { px: 3, py: 2, fontSize: "xs", lineHeight: '1rem' },
            sm: { px: 3, py: 2, fontSize: "sm", lineHeight: '1.125rem' },
            md: { px: 5, py: 2.5, fontSize: "sm", lineHeight: '1.25rem' },
            lg: { px: 5, py: 3, fontSize: "md", lineHeight: '1.5rem' },
            xl: { px: 6, py: 3.5, fontSize: 'md', lineHeight: '1.5rem' },
        },
        variant: {
            contained: {},
            outlined: {
                "&:not(:disabled)": {
                    _hover: {
                        color: "white"
                    },
                    _focus: {
                        color: "white"
                    }
                },
                _disabled: {
                    color: "white",
                }
            },
            icon: {
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "full",
                p: 0
            }
        }
    },
    defaultVariants: {
        size: 'md',
        variant: "contained",
    },
    compoundVariants: [
        {
            variant: "icon",
            size: "xs",
            css: {
                width: 8,
                height: 8
            },
        },
        {
            variant: "icon",
            size: "sm",
            css: {
                width: 9,
                height: 9
            },
        },
        {
            variant: "icon",
            size: "md",
            css: {
                width: 10,
                height: 10
            },
        },
        {
            variant: "icon",
            size: "lg",
            css: {
                width: 12,
                height: 12
            },
        },
        {
            variant: "icon",
            size: "xl",
            css: {
                width: 20,
                height: 20
            },
        }
    ],
});

export const Button = styled("button", $buttonStyle);
export const LinkButton = styled("a", $buttonStyle);