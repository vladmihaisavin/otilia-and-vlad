import React from "react"

import { LANGUAGE } from "../../utils/constants"

export default {
    [LANGUAGE.EN]: [
        {
            Title: () => <>Civil Ceremony</>,
            Date: () => <>Friday, August 21, 2020</>,
            Time: () => <>2:15 PM to 2:30 PM</>,
            Location: () => <>County Registry Office</>,
            locationLink:
                "https://goo.gl/maps/bBE9LtEqQS8JGcLaA",
            Address: () => (
                <>
                    <p>Strada Vasile Alecsandri nr. 8, Iași 700054</p>
                </>
            ),
            mapLink:
                "https://goo.gl/maps/bBE9LtEqQS8JGcLaA",
            Details: () => (
                <>
                    <p>
                        The Civil Ceremony will be short, preceded and succeeded by short photo sessions.
                    </p>
                </>
            )
        },
        // {
        //     Title: () => <>Drinks</>,
        //     Date: () => <>Friday, August 21, 2020</>,
        //     Time: () => <>3:00 PM to 6:00 PM</>,
        //     Location: () => <>La Castel</>,
        //     locationLink: "https://lacastel.ro/",
        //     Address: () => (
        //         <>
        //             <p>Aleea Mihail Sadoveanu nr. 54, Iași 700489</p>
        //         </>
        //     ),
        //     mapLink:
        //         "https://goo.gl/maps/NjWtpf1fPC8evMjr7",
        //     Details: () => (
        //         <>
        //             <p>
        //                 The Civil Ceremony is succeded by a few dishes and refreshments served at a remote restaurant with relaxing gardens.
        //             </p>
        //         </>
        //     )
        // },
        {
            Title: () => <>Holy Ceremony</>,
            Date: () => <>Saturday, August 22, 2020</>,
            Time: () => <>12:00 PM to 13:00 PM</>,
            Location: () => <>Our Lady Queen of Iassy Cathedral</>,
            locationLink: "http://amdis.ro/",
            Address: () => (
                <>
                    <p>Bulevardul Ștefan cel Mare și Sfânt 26, Iași 700064</p>
                </>
            ),
            mapLink:
                "https://goo.gl/maps/rALs8DQgGmaos92y6",
            Details: () => (
                <>
                    <p>
                        The Holy Ceremony will take place at the Catholic Cathedral, and will be succeeded by a short photo session.
                    </p>
                </>
            )
        },
        {
            Title: () => <>Party</>,
            Date: () => <>Saturday, August 22, 2020</>,
            Time: () => <>15:00 PM to 23:00 PM (+1)</>,
            Location: () => <>Liria Events, Aroneanu Lake, Iasi</>,
            locationLink: "https://liria-events.ro",
            Address: () => (
                <>
                    <p>Lacul Aroneanu, Iași 707020</p>
                </>
            ),
            mapLink:
                "https://goo.gl/maps/3TiohUK9n19q6piv5",
            Details: () => (
                <>
                    <p>
                        The party will take place near the Aroneanu Lake, at the Liria Events Hall.
                        Let's have some fun!
                    </p>
                </>
            )
        },
        // {
        //     Title: () => <>After Party</>,
        //     Date: () => <>Sunday, August 23, 2020</>,
        //     Time: () => <>11:00 AM to 3:00 PM</>,
        //     Location: () => <>Ramada</>,
        //     locationLink: "http://www.ramadaiasi.ro/en/restaurant/",
        //     Address: () => (
        //         <>
        //             <p>Strada Grigore Ureche nr. 27, Iași 700044</p>
        //         </>
        //     ),
        //     mapLink:
        //         "https://goo.gl/maps/kW8fzSqoXgRwzrxS7",
        //     Details: () => (
        //         <>
        //             <p>
        //                 The after party will take place in the restaurant of the Ramada Hotel.
        //                 Let's drink some hot beverages and treat ourselves, after an awesome wedding!
        //             </p>
        //         </>
        //     )
        // }
    ],
    [LANGUAGE.RO]: [
        {
            Title: () => <>Cununia Civilă</>,
            Date: () => <>Vineri, 21 August, 2020</>,
            Time: () => <>de la 2:15 PM până la 2:30 PM</>,
            Location: () => <>Casa căsătoriilor Iași</>,
            locationLink:
                "https://goo.gl/maps/bBE9LtEqQS8JGcLaA",
            Address: () => (
                <>
                    <p>Strada Vasile Alecsandri nr. 8, Iași 700054</p>
                </>
            ),
            mapLink:
                "https://goo.gl/maps/bBE9LtEqQS8JGcLaA",
            Details: () => (
                <>
                    <p>
                        Cununia civilă va dura 15 minute. Înainte și după aceasta vor fi scurte sesiuni foto.
                    </p>
                </>
            )
        },
        // {
        //     Title: () => <>Festivitate</>,
        //     Date: () => <>Vineri, 21 august, 2020</>,
        //     Time: () => <>de la 3:00 PM până la 6:00 PM</>,
        //     Location: () => <>La Castel</>,
        //     locationLink: "https://lacastel.ro/",
        //     Address: () => (
        //         <>
        //             <p>Aleea Mihail Sadoveanu nr. 54, Iași 700489</p>
        //         </>
        //     ),
        //     mapLink:
        //         "https://goo.gl/maps/NjWtpf1fPC8evMjr7",
        //     Details: () => (
        //         <>
        //             <p>
        //                 Cununia civilă este urmată de o serie de antreuri și băuturi, servite la un restaurant cu grădini relaxante, ferite de aglomerația urbană.
        //             </p>
        //         </>
        //     ),
        // },
        {
            Title: () => <>Cununia religioasă</>,
            Date: () => <>Sâmbătă, 22 August, 2020</>,
            Time: () => <>de la 12:00 PM până la 13:00 PM</>,
            Location: () => <>{`Catedrala "Sfânta Fecioară Maria, Regină"`}</>,
            locationLink: "http://amdis.ro/",
            Address: () => (
                <>
                    <p>Bulevardul Ștefan cel Mare și Sfânt 26, Iași 700064</p>
                </>
            ),
            mapLink:
                "https://goo.gl/maps/rALs8DQgGmaos92y6",
            Details: () => (
                <>
                    <p>
                        Cununia religioasă se va celebra la Catedrala Romano-Catolică și va fi urmată de o scurtă sesiune foto.
                    </p>
                </>
            )
        },
        {
            Title: () => <>Petrecere</>,
            Date: () => <>Sâmbătă, 22 August, 2020</>,
            Time: () => <>de la 15:00 PM până la 23:00 PM (+1)</>,
            Location: () => <>Liria Events, Lacul Aroneanu, Iasi</>,
            locationLink: "https://liria-events.ro",
            Address: () => (
                <>
                    <p>Lacul Aroneanu, Iași 707020</p>
                </>
            ),
            mapLink:
                "https://goo.gl/maps/3TiohUK9n19q6piv5",
            Details: () => (
                <>
                    <p>
                        Petrecerea festivă va avea loc lângă Lacul Aroneanu, la sala de evenimente Liria.
                        Vă așteptăm să ne distrăm împreună!
                    </p>
                </>
            )
        },
        // {
        //     Title: () => <>Ciorba de potroace</>,
        //     Date: () => <>Duminică, 23 August, 2020</>,
        //     Time: () => <>11:00 AM to 3:00 PM</>,
        //     Location: () => <>Ramada</>,
        //     locationLink: "http://www.ramadaiasi.ro/en/restaurant/",
        //     Address: () => (
        //         <>
        //             <p>Strada Grigore Ureche nr. 27, Iași 700044</p>
        //         </>
        //     ),
        //     mapLink:
        //         "https://goo.gl/maps/kW8fzSqoXgRwzrxS7",
        //     Details: () => (
        //         <>
        //             <p>
        //                 Ciorba de potroace va fi servită la restaurantul hotelului Ramada.
        //             </p>
        //         </>
        //     )
        // }
    ],
}
