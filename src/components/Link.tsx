import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { $linkStyle } from "../assets/styles/style"

function Link({ text, link }: { text: string, link: string }) {
    return (
        <a href={link} className={$linkStyle}>
            {text}
            <FontAwesomeIcon icon={faRightFromBracket} />
        </a>
    )
}

export default Link