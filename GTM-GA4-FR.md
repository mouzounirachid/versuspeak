# GTM / GA4 : les étapes dans le tableau de bord

Conteneur du site : **GTM-P44DRGH4**. L'identifiant a été lu dans ta capture. L'identifiant GA4 **G-...** est encore attendu : ce sont deux identifiants différents.

## Ce qui est déjà préparé dans le code

Le site utilise le composant `GoogleTagManager` de `@next/third-parties/google`. Ne colle pas un deuxième snippet GTM ou GA4 dans le site.

Le conteneur est enregistré, mais son chargement est bloqué par défaut : `NEXT_PUBLIC_GTM_ENABLED=false`. Les quatre consentements démarrent en `denied`. Le code ne constitue pas un bandeau de consentement ou une CMP.

## Quand ton identifiant GA4 G-... existe

1. Ouvre **Google Tag Manager**, puis le conteneur **GTM-P44DRGH4** et son espace de travail.
2. Va dans **Balises (Tags) > Nouvelle**. Nomme la balise `GA4 - VersusPeak`.
3. Dans **Configuration de la balise**, choisis **Balise Google (Google tag)**. Dans **ID de balise**, colle ton identifiant **G-...**, pas le GTM-....
4. Dans **Déclenchement**, choisis **Initialization - All Pages** (initialisation, toutes les pages), puis **Enregistrer**. N'ajoute pas une deuxième balise manuelle `page_view` pour la même chose.
5. Prépare la plateforme de consentement. Son réglage de consentement utilise le déclencheur **Consent Initialization - All Pages**, avant les autres balises. Ce n'est pas le déclencheur de la balise Analytics de l'étape 4. Le choix et la configuration de la CMP restent à terminer; Consent Mode seul ne les remplace pas.
6. Pour le test, utilise une préproduction avec la CMP configurée. L'activation contrôlée de `NEXT_PUBLIC_GTM_ENABLED=true` nécessite une reconstruction du site. Tant que ce réglage reste `false`, Tag Assistant ne trouvera pas de conteneur chargé, c'est normal. Dans GTM, clique **Prévisualiser (Preview)**, saisis l'URL de cette préproduction et connecte Tag Assistant. Vérifie les états de consentement avant choix, après refus et après acceptation, puis l'envoi attendu vers la bonne propriété GA4, sans double `page_view`.
7. Si les tests passent, clique **Envoyer (Submit) > Publier et créer une version (Publish and Create Version)**. Donne un nom clair, par exemple `GA4 initial - consentement vérifié`, puis **Publier**. Pour garder seulement un brouillon/version sans mise en service, choisis **Créer une version**. Publier le conteneur ne déploie pas le nouveau code du site et ne retire pas son interrupteur de désactivation.

Avant activation sur le vrai site : politique de confidentialité adaptée, CMP validée, bonnes destinations et tests terminés. La copie fournie reste désactivée. Aucune publication GTM ou mise en ligne du site n'a été faite pour toi.

## Plus tard seulement : affiliate_click

À ignorer tant qu'Amazon n'est pas approuvé et que les liens affiliés ne sont pas réactivés dans le code. Aujourd'hui les destinations approuvées sont vides et les anciens liens `/go/...` sont inactifs.

1. **Variables > Nouvelle > Variable de couche de données**, version 2 : crée `DLV - product_id` avec le nom `product_id`. Fais pareil pour `retailer` et `outbound_url`.
2. **Déclencheurs > Nouveau > Événement personnalisé (Custom Event)** : nom exact de l'événement `affiliate_click`, sans expression régulière. Enregistre.
3. **Balises > Nouvelle > Google Analytics : événement GA4** : identifiant de mesure **G-...**, nom d'événement `affiliate_click`.
4. Ajoute les paramètres `product_id`, `retailer`, `outbound_url`, avec les trois variables correspondantes. N'envoie pas d'adresse email ni d'autre information personnelle dans les paramètres ou URL.
5. Associe le déclencheur `affiliate_click`, teste un vrai lien autorisé en prévisualisation et dans les diagnostics GA4, puis publie une nouvelle version. Ce n'est pas un événement d'achat ni un revenu encaissé.

## Références vérifiées

- Installer le conteneur : https://support.google.com/tagmanager/answer/14847097?hl=en
- Ajouter la balise Google : https://support.google.com/tagmanager/answer/14842872?hl=en
- Vérifier et publier : https://support.google.com/tagmanager/answer/9442095?hl=en
- Ordre des déclencheurs : https://support.google.com/tagmanager/answer/7679319?hl=en
- Événement personnalisé : https://support.google.com/tagmanager/answer/7679219?hl=en
- Variables de couche de données : https://support.google.com/tagmanager/answer/7683362?hl=en
- Balise d'événement GA4 : https://support.google.com/tagmanager/answer/13034206?hl=en
- Composant Next.js : https://nextjs.org/docs/app/guides/third-party-libraries
