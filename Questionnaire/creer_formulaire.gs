/**
 * Crée le formulaire Google Forms « Les ressources numériques au collège : vos pratiques et vos attentes ».
 * Mode d'emploi : coller ce code sur https://script.google.com (Nouveau projet),
 * enregistrer, sélectionner la fonction creerFormulaire puis cliquer sur « Exécuter ».
 * Les liens du formulaire s'affichent dans le journal d'exécution.
 */

const FORMULAIRE = {
  "title": "Les ressources numériques au collège : vos pratiques et vos attentes",
  "description": "Ce questionnaire s'adresse aux enseignants de collège. Il s'inscrit dans un projet de Master 1 Direction de la communication digitale (Laho Formation, Roubaix) consacré aux ressources pédagogiques numériques.\n\nDurée : environ 7 minutes. Les réponses sont anonymes et servent uniquement à ce travail universitaire. Aucune question n'est piège : c'est votre pratique réelle qui compte.",
  "confirmation": "Merci pour votre participation ! Vos réponses vont directement nourrir l'analyse des besoins des enseignants.",
  "sections": [
    {
      "title": "Votre profil",
      "help": "Quelques questions pour situer votre contexte d'enseignement.",
      "questions": [
        {
          "type": "radio",
          "title": "Quelle est votre discipline principale ?",
          "required": true,
          "other": true,
          "choices": [
            "SVT",
            "Histoire-géographie / EMC",
            "Professeur·e documentaliste",
            "Français",
            "Mathématiques",
            "Physique-chimie",
            "Technologie",
            "Langues vivantes",
            "Arts plastiques / Éducation musicale",
            "EPS"
          ]
        },
        {
          "type": "checkbox",
          "title": "À quels niveaux enseignez-vous cette année ?",
          "help": "Plusieurs réponses possibles.",
          "required": true,
          "choices": [
            "6e",
            "5e",
            "4e",
            "3e",
            "Dispositif ULIS ou SEGPA"
          ]
        },
        {
          "type": "radio",
          "title": "Dans quel type d'établissement exercez-vous ?",
          "required": true,
          "other": true,
          "choices": [
            "Collège public",
            "Collège privé sous contrat"
          ]
        },
        {
          "type": "radio",
          "title": "Dans quelle académie exercez-vous ?",
          "required": true,
          "choices": [
            "Académie de Lille",
            "Une autre académie"
          ]
        },
        {
          "type": "radio",
          "title": "Depuis combien de temps enseignez-vous ?",
          "required": true,
          "choices": [
            "Moins de 3 ans",
            "De 3 à 10 ans",
            "De 11 à 20 ans",
            "Plus de 20 ans"
          ]
        },
        {
          "type": "radio",
          "title": "Avez-vous, cette année, des élèves à besoins éducatifs particuliers identifiés dans vos classes ?",
          "required": true,
          "choices": [
            "Oui, dans la plupart de mes classes",
            "Oui, dans une ou deux classes",
            "Non",
            "Je ne sais pas"
          ]
        },
        {
          "type": "checkbox",
          "title": "Si oui, de quels besoins s'agit-il ?",
          "help": "Facultatif. Plusieurs réponses possibles.",
          "required": false,
          "other": true,
          "choices": [
            "Troubles dys (dyslexie, dyspraxie, dyscalculie…)",
            "Trouble de l'attention (TDAH)",
            "Trouble du spectre de l'autisme (TSA)",
            "Trouble du développement intellectuel",
            "Je ne connais pas le détail"
          ]
        }
      ]
    },
    {
      "title": "Vos pratiques actuelles",
      "help": "Votre usage des ressources numériques en classe aujourd'hui.",
      "questions": [
        {
          "type": "radio",
          "title": "À quelle fréquence utilisez-vous des ressources numériques en classe ?",
          "required": true,
          "choices": [
            "Plusieurs fois par semaine",
            "Environ une fois par semaine",
            "Quelques fois par mois",
            "Quelques fois par trimestre",
            "Rarement ou jamais"
          ]
        },
        {
          "type": "checkbox",
          "title": "Par quels canaux découvrez-vous de nouvelles ressources numériques ?",
          "help": "Plusieurs réponses possibles.",
          "required": true,
          "other": true,
          "choices": [
            "Portails institutionnels (Éduthèque, Canopé, Lumni…)",
            "Recommandation d'un ou d'une collègue",
            "Référent numérique de l'établissement",
            "Réseaux sociaux ou groupes d'enseignants",
            "Éditeurs et manuels numériques",
            "Recherche sur Internet",
            "Formations et animations pédagogiques"
          ]
        },
        {
          "type": "radio",
          "title": "Pour une nouvelle ressource utilisée sur une séance, combien de temps de préparation acceptez-vous d'y consacrer ?",
          "required": true,
          "choices": [
            "Moins de 15 minutes",
            "De 15 à 30 minutes",
            "De 30 minutes à 1 heure",
            "Plus d'1 heure"
          ]
        },
        {
          "type": "radio",
          "title": "Avez-vous déjà renoncé à une ressource numérique pour une raison technique ?",
          "required": true,
          "choices": [
            "Oui, plusieurs fois",
            "Oui, une fois",
            "Non, jamais"
          ]
        },
        {
          "type": "checkbox",
          "title": "Si oui, pour quelle raison ?",
          "help": "Facultatif. Plusieurs réponses possibles.",
          "required": false,
          "other": true,
          "choices": [
            "Installation impossible sur les postes",
            "Création de comptes élèves nécessaire",
            "Matériel insuffisant ou vieillissant",
            "Connexion Internet trop faible",
            "Refus ou délai du référent numérique ou de la DSI"
          ]
        }
      ]
    },
    {
      "title": "Les freins à l'adoption d'une ressource",
      "help": "Pour chaque frein, indiquez son poids dans votre décision d'utiliser, ou non, une nouvelle ressource numérique.",
      "questions": [
        {
          "type": "grid",
          "title": "Quel est le poids de chacun de ces freins pour vous ?",
          "required": true,
          "rows": [
            "Le temps de préparation nécessaire",
            "Le risque technique en salle (installation, comptes, réseau)",
            "Le coût pour l'établissement",
            "L'absence de lien explicite avec les programmes",
            "La difficulté d'adaptation aux élèves en difficulté de lecture"
          ],
          "columns": [
            "Rédhibitoire",
            "Important",
            "Secondaire",
            "Négligeable"
          ]
        },
        {
          "type": "paragraph",
          "title": "Un autre frein compte-t-il beaucoup pour vous ?",
          "help": "Facultatif.",
          "required": false
        }
      ]
    },
    {
      "title": "Vos attentes sur le format",
      "help": "Indiquez votre degré d'accord avec chacune de ces affirmations.",
      "questions": [
        {
          "type": "grid",
          "title": "Êtes-vous d'accord avec ces affirmations ?",
          "required": true,
          "rows": [
            "Un récit interactif engagerait davantage mes élèves qu'un support classique",
            "Une ressource utilisable en une séance a plus de valeur qu'une ressource plus riche mais plus longue",
            "Une accessibilité intégrée, sans support séparé pour certains élèves, est un critère de choix",
            "L'absence de collecte de données sur les élèves est un critère de choix"
          ],
          "columns": [
            "Pas du tout d'accord",
            "Plutôt pas d'accord",
            "Plutôt d'accord",
            "Tout à fait d'accord"
          ]
        }
      ]
    },
    {
      "title": "Le budget et la décision d'achat",
      "help": "Imaginez un abonnement annuel à une ressource numérique, valable pour plusieurs classes de votre établissement.",
      "questions": [
        {
          "type": "radio",
          "title": "Quel montant annuel vous semblerait acceptable pour votre établissement ?",
          "required": true,
          "choices": [
            "Moins de 300 €",
            "De 300 à 499 €",
            "De 500 à 749 €",
            "De 750 à 999 €",
            "1 000 € ou plus",
            "Je ne sais pas"
          ]
        },
        {
          "type": "radio",
          "title": "Connaissez-vous le circuit de décision applicable à ce type de dépense dans votre établissement ?",
          "required": true,
          "choices": [
            "Oui, précisément",
            "Dans les grandes lignes",
            "Non"
          ]
        },
        {
          "type": "checkbox",
          "title": "Selon vous, qui décide en pratique de ce type d'achat ?",
          "help": "Plusieurs réponses possibles.",
          "required": false,
          "other": true,
          "choices": [
            "Le chef d'établissement",
            "Le ou la gestionnaire",
            "Le conseil d'administration",
            "L'équipe disciplinaire, sur ses crédits pédagogiques",
            "Le référent numérique",
            "Je ne sais pas"
          ]
        },
        {
          "type": "radio",
          "title": "Le seuil de passage en conseil d'administration a-t-il déjà retardé une acquisition dans votre établissement ?",
          "required": true,
          "choices": [
            "Oui",
            "Non",
            "Je ne sais pas"
          ]
        }
      ]
    },
    {
      "title": "Pour aller plus loin",
      "help": "Des entretiens de 30 à 45 minutes sont prévus pour approfondir ces questions.",
      "questions": [
        {
          "type": "radio",
          "title": "Accepteriez-vous d'être recontacté·e pour un entretien de 30 à 45 minutes ?",
          "required": true,
          "choices": [
            "Oui",
            "Non"
          ],
          "branch": {
            "Oui": "contact",
            "Non": "SUBMIT"
          }
        }
      ]
    },
    {
      "id": "contact",
      "title": "Vos coordonnées",
      "help": "Votre adresse sert uniquement à vous proposer un entretien. Elle n'est pas associée à l'analyse de vos réponses et sera supprimée à la fin du projet.",
      "questions": [
        {
          "type": "email",
          "title": "Votre adresse e-mail",
          "required": true
        }
      ]
    }
  ]
};

