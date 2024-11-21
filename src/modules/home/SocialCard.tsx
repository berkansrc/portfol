import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF } from "@fortawesome/free-brands-svg-icons"
import { VStack } from "../../../styled-system/jsx"
import { $boxStyle } from "../../assets/styles/style"
import Link from "../../components/Link"
import { css } from "../../../styled-system/css"

const $socialStyle = css({
    display: "flex",
    gap: "15px",
    "& a": {
        display: "inline-flex",
        w: "60px",
        h: "60px",
        borderRadius: "50%",
        border: "1px solid #B3B6B9",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "2xl",
        color: "#fff"
    }
})
const $paragStyle = css({
    fontSize: "3xl",
    fontWeight: "500",
    color: "white"
})

function SocialCard() {
    return (
        <VStack className={$boxStyle} justifyContent={"space-between"} p={7} minH={"227px"} pos={"relative"}>
            <h2 className={$paragStyle}>Title</h2>
            <ul className={$socialStyle}>
                <li>
                    <a href="/">
                        <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                </li>
                <li>
                    <a href="/">
                        <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                </li>
                <li>
                    <a href="/">
                        <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                </li>
            </ul>
            <Link text="Profil" link="/hakkimizda" />
        </VStack>
    )
}

export default SocialCard