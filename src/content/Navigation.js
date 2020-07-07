import React from "react"

import { LANGUAGE } from "../utils/constants"

export default {
    [LANGUAGE.EN]: {
        schedule: () => <span>Schedule</span>,
        travel: () => <span>Travel</span>,
        invitation: () => <span>Invitation</span>,
        gift: () => <span>Gift</span>,
        gallery: () => <span>Gallery</span>,
        rsvp: () => <span>RSVP</span>,
        signOut: () => <span>Sign Out</span>,
        signIn: () => <span>Sign Up/In</span>,
        manageRsvp: () => <span>Manage RSVP</span>
    },
    [LANGUAGE.RO]: {
        schedule: () => <span>Program</span>,
        travel: () => <span>Cum ajung?</span>,
        invitation: () => <span>Invitație</span>,
        gift: () => <span>Felicitări</span>,
        gallery: () => <span>Galerie</span>,
        rsvp: () => <span>Confirmare</span>,
        signOut: () => <span>Ieși din cont</span>,
        signIn: () => <span>Creare / Intrare în cont</span>,
        manageRsvp: () => <span>Editează confirmare</span>
    }
}
