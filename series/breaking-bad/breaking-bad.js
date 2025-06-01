let watchHistory = JSON.parse(localStorage.getItem('witcherProgress')) || {
    episodes: {},
    lastWatched: null
};

const episodes = {
    1: {
        season: 1,
        episodes: [
            {
                episodeNumber: 1,
                title: "Pilot",
                duration: "59m",
                description: "When an unassuming high school chemistry teacher discovers he has a rare form of lung cancer, he decides to team up with a former student and create a top of the line crystal meth in a used RV, to provide for his family once he is gone.",
                image: "https://image.tmdb.org/t/p/original/ydlY3iPfeOAvu8gVqrxPoMvzNCn.jpg",
                videoUrl: "https://short.icu/NcNDYkKDi"
            },
            {
                episodeNumber: 2,
                title: "Cat's in the Bag...",
                duration: "49m",
                description: "Walt and Jesse attempt to tie up loose ends. The desperate situation gets more complicated with the flip of a coin. Walt's wife, Skyler, becomes suspicious of Walt's strange behavior.",
                image: "https://image.tmdb.org/t/p/original/xwQRVskT9IK7ktbrrWc2xoT4nPv.jpg",
                videoUrl: "https://short.icu/2lNwm58-6"
            },
            {
                episodeNumber: 3,
                title: "...And the Bag's in the River",
                duration: "49m",
                description: "Walter fights with Jesse over his drug use, causing him to leave Walter alone with their captive, Krazy-8. Meanwhile, Hank has a scared straight moment with Walter Jr. after his aunt discovers he has been smoking pot. Also, Skylar is upset when Walter stays away from home.",
                image: "https://image.tmdb.org/t/p/original/n8Dah3Tc1vlc4i7bQ9zYPWaFO0e.jpg",
                videoUrl: "https://short.icu/4JTDOe9HI"
            },
            {
                episodeNumber: 4,
                title: "Cancer Man",
                duration: "49m",
                description: "Walter finally tells his family that he has been stricken with cancer. Meanwhile, the DEA believes Albuquerque has a new, big time player to worry about. Meanwhile, a worthy recipient is the target of a depressed Walter's anger, and Jesse makes a surprise visit to his parents home.",
                image: "https://image.tmdb.org/t/p/original/2UbRgW6apE4XPzhHPA726wUFyaR.jpg",
                videoUrl: "https://short.icu/T_NoiDzxQ"
            },
            {
                episodeNumber: 5,
                title: "Gray Matter",
                duration: "49m",
                description: "Walter and Skyler attend a former colleague's party. Jesse tries to free himself from the drugs, while Skyler organizes an intervention.",
                image: "https://image.tmdb.org/t/p/original/82G3wZgEvZLKcte6yoZJahUWBtx.jpg",
                videoUrl: "https://short.icu/35wP0_wNA"
            },
            {
                episodeNumber: 6,
                title: "Crazy Handful of Nothin'",
                duration: "49m",
                description: "The side effects of chemo begin to plague Walt. Meanwhile, the DEA rounds up suspected dealers.",
                image: "https://image.tmdb.org/t/p/original/rCCLuycNPL30W3BtuB8HafxEMYz.jpg",
                videoUrl: "https://short.icu/MeKPpyySr"
            },
            {
                episodeNumber: 7,
                title: "A No Rough Stuff Type Deal",
                duration: "48m",
                description: "Walter accepts his new identity as a drug dealer after a PTA meeting. Elsewhere, Jesse decides to put his aunt's house on the market and Skyler is the recipient of a baby shower.",
                image: "https://image.tmdb.org/t/p/original/1dgFAsajUpUT7DLXgAxHb9GyXHH.jpg",
                videoUrl: "https://short.icu/e8nQNQLDN"
            }
        ]
    },
    2: {
        season: 2,
        episodes: [
            {
                episodeNumber: 1,
                title: "Seven Thirty-Seven",
                duration: "48m",
                description: "Walt and Jesse are vividly reminded of Tuco’s volatile nature, and try to figure a way out of their business partnership. Hank attempts to mend fences between the estranged Marie and Skyler.",
                image: "https://image.tmdb.org/t/p/original/6vMRIwd2WaGsRwR0z3C9BFEth6n.jpg",
                videoUrl: "https://short.icu/559JpEQcv"
            },
            {
                episodeNumber: 2,
                title: "Grilled",
                duration: "48m",
                description: "Walt and Jesse find themselves in close quarters with an unhinged Tuco. Marie and Hank comfort Skyler, who is distraught over Walt’s disappearance. Hank pays a visit to Mrs. Pinkman on some not-so-official business.",
                image: "https://image.tmdb.org/t/p/original/43mpP5yxIyBsDeFOMb0WvUh0I4a.jpg",
                videoUrl: "https://short.icu/HrTLcX2kB"
            },
            {
                episodeNumber: 3,
                title: "Bit by a Dead Bee",
                duration: "47m",
                description: "Walt and Jesse become short on cash when they try to cover their tracks. Meanwhile, the DEA has a lead that could them straight to Walt and Jesse.",
                image: "https://image.tmdb.org/t/p/original/p69fPkpnnxUmevhupJiDeYfQxxl.jpg",
                videoUrl: "https://short.icu/1Jcg4jgJu"
            },
            {
                episodeNumber: 4,
                title: "Down",
                duration: "48m",
                description: "Walt attempts to reconnect with his family, while Jesse struggles to rebuild his life.",
                image: "https://image.tmdb.org/t/p/original/9xi18yhtCLrrJ2plZjXgfGqeTjU.jpg",
                videoUrl: "https://short.icu/FZ8lWkYFt"
            },
            {
                episodeNumber: 5,
                title: "Breakage",
                duration: "48m",
                description: "Hank suffers from the aftermath of his encounter with Tuco. Meanwhile, Jesse hires a crew to get their product out on the streets.",
                image: "https://image.tmdb.org/t/p/original/k3qcDOGo6C39EsUBYdS3RsT3TkI.jpg",
                videoUrl: "https://short.icu/4dOoGZ0SM"
            },
            {
                episodeNumber: 6,
                title: "Peekaboo",
                duration: "48m",
                description: "Walt's secret is in jeopardy when Skyler thanks Gretchen for paying for his treatment.",
                image: "https://image.tmdb.org/t/p/original/tfCuh20gNHGGF6A1te3NmiqML6D.jpg",
                videoUrl: "https://short.icu/LPZqbZn-C"
            },
            {
                episodeNumber: 7,
                title: "Negro y Azul",
                duration: "48m",
                description: "Jesse and Walt discuss expanding into new territories; Hank struggles to fit in; Skyler pursues a new job opportunity; Jesse gets to know his landlord.",
                image: "https://image.tmdb.org/t/p/original/1IOnhCCeru1BZUPeppu7tMmtxvL.jpg",
                videoUrl: "https://short.icu/Oy_WG9qD4"
            },
            {
                episodeNumber: 8,
                title: "Better Call Saul",
                duration: "48m",
                description: "Walt and Jesse seek advice from a shady attorney when Badger gets in trouble with the law; the DEA believes they have caught up with 'Heisenberg' ; Hank returns.",
                image: "https://image.tmdb.org/t/p/original/KmFdF23FtbPwwz3FJF2T885r2Z.jpg",
                videoUrl: "https://short.icu/Xf81ujAy-q"
            },
            {
                episodeNumber: 9,
                title: "4 Days Out",
                duration: "48m",
                description: "Walt and his family wait for news after he undergoes a PET-CT scan. Walt follows Saul's advice; Jesse's relationship with Jane is put on hold when he and Walt head to the desert for a marathon of cooking.",
                image: "https://image.tmdb.org/t/p/original/etUWlVbdQ7PzbGeUOBNpmFRm1Z9.jpg",
                videoUrl: "https://short.icu/Gym-j-Azm"
            },
            {
                episodeNumber: 10,
                title: "Over",
                duration: "48m",
                description: "Walt and Hank get into a heated argument at a party. Skyler opens up to her boss. Jane hides her relationship with Jesse from her father.",
                image: "https://image.tmdb.org/t/p/original/wGobAJ0h54788xCMkRKaJTQMMtq.jpg",
                videoUrl: "https://short.icu/ux5mDs5l7"
            },
            {
                episodeNumber: 11,
                title: "Mandala",
                duration: "48m",
                description: "As the end of her pregnancy finds Skyler conflicted about her feelings, a dealer's death forces Walt to look for somewhere to unload a load of meth.",
                image: "https://image.tmdb.org/t/p/original/yeQAQsV4WPTmKWTyuDhF3DAna1x.jpg",
                videoUrl: "https://short.icu/y_6kyfE4-"
            },
            {
                episodeNumber: 12,
                title: "Phoenix",
                duration: "48",
                description: "As Walt explores money laundering options, he and Jesse spar over the profits from their latest deal. Jesse and Jane clash with her father. Walt makes a fatal decision.",
                image: "https://image.tmdb.org/t/p/original/3K3n95wsQ7tl00zQmA4u4JScxv9.jpg",
                videoUrl: "https://short.icu/Di2_bh8ho"
            },
            {
                episodeNumber: 13,
                title: "ABQ",
                duration: "48m",
                description: "Skyler confronts Walt about his secrecy; Jesse falls apart; and Jane's grief-stricken father takes action that results in further tragedy.",
                image: "https://image.tmdb.org/t/p/original/xdSWJjptnLAvFnh5Is6iJPlH1ds.jpg",
                videoUrl: "https://short.icu/BgZm4bSBl"
            }
        ]
    },
    3: {
        season: 3,
        episodes: [
            {
                episodeNumber: 1,
                title: "No Más",
                duration: "48m",
                description: "Walt faces a new threat, on a new front and deals with an increasingly angry Skyler, who must consider what to do next with her life and the kids. Meanwhile, Jesse comes face-to-face with some startling self-revelations.",
                image: "https://image.tmdb.org/t/p/original/g4taqxGFx9z8ovHhiaa2jvQFd0Z.jpg",
                videoUrl: "https://short.icu/ByWT8k9jX"
            },
            {
                episodeNumber: 2,
                title: "Caballo sin Nombre",
                duration: "48m",
                description: "Despite ever-increasing tension between Walt and Skyler, he pulls out all the stops in an effort to reconcile with the family. Elsewhere, Saul is instrumental in getting Jesse involved in a most-unusual investment opportunity.",
                image: "https://image.tmdb.org/t/p/original/mt9HtDly0I4vmxs5INljWt311IL.jpg",
                videoUrl: "https://short.icu/bex7-HYCy"
            },
            {
                episodeNumber: 3,
                title: "I.F.T.",
                duration: "48m",
                description: "Walt ignores Skyler's demands, furthering the rift between them and pushing her to break bad. Still suffering from panic and anxiety attacks, Hank crosses a line at work.",
                image: "https://image.tmdb.org/t/p/original/dYAazloiB9jdQspyMQC5Apx4KnA.jpg",
                videoUrl: "https://short.icu/XwhNbDH-z"
            },
            {
                episodeNumber: 4,
                title: "Green Light",
                duration: "48m",
                description: "Walt loses control as he reacts to Skyler's news, endangering his job and relationships with Saul and Jesse. Hank throws himself into his blue meth investigation. Jesse enacts a new plan.",
                image: "https://image.tmdb.org/t/p/original/1Se5PpvIgUey9MgXmrKkgO8HVye.jpg",
                videoUrl: "https://short.icu/G227h8jnM"
            },
            {
                episodeNumber: 5,
                title: "Más",
                duration: "48m",
                description: "Gus increases his efforts to lure Walt back into business, forcing a rift between Walt and Jesse. Skyler doubts her new relationship. Marie confides in Skyler about her concern for Hank's well-being.",
                image: "https://image.tmdb.org/t/p/original/m2cipfAKEdLR4MIZKA3EiOcTYiZ.jpg",
                videoUrl: "https://short.icu/AlEQRu7ft"
            },
            {
                episodeNumber: 6,
                title: "Sunset",
                duration: "48m",
                description: "Walt settles into his new surroundings; Walt, Jr. wants answers about his parents' relationship; Hank's investigation causes problems for Walt and Jesse.",
                image: "https://image.tmdb.org/t/p/original/sl5zRr0u0kYcIyCdQjOTsexq4bL.jpg",
                videoUrl: "https://short.icu/R6aHxwY5r"
            },
            {
                episodeNumber: 7,
                title: "One Minute",
                duration: "48m",
                description: "Hank's increasing volatility forces a confrontation with Jesse and trouble at work. Skyler pressures Walt to make a deal. Gus' actions have severe consequences.",
                image: "https://image.tmdb.org/t/p/original/4yyVAkAQhzc5URhJJiy21biH3FJ.jpg",
                videoUrl: "https://short.icu/znl3lu-Dx"
            },
            {
                episodeNumber: 8,
                title: "I See You",
                duration: "48m",
                description: "The family waits for news about Hank. While Jesse covers at the lab, Walt attempts to placate Gus. After witnessing a disturbing outburst, Walt worries he and his family are in danger.",
                image: "https://image.tmdb.org/t/p/original/edBDR59bzVWdMtCawimRzOMgrlW.jpg",
                videoUrl: "https://short.icu/QTm5NNTXg"
            },
            {
                episodeNumber: 9,
                title: "Kafkaesque",
                duration: "48m",
                description: "As Hank's hospital bills stack up, Skyler hatches a plan. Walt and Gus come to a better understanding. Jesse, looking for more independence, pursues a new opportunity.",
                image: "https://image.tmdb.org/t/p/original/ztG7AnGy4YKs1vxLbpK9euPwjaK.jpg",
                videoUrl: "https://short.icu/OaCxF9UQs"
            },
            {
                episodeNumber: 10,
                title: "Fly",
                duration: "48m",
                description: "Walt becomes obsessed with a contaminant in the lab and refuses to finish the cook until it is eliminated. A frustrated Jesse attempts to get Walt back on track.",
                image: "https://image.tmdb.org/t/p/original/vpXc5zctIc2N0PQif3fG0TGypaX.jpg",
                videoUrl: "https://short.icu/Ec6n-av7j"
            },
            {
                episodeNumber: 11,
                title: "Abiquiu",
                duration: "48m",
                description: "Skyler gets involved with Walt's business. Hank struggles with his recovery. Jesse makes a startling discovery after meeting a girl at group therapy.",
                image: "https://image.tmdb.org/t/p/original/llw7fwOmOMs6OSqwK96XrPPQZD3.jpg",
                videoUrl: "https://short.icu/Xw29WM2Cx"
            },
            {
                episodeNumber: 12,
                title: "Half Measures",
                duration: "48m",
                description: "Against Walt's advice, Jesse lashes out. Fearing for Jesse's safety, Walt takes drastic action to intervene and tragic event leads to a shocking confrontation.",
                image: "https://image.tmdb.org/t/p/original/sX4gKwbbtjUjhAjyc0qdkZrM2A3.jpg",
                videoUrl: "https://short.icu/a6lUZ9TjL"
            },
            {
                episodeNumber: 13,
                title: "Full Measure",
                duration: "48m",
                description: "With Jesse on the run and Mike in hot pursuit, Walt negotiates a bargain with Gus and concocts a disturbing plan to provide for his and Jesse's safety.",
                image: "https://image.tmdb.org/t/p/original/mDUs18asTVVfqd56scRQ7W9r781.jpg",
                videoUrl: "https://short.icu/aOhCmto6z"
            }
        ]
    },
    4: {
        season: 4,
        episodes: [
            {
                episodeNumber: 1,
                title: "Box Cutter",
                duration: "48m",
                description: "Walt and Jesse face the deadly consequences of their actions. Skyler deals with a puzzling disappearance, as Marie struggles to help Hank with his recovery.",
                image: "https://image.tmdb.org/t/p/original/2g6dLvOrLE7tpJatonCchLDkDyF.jpg",
                videoUrl: "https://short.icu/7_lu0tnFL4"
            },
            {
                episodeNumber: 2,
                title: "Thirty-Eight Snub",
                duration: "46m",
                description: "Walt attempts to form a new alliance as he plans his next move. Skyler pushes Walt towards a business opportunity, in hopes of protecting the family.",
                image: "https://image.tmdb.org/t/p/original/ra0R3q9jEOObo6gspjYcbqPmIM.jpg",
                videoUrl: "https://short.icu/v-bHx5tHE"
            },
            {
                episodeNumber: 3,
                title: "Open House",
                duration: "47m",
                description: "Events spiral out of control at Jesse's place. Skyler reluctantly asks for Saul's help. Marie returns to an old pastime and a friend asks Hank for help.",
                image: "https://image.tmdb.org/t/p/original/5zQ8TlD9a3TxrhlEEt3TxeFOQh2.jpg",
                videoUrl: "https://short.icu/-1VQE8uB9"
            },
            {
                episodeNumber: 4,
                title: "Bullet Points",
                duration: "46m",
                description: "The Cartel takes steps to gain the upper hand. Walt and Skyler share an embarrassing secret with the rest of the family. Jesse's activities draw unwanted attention.",
                image: "https://image.tmdb.org/t/p/original/gzHp77NjrkDOu9sgkLB5PYmwArK.jpg",
                videoUrl: "https://short.icu/dOhX30OoI"
            },
            {
                episodeNumber: 5,
                title: "Shotgun",
                duration: "48m",
                description: "When Jesse goes missing, Walt fears the worst. Skyler has an unlikely reunion. Hank shares some bad news with Detective Tim Roberts.",
                image: "https://image.tmdb.org/t/p/original/cIpk1YHRcySKOET8qUfs2JC3QAy.jpg",
                videoUrl: "https://short.icu/V5Go-v3nfY"
            },
            {
                episodeNumber: 6,
                title: "Cornered",
                duration: "48m",
                description: "A frustrated Walt gambles on a risky new plan. Skyler's business venture hits a snag. Hank recruits Walter, Jr. for an unusual outing.",
                image: "https://image.tmdb.org/t/p/original/3tuFJVKzlWRqstoAOxwWF6lPzJY.jpg",
                videoUrl: "https://short.icu/aAWaztgNZ"
            },
            {
                episodeNumber: 7,
                title: "Problem Dog",
                duration: "48m",
                description: "A frustrated Walt gambles on a risky new plan. Skyler's business venture hits a snag. Hank recruits Walter, Jr. for an unusual outing.",
                image: "https://image.tmdb.org/t/p/original/gXYKZO4nTsDrAc2AjJOhjJkwu1V.jpg",
                videoUrl: "https://short.icu/bYXRmEZ1i"
            },
            {
                episodeNumber: 8,
                title: "Hermanos",
                duration: "48m",
                description: "Skyler develops an unusual solution to her money troubles. Hank enlists Walt to investigate a theory. Walt's impatience with Jesse grows.",
                image: "https://image.tmdb.org/t/p/original/jwGeSa4lw93UqvxoII5kb4nko1b.jpg",
                videoUrl: "https://short.icu/3HUhPnKOX"
            },
            {
                episodeNumber: 9,
                title: "Bug",
                duration: "48m",
                description: "Skyler's past mistakes come back to haunt her. Gus takes action to thwart his rivals. Jesse seeks Walt's help, with mixed results.",
                image: "https://image.tmdb.org/t/p/original/bIU8FJxe1yXvMm7yREwj138Z6x8.jpg",
                videoUrl: "https://short.icu/lAqyKeq9K"
            },
            {
                episodeNumber: 10,
                title: "Salud",
                duration: "48m",
                description: "Walt's family worries when he doesn't turn up for Walter, Jr.'s 16th birthday. Jesse is forced to put his lab skills to the test without Mr. White's help.",
                image: "https://image.tmdb.org/t/p/original/dBrs0Npmn76g81yel2mjK7mTaOj.jpg",
                videoUrl: "https://short.icu/arRwB44_h"
            },
            {
                episodeNumber: 11,
                title: "Crawl Space",
                duration: "47m",
                description: "Walt takes drastic action to protect his secret and Gus. Skyler's efforts to solve Ted's financial problems hit a wall.",
                image: "https://image.tmdb.org/t/p/original/xMR8o7N4ZBacim1druJ6PanTlPQ.jpg",
                videoUrl: "https://short.icu/6D795zh5p"
            },
            {
                episodeNumber: 12,
                title: "End Times",
                duration: "46m",
                description: "Hank pushes Gomez to pursue one last lead, while Walt struggles to protect the family. Jesse gets alarming news and rushes to meet with Mr. White.",
                image: "https://image.tmdb.org/t/p/original/ffIjlpJndsel3FkPMpHCnpJ71lw.jpg",
                videoUrl: "https://short.icu/fk-srTdEq"
            },
            {
                episodeNumber: 13,
                title: "Face Off",
                duration: "51m",
                description: "Walt and Jesse team up to take on Gus. With Saul's help, Walt finds an unexpected ally.",
                image: "https://image.tmdb.org/t/p/original/Apl61kYZF2zQlUMh13t8zmUD7Vr.jpg",
                videoUrl: "https://short.icu/TKQGiVqUO"
            }
        ]
    },
    5: {
        season: 5,
        episodes: [
            {
                episodeNumber: 1,
                title: "Live Free or Die",
                duration: "43m",
                description: "As Walt deals with the aftermath of the Casa Tranquila explosion, Hank works to wrap up his investigation of Gus' empire.",
                image: "https://image.tmdb.org/t/p/original/uShB5dWoA3xIivZ9jvwWnGCVvt4.jpg",
                videoUrl: "https://short.icu/0VHBrFT7r"
            },
            {
                episodeNumber: 2,
                title: "Madrigal",
                duration: "48m",
                description: "Walt and Jesse pursue an unlikely business partner. The DEA filters through various leads in hopes of finding something.",
                image: "https://image.tmdb.org/t/p/original/9WIzJqqUthdASBRE1Ts8ymrDhIv.jpg",
                videoUrl: "https://short.icu/NW_zcYBup"
            },
            {
                episodeNumber: 3,
                title: "Hazard Pay",
                duration: "48m",
                description: "Walt and Jesse formulate a new business plan. Walt shares a secret with Marie.",
                image: "https://image.tmdb.org/t/p/original/l84H1dZVkQGgFVomKHc67RKaEC2.jpg",
                videoUrl: "https://short.icu/I6OksIzeG"
            },
            {
                episodeNumber: 4,
                title: "Fifty-One",
                duration: "48m",
                description: "Walt celebrates another birthday. Skyler contemplates her options, and an associate puts a crimp in Walt and Jesse's business strategy.",
                image: "https://image.tmdb.org/t/p/original/zxcf3ER2rzU9IxCxJEhCCw1MyT.jpg",
                videoUrl: "https://short.icu/WNf1XBK9F"
            },
            {
                episodeNumber: 5,
                title: "Dead Freight",
                duration: "49m",
                description: "Walt's team gets creative to obtain the methylamine they need to continue their operation.",
                image: "https://image.tmdb.org/t/p/original/ay9uj9CMQJezaB407JCPMDYSptK.jpg",
                videoUrl: "https://short.icu/MVPmQhS4-"
            },
            {
                episodeNumber: 6,
                title: "Buyout",
                duration: "48m",
                description: "Walt, Jesse, and Mike struggle over the future of their business, as occupational hazards weigh on Jesse.",
                image: "https://image.tmdb.org/t/p/original/vleQ03cr0fb5DBmvLY0WGxfs8wj.jpg",
                videoUrl: "https://short.icu/2YqtJFzhP"
            },
            {
                episodeNumber: 7,
                title: "Say My Name",
                duration: "48m",
                description: "Walt takes control of business matters; Mike deals with the consequences of his actions.",
                image: "https://image.tmdb.org/t/p/original/2NA7ti9jsWnG4xreMEFwbq4DH1f.jpg",
                videoUrl: "https://short.icu/q3Z0zM4_I"
            },
            {
                episodeNumber: 8,
                title: "Gliding Over All",
                duration: "48m",
                description: "Walt takes care of loose ends; Walt makes a dangerous decision.",
                image: "https://image.tmdb.org/t/p/original/uTAPBgAah14jQbV98Sw7iqJD4W7.jpg",
                videoUrl: "https://short.icu/41Q0Ti0pm"
            },
            {
                episodeNumber: 9,
                title: "Blood Money",
                duration: "48m",
                description: "As Walt and Jesse adjust to life out of the business, Hank grapples with a troubling lead.",
                image: "https://image.tmdb.org/t/p/original/uvxl7TMG4dZG9D5bzzQzKqfUdnD.jpg",
                videoUrl: "https://short.icu/j38kqAKTJ"
            },
            {
                episodeNumber: 10,
                title: "Buried",
                duration: "48m",
                description: "While Skyler's past catches up with her, Walt covers his tracks. Jesse continues to struggle with his guilt.",
                image: "https://image.tmdb.org/t/p/original/b0aRvTXslQgJpCmmcmoYqS9MsIB.jpg",
                videoUrl: "https://short.icu/i_8wz74oz"
            },
            {
                episodeNumber: 11,
                title: "Confessions",
                duration: "48m",
                description: "Jesse decides to make a change, while Walt and Skyler try to deal with an unexpected demand.",
                image: "https://image.tmdb.org/t/p/original/w8Aw3SPdT3uyZpP2pCnKHEIMYj3.jpg",
                videoUrl: "https://short.icu/ZpjuieuVl"
            },
            {
                episodeNumber: 12,
                title: "Rabid Dog",
                duration: "48m",
                description: "An unusual strategy starts to bear fruit, while plans are set in motion that could change everything.",
                image: "https://image.tmdb.org/t/p/original/5VkI8lm7Xcmlxk92pWRyW341d70.jpg",
                videoUrl: "https://short.icu/LSnI4a3IL2"
            },
            {
                episodeNumber: 13,
                title: "To'hajiilee",
                duration: "47m",
                description: "Things heat up for Walt in unexpected ways.",
                image: "https://image.tmdb.org/t/p/original/lunoCRprYl0jEJEkGTS8v6eFq1n.jpg",
                videoUrl: "https://short.icu/s3ZW1oswR"
            },
            {
                episodeNumber: 14,
                title: "Ozymandias",
                duration: "48m",
                description: "Everyone copes with radically changed circumstances.",
                image: "https://image.tmdb.org/t/p/original/k80r5JYO4LLrPJbWDXmlg7IxRMI.jpg",
                videoUrl: "https://short.icu/hGkK-oB-n"
            },
            {
                episodeNumber: 15,
                title: "Granite State",
                duration: "54m",
                description: "Events set in motion long ago move toward a conclusion.",
                image: "https://image.tmdb.org/t/p/original/lCVFehyLhc4qlwTxBwbKpYvc3BS.jpg",
                videoUrl: "https://short.icu/2-OQv8-R9"
            },
            {
                episodeNumber: 16,
                title: "Felina",
                duration: "56m",
                description: "All bad things must come to an end.",
                image: "https://image.tmdb.org/t/p/original/pA0YwyhvdDXP3BEGL2grrIhq8aM.jpg",
                videoUrl: "https://short.icu/vWVlv09Q7"
            }
        ]
    }
};

