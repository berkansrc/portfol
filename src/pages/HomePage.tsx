import { Container, Grid, GridItem, VStack } from "../../styled-system/jsx"
import { Biography } from "../modules/home"
import LastedBlog from "../modules/home/LastedBlog"
import SocialCard from "../modules/home/SocialCard"
import TitleCard from "../modules/home/TitleCard"


function HomePage() {
    return (
        <section>
            <Container>
                <Grid columns={4}>
                    <GridItem colSpan={3}>
                        <Grid columns={3} gap={"24px"}>
                            <GridItem colSpan={1}>
                                <VStack gap={"24px"}>
                                    <Biography />
                                    <LastedBlog />
                                </VStack>
                            </GridItem>
                            <GridItem colSpan={2}>
                                <Grid columns={2} gap={"24px"}>
                                    <GridItem colSpan={1}>
                                        <TitleCard />
                                    </GridItem>
                                    <GridItem colSpan={1}>
                                        <SocialCard />
                                    </GridItem>
                                </Grid>
                            </GridItem>
                        </Grid>
                    </GridItem>
                    <GridItem colSpan={1}>

                    </GridItem>
                </Grid>
            </Container>
        </section>
    )
}

export default HomePage