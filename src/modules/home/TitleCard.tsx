import { css } from "../../../styled-system/css"
import { Box } from "../../../styled-system/jsx"
import { $boxStyle } from "../../assets/styles/style"
import Shape from "../../../public/shape/s-shape1.png.png"
const $titleStyle = css({
    fontSize: "2xl",
    fontWeight: "700",
    color: "primary",
    letterSpacing: "2",
    lineHeight: "normal"
})

const $paragStyle = css({
    fontSize: "4xl",
    fontWeight: "500",
    color: "white"
})

const $shapeStyle = css({
    pos: "absolute",
    top: "0",
    right: "0"
})
function TitleCard() {
    return (
        <Box className={$boxStyle} p={7} minH={"227px"} pos={"relative"}>
            <img src={Shape} className={$shapeStyle} alt="Shape Logo" />
            <h2 className={$titleStyle}>Title</h2>
            <p className={$paragStyle}>Frontend <span className={css({ display: "block", ms: 8, color: "#b3b6b9" })}>Developer</span></p>
        </Box>
    )
}

export default TitleCard