// Modified trackAndPlay function
function trackAndPlay(seasonNumber, episodeNumber) {
    const episodeKey = `s${seasonNumber}e${episodeNumber}`;
    // Save under episodes object
    watchHistory.episodes[episodeKey] = watchHistory.episodes[episodeKey] || { progress: 0 };
    watchHistory.episodes[episodeKey].progress = 100;
    // Update lastWatched to track the current episode
    watchHistory.lastWatched = { season: seasonNumber, episode: episodeNumber };
    localStorage.setItem('witcherProgress', JSON.stringify(watchHistory));

    const episode = episodes[seasonNumber].episodes.find(
        ep => ep.episodeNumber === episodeNumber
    );
    if (episode) openVideoPlayer(episode.videoUrl);
}

// Updated episode template
function createEpisodeHTML(episode, seasonNum) {
    const episodeKey = `s${seasonNum}e${episode.episodeNumber}`;
    const progress = watchHistory.episodes[episodeKey]?.progress || 0;

    return `
                <div class="episode-item" onclick="trackAndPlay(${seasonNum}, ${episode.episodeNumber})">
                <div class="pt-episode-image-container">
                    <img src="${episode.image}" class="episode-image" alt="${episode.title}">
                    <span class="episode-number">S${seasonNum} E${episode.episodeNumber}</span>
                    <span class="episode-duration">${episode.duration}</span>
                    <div class="episode-content">
                        <div class="episode-title">
                            ${episode.title}
                        </div>
                        <div class="episode-description">
                            ${episode.description}
                        </div>
                        <div class="episode-progress">
                            ${progress > 0 ? `
                                <div class="progress-text">${progress}%</div>
                                <div class="progress-bar" style="width: ${progress}%"></div>
                            ` : ''}
                        </div>
                    </div>
                    </div>
                </div>
            `;
}

