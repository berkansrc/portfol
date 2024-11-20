import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { Box, VStack } from "../../../styled-system/jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ImagePerson from "../../../public/layla-wife.png.png"
import { $boxStyle } from "../../assets/styles/style";
import { LinkButton } from "../../components/Button";
import { css } from "../../../styled-system/css";
import { textObject } from "../../data/letter-data";
import Link from "../../components/Link";

const $letterTextStyle = css({
    pos: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%,-50%)",
    "& > div": {
        w: "200px",
        h: "200px",
        color: "white",
        animation: "spin 18s linear infinite",
        fontSize: "sm",
        "& span": {
            pos: "absolute",
            left: "50%",
            fontSize: "sm",
            transformOrigin: "0 100px",
            color: "rgba(255,255,255,.6)",
            fontWeight: "400",
            textTransform: "uppercase"
        }
    }
})


export function Biography() {
    return (
        <>
            <VStack className={$boxStyle} w="full" p={7} pt={10}>
                <Box pos={"relative"}>
                    <img src={ImagePerson} alt="Berkan Saraç Görsel" />
                    <div className={$letterTextStyle}>
                        <div>
                            {textObject.map(({ letter, rotation }, index) => (
                                <span key={index} style={{ transform: `rotate(${rotation}deg)` }}>
                                    {letter}
                                </span>
                            ))}
                        </div>
                    </div>
                </Box>
                <LinkButton href="/hakkimizda" color="primary" my={7}>Berkan <FontAwesomeIcon icon={faPaperPlane} /></LinkButton>

                <Link text="Hakkımızda" link="/hakkimizda" />

            </VStack>
        </>
    )
}

