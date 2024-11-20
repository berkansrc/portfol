import { css } from "../../../styled-system/css";

export const $boxStyle = css({
    minH: "75px",
    bg: " linear-gradient(153deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.04) 83%)",
    backdropFilter: "blur(25px)",
    borderRadius: "20px",
    transition: ".4s linear",
    border: "1px solid token(colors.dark)",
    "&:hover": {
        boxShadow: "rgba(204,219,232,.05) 3px 3px 6px 0px inset,rgba(255,255,255,.033) -3px -3px 6px 1px inset"
    }
})

export const $linkStyle = css({
    display: "flex",
    justifyContent: "space-between",
    w: "full",
    fontSize: "md",
    fontWeight: "medium",
    alignItems: "center",
    color: "white",
    transition: ".4s",
    "&:hover": {
        color: "primary",
    }
})

export const $subTitleStyle = css({
    fontSize: {
        base: "lg", 
        mdDown: "1.125rem"
    },
    color:"white",
    fontWeight:"500",
    lineHeight:{
        base:"36px",
        mdDown:"20px"
    }
})