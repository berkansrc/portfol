import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { Box, VStack } from "../../../styled-system/jsx"
import { $boxStyle, $subTitleStyle } from "../../assets/styles/style"
import Link from "../../components/Link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { css } from "../../../styled-system/css"
import { blogData } from "../../data/blog-data"


const $blogListStyle = css({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "rgba(255,255,255,.5)",
    fontSize: "sm",
    pb: 2,
    fontWeight: "500",
    transition: ".4s",
    borderBottom: "1px solid token(colors.dark)",
    "& span": {
        overflow: 'hidden',
        display: '-webkit-box',
        WebkitLineClamp: 1,
        lineClamp: 1,
        // @ts-ignore
        WebkitBoxOrient: 'vertical',
    },
    "&:hover": {
        color: "primary",
        borderBottom: "1px solid token(colors.primary)",
    },
    "& svg": {
        fontSize: "sm",
    },
    "&:not(:last-child)": {
        mb: 2,
    }
})

function LastedBlog() {
    return (
        <VStack className={$boxStyle} minH="235px" w="full" p={5} justifyContent={"space-between"}>
            <h2 className={$subTitleStyle}>Son Blog</h2>
            <Box w={"full"} my={5}>
                {
                    blogData.slice(0, 3).map((data, index) => (
                        <a key={index} href={data.link} title={data.title} className={$blogListStyle}><span>{index + 1}. {data.title} </span><FontAwesomeIcon icon={faChevronRight} /></a>
                    ))
                }
            </Box>
            <Link text="Tüm Bloglar" link="/blog" />
        </VStack>
    )
}

export default LastedBlog