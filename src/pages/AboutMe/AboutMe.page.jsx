import React from 'react';

// styles
import { TitleRowContainer } from './AboutMe.styles';
import { H1, H3, Grid, Row, Col, Container, Paragraph } from '../Page.styles';

export default function AboutMe() {
    return (
        <Container>
            <TitleRowContainer>
                <Grid>
                    <Row>
                        <Col size={1}></Col>
                        <Col size={3}>
                            <H1>Hi, i am Rafał</H1>
                            <Paragraph>
                                I am Junior Frontend Developer and this is my
                                portfolio
                            </Paragraph>
                        </Col>
                    </Row>
                </Grid>
            </TitleRowContainer>
        </Container>
    );
}
