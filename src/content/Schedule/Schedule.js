import React from "react"

import { LANGUAGE } from "../../utils/constants"

export default {
    [LANGUAGE.EN]: [
        {
            Title: () => <>Civil Ceremony</>,
            Date: () => <>Friday, September 4, 2020</>,
            Time: () => <>2:15 PM to 2:30 PM</>,
            Location: () => <>Country Registry Office</>,
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
        {
            Title: () => <>Drinks</>,
            Date: () => <>Friday, September 4, 2020</>,
            Time: () => <>3:00 PM to 8:00 PM</>,
            Location: () => <>La Castel</>,
            locationLink: "https://lacastel.ro/",
            Address: () => (
                <>
                    <p>Aleea Mihail Sadoveanu nr. 54, Iași 700489</p>
                </>
            ),
            mapLink:
                "https://goo.gl/maps/NjWtpf1fPC8evMjr7",
            Details: () => (
                <>
                    <p>
                        The Civil Ceremony is succeded by a few dishes and refreshments served at a remote restaurant with relaxing gardens.
                    </p>
                </>
            )
        },
        {
            Title: () => <>Holy Ceremony</>,
            Date: () => <>Saturday, September 5, 2020</>,
            Time: () => <>4:00 PM to 5:00 PM</>,
            Location: () => <>Assumption of Mary Church</>,
            locationLink: "http://amdis.ro/",
            Address: () => (
                <>
                    <p>Bulevardul Ștefan cel Mare și Sfânt 26, Iași 700064</p>
                </>
            ),
            mapLink:
                "https://goo.gl/maps/DkC9qoyGfAMLSctC8",
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
            Date: () => <>Saturday, September 5, 2020</>,
            Time: () => <>8:00 PM to 6:00 AM (+1)</>,
            Location: () => <>Congres Hall, Rossini, Palas, Iasi</>,
            locationLink: "https://congresshall.ro/rossini/index.php",
            Address: () => (
                <>
                    <p>Palas, Iași 700028</p>
                </>
            ),
            mapLink:
                "https://goo.gl/maps/KJxHGoh7TrYNUcZU8",
            Details: () => (
                <>
                    <p>
                        The party will take place in the Rossini room, which is part of the Palas Congress Hall.
                        Let's have some fun!
                    </p>
                </>
            )
        },
        {
            Title: () => <>After Party</>,
            Date: () => <>Sunday, September 6, 2020</>,
            Time: () => <>12:00 PM to 3:00 PM</>,
            Location: () => <>Ramada</>,
            locationLink: "http://www.ramadaiasi.ro/en/restaurant/",
            Address: () => (
                <>
                    <p>Strada Grigore Ureche nr. 27, Iași 700044</p>
                </>
            ),
            mapLink:
                "https://goo.gl/maps/kW8fzSqoXgRwzrxS7",
            Details: () => (
                <>
                    <p>
                        The after party will take place in the restaurant of the Ramada Hotel.
                        Let's drink some hot beverages and treat ourselves, after an awesome wedding!
                    </p>
                </>
            )
        }
    ],
    [LANGUAGE.RO]: [
        {
            Title: () => <>Cununia Civilă</>,
            Date: () => <>Vineri, 4 Septembrie, 2020</>,
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
                        Cununia civilă va fi scurtă, înainte și după care vor fi scurte sesiuni de fotografii.
                    </p>
                </>
            )
        },
        {
            Title: () => <>Festivitate</>,
            Date: () => <>Vineri, 4 Septembrie, 2020</>,
            Time: () => <>de la 3:00 PM până la 8:00 PM</>,
            Location: () => <>La Castel</>,
            locationLink: "https://lacastel.ro/",
            Address: () => (
                <>
                    <p>Aleea Mihail Sadoveanu nr. 54, Iași 700489</p>
                </>
            ),
            mapLink:
                "https://goo.gl/maps/NjWtpf1fPC8evMjr7",
            Details: () => (
                <>
                    <p>
                        Cununia civilă este urmată de o serie de antreuri și băuturi, servite la un restaurant cu grădini relaxante, ferite de aglomerația urbană.
                    </p>
                </>
            ),
        },
        {
            Title: () => <>Cununia religioasă</>,
            Date: () => <>Sâmbătă, 5 Septembrie, 2020</>,
            Time: () => <>de la 4:00 PM până la 5:00 PM</>,
            Location: () => <>Catedrala Romano-Catolică Adormirea Maicii Domnului</>,
            locationLink: "http://amdis.ro/",
            Address: () => (
                <>
                    <p>Bulevardul Ștefan cel Mare și Sfânt 26, Iași 700064</p>
                </>
            ),
            mapLink:
                "https://goo.gl/maps/DkC9qoyGfAMLSctC8",
            Details: () => (
                <>
                    <p>
                        Cununia religioasă va avea loc la Catedrala Romano-Catolică, și va fi urmată de o scurtă sesiune de fotografie.
                    </p>
                </>
            )
        },
        {
            Title: () => <>Petrecere</>,
            Date: () => <>Sâmbătă, 5 Septembrie, 2020</>,
            Time: () => <>de la 8:00 PM până la 6:00 AM (+1)</>,
            Location: () => <>Congres Hall, Rossini, Palas, Iasi</>,
            locationLink: "https://congresshall.ro/rossini/index.php",
            Address: () => (
                <>
                    <p>Palas, Iași 700028</p>
                </>
            ),
            mapLink:
                "https://goo.gl/maps/KJxHGoh7TrYNUcZU8",
            Details: () => (
                <>
                    <p>
                        Petrecerea va avea loc la sala Rossini, parte a Palas Congress Hall.
                        Hai să ne distrăm!
                    </p>
                </>
            )
        },
        {
            Title: () => <>Ciorba de potroace</>,
            Date: () => <>Duminică, 6 Septembrie, 2020</>,
            Time: () => <>12:00 PM to 3:00 PM</>,
            Location: () => <>Ramada</>,
            locationLink: "http://www.ramadaiasi.ro/en/restaurant/",
            Address: () => (
                <>
                    <p>Strada Grigore Ureche nr. 27, Iași 700044</p>
                </>
            ),
            mapLink:
                "https://goo.gl/maps/kW8fzSqoXgRwzrxS7",
            Details: () => (
                <>
                    <p>
                        Ciorba de potroace va fi servită la restaurantul hotelului Ramada.
                    </p>
                </>
            )
        }
    ],
}
