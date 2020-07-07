import React from "react"

import { LANGUAGE } from "../../utils/constants"

export default {
    [LANGUAGE.EN]: {
        PAYMENT_TYPES: {
            revolut: {
                title: 'Revolut',
                text: () => <> 
                    Link: <a href="https://pay.revolut.com/profile/vladmikga">https://pay.revolut.com/profile/vladmikga</a><br/>
                    Tel: <a href="tel:+40 725 582 647">+40 725 582 647</a>
                </>
            },
            ing: {
                title: 'ING Bank',
                text: () => <> 
                    IBAN: RO76INGB0000999905950687 <br/> 
                    Account Holder: Vlad Mihai Savin  <br/>
                    Bank: INGB CENTRALA <br/>
                    Coin: RON <br/>
                    SWIFT: INGBROBU <br/>
                    BIC: INGB
                </>
            }
        },
        subHeading: () => <>
            Do you wish to send us a gift, to help us get started on our journey,
            but you can't reach the events?
        </>,
        ways: () => <>
            We have two ways available:
        </>,
        thanks: () => <>
            Thanks!
        </>,
        close: () => <>
            Close
        </>
    },
    [LANGUAGE.RO]: {
        PAYMENT_TYPES: {
            revolut: {
                title: 'Revolut',
                text: () => <> 
                    Link: <a href="https://pay.revolut.com/profile/vladmikga">https://pay.revolut.com/profile/vladmikga</a><br/>
                    Tel: <a href="tel:+40 725 582 647">+40 725 582 647</a>
                </>
            },
            ing: {
                title: 'ING Bank',
                text: () => <> 
                    IBAN: RO76INGB0000999905950687 <br/>
                    Titular: Vlad Mihai Savin  <br/>
                    Banca: INGB CENTRALA <br/>
                    Moneda: RON <br/>
                    SWIFT: INGBROBU <br/>
                    BIC: INGB
                </>
            }
        },
        subHeading: () => <>
            Doriți să ne transmiteți felicitările dumneavoastră, pentru a ne oferi un suport la început de drum,
            dar nu puteți ajunge la festivități?
        </>,
        ways: () => <>
            Avem disponibile două modalități:
        </>,
        thanks: () => <>
            Vă mulțumim!
        </>,
        close: () => <>
            Închide
        </>
    }
}
