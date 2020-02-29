import React from "react"
import { useCookies } from "react-cookie"
import Container from "react-bootstrap/Container"

import Header from "../components/Header"
import Item from "../components/Item"
import headerImg from "../photos/travel.jpg"
import { selectLanguage } from "../utils/cookies"

function FAQ() {
    const [cookies] = useCookies(["language"])

    const { Heading, SubHeading } = title[selectLanguage(cookies)]
    const faqItems = faqs[cookies.language]

    return (
        <>
            <Header
                imageUrl={headerImg}
                Heading={Heading}
                SubHeading={SubHeading}
            />
            <Container fluid>
                {faqItems.map(({ Question, Answer }, idx) => (
                    <div style={{ marginBottom: 100 }}>
                        <Item
                            key={idx}
                            LeftMainTitle={Question}
                            RightDetails={Answer}
                        />
                    </div>
                ))}
            </Container>
        </>
    )
}

export default FAQ