function creerFormulaire() {
  const f = FORMULAIRE;
  const form = FormApp.create(f.title);
  form.setDescription(f.description)
      .setConfirmationMessage(f.confirmation)
      .setProgressBar(true)
      .setCollectEmail(false)
      .setAllowResponseEdits(false)
      .setShowLinkToRespondAgain(false);

  const pages = {};          // sections nommées (cible des embranchements)
  const branches = [];       // questions dont les réponses renvoient vers une section

  f.sections.forEach((section, index) => {
    // La première section utilise l'en-tête du formulaire, les suivantes un saut de section
    let header;
    if (index === 0) {
      header = form.addSectionHeaderItem();
    } else {
      header = form.addPageBreakItem();
      if (section.id) pages[section.id] = header;
    }
    header.setTitle(section.title);
    if (section.help) header.setHelpText(section.help);

    section.questions.forEach(q => {
      let item;
      switch (q.type) {
        case 'radio':
          item = form.addMultipleChoiceItem().setTitle(q.title);
          if (q.branch) branches.push({ item, q });
          else item.setChoiceValues(q.choices);
          if (q.other) item.showOtherOption(true);
          break;
        case 'checkbox':
          item = form.addCheckboxItem().setTitle(q.title).setChoiceValues(q.choices);
          if (q.other) item.showOtherOption(true);
          break;
        case 'grid':
          item = form.addGridItem().setTitle(q.title).setRows(q.rows).setColumns(q.columns);
          break;
        case 'paragraph':
          item = form.addParagraphTextItem().setTitle(q.title);
          break;
        case 'email':
          item = form.addTextItem().setTitle(q.title)
            .setValidation(FormApp.createTextValidation()
              .setHelpText('Merci d\'indiquer une adresse e-mail valide.')
              .requireTextIsEmail().build());
          break;
        default:
          throw new Error('Type de question inconnu : ' + q.type);
      }
      if (q.help) item.setHelpText(q.help);
      item.setRequired(!!q.required);
    });
  });

  // Embranchements : une fois toutes les sections créées
  branches.forEach(({ item, q }) => {
    item.setChoices(q.choices.map(c => {
      const target = q.branch[c];
      if (target === 'SUBMIT') return item.createChoice(c, FormApp.PageNavigationType.SUBMIT);
      if (target && pages[target]) return item.createChoice(c, pages[target]);
      return item.createChoice(c);
    }));
  });

  Logger.log('Formulaire créé.');
  Logger.log('Lien pour modifier : ' + form.getEditUrl());
  Logger.log('Lien à partager    : ' + form.getPublishedUrl());
}
