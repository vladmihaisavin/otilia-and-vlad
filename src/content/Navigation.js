import React from "react"

import { LANGUAGE } from "../utils/constants"

export default {
    [LANGUAGE.EN]: {
        schedule: () => <span>Schedule</span>,
        travel: () => <span>Travel</span>,
        thingsToDo: () => <span>Things to Do</span>,
        faq: () => <span>FAQs</span>,
        rsvp: () => <span>RSVP</span>,
        signOut: () => <span>Sign Out</span>,
        signIn: () => <span>Sign In</span>,
        manageRsvp: () => <span>Manage RSVP</span>
    },
    [LANGUAGE.RO]: {
        schedule: () => <span>Program</span>,
        travel: () => <span>Drum</span>,
        thingsToDo: () => <span>De făcut</span>,
        faq: () => <span>Întrebări</span>,
        rsvp: () => <span>Confirmare</span>,
        signOut: () => <span>Ieși din cont</span>,
        signIn: () => <span>Intră în cont</span>,
        manageRsvp: () => <span>Editează confirmare</span>
    }
}
