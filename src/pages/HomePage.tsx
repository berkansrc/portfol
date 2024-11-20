import { Container, Grid, GridItem, VStack } from "../../styled-system/jsx"
import { Biography } from "../modules/home"
import LastedBlog from "../modules/home/LastedBlog"


function HomePage() {
    return (
        <section>
            <Container>
                <Grid columns={3}>
                    <GridItem colSpan={2}>
                        <Grid columns={3}>
                            <GridItem colSpan={1}>
                                <VStack gap={"24px"}>
                                    <Biography />
                                    <LastedBlog />
                                </VStack>
                            </GridItem>
                            <GridItem colSpan={2}>

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