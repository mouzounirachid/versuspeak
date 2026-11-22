# Consent and policy preview, 22 novembre 2026

Apercu uniquement. Aucune publication en production ni aucun push GitHub n'est autorise par cette livraison.

## Comportement
- Consentement Google refuse par defaut pour analytics_storage, ad_storage, ad_user_data et ad_personalization.
- GTM n'est pas charge tant que le visiteur n'autorise pas Analytics. Aucun ping Analytics avant ce choix.
- Refuser n'empeche pas la lecture. Les trois boutons ont la meme presentation. La case Analytics est decochee au depart.
- Autoriser accorde uniquement analytics_storage. Les trois permissions publicitaires restent refusees.
- Cookie preferences dans le pied de page permet de revoir le choix.
- Retrait : signal refuse, suppression des cookies Analytics accessibles, puis rechargement pour arreter le code deja charge. Cela ne supprime pas les informations deja recues par Google et ne peut annuler une requete deja en cours.
- Choix local conserve 180 jours. Pas de transmission de ce choix a une base de donnees. Si le stockage est bloque, le choix n'est pas conserve entre pages. Sans JavaScript, Analytics ne charge pas.
- Publicite toujours inactive. Pas de script AdSense, pas de faux identifiant editeur, pas de modification du conteneur GTM v2.

## Limite AdSense
Cette banniere de choix Analytics n'est PAS une CMP certifiee Google/IAB TCF. Une CMP certifiee doit etre configuree avant de diffuser des annonces AdSense dans les regions couvertes par les exigences Google. Aucun engagement payant ou abonnement CMP n'est cree.

## Privacy et Terms
Le texte decrit l'editeur Rachid Mouzouni, contact@versuspeak.com, Vercel, Cloudflare, GA4 via GTM, les cookies et le retrait du consentement. AdSense est decrit comme prevu mais inactif. Aucun faux laboratoire, societe, adresse postale, tribunal obligatoire ou garantie de conformite n'est ajoute.

Points restant a valider avant production :
- Une adresse publique de l'operateur, si applicable. Ne pas publier son domicile par inference.
- Texte sur la conservation des emails de contact : conservation le temps necessaire pour repondre et suivre la demande, puis suppression sauf obligation legale. Le oui recent etait groupe avec d'autres questions, donc cette phrase doit etre relue dans l'apercu.
- Duree exacte de conservation des evenements de la propriete GA4 VersusPeak. Le compte Analytics accessible ne montre que CalculUnits. Ne pas reprendre son reglage pour un autre site.
- Relecture juridique applicable a l'activite et aux pays servis. Aucun label de conformite ou d'approbation AdSense n'est revendique.

## Sources consultees
- https://support.google.com/adsense/answer/13554020?hl=en : CMP certifiee et IAB TCF.
- https://policies.google.com/technologies/partner-sites?hl=en-US : informations transmises a Google par les sites partenaires.
- https://developers.google.com/analytics/devguides/collection/ga4/tag-options : cookies GA4, duree par defaut de deux ans.
- https://developers.google.com/analytics/devguides/collection/ga4/reference/config : expiration et renouvellement des cookies.
- https://vercel.com/legal/privacy-notice : informations traitees par Vercel.
- https://www.cloudflare.com/privacypolicy/ : informations de connexion et de trafic traitees par Cloudflare.

## Tests
Build de production avec NEXT_PUBLIC_GTM_ENABLED=true, TypeScript, ESLint et audit editorial.
Navigateurs vierges : aucune requete GTM/Analytics/AdSense avant choix ou apres refus + rechargement.
Acceptation : consent/update avant gtm.js, analytics_storage granted, publicite denied, page_view G-YEBGG2CW2D avec gcs=G101. Les requetes de collecte sont interceptees dans le test pour ne pas gonfler les statistiques avec les visites de test.
Retrait + rechargement : plus de GTM, plus de cookies GA accessibles, plus de requetes Google sur les pages suivantes.
Stockage bloque et JavaScript desactive verifies. Bureau 1440px et mobile 390px verifies, sans erreur JavaScript ni debordement horizontal de page. Le tableau des cookies a son propre defilement horizontal sur petit ecran.
