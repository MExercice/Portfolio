import { PortfolioData } from '../models/models';

export const PORTFOLIO_DATA: PortfolioData = {
    owner: {
        firstName: 'Morgan',
        lastName: 'Schler',
        photoUrl: 'assets/images/profile.jpg',
        title: 'Expert Ingénierie du Logiciel'
    },
    skills: [
        {
            id: 'angular',
            name: 'Angular',
            type: 'Technique',
            level: 60,
            definition: `Passer du JavaScript natif à Angular a été une étape décisive pour structurer mes interfaces. Ce framework maintenu par Google impose une architecture rigoureuse basée sur les composants, les services et l'injection de dépendances, le tout sécurisé par le typage fort de TypeScript. C'est l'outil idéal pour concevoir des Single Page Applications (SPA) riches, performantes et maintenables sur le long terme, capables d'interagir de manière fluide avec des API backend complexes.`,
            proof: [
                {
                    content: `Création d'une interface moderne et réactive (Réservation) : Pour remplacer l'ancien outil vieillissant du CDG64, j'ai développé une interface de A à Z avec Angular 17+. J'ai conçu des composants modulaires et réutilisables, intégrant notamment un calendrier interactif complexe pour la gestion des salles et véhicules, offrant ainsi aux agents une navigation instantanée et parfaitement fluide.Communication API et sécurisation des routes (Réservation) : J'ai structuré les services front-end pour consommer l'API REST développée sous Spring Boot. J'ai implémenté la gestion des tokens d'authentification (JWT) via les intercepteurs HTTP d'Angular, et j'ai protégé l'accès aux différents écrans (comme l'espace administrateur) en utilisant les Guards de routage selon les droits de chaque utilisateur.`,
                    linkedProjectId: 'reservation'
                }

            ],
            selfCriticism: `Angular possède une courbe d'apprentissage assez raide, notamment sur la gestion des flux de données asynchrones avec RxJS (Observables). À mes débuts, j'ai parfois eu tendance à sur-complexifier mes services ou mes chaînes d'opérateurs. De plus, je dois encore travailler sur l'intégration de micro-interactions (animations, squelettes de chargement) pour parfaire l'expérience utilisateur (UX).`,
            evolution: `Mon axe de progression principal est la maîtrise des Signaux (Signals), la nouvelle approche réactive moderne d'Angular. Mon but est de simplifier ma gestion d'état et d'optimiser les performances (Change Detection) en me détachant progressivement de la complexité de RxJS lorsque ce n'est pas strictement nécessaire un flux continu n'a parfois pas lieu d'être et j'aimerais mieux gérer tout ces flux.`,
            linkedProjectIds: ['reservation']
        },
        {
            id: 'javascript',
            name: 'JavaScript',
            type: 'Technique',
            level: 70,
            definition: `JavaScript est le langage incontournable pour dynamiser les interfaces et améliorer l'expérience utilisateur (UX). Dans une approche logicielle moderne, je ne l'utilise pas pour de simples animations, mais pour créer des applications véritablement réactives. En maîtrisant l'asynchrone (AJAX, Fetch API) et la manipulation du DOM, je conçois des interfaces capables de communiquer avec le serveur en arrière-plan. L'objectif métier est clair : mettre à jour les données en temps réel sans jamais interrompre la navigation de l'utilisateur par des rechargements de page intempestifs.`,
            proof: [
                {
                    content: `Sauvegarde asynchrone et transparente (Promotion Interne) : Pour éviter toute perte de données lors de la saisie de longs dossiers par les gestionnaires, j'ai développé un système d'enregistrement automatique (Autosave) en JavaScript natif. Chaque modification d'un champ déclenche une requête silencieuse vers le serveur, offrant une expérience fluide, moderne et totalement sécurisante pour l'utilisateur.`,
                    linkedProjectId: 'promotion-interne'
                },
                {
                    content: `Rafraîchissement dynamique des données (Recrutement) : Pour l'application de recrutement, j'ai implémenté des scripts permettant d'actualiser les informations et les statuts à l'écran en temps réel. Cette approche "Single Page Application" partielle évite les rechargements complets du navigateur, ce qui accélère considérablement le flux de travail quotidien des agents.`,
                    linkedProjectId: 'recrutement'
                }
            ],
            selfCriticism: `L'utilisation de JavaScript natif (Vanilla JS) pour des interfaces de plus en plus complexes peut rapidement rendre le code difficile à maintenir. Sans un cadre strict, la logique front-end a tendance à s'éparpiller dans le DOM, ce qui augmente le risque de bugs et d'effets de bord lors de l'ajout de nouvelles fonctionnalités.`,
            evolution: `C'est précisément pour structurer ce code côté client que j'ai fait le choix de monter en compétence sur le framework Angular et sur TypeScript. Ces outils m'apportent la rigueur, la modularité et le typage fort qui manquent au JavaScript natif pour les projets de grande envergure.`,
            linkedProjectIds: ['promotion-interne', 'recrutement']
        },
        {
            id: 'PHP',
            name: 'PHP',
            type: 'Technique',
            level: 80,
            definition: `PHP (Hypertext Preprocessor) est bien plus qu’un simple langage de script. C’est le moteur de près de 80% du web mondial. Sa facilité d’accès a fait sa popularité et ses évolutions récentes notamment depuis la version 8.0 en ont fait un langage rigoureux et performant adapté aux différentes architectures d’entreprises parfois très complexes. Pour un ingénieur logiciel, maîtriser PHP de nos jours ne consiste pas seulement à créer des pages dynamiques mais c’est également la possibilité de créer des typages forts, d’avoir une bonne gestion d’erreurs et une bonne optimisation des performances avec le JIT (Just In Time Compiler), ou encore les Fibers pour tout ce qui va être gestion asynchrone. C’est un langage qui, lorsqu’il est maîtrisé, offre un compromis idéal entre rapidité de développement et maintenabilité sur le long terme.`,
            proof: [
                {
                    content: `Maintenance d’une application « Legacy » : Dans le cadre de la maintenance de l’application de gestion des congés, développée en PHP natif et AJAX, j’ai été confronté à des régressions bloquantes concernant la gestion des dates et l’affichage en temps réel. Le code, dépourvu de structure MVC moderne, rendait chaque modification risquée. Lors de mon intervention j’ai dû analyser le code procédural pour isoler les dysfonctionnements sans briser les fonctionnalités existantes. J’ai corrigé des algorithmes de calcul de dates et optimisé certains appels AJAX. Cette intervention a permis de fiabiliser le calcul des soldes de congés pour les utilisateurs et prolongé la durée de vie de cette application en attendant sa refonte. Cela prouve ma capacité à intervenir efficacement sur du code « Legacy », une réalité qui reste très fréquente en entreprise.`,
                    linkedProjectId: 'gestion-conges'
                },
                {
                    content: `Développement d’une GED : Pour le projet de gestion électronique de documents, j’avais besoin d’un système robuste pour gérer l’upload, le stockage et la sécurisation des fichiers sensibles notamment les documents administratifs. Plutôt que d’utiliser une solution clé en main, j'ai développé le cœur du système de gestion de fichiers pour l'interfacer avec les applications GRH et CIRIL RH. J'ai utilisé les fonctionnalités natives de PHP pour gérer les flux (streams), vérifier les types MIME côté serveur (sécurité) et organiser le stockage physique des documents de manière structurée. J'ai livré un module de GED performant et sécurisé, capable de traiter différents formats de fichiers tout en protégeant le serveur contre les uploads malveillants.`,
                    linkedProjectId: 'GED'
                }
            ],
            selfCriticism: `Je dois améliorer ma capacité à estimer combien de temps une tâche va me prendre en effet j'ai tendance à sous estimer le temps nécessaire pour réaliser une tâche.`,
            evolution: `Je dois poursuivre une veille active sur les nouvelles mise à jour de php et je prévois de passer une certification Symfony pour valider mes compétences.`,
            linkedProjectIds: ['gestion-conges', 'GED']
        },
        {
            id: 'symfony',
            name: 'Symfony',
            type: 'Technique',
            level: 80,
            definition: `Symfony est pour moi le prolongement naturel de PHP pour structurer des applications d'envergure. À ce niveau de maîtrise, il ne s'agit plus seulement d'utiliser le pattern MVC, mais d'exploiter la pleine puissance de ses composants : l'injection de dépendances, Doctrine ORM, la gestion complexe des formulaires et la sécurité. C'est un framework exigeant qui impose de bonnes pratiques architecturales, mais qui offre en retour une maintenabilité et une évolutivité exceptionnelles, idéales pour répondre aux exigences pointues du service public.`,
            proof: [
                {
                    content: `Développement from scratch et logique métier avancée (Promotion Interne) : J'ai architecturé l'ensemble de l'application avec Symfony. Le défi majeur résidait dans la gestion des cycles de validation des dossiers et la génération automatisée de documents officiels complexes. J'ai exploité les services Symfony et Twig pour créer un moteur d'export performant, tout en gérant finement les entités via Doctrine pour garantir l'intégrité des données d'une campagne à l'autre.`,
                    linkedProjectId: 'promotion-interne'
                },
                {
                    content: `Reprise de code et refactoring dans l'urgence (Recrutement) : Arrivé sur un projet Symfony en difficulté, j'ai dû auditer et stabiliser une base de code héritée de précédents développeurs. J'ai entrepris un refactoring pragmatique : alléger les contrôleurs surchargés en déplaçant la logique métier vers des services dédiés, optimiser les requêtes Doctrine pour améliorer les temps de chargement, et fiabiliser la mise en production avant la deadline.`,
                    linkedProjectId: 'recrutement'
                }
            ],
            selfCriticism: `Bien que je maîtrise parfaitement Doctrine ORM, je dois rester vigilant sur les problématiques de performances liées à l'"hydratation" des objets sur de très gros volumes de données (le fameux problème N+1). Par ailleurs, le composant Formulaire de Symfony est extrêmement puissant côté backend, mais il a tendance à rigidifier le développement front-end lorsque l'on souhaite créer des interfaces très dynamiques et asynchrones.`,
            evolution: `Je souhaite intégrer davantage le composant Symfony Messenger pour déporter les tâches lourdes en asynchrone (comme l'envoi d'emails en masse ou la génération de gros rapports PDF) afin d'accélérer l'expérience utilisateur. J'envisage également de valider mon niveau via la certification officielle Symfony.`,
            linkedProjectIds: ['promotion-interne', 'recrutement']
        },
        {
            id: 'spring',
            name: 'Spring Boot',
            type: 'Technique',
            level: 60,
            definition: `Découvrir l'écosystème Java avec Spring Boot a été un véritable cap technique dans mon parcours. Contrairement à la souplesse de PHP, Spring impose une rigueur architecturale (typage fort, orienté objet strict) qui s'avère redoutable pour concevoir des applications d'entreprise pérennes et sécurisées. Maîtriser ce framework, c'est comprendre l'injection de dépendances, l'inversion de contrôle, et la structuration d'API RESTful robustes capables de s'interfacer avec des frameworks front-end modernes.`,
            proof: [
                {
                    content: `Création d'une API REST sécurisée et Clean Architecture (Application Réservation) : Pour la refonte de cet outil critique, j'ai architecturé le moteur backend de zéro avec Spring Boot 3. J'ai mis en place une authentification par token (JWT) et structuré le code de manière à isoler la logique métier (la gestion complexe des conflits de réservation des salles et véhicules) des couches d'infrastructure.Fiabilisation via les tests automatisés : L'écosystème Spring facilitant grandement la mise en place de tests, j'ai pu y intégrer une couverture solide (tests unitaires et d'intégration avec JUnit/Mockito). Ces tests vérifient en permanence la logique métier, garantissant par exemple qu'il est techniquement impossible d'enregistrer deux réservations simultanées sur la même ressource.`,
                    linkedProjectId: 'reservation'
                }
            ],
            selfCriticism: `L'écosystème Spring est extrêmement vaste et repose sur un système d'annotations qui peut parfois ressembler à de la "magie". Par exemple, la configuration poussée de Spring Security possède une courbe d'apprentissage assez abrupte. De plus, j'ai encore tendance à me reposer sur les configurations par défaut de Spring Data JPA, ce qui nécessite une vigilance accrue pour éviter les pertes de performances sur des requêtes complexes (comme le fameux problème N+1).`,
            evolution: `Mon objectif est d'approfondir ma maîtrise de Spring Security pour gérer des droits d'accès de manière plus granulaire (RBAC), et de me plonger plus intensément dans l'optimisation des requêtes via Hibernate/JPA.`,
            linkedProjectIds: ['reservation']
        },
        {
            id: 'mysql',
            name: 'MySQL',
            type: 'Technique',
            level: 80,
            definition: `Une base de données n'est pas qu'un simple lieu de stockage, c'est la fondation même d'une application robuste. Au cours de mes projets, j'ai compris qu'une mauvaise architecture de données se paie toujours par de la dette technique. Sous le mentorat de mon tuteur une véritable référence dans le domaine pour moi, j'ai appris à concevoir des modèles relationnels solides, à gérer efficacement les migrations et à penser "optimisation" dès la conception. Je n'hésite jamais à le solliciter pour challenger mes choix architecturaux, ce qui m'a permis d'acquérir d'excellents réflexes pour garantir l'intégrité, la sécurité et la performance des données.`,
            proof: [
                {
                    content: `Conception from scratch et gestion d'historique (Promotion Interne) : J'ai modélisé l'intégralité de la base de données de A à Z. Le défi majeur était de gérer le cycle de vie des dossiers des agents sans écraser les données d'une année sur l'autre. J'ai conçu une architecture permettant de versionner les états des dossiers, garantissant l'intégrité de l'historique tout en offrant une flexibilité totale aux gestionnaires pour leurs annotations lors des nouvelles campagnes.`,
                    linkedProjectId: 'promotion-interne'
                },
                {
                    content: `Reprise et évolution d'une base existante (Recrutement) : Arrivé en cours de route, j'ai dû m'approprier un schéma de données complexe que je n'avais pas conçu. J'ai analysé les relations existantes pour y greffer de nouvelles entités (comme les comptes-rendus spécifiques aux collectivités) sans casser l'existant. J'ai utilisé le système de migrations de Symfony pour faire évoluer la structure de manière contrôlée jusqu'à la mise en production.`,
                    linkedProjectId: 'recrutement'
                }
            ],
            selfCriticism: `Bien que je sois très à l'aise sur la conception relationnelle et l'écriture de requêtes complexes (jointures, sous-requêtes), j'ai encore une marge de progression sur l'optimisation "très bas niveau" des performances (comme l'analyse approfondie des plans d'exécution avec EXPLAIN ou l'optimisation pointue des index sur des tables contenant des millions de lignes).`,
            evolution: `Je prévois de me documenter davantage sur les fonctionnalités avancées de MySQL et sur les stratégies d'optimisation pour de très fortes volumétries de données, afin de rendre mes architectures encore plus résilientes.`,
            linkedProjectIds: ['promotion-interne', 'recrutement']
        },
        {
            id: 'COMMUNICATION',
            name: 'Communication',
            type: 'Humaine',
            level: 90,
            definition: `Dans un contexte d'ingénierie logicielle, la communication n'est pas seulement la capacité à s'exprimer, mais celle de traduire des problématiques techniques complexes en langage compréhensible pour les parties prenantes (vulgarisation). C'est aussi l'écoute active pour capter les besoins non-dits des collaborateurs. En tant qu'expert, mon rôle est de faire le pont entre la technique et le métier, en assurant une fluidité d'information qui prévient les malentendus et aligne les équipes sur les objectifs communs.`,
            proof: [
                {
                    content: `Pédagogie progressive et visuelle : Au quotidien avec les gestionnaires du pole gestion statutaire du CDG64 avec l'application promotion interne, j'utilise systématiquement des schémas pour modéliser les processus ou expliquer les contraintes techniques. J'adopte d'abord une approche "zéro jargon" pour m'assurer que la logique est bien comprise, avant d'introduire le vocabulaire technique au fur et à mesure. Je veille à ne jamais parler à un utilisateur comme je parlerais à un développeur.`,
                    linkedProjectId: 'promotion-interne'
                },
                {
                    content: `Écoute active et redéfinition du besoin : Il est fréquent qu'un utilisateur me demande de développer une fonctionnalité précise sur l'application recrutement en pensant que c'est la solution à son problème. En échangeant avec lui pour comprendre son véritable point de blocage au quotidien, j'arrive souvent à identifier que son vrai besoin nécessite une toute autre approche, bien plus performante et adaptée à sa logique métier.`,
                    linkedProjectId: 'recrutement'
                }
            ],
            selfCriticism: `Ma volonté de bien faire comprendre les tenants et aboutissants techniques peut parfois m'amener à donner trop de détails lors de réunions purement stratégiques. J'apprends à synthétiser davantage pour aller à l'essentiel selon mon interlocuteur (Direction vs Utilisateurs).`,
            evolution: `N'ayant pas encore eu l'occasion d'encadrer d'autres personnes, je souhaite à l'avenir orienter ma communication vers le mentorat, pour pouvoir accompagner de futurs collaborateurs non seulement sur le code, mais aussi sur leur posture en entreprise.`,
            linkedProjectIds: ['promotion-interne', 'recrutement']
        },
        {
            id: 'ANALYSE_SYNTHESE',
            name: 'Esprit d\'analyse et de synthèse',
            type: 'Humaine',
            level: 85,
            definition: `L'esprit d'analyse est la capacité à décomposer un besoin métier flou en composantes techniques réalisables et pertinentes. La synthèse, elle, permet de rassembler ces éléments pour proposer une architecture cohérente. C'est le cœur de mon métier : comprendre le "pourquoi" pour concevoir le "comment". Grâce à l'accompagnement de mon tuteur, j'ai affiné ma méthode de recherche et appris à réellement appréhender la logique métier (la réalité quotidienne des utilisateurs). Cela me permet aujourd'hui de répondre au plus juste à leurs demandes, de les anticiper et de pointer les incohérences en amont.`,
            proof: [
                {
                    content: `Analyse de code existant et résolution de bugs (Application Congés) : J'ai été chargé d'identifier et de résoudre des anomalies sur l'application de gestion des congés. Cela m'a demandé d'analyser concrètement et de m'approprier un code que je n'avais pas conçu. En combinant les méthodes de recherche acquises avec mon tuteur et ma compréhension du métier, j'ai pu corriger les bugs de manière pérenne sans casser la logique existante.`,
                    linkedProjectId: 'gestion-conges'
                },
                {
                    content: `Anticipation des conflits métier (Promotion Interne) : Les gestionnaires du CDG souhaitaient pouvoir modifier librement les dossiers soumis par les collectivités. En analysant le cycle de vie de la donnée, j'ai identifié un risque majeur : si un agent n'était pas promu, la collectivité devait pouvoir reprendre son dossier intact l'année suivante. Appliquer la demande initiale aurait écrasé les données d'origine. J'ai donc synthétisé ces besoins contradictoires pour concevoir une architecture de base de données spécifique (gestion des versions/états des dossiers), permettant au CDG d'instruire et d'annoter les dossiers sans jamais corrompre la base de travail des collectivités pour les futures campagnes.`,
                    linkedProjectId: 'promotion-interne'
                }
            ],
            selfCriticism: `Mon désir de comprendre le besoin métier dans ses moindres détails (ou de décortiquer entièrement un code existant) peut parfois ralentir le démarrage effectif du développement (Analysis Paralysis). Je travaille à adopter une approche plus itérative pour livrer de la valeur plus vite, même si l'analyse initiale n'est pas exhaustive à 100%.`,
            evolution: `Je compte renforcer cette compétence en me formant aux méthodes de conception avancées (DDD - Domain Driven Design) pour encore mieux aligner le code avec la réalité métier de l'entreprise.`,
            linkedProjectIds: ['promotion-interne', 'gestion-conges']
        },
        {
            id: 'gestiondeprojet',
            name: 'Gestion de projet',
            type: 'Humaine',
            level: 85,
            definition: `Ma méthode de gestion de projet est hybride : elle respecte les jalons classiques tout en plaçant l'utilisateur au centre du processus. Je n'isole jamais le développement du besoin métier. Au contraire, j'implique les gestionnaires de bout en bout via des points d'avancement réguliers. En leur montrant les évolutions de manière itérative, je les acculture à la technique (ils comprennent aujourd'hui mes contraintes, la différence entre front et back, etc.). Résultat : ils s'approprient l'outil et me proposent d'eux-mêmes des évolutions parfaitement alignées avec leur logique métier, rendant le développement infiniment plus pertinent.`,
            proof: [
                {
                    content: `Co-construction itérative (Promotion Interne) : Au lieu de développer l'application "en tunnel" (isolé jusqu'à la livraison finale), j'ai mis en place des points réguliers avec les gestionnaires. En leur livrant des versions intermédiaires, ils ont pu tester le produit en conditions réelles très tôt. Cette approche leur a permis de s'approprier l'outil et de suggérer d'eux-mêmes l'ajout d'un tableau de bord global, devenu aujourd'hui indispensable pour leur pilotage.`,
                    linkedProjectId: 'promotion-interne'
                },
                {
                    content: `Reprise en main et sauvetage de projet (Recrutement) : Lors de la reprise de l'application Recrutement, le projet accusait du retard avec une deadline critique. J'ai dû auditer l'existant dans l'urgence, redéfinir un périmètre réaliste avec le métier et découper les tâches en lots livrables. Cette gestion rigoureuse et transparente a permis de stabiliser le code et de livrer l'application dans les temps, tout en regagnant la confiance des utilisateurs.`,
                    linkedProjectId: 'recrutement'
                }
            ],
            selfCriticism: `Mon talon d'Achille a longtemps été ma difficulté à dire "non". Poussé par mon empathie et l'envie de fournir l'outil parfait, j'ai tendance à vouloir intégrer toutes les fonctionnalités demandées. Sur l'application Recrutement, en voulant passer une série de mises à jour de dernière minute avant le lancement, un manque de temps pour les tests a laissé filer un bug en production. Bien que corrigé dès le lendemain, cet incident m'a appris une leçon précieuse : l'importance absolue de prioriser, de respecter les processus de test et de savoir dire non aux utilisateurs pour garantir la stabilité de leur propre outil.`,
            evolution: `Étant le seul développeur sur mes applications, j'ai longtemps compté uniquement sur mes commits Git pour le suivi. Aujourd'hui, je fais évoluer mon organisation en mettant en place un système de ticketing personnel. L'objectif : garder un historique plus fiable, mieux structurer les demandes entrantes des utilisateurs et rationaliser mon flux de travail pour éviter la surcharge.`,
            linkedProjectIds: ['promotion-interne', 'recrutement']
        },
        {
            id: 'CURIOSITE',
            name: 'Curiosité Technique',
            type: 'Humaine',
            level: 90,
            definition: `La curiosité technique est le moteur de l'innovation et de l'amélioration continue. Pour moi, cela signifie ne jamais se reposer sur ses acquis. C'est une veille active et structurée qui me permet d'anticiper les obsolescences technologiques et de proposer des outils modernes. Actuellement, cela se traduit par une auto-formation sur l'Intelligence Artificielle pour comprendre comment elle peut optimiser nos processus de développement ou enrichir nos applications métier.`,
            proof: [
                {
                    content: `Modernisation de la Stack Technologique (Réservation) : Face à l'obsolescence des anciennes applications du CDG64, j'ai proposé et porté le passage vers une stack moderne et robuste (Spring Boot 3 / Angular 17+). Cela m'a demandé un important travail d'auto-formation pour maîtriser ces nouveaux frameworks et implémenter des standards actuels comme la Clean Architecture ou le CI/CD.`,
                    linkedProjectId: 'reservation'
                },
                {
                    content: `Intégration de l'IA pour le traitement du code Legacy (Application Congés) : Toujours en quête d'optimisation de mon flux de travail, j'utilise des outils basés sur l'IA en support de mon développement. Je m'en sers notamment pour analyser et décortiquer plus rapidement les logiques complexes d'anciens codes procéduraux non documentés, ou pour m'assister dans la rédaction de tests. Cela me fait gagner un temps précieux que je réinvestirais et que je réinvestis dans la création de valeur métier pour cette application mais aussi pour toutes les autres.`,
                    linkedProjectId: 'gestion-conges'
                }
            ],
            selfCriticism: `Il est parfois tentant de vouloir utiliser la "dernière technologie à la mode" sur un projet de production. Je m'efforce de toujours valider la maturité et la stabilité d'une technologie via des POC (Proof of Concept) avant de l'intégrer dans un environnement critique.`,
            evolution: `Mon objectif est de structurer ma curiosité en mettant en place des sessions de partage de connaissances pour faire bénéficier toute l'équipe de mes découvertes, notamment sur l'IA.`,
            linkedProjectIds: ['reservation', 'gestion-conges']
        }

    ],
    projects: [
        {
            id: 'promotion-interne',
            title: 'Application de Promotion Interne',
            shortDescription: 'Dématérialisation complète d\'un processus RH critique, avec sauvegarde en temps réel et automatisation documentaire.',
            context: `Avant ce projet, la promotion interne au CDG64 se faisait entièrement au format papier, impliquant de lourds et lents échanges postaux avec les collectivités. Le but de cette application était de mener la dématérialisation totale de ce processus. L'enjeu était d'accompagner ce changement majeur d'habitudes en proposant une plateforme moderne, centralisée, et pensée pour sécuriser la saisie des gestionnaires face aux risques de perte de données.`,
            objectives: [
                'Dématérialiser à 100 % le processus de promotion interne pour mettre fin aux formulaires papier et aux envois postaux.',
                'Zéro perte de données : repenser l\'interface (UX) avec une sauvegarde transparente et continue pour rassurer les utilisateurs.',
                'Automatiser la charge administrative en générant des documents officiels (PDF, courriers, Excel) directement depuis la plateforme.'
            ],
            steps: [
                'Modélisation de données : Conception d\'une base de données relationnelle (MySQL) complexe pour gérer les collectivités, les grades, les statuts et l\'historique des dossiers.',
                'Innovation UX (Temps réel) : Suppression des formulaires classiques avec bouton "Submit". Implémentation d\'un système de sauvegarde asynchrone (autosave) enregistrant chaque frappe instantanément.',
                'Tableau de bord et Data Viz : Développement d\'interfaces de suivi avec graphiques dynamiques pour piloter la campagne d\'un simple coup d\'œil.',
                'Moteur d\'exportation : Intégration d\'un système de génération automatisée massive de documents (listes d\'aptitude, courriers positifs/négatifs en PDF).'
            ],
            actors: [
                'Morgan (Développeur principal)',
                'Hervé Pinard (Tuteur)'
            ],
            results: `La transformation numérique est un succès total : l'application gère actuellement sa troisième campagne de promotion interne avec une grande stabilité. L'outil fait désormais partie du quotidien des utilisateurs. Mon rôle actuel s'inscrit dans une démarche d'amélioration continue (MCO), en concevant et déployant de nouvelles fonctionnalités directement dictées par les besoins du terrain.`,
            criticism: `Le parti pris de la sauvegarde en temps réel a été un vrai défi technique. Chaque modification d'un champ déclenchant une requête vers le serveur, cela peut générer une charge importante sur la base de données lors des pics d'utilisation en pleine campagne. Avec le recul, l'étape d'optimisation consistera à affiner ce mécanisme (via des techniques de "debounce" pour temporiser et regrouper les requêtes) afin de soulager le serveur tout en conservant cette UX fluide.`,
            linkedSkillIds: ['PHP', 'symfony', 'mysql', 'JavaScript', 'UX/UI']
        },
        {
            id: 'GED',
            title: 'Connecteur GRH / GED',
            shortDescription: 'Création d\'une passerelle d\'interopérabilité pour supprimer la double saisie et automatiser la migration de dossiers.',
            context: `Les agents du CDG64 subissaient une charge mentale et une perte de temps importantes : ils devaient saisir les mêmes informations dans l'application RH (GRH) puis dans l'outil de gestion documentaire (GED), avec un délai de latence d'un jour. Le projet consistait à créer une application "passerelle" pour synchroniser ces deux systèmes fermés, tout en gérant des scénarios métiers complexes comme les fusions de collectivités.`,
            objectives: [
                'Supprimer la double saisie pour les gestionnaires en remplissant les deux applications simultanément.',
                'Automatiser la migration et la réattribution des dossiers agents lors d\'événements administratifs majeurs (ex: fusion de communautés de communes).',
                'Faire évoluer le système d\'une solution de contournement temporaire vers une architecture pérenne et standardisée.'
            ],
            steps: [
                'Analyse et rétro-ingénierie : Compréhension des flux de données entre la GRH et la GED pour identifier les points de synchronisation possibles.',
                'Développement itératif (MVP) : Mise en place d\'une première version fonctionnelle en PHP/Symfony, communiquant de manière non-standard via des payloads XML envoyés dans les URL, faute d\'API disponible.',
                'Logique métier complexe : Création d\'algorithmes pour gérer le déplacement massif des dossiers et la mise à jour des rattachements lors des fusions de collectivités.',
                'Refonte architecturale (En cours) : Suite aux limites de stabilité de la première itération, prise de contact avec l\'éditeur du logiciel tiers pour exiger et intégrer une véritable API de communication.'
            ],
            actors: [
                'Morgan (Développeur en charge du connecteur)',
                'Hervé Pinard (Tuteur)',
                'Éditeur du logiciel tiers (Partenaire externe)'
            ],
            results: `Le projet est dans une phase de pivot stratégique. La première version a parfaitement prouvé la valeur métier de l'automatisation en faisant gagner un temps précieux aux agents. Actuellement, je travaille sur la V2 du projet en collaborant avec l'éditeur pour remplacer notre solution initiale par une intégration API propre et durable.`,
            criticism: `Ce projet a été une formidable leçon d'architecture logicielle. L'utilisation d'une "rustine" technique (passage de XML dans l'URL) pour pallier l'absence d'API standard a fini par sauter. Cela m'a appris qu'un contournement temporaire ne doit jamais devenir définitif sur un système critique. Aujourd'hui, j'ai le recul nécessaire pour bloquer ce genre de dette technique et exiger les bons outils (une API REST) pour garantir la fiabilité de mon code.`,
            linkedSkillIds: ['PHP', 'Symfony', 'Architecture', 'gestiondeprojet']
        },
        {
            id: 'reservation',
            title: 'Application de Réservation (Refonte)',
            shortDescription: 'Refonte complète de l\'outil de réservation de ressources (salles et véhicules) avec une stack moderne et une démarche qualité poussée.',
            context: `Le CDG64 nécessitait une refonte totale de son application de réservation de salles et de véhicules. L'enjeu était double : moderniser une application vieillissante en migrant vers une stack robuste (Spring Boot 3 / Angular 17+), tout en intégrant de nouvelles exigences métier, une meilleure UX, et en mettant en place des standards de qualité logicielle très stricts (Clean Architecture, CI/CD).`,
            objectives: [
                'Migrer vers une architecture moderne, sécurisée et pérenne (Java 17, Spring Boot 3, Angular 17+).',
                'Respecter le cahier des charges initial tout en ajoutant des fonctionnalités clés (gestion des conflits, filtres avancés, écrans d\'administration).',
                'Garantir un haut niveau de qualité via des tests automatisés (Unitaires, Intégration, E2E, Performance, Sécurité) et un pipeline CI/CD complet.'
            ],
            steps: [
                'Création de fondations solides : Mise en place d\'un serveur (le moteur de l\'application) fiable pour gérer les données, et d\'une interface utilisateur moderne permettant une navigation fluide et instantanée, sans rechargement de page.',

                'Qualité et pérennité du code : Écriture d\'un code "propre" et standardisé pour qu\'il soit facilement maintenable par d\'autres développeurs à l\'avenir. J\'ai également uniformisé la façon dont l\'application gère et explique les erreurs aux utilisateurs.',

                'Traduction du besoin métier en fonctionnalités : Intégration d\'un calendrier interactif complexe, mise en place de sécurités strictes (pour empêcher par exemple deux personnes de réserver la même salle au même moment) et création d\'un espace administrateur sécurisé selon le profil de chaque utilisateur.',

                'Filet de sécurité (Tests automatisés) : Création de robots virtuels qui vérifient en permanence le code. À chaque modification, ils s\'assurent que les nouvelles fonctionnalités ne créent pas de nouveaux bugs sur l\'existant, garantissant ainsi une application stable.',

                'Automatisation du déploiement (Usine logicielle) : Configuration d\'un système qui, à chaque sauvegarde de mon code, va automatiquement le tester, scanner les éventuelles failles de sécurité, puis préparer l\'application à être mise en ligne sans intervention humaine.'
            ],
            actors: [
                'Morgan (Développeur Fullstack & Chef de projet technique)'
            ],
            results: `Le projet est actuellement en cours de développement intensif. L'architecture de base (authentification JWT, vue calendrier) est opérationnelle. Le focus actuel est sur la finalisation des modules de réservation et l'écran administrateur, portés par le pipeline CI/CD qui valide chaque étape.`,
            criticism: `Le défi majeur actuel réside dans la gestion de l'expérience utilisateur (UX). Bien que l'architecture soit solide, l'interface nécessite encore un travail d'intégration d'animations (API View Transitions) et de micro-interactions (Skeletons de chargement, Drag & Drop sur le calendrier) pour rendre l'outil véritablement fluide et agréable pour les agents au quotidien.`,
            linkedSkillIds: ['Spring Boot', 'Angular', 'gestiondeprojet', 'Communication']
        },
        {
            id: 'recrutement',
            title: 'Application de Recrutement (Refonte)',
            shortDescription: 'Reprise, stabilisation et mise en production d\'une application métier critique sous Symfony.',
            context: `J'ai repris ce projet de refonte pour le CDG64 en cours de route, succédant à deux développeurs différents suite à des difficultés de gestion. Le défi principal n'était pas seulement de tenir une date butoir très serrée, mais surtout de plonger dans une architecture existante totalement inconnue. Reprendre du code "legacy" (l'héritage d'autres développeurs) est un exercice d'adaptation et de résilience bien plus complexe que de créer une application de zéro.`,
            objectives: [
                'Auditer et stabiliser une base de code existante en un temps record.',
                'Respecter le cahier des charges initial tout en intégrant de nouvelles demandes métier (comme l\'ajout d\'un compte-rendu spécifique pour les collectivités).',
                'Assurer la livraison et la mise en production avant la date butoir imposée.'
            ],
            steps: [
                'Cartographie par l\'UI : Utilisation stratégique d\'une demande client (intégration de couches CSS) pour parcourir chaque page, comprendre le routage et analyser les interactions de l\'application.',
                'Refactoring pragmatique : Tri du code existant, en composant avec ce qui fonctionnait et en supprimant ou réécrivant (PHP/Symfony) ce qui bloquait l\'avancement.',
                'Développement Backend : Implémentation des nouvelles fonctionnalités (comptes-rendus, logique métier) et correction des bugs avec MySQL et Symfony.',
                'Mise en production et stabilisation de l\'application.'
            ],
            actors: [
                'Moi-même (Développeur en charge de la reprise) et Hervé Pinard (Tuteur)',
            ],
            results: `Pari réussi : l'application a été livrée dans les temps et est en production depuis une quinzaine de jours. Elle est aujourd'hui fonctionnelle et utilisée par les gestionnaires. J'assure actuellement son maintien en conditions opérationnelles (MCO) et déploie des correctifs au fur et à mesure des retours utilisateurs.`,
            criticism: `La course contre la montre pour respecter la date butoir a eu un coût : la dette documentaire. L'application manque actuellement de documentation technique. C'est mon chantier prioritaire du moment : rédiger une documentation complète pour pérenniser le projet. De plus, comme mentionné dans mes compétences, cette urgence de livraison m'a aussi appris à mieux verrouiller les ajouts de fonctionnalités de dernière minute juste avant une mise en prod.`,
            linkedSkillIds: ['PHP', 'symfony', 'mysql', 'gestiondeprojet']
        },
        {
            id: 'gestion-conges',
            title: 'Maintenance Application Congés (Legacy)',
            shortDescription: 'Ma première mission d\'alternance : sauvetage d\'une application historique et gestion de la dette technique.',
            context: `Première application sur laquelle j'ai dû travailler en arrivant pour mon alternance, ce projet m'a immédiatement plongé dans la réalité du code "Legacy". Il s'agit d'une application de gestion des congés en PHP natif procédural et AJAX, sans architecture MVC. Au fil des mois, ce projet a été régulièrement mis en pause et décalé au profit de nouvelles urgences métier (comme l'application Recrutement ou Promotion Interne). C'est pourquoi cette tâche, bien qu'étant l'une des plus anciennes, m'accompagne encore en fil rouge aujourd'hui.`,
            objectives: [
                'Identifier et corriger des régressions complexes sur les algorithmes de calcul des dates de congés.',
                'Intervenir "chirurgicalement" dans un code fragile pour isoler les bugs sans briser les fonctionnalités existantes.',
                'Gérer les priorités : avancer sur cette maintenance de fond tout en répondant aux urgences des autres projets du CDG64.'
            ],
            steps: [
                'Audit initial : Analyse approfondie et rétro-ingénierie d\'un code PHP procédural non documenté au tout début de mon alternance.',
                'Optimisation Front/Back : Refonte partielle des requêtes asynchrones (AJAX) pour stabiliser l\'affichage.',
                'Débogage itératif : Traque des erreurs de logique dans le calcul des soldes, reprise à chaque fois que le planning des projets prioritaires le permet.'
            ],
            actors: [
                'Morgan (Développeur en charge de la maintenance)',
                'Hervé Pinard (Tuteur)'
            ],
            results: `Étant donné les fréquents changements de priorité de l'entreprise, le correctif complet n'est toujours pas finalisé à ce jour. Si l'audit et une partie des optimisations ont été réalisés, les bugs de calcul de soldes résistent encore, le temps m'ayant manqué pour me plonger de façon ininterrompue dans cette architecture complexe. Je continue de démêler ces algorithmes de calcul entre deux projets prioritaires.`,
            criticism: `Cette expérience est un cas d'école sur la dette technique. Maintenir du code Legacy sans tests ni framework demande un temps et une énergie considérables, avec un risque permanent de régression. Mon constat aujourd'hui est clair : plutôt que de continuer à appliquer des correctifs sur cette base vieillissante, ma recommandation architecturale est de geler la maintenance pour transférer la totalité de cette application vers des technologies récentes, robustes et maintenables, comme Symfony.`,
            linkedSkillIds: ['PHP', 'JavaScript', 'gestiondeprojet', 'Architecture']
        }
    ],
    experiences: [
        {
            id: 'exp1',
            date: '2024 - 2026',
            title: ' Alternance - Mastère Expert en Ingénierie du Logiciel',
            company: 'Centre de gestion de la fonction publique territoriale des pyrennees atlantiques',
            location: 'Pau, France',
            missions: [
                'Gestion de projet.',
                'Développement d\'application PHP/Symfony avec base de donnée MySQL.',
                'Développement d\'application Angular/Spring avec base de donnée MySQL.',
                'Maintenance d\'application PHP/Symfony avec base de donnée MySQL.',
                'Mise en place de pipelines CI/CD.'
            ]
        },
        {
            id: 'exp2',
            date: '2022 - 2024',
            title: 'Alternance - Bachelor Concepteur Développeur d\'Applications',
            company: 'Centre de gestion de la fonction publique territoriale des pyrennees atlantiques',
            location: 'Pau, France',
            missions: [
                'Développement d\'application PHP/Symfony avec base de donnée MySQL.',
                'Maintenance d\'application PHP/Symfony.',
            ]
        },
        {
            id: 'exp3',
            date: '2021 - 2022',
            title: 'Formation H3D2',
            company: 'Motion Design et conception 3D ',
            location: '',
            missions: [
                'Création de contenu 3D.',
                'Création de contenu 2D.',
                'Création de contenu vidéo.',
                'Utilisation de Blender/Unity. '
            ]
        },
        {
            id: 'exp4',
            date: '2018 - 2020',
            title: 'Master Dynamique des Ecosystèmes Aquatiques ',
            company: 'Université de Pau et des Pays de l\'Adour',
            location: 'Anglet, France',
            missions: [
                'Stage au Muséum National d\'Histoire Naturelle à Dinard sur la dynamique des populations de l\'anguille européenne (Anguilla anguilla) au cours des 150 dernière années en fonction du débit de la Loire. Projet Tempor\'eel. Utilisation de R et Python.',
                'Stage au Laboratoire de mathematique sur les débits des affluents de l\'Adour afin de modéliser un modèle prédictif du débit à Bayonne. Utilisation de MatLab et R.',
            ]
        },
        {
            id: 'exp5',
            date: '2015 - 2018',
            title: 'Licence Biologie des Organismes',
            company: 'Université de Pau et des Pays de l\'Adour',
            location: 'Anglet, France',
            missions: [
                'Stage à l\'INRAE de Saint Pée sur Nivelle sur la contamination des civelles d\'anguille européenne (Anguilla anguilla) au méthylmercure et leur comportement lors de la reprise alimentaire. Projet Micropolit. Utilisation de R.',
            ]
        }
    ]
};
