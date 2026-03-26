const medications = [
    {
        id: 'wegovy',
        rank: 1,
        name: 'Wegovy (Semaglutid)',
        activeIngredient: 'Semaglutid (verfügbar in 2,4 mg und der neuen 7,2 mg Erhaltungsdosis).',
        mechanism: 'Ahmt das GLP-1-Hormon nach, um den Appetit zu unterdrücken und die Magenentleerung zu verzögern.',
        efficacy: 'Durchschnittlicher Gewichtsverlust von 15–17% bei der 2,4 mg Dosis und bis zu 21% bei der 7,2 mg Dosis.',
        status: 'Sehr beliebt. Während es normalerweise eine Privatleistung ist (172 €–277 €/Monat), übernehmen gesetzliche Krankenkassen (GKV) nun die Kosten bei kardiovaskulären Vorerkrankungen zur Prävention von Schlaganfällen oder Herzinfarkten (gemäß G-BA-Richtlinie).',
        description: 'Wegovy bleibt die am häufigsten eingesetzte Abnehmspritze in Deutschland. Seit 2026 ist auch eine höhere Erhaltungsdosis zugelassen.',
        image: 'images/wegovy_pen.jpg'
    },
    {
        id: 'mounjaro',
        rank: 2,
        name: 'Mounjaro (Tirzepatid)',
        activeIngredient: 'Tirzepatid (wöchentliche Injektion).',
        mechanism: 'Ein „dualer Agonist“ (GLP-1 und GIP), der zwei Stoffwechselwege gleichzeitig anspricht.',
        efficacy: 'Klinische Studien (SURMOUNT) zeigten einen Gewichtsverlust von bis zu 22,5%.',
        status: 'Erhältlich auf Privatrezept. Die Preise liegen je nach Dosierung (2,5 mg bis 15 mg) zwischen ca. 206 € und 489 € pro Monat.',
        description: 'Mounjaro ist aktuell das effektivste Medikament zur Gewichtsreduktion auf dem deutschen Markt. Es wird oft von Patienten gewählt, die maximale Ergebnisse anstreben.',
        image: 'images/mounjaro_pen.jpg'
    },
    {
        id: 'wegovy-oral',
        rank: 3,
        name: 'Wegovy Oral (Die „Wegovy-Pille“)',
        activeIngredient: 'Semaglutid (tägliche Tablette, typischerweise 25 mg oder 50 mg).',
        mechanism: 'Gleiche Wirkung wie die Wegovy-Injektion, jedoch in Form einer täglichen Tablette.',
        efficacy: 'Vergleichbar mit der 2,4 mg Injektion, mit einem durchschnittlichen Gewichtsverlust von etwa 13–15%.',
        status: 'Markteinführung Anfang 2026 nach EMA-Zulassung. Eine Top-Wahl für Patienten mit Spritzenphobie.',
        description: 'Eine bedeutende Entwicklung für 2026 ist die Einführung der hochdosierten oralen Semaglutid-Tablette als nadelfreie Alternative.',
        image: 'images/wegovy_oral.jpg'
    },
    {
        id: 'saxenda',
        rank: 4,
        name: 'Saxenda (Liraglutid)',
        activeIngredient: 'Liraglutid (tägliche Injektion von 3,0 mg).',
        mechanism: 'Täglicher GLP-1-Rezeptor-Agonist.',
        efficacy: 'Moderat im Vergleich zu neueren Medikamenten, durchschnittlich 8–10% Gewichtsverlust.',
        status: 'Günstigste injizierbare Option (ca. 150 €–200 €/Monat) aufgrund verfügbarer Generika seit 2025/2026.',
        description: 'Saxenda ist das Vorgängerpräparat von Wegovy und bleibt eine stabile, preiswerte Option in deutschen Apotheken.',
        image: 'images/saxenda_pen.jpg'
    },
    {
        id: 'mysimba-xenical',
        rank: 5,
        name: 'Mysimba / Xenical (Orale Optionen)',
        activeIngredient: 'Naltrexon/Bupropion (Mysimba) oder Orlistat (Xenical/Alli).',
        mechanism: 'Mysimba reduziert Heißhunger im Gehirn. Xenical verhindert die Aufnahme von ca. 25% des Nahrungsfetts im Darm.',
        efficacy: 'Mysimba: ca. 5–9% Gewichtsverlust. Xenical: Variiert je nach fettarmer Ernährung.',
        status: 'Mysimba ist intermittierend verfügbar. Xenical/Alli ist die einzige rezeptfreie Option (als Alli 60mg) in deutschen Apotheken.',
        description: 'Für Patienten, die keine GLP-1-Präparate vertragen, sind diese oralen Medikamente die primären Alternativen.',
        image: 'images/mysimba_pills.jpg'
    },
    {
        id: 'ozempic',
        rank: 6,
        name: 'Ozempic (Semaglutid)',
        activeIngredient: 'Semaglutid (0,25 mg, 0,5 mg, 1,0 mg und neue 2,0 mg Dosis).',
        mechanism: 'Native GLP-1-Nachahmung zur Blutzuckersenkung und Appetitkontrolle.',
        efficacy: 'Exzellente hBA1c-Werte; Gewichtsabnahme von 5–10% (Off-Label).',
        status: 'GKV-Leistung bei Typ-2-Diabetes. Privat zwischen 150 €–300 €. Neu 2026: Günstiges Generikum „Nevolat“ verfügbar (79 €–129 €).',
        description: 'Der globale Standard für Diabetes-Management, oft als preiswerte Alternative zu Wegovy genutzt. 2026 durch Generika und neue Dosierungen noch flexibler.',
        image: 'images/ozempic_pen.jpg'
    }
];

window.medications = medications;
