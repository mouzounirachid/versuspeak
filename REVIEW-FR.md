# VersusPeak, copie technique a relire

## Statut

Cette copie n'a pas ete deployee et ne modifie pas le depot distant. Ce n'est pas une garantie d'acceptation AdSense. Les pages Privacy/Terms/Contact sont des brouillons explicites. Ne pas remplacer le site en production avant d'avoir termine la liste ci-dessous.

Point de depart sauvegarde : `0cddbda249166fdafec295554d758151d63f6d9e`.
Branche de travail locale : `improvements/adsense-review`.

## Changements techniques

- URLs Next.js reelles pour les cinq categories, les six guides et les pages de confiance. Le contenu est present dans le HTML initial, meme sans JavaScript. Les pages editoriales sont pregenerees cote serveur (SSG), sans imposer un rendu serveur a chaque visite.
- Titres, descriptions et URL canonique propres a chaque page. Sitemap genere a partir des memes donnees, robots.txt adapte. Les URL inconnues renvoient 404.
- Anciens liens `#articles/...` et `#refrigerators` repris par une migration cote navigateur. Les nouveaux liens du site utilisent des chemins normaux.
- Navigation principale et pied de page sous forme de liens explorables. Presentation existante conservee.
- Pages About/Contact/Privacy/Terms/Disclosure accessibles directement. Aucun email invente n'est active.
- Suppression du balisage JSON-LD global qui affirmait des avis, des prix et une disponibilite en stock sans preuve actualisee.
- Liens sortants via `/go/identifiant-produit/enseigne`. Seuls les produits et enseignes connus sont acceptes, pas de parametre URL permettant une redirection libre.
- Evenement dataLayer `affiliate_click` avec `product_id`, `retailer`, `outbound_url`; delai de secours de 1,2 seconde et lien manuel sans JavaScript. Le clic est mesure avant la redirection, mais la reception dans GA4 reste a verifier apres configuration reelle.
- GTM prepare par variable d'environnement, aucun identifiant invente. Les quatre signaux de Consent Mode demarrent en `denied`. GA4 doit etre installe dans GTM, pas charge deux fois.
- Zone publicitaire reservee en fin des pages editoriales, desactivee par defaut. Aucune annonce active. ads.txt contient seulement des commentaires, sans faux compte editeur.
- Ancien identifiant Amazon sorti du code de redirection actif. Les liens Amazon restent sans tag tant qu'un identifiant approuve n'est pas configure.
- Verification TypeScript reactivee; petites corrections des effets React et du nettoyage du carrousel. Commande de production compatible Node.js.

## A confirmer avant publication

1. Confirmer ou reecrire les affirmations existantes concernant un laboratoire, 40 appareils achetes au detail, 400+ heures de tests, les scores, les prix verifies et les essais de fiabilite. Elles restent presentes dans les anciens contenus. Cette copie ne les valide pas.
2. Confirmer les prix et offres Black Friday, les dates, les liens exacts des produits et les droits sur les images. Les liens marchands n'ont pas tous ete reverifies dans cette intervention.
3. Fournir l'identite de l'exploitant et un email public fonctionnel. Completer et faire relire les pages juridiques selon les vrais prestataires, traitements, durees de conservation et pays vises. Les mentions de brouillon doivent etre remplacees par des informations exactes avant publication.
4. Fournir le conteneur GTM (`GTM-...`) et l'identifiant GA4 (`G-...`). Creer la Google Tag et le declencheur `affiliate_click` dans GTM. Verifier le suivi avec les outils de diagnostic et un vrai clic de test.
5. Choisir et configurer une plateforme de consentement adaptee, notamment une CMP certifiee Google si necessaire pour la diffusion dans les zones concernees. Consent Mode seul n'est pas une CMP et ne recueille pas le consentement. Aucun bandeau maison ne pretend le remplacer dans cette copie.
6. Ajouter la ligne ads.txt exacte fournie par le propre compte AdSense apres sa configuration; n'activer aucune annonce avant approbation et controles.
7. Confirmer les programmes d'affiliation approuves et les identifiants. Les anciennes mentions de participation dans le pied de page meritent egalement verification.
8. Verifier le serveur de production, les variables, le domaine, les redirections HTTPS et la configuration d'hebergement sur une preproduction avant tout remplacement.

## Installation locale

Node.js 22 a ete utilise pour les tests. npm est le gestionnaire valide pour cette revision; `package-lock.json` fixe les versions resolues. L'ancien verrou Bun est retire pour eviter une selection ambiguë du gestionnaire par l'hebergeur.

```sh
npm ci --ignore-scripts
npx prisma generate
cp .env.example .env.local
# Completer seulement les valeurs confirmees.
npm run lint
npx tsc --noEmit
npm run build
npm start
```

Aucune migration ni remise a zero de base de donnees n'est necessaire pour ces modifications. Ne pas executer les scripts de reinitialisation Prisma sur une base existante.

## Variables

- `NEXT_PUBLIC_GTM_ID` : vide par defaut. GTM ne se charge pas sans un ID de format valide.
- `NEXT_PUBLIC_ENABLE_AD_SLOTS` : `false` par defaut. `true` affiche la zone reservee, mais n'installe pas AdSense.
- `NEXT_PUBLIC_CONTACT_EMAIL` : email public confirme. Sinon la page affiche clairement que cette information manque.
- `NEXT_PUBLIC_AMAZON_TAG` : facultatif, propre identifiant Amazon Associates approuve.

Les variables `NEXT_PUBLIC_` font partie du code envoye au navigateur. Ne jamais y mettre de secret. Reconstruire le site apres modification de ces variables.

## Controles effectues

- Build de production et verification TypeScript : reussis.
- ESLint : aucune erreur ni avertissement apres corrections.
- Les 21 URL du sitemap repondent 200 et contiennent un titre H1 et une URL canonique adaptes dans le HTML initial.
- Quatre URL invalides renvoient 404, dont une destination marchande inconnue.
- Guide lisible avec JavaScript desactive.
- Migration d'un ancien lien hash vers son nouveau chemin : reussie.
- Navigation mobile du menu vers les guides : reussie.
- Verification de l'evenement `affiliate_click` dans le dataLayer local : reussie. Aucun clic de test n'a ete envoye a GA4 ou a une regie.
- Captures inspectees sur ecran large et mobile 390 px, pas de debordement horizontal detecte, aucun message d'erreur JavaScript observe pendant ces tests.

Non testes : reception reelle GA4/GTM, consentement CMP, annonces AdSense, statistiques de revenus, integration a l'hebergeur, tous les liens et toutes les images du site, preuve des affirmations editoriales.

## Revenir au point de depart

Le ZIP `versuspeak-backup-original.zip` contient les fichiers sources initiaux.
Le fichier `versuspeak-backup-original.bundle` conserve egalement l'historique Git disponible.

Pour restaurer sans ecraser le travail en cours, creer un autre dossier :

```sh
git clone versuspeak-backup-original.bundle versuspeak-restored
cd versuspeak-restored
git rev-parse HEAD
# Resultat attendu : 0cddbda249166fdafec295554d758151d63f6d9e
```

Cette sauvegarde couvre le depot uniquement, pas les reglages de l'hebergeur, les secrets, une base externe ou les ressources non suivies par Git. Toute remise en production doit etre validee separement.
