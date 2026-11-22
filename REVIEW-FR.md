# VersusPeak, revision editoriale et technique

## Statut de cette copie

Copie de travail a relire. Aucun changement du depot distant, aucune mise en ligne et aucune demande AdSense n'ont ete effectues. Cette revision remplace la premiere copie technique, qui conservait encore les anciens contenus non verifies.

Sauvegarde intacte du point de depart : `0cddbda249166fdafec295554d758151d63f6d9e`.
Branche locale : `improvements/adsense-review`.

## Corrections editoriales

L'utilisateur a confirme que les essais en laboratoire n'avaient pas eu lieu, que son inscription Amazon n'etait pas terminee et que contact@versuspeak.com etait son adresse publique.

- Plus de laboratoire, appareils achetes pour essais, 400+ heures, journal de temperature, mesures de bruit, tests de lavage ou essais de fiabilite attribues a VersusPeak.
- Plus de byline "VersusPeak Lab", de notes sur 10, de sous-notes inventees, de classements de performance ni de gagnants issus de faux tests.
- Plus de prix en direct, prix verifies, historique de quatorze mois, reductions Black Friday ou compte a rebours presentant des offres non verifiees.
- Les cinq categories et six guides sont reecrits comme des comparaisons de specifications, des listes de verification et une lecture critique des sources.
- Les 40 anciennes fiches non verifiees ne sont pas presentees comme un travail de recherche. Elles ont ete retirees au profit de six exemples limites, documentes par leurs fabricants, sans prix ni note de performance.
- Le modele LG de refrigerateur est maintenant le LRSXS2706S, reellement documente comme un side-by-side de 27 cu. ft. Il n'est pas confondu avec l'ancien identifiant proche non verifie.
- Le televiseur LG C5 est correctement decrit comme un modele 2025, sans le rebaptiser nouveaute 2026.
- Les specifications LG WM4000HWA / Speed Queen TC5003WN et Bosch SHP78CM5N / Miele G 7566 sont attribuees aux fabricants. Les differents chiffres de bruit sont cites avec leur unite et ne sont pas presentes comme un test controle commun.
- Les limites du rapport de service Yale sont explicites : premiere annee, marques vendues/entretenues et zone regionale. Aucun taux national, duree de vie ou score par modele n'en est deduit.
- Aucune analyse d'avis proprietaires ni agregation de notes n'est revendiquee sans jeu de donnees reel.
- Les liens de sources sont visibles en bas des guides, avec leur editeur, leur type et leur limite. Voir EDITORIAL-SOURCES.md.

Le style conserve la marque, la palette orange/noir/blanc et les polices. Les anciennes images non verifiees ne sont plus utilisees par les pages editoriales. Les mises en avant de promotions sont remplacees par des entrees vers les guides et leurs sources.

## Affiliation et publicite

Amazon Associates n'est pas approuve. Aucun autre programme approuve n'a ete etabli. Les declarations d'adhesion/commissions acquises et les appels a l'achat affilies sont retires.

La table `APPROVED_AFFILIATE_OFFERS` est vide. Les anciennes URL `/go/...` renvoient donc 404. Le composant de suivi est conserve pour une integration future, mais rien ne l'active tant qu'une destination approuvee n'est pas ajoutee volontairement. Il n'y a pas de simple bouton permettant d'activer les anciens liens non approuves.

La pub display reste prevue comme premiere source de revenus, mais aucune regie n'est active. L'emplacement reserve est desactive. ads.txt ne contient qu'un commentaire, sans faux compte editeur.

## Travail technique conserve

- 21 vraies URL Next.js : cinq categories, six guides et pages de confiance/navigation.
- Contenu editorial genere cote serveur au build (SSG), disponible dans le HTML initial et lisible sans JavaScript. Pas besoin d'un rendu serveur a chaque visite pour resoudre l'ancien routeur hash.
- Navigation principale et pied de page explorables, migration des anciens liens hash, erreurs 404 reelles.
- Metadonnees et URL canonique par page, sitemap genere, robots.txt adapte.
- GTM prepare mais inactif sans l'identifiant reel. Quatre signaux Consent Mode en denied avant le chargement. GA4 doit etre configure dans GTM, sans deuxieme chargement dans le code.
- Suppression de l'ancien JSON-LD affirmant des avis, prix ou disponibilites non verifies.
- TypeScript non masque, ESLint propre, demarrage Node.js, package-lock.json pour des installations npm reproductibles.
- Anciens scripts reinjectant des prix et scores supprimes; un controle de contenu est fourni dans scripts/audit-content.mjs.

