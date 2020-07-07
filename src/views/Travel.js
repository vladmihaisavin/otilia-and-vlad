import React from "react"
import Container from "react-bootstrap/Container"
import { useCookies } from "react-cookie"

import { Title, Travel as TravelText } from "../content/Travel"
import Header from "../components/Header"
import MapItem from "../components/MapItem"
import headerImg from "../photos/IMG_0247.jpg"
import { selectLanguage } from "../utils/cookies"

function Travel() {
    const [cookies] = useCookies(["language"])

    const { Heading, SubHeading } = Title[selectLanguage(cookies)]
    const travelItems = TravelText[selectLanguage(cookies)]

    return (
        <>
            <Header
                imageUrl={headerImg}
                Heading={Heading}
                SubHeading={SubHeading}
            />
            <Container fluid>
                {travelItems.map(
                    (
                        {
                            Title,
                            Date,
                            Time,
                            Location,
                            Map
                        },
                        idx
                    ) => (
                        <MapItem
                            key={idx}
                            LeftMainTitle={Title}
                            LeftFirstSubTitle={Date}
                            LeftSecondSubTitle={Time}
                            RightMainTitle={Location}
                            Map={Map}
                        />
                    )
                )}
            </Container>
        </>
    )
}

export default Travel
