import React from "react"
import { useCookies } from "react-cookie"
import { useAuth0 } from "../../react-auth0-spa"
import { Link, NavLink as RouterNavLink, withRouter } from "react-router-dom"
import Navbar from "react-bootstrap/Navbar"
import NavLink from "react-bootstrap/NavLink"
import Nav from "react-bootstrap/Nav"
import NavItem from "react-bootstrap/NavItem"
import Dropdown from "react-bootstrap/Dropdown"
import ReactCountryFlag from "react-country-flag"
import classNames from "classnames"

import { selectLanguage } from "../../utils/cookies"
import { LANGUAGE } from "../../utils/constants"
import { navigation } from "../../content"

import styles from "./NavBar.module.scss"

const NavBar = () => {
  const [cookies, setCookie] = useCookies(["language"])
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0()

  const handleSelectLanguage = (lang) => {
    setCookie("language", lang, { path: "/" })
  }
  
  const languageCodes = {
    [LANGUAGE.RO]: "RO",
    [LANGUAGE.EN]: "US",
}

const {
  schedule: ScheduleNavText,
  travel: TravelNavText,
  thingsToDo: ThingsToDoNavText,
  faq: FAQNavText,
  rsvp: RSVPNavText,
  signOut: SignOutText,
  signIn: SignInText
} = navigation[selectLanguage(cookies)]

  return (
    <Navbar
        variant="dark"
        expand="lg"
        sticky="top"
        className={styles.navigation}
    >
        <RouterNavLink
            to="/"
            className={classNames("navbar-brand", styles.brand)}
        >
            O & V
        </RouterNavLink>
        <Navbar.Toggle />
        <Navbar.Collapse>
            <Nav>
                <RouterNavLink
                    to="/schedule"
                    className="nav-link"
                    role="button"
                >
                    <ScheduleNavText />
                </RouterNavLink>
                <RouterNavLink
                    to="/travel"
                    className="nav-link"
                    role="button"
                >
                    <TravelNavText />
                </RouterNavLink>
                <RouterNavLink
                    to="/things-to-do"
                    className="nav-link"
                    role="button"
                >
                    <ThingsToDoNavText />
                </RouterNavLink>
                <RouterNavLink to="/faq" className="nav-link" role="button">
                    <FAQNavText />
                </RouterNavLink>
                <RouterNavLink
                    to="/rsvp"
                    className="nav-link"
                    role="button"
                >
                    <RSVPNavText />
                </RouterNavLink>
            </Nav>
            <Nav className="ml-auto">
                <div>
                    {!isAuthenticated && (
                        <Link className="nav-link" onClick={() => loginWithRedirect({})}>
                            <SignInText />
                        </Link>
                    )}

                    {isAuthenticated && (
                        <Link className="nav-link" onClick={() => logout()}>
                            <SignOutText />
                        </Link>
                    )}
                </div>
                <Dropdown as={NavItem}>
                    <Dropdown.Toggle as={NavLink}>
                        <ReactCountryFlag
                            countryCode={
                                languageCodes[selectLanguage(cookies)]
                            }
                            svg
                        />{" "}
                        {selectLanguage(cookies)}
                    </Dropdown.Toggle>
                    <Dropdown.Menu alignRight>
                        <Dropdown.Item
                            eventKey={LANGUAGE.EN}
                            onSelect={handleSelectLanguage}
                        >
                            <ReactCountryFlag countryCode="US" svg />{" "}
                            {LANGUAGE.EN}
                        </Dropdown.Item>
                        <Dropdown.Item
                            eventKey={LANGUAGE.RO}
                            onSelect={handleSelectLanguage}
                        >
                            <ReactCountryFlag countryCode="RO" svg />{" "}
                            {LANGUAGE.RO}
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}

export default withRouter(NavBar)