## Informations ou controles encore necessaires

1. Identite de l'exploitant/auteur a confirmer par l'utilisateur. La marque VersusPeak est utilisee comme byline provisoire, sans inventer une equipe ni une identite legale.
2. Identifiants GTM et GA4 reels. La reception reelle des evenements, les choix de consentement et les rapports GA4 ne sont pas encore testes.
3. Completer et faire relire Privacy/Terms selon l'exploitant, les vrais prestataires, traitements, durees de conservation et pays vises. Ces pages sont encore marquees comme brouillons.
4. Configurer une plateforme de consentement adaptee avant les services qui l'exigent. Consent Mode ne remplace pas une CMP ni un bandeau fonctionnel. Verifier les exigences de certification applicables avant Google ads dans les zones concernees.
5. Faire approuver le site par la regie choisie, puis ajouter sa propre ligne ads.txt et les identifiants exacts. Cette revision ne garantit pas une approbation AdSense.
6. Pour toute affiliation future : approbation reelle, liens controles, mise a jour des mentions et de la politique de confidentialite avant activation.
7. Valider le resultat sur une preproduction de l'hebergement reel avant tout remplacement. Les reglages de domaine, serveur, secrets et bases externes ne font pas partie de la sauvegarde Git.

## Installation

Tests effectues avec Node.js 22 et npm. Le verrou Bun a ete retire pour eviter une selection ambiguë du gestionnaire.

```sh
npm ci --ignore-scripts
npx prisma generate
cp .env.example .env.local
node scripts/audit-content.mjs
npm run lint
npx tsc --noEmit
npm run build
npm start
```

Aucune migration ou reinitialisation de base de donnees n'est necessaire pour cette intervention. Ne pas lancer les scripts Prisma de remise a zero sur une base existante.

Variables :

- `NEXT_PUBLIC_GTM_ID` : vide jusqu'a reception du propre conteneur.
- `NEXT_PUBLIC_ENABLE_AD_SLOTS=false` : la valeur true ne fait qu'afficher une zone reservee, elle n'installe pas AdSense.
- `NEXT_PUBLIC_CONTACT_EMAIL=contact@versuspeak.com` : adresse confirmee. La page l'utilise aussi comme valeur de secours.

Les valeurs NEXT_PUBLIC_ sont visibles par les visiteurs. Ne jamais y mettre de secret et reconstruire apres modification.

## Verification de cette revision

Build, TypeScript et ESLint reussis. Les 21 URL du sitemap repondent 200 avec H1 et canonique dans le HTML initial. Les pages inconnues et anciennes destinations affiliees inactives renvoient 404. Navigation mobile, migration hash et choix du comparateur verifies. Article et ses liens de sources lisibles sans JavaScript. Aucun appel a l'achat affilie ni script GTM actif dans la configuration par defaut. Mailto du contact confirme. Aucun message d'erreur JavaScript observe pendant ces controles. Captures desktop/mobile inspectees, sans debordement horizontal dans les vues controlees.

Details : REVIEW-TESTS.txt. Un controle automatise de motifs anciens ne constitue pas une certification factuelle ou juridique.

## Restaurer le point de depart sans ecraser le travail

Le ZIP original conserve les fichiers initiaux; le bundle original conserve aussi l'historique disponible.

```sh
git clone versuspeak-backup-original.bundle versuspeak-restored
cd versuspeak-restored
git rev-parse HEAD
# attendu : 0cddbda249166fdafec295554d758151d63f6d9e
```

Cette restauration cree un autre dossier. Elle ne remet pas automatiquement un hebergement en production et ne restaure pas les elements externes au depot.
