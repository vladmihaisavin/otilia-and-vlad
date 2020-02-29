import React from "react"
import Container from "react-bootstrap/Container"
import { useCookies } from "react-cookie"

import { Title, Travel as TravelText } from "../content/Travel"
import Header from "../components/Header"
import Item from "../components/Item"
import headerImg from "../photos/travel.jpg"
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
                    ({ Type, Title, Details, Address, Phone, link }, idx) => (
                        <Item
                            key={idx}
                            LeftMainTitle={Type}
                            LeftFirstSubTitle={Title}
                            RightFirstContact={Address}
                            RightSecondContact={Phone}
                            RightDetails={Details}
                            infoLink={link}
                        />
                    )
                )}
            </Container>
        </>
    )
}

export default Travel
