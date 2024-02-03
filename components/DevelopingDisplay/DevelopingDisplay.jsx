import React from 'react'
import Banner from '../Banner/index'
import Container from '../Container/index'

export default function DevelopingDisplay(){
    return (
        <Container className="developing-cont">
            <Container.Title>I'm sorry we're still working on this feature</Container.Title>
            <Container.Elements className="developing-innerCont">
                <Banner>
                    <Banner.Left>This will be amazing!</Banner.Left>
                    <Banner.Right><span>Best Bank</span> is always looking for a better customer experience</Banner.Right>
                </Banner>
            </Container.Elements>
        </Container>
    )
}