function filterEpisodes() {
    const season = document.getElementById('seasonSelect').value;
    const container = document.getElementById('episodeContainer');
    const seasonData = episodes[season];

    container.innerHTML = `
                ${seasonData.episodes.map(ep => createEpisodeHTML(ep, season)).join('')}
            `;
}

// Save selected season to localStorage
function saveSeasonState() {
    localStorage.setItem('selectedSeason', document.getElementById('seasonSelect').value);
}

// Restore season selection
function restoreSeasonState() {
    const savedSeason = localStorage.getItem('selectedSeason');
    if (savedSeason) {
        document.getElementById('seasonSelect').value = savedSeason;
    }
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    // Restore previous selection
    restoreSeasonState();

    // Initial episode load
    filterEpisodes();

    // Save state on season change
    document.getElementById('seasonSelect').addEventListener('change', () => {
        filterEpisodes();
        saveSeasonState();
    });
});


function updateStreamButton() {
    const button = document.getElementById('streamButton');
    if (watchHistory) {
        button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
                            <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5m5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5"/>
                            </svg>Resume S${season} E${episode}`;
        button.style.borderBottom = "3px solid rgb(188, 0, 9)";
        button.style.background = "rgb(255, 232, 233)";
    } else {
        button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="play">
                            <path
                                d="M4,20.4V3.6A1.457,1.457,0,0,1,6.1844,2.22l13.095,8.4a1.6811,1.6811,0,0,1,0,2.7594l-13.095,8.4A1.457,1.457,0,0,1,4,20.4Z">
                            </path>
                        </svg>Stream Now`;
    }
}

function handleStreamButton() {
    const button = document.getElementById('streamButton');
    if (watchHistory.lastWatched) {
        const { season, episode } = watchHistory.lastWatched;
        button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
                            <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5m5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5"/>
                            </svg>Resume S${season} E${episode}`;
        button.style.borderBottom = "3px solid rgb(188, 0, 9)";
        button.style.background = "rgb(255, 232, 233)";
        button.onclick = () => trackAndPlay(season, episode);
    } else {
        button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="play">
                            <path
                                d="M4,20.4V3.6A1.457,1.457,0,0,1,6.1844,2.22l13.095,8.4a1.6811,1.6811,0,0,1,0,2.7594l-13.095,8.4A1.457,1.457,0,0,1,4,20.4Z">
                            </path>
                        </svg>Stream Now`;
        button.onclick = () => trackAndPlay(1, 1);
    }
}

// Initialization
handleStreamButton();