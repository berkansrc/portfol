import { Container, HStack } from '../../styled-system/jsx'
import Logo from "../../public/BentoX.png"
import { navbarData } from '../data/navbar-data'
import { css, cx } from '../../styled-system/css'
import { $boxStyle } from '../assets/styles/style'
import { useEffect } from 'react'




const $navbarStyle = css({
    display: 'flex',
    gap: "20px",
    "& a": {
        fontSize: "md",
        fontWeight: "medium",
        color: "white",
        transition: ".3s",
        "&:hover": {
            color: "primary"
        }
    }
})

const $headStyle = css({
    justifyContent: 'space-between',
    px: "40px"
})






function Navbar() {
    useEffect(() => {
        async function getNavigation() {
            const responce = await fetch("../data/navbar-data");
            const data = await responce.json();
            console.log(data);
        }
        getNavigation()
    }, [])
    return (
        <>
            <header className={css({ my: "70px" })}>
                <Container>
                    <HStack className={cx($headStyle, $boxStyle)}  >
                        <a>
                            <a href='/'>
                                <img src={Logo} />
                            </a>
                        </a>
                        <ul className={$navbarStyle}>
                            {
                                navbarData.map((data, index) =>
                                    (<li key={index}><a href={data.href}>{data.title}</a></li>)
                                )
                            }
                        </ul>
                        <HStack>
                            <a>Let’s Talk</a>
                            <a>Let’s Talk</a>
                        </HStack>
                    </HStack>
                </Container>
            </header>
        </>
    )
}

export default Navbar 