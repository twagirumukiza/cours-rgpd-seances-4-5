# Cours RGPD — Séances 4 & 5

Site web pédagogique complet : **obligations RGPD, droits des personnes et violations de données**.

Contenu issu du support de formation (BTS / formation professionnelle en informatique, cybersécurité ou conformité), enrichi d’une table des matières, d’un lexique et d’une FAQ.

## Contenu du site

- **Séance 4** — Acteurs, registre des traitements, bases légales et consentement
- **Séance 5** — Droits des personnes, qualification d’une violation, notification CNIL (72 h)
- **Cas pratiques** corrigés (format examen)
- **Lexique** des termes essentiels
- **FAQ** (14 questions/réponses)
- Fiche mémo des erreurs fréquentes + liens officiels CNIL / texte RGPD

## Aperçu local

Ouvrez simplement `index.html` dans un navigateur, ou lancez un serveur local :

```bash
# Python
python3 -m http.server 8000

# ou Node
npx serve .
```

Puis allez sur http://localhost:8000

## Déploiement sur GitHub Pages

### 1. Créer un dépôt GitHub

1. Allez sur [github.com/new](https://github.com/new)
2. Nommez le dépôt (ex. : `cours-rgpd-seances-4-5`)
3. Laissez-le **public** (nécessaire pour GitHub Pages gratuit)
4. Ne cochez pas « Add a README » (on a déjà les fichiers)

### 2. Pousser les fichiers

Dans le dossier `rgpd-cours-site` :

```bash
git init
git add .
git commit -m "Site web Cours RGPD Séances 4 et 5"
git branch -M main
git remote add origin https://github.com/VOTRE-USERNAME/cours-rgpd-seances-4-5.git
git push -u origin main
```

Remplacez `VOTRE-USERNAME` et le nom du dépôt par les vôtres.

### 3. Activer GitHub Pages

1. Sur la page du dépôt → **Settings** → **Pages** (menu de gauche)
2. Sous **Source** : choisissez **Deploy from a branch**
3. Branch : `main` — dossier : `/ (root)`
4. Cliquez sur **Save**

Après 1 à 2 minutes, le site sera accessible à l’adresse :

```
https://VOTRE-USERNAME.github.io/cours-rgpd-seances-4-5/
```

### Variante avec GitHub CLI (`gh`)

```bash
gh repo create cours-rgpd-seances-4-5 --public --source=. --remote=origin --push
# Puis Settings → Pages comme ci-dessus
```

## Structure des fichiers

```
rgpd-cours-site/
├── index.html      # Page unique (tout le cours)
├── css/
│   └── style.css   # Styles responsive
├── js/
│   └── main.js     # Menu mobile + highlight nav
└── README.md
```

## Licence / usage

Document à vocation pédagogique. Pour une situation réelle, se référer aux textes applicables et aux recommandations à jour de la CNIL.
