# AI Prompt Library (DevOps)
## Projet DevOps — Chaîne de développement et déploiement

**Projet à réaliser en solo.**

---

## Contexte

Les outils d'intelligence artificielle sont aujourd'hui utilisés dans de nombreux domaines. Un élément clé de leur efficacité est la **qualité des prompts** (instructions données à l'IA).

Dans ce projet vous allez créer une **petite bibliothèque de prompts IA**. L'objectif principal n'est pas de développer une application complexe, mais d'apprendre à mettre en place une **chaîne de développement et de déploiement moderne**, comme dans les entreprises.

### Compétences principales travaillées

- **Git**
- **Git Flow**
- **Docker**
- **GitHub Actions** (Intégration Continue)
- **CI/CD**

---

## Objectif pédagogique

À la fin du projet vous devrez être capables de :

- Travailler en équipe avec Git
- Utiliser Git Flow
- Conteneuriser une application avec Docker
- Créer une pipeline CI avec GitHub Actions
- Comprendre le fonctionnement d'un déploiement automatisé

Le **produit développé restera volontairement très simple**.

---

## Description de l'application

Vous allez créer une page web statique appelée **AI Prompt Library**.

Cette page affiche une **liste de prompts** utilisés pour interagir avec des intelligences artificielles.

Chaque prompt contient :

- **un titre**
- **une catégorie**
- **le texte du prompt**

### Exemple

- **Titre :** Générer un post LinkedIn pédagogique
- **Catégorie :** Marketing
- **Prompt :** *"Agis comme un expert LinkedIn et écris un post pédagogique sur l'importance de l'apprentissage continu pour les développeurs."*

---

## Contraintes techniques

### Technologies

- **Frontend uniquement :**
  - HTML
  - CSS
  - JavaScript
- **Aucune base de données.**

### Stockage des données

Les prompts seront stockés dans un fichier : **`prompts.json`**

#### Exemple de `prompts.json`

```json
[
  {
    "title": "Expliquer un concept technique",
    "category": "Education",
    "prompt": "Explique ce concept comme si j'avais 10 ans."
  },
  {
    "title": "Créer un post LinkedIn",
    "category": "Marketing",
    "prompt": "Rédige un post LinkedIn pédagogique sur l'apprentissage du code."
  }
]
```

---

## Fonctionnalités (MVP)

### 1. Afficher les prompts

L'application doit afficher les prompts présents dans `prompts.json`.
Chaque prompt doit afficher : **titre**, **catégorie**, **texte**.

### 2. Ajouter un prompt (frontend uniquement)

Un petit formulaire doit permettre d'ajouter un prompt dans la liste affichée.

**Important :**

- le prompt **n'est pas sauvegardé**
- il est simplement **ajouté dans la mémoire du navigateur**

---

## Structure recommandée du projet

```
project/
│
├── index.html
├── style.css
├── app.js
├── prompts.json
│
├── Dockerfile
└── .github/workflows/ci.yml
```

---

## Git et Git Flow

**La gestion de Git est primordiale.** L'historique du dépôt doit refléter une utilisation correcte de Git Flow : branches, merges et commits doivent correspondre au modèle (main, develop, feature, release, hotfix). Un historique propre et cohérent sera pris en compte dans l'évaluation.

Le projet doit utiliser **Git Flow**.

### Branches principales

- **`main`**
- **`develop`**

### Branches de fonctionnalités

- `feature/display-prompts`
- `feature/load-json`
- `feature/add-prompt-form`
- `feature/improve-ui`

### Branches release

- `release/v1`

### Branches correctives

- `hotfix/fix-js-error`

---

## Docker

L'application doit pouvoir être **lancée dans un conteneur Docker**.

Le projet doit contenir un **`Dockerfile`**.

L'application doit être **accessible via un port web**.
Exemple : **http://localhost:3000**

---

## Intégration Continue (CI)

Une pipeline **GitHub Actions** doit être créée.

### Déclenchement

- lors d'un **push**
- lors d'une **pull request**

### Actions de la pipeline

- récupérer le projet
- construire l'image Docker
- vérifier que l'image se construit correctement

---

## Bonus : Déploiement sur EC2

Il est possible de déployer l'application sur un serveur cloud. **Cette partie est optionnelle.**

Si vous souhaitez réaliser ce bonus, vous pouvez demander un accès à une instance EC2.

**Pour obtenir l'accès**, envoyez un email à : **coach@colint.school**

L'email doit contenir :

- votre nom
- le lien vers votre dépôt GitHub

Une fois l'accès obtenu, vous pourrez :

- vous connecter à l'instance
- déployer votre application Docker
- rendre votre application accessible sur Internet

---

## Planning recommandé (14 jours)

| Période | Thème | Contenu |
|--------|--------|--------|
| **Jours 1–3** | Git | Création du repo, commits, branches, pull requests |
| **Jours 4–5** | Git Flow | develop, feature branches, release, hotfix |
| **Jours 6–8** | Docker | Création du Dockerfile, build de l'image, lancement du conteneur |
| **Jours 9–11** | GitHub Actions | Pipeline CI, build Docker automatisé |
| **Jours 12–14** | Finalisation | Amélioration du projet, stabilisation, préparation de la démonstration |

---

## Livrables

### Dépôt GitHub

Le dépôt doit contenir :

- code source
- Dockerfile
- pipeline GitHub Actions
- README clair

### Application web

Une page affichant la bibliothèque de prompts.

### Docker

Le projet doit fonctionner avec :

- `docker build` + `docker run`
  **ou**
- `docker compose up`

### Pipeline CI

La pipeline GitHub Actions doit **fonctionner**.

---

## Résultat attendu

À la fin du projet vous aurez mis en place une **chaîne complète de livraison logicielle** :

```
Code → Git + Git Flow → Docker → GitHub Actions (CI) → CI/CD → Déploiement (bonus EC2)
```

C'est une chaîne similaire à celles utilisées dans les entreprises pour mettre en production des applications.

---

## Ressources pour monter en compétence

### Git

- [Documentation officielle Git](https://git-scm.com/doc)
- [Pro Git (livre gratuit en ligne)](https://git-scm.com/book/fr/v2)
- [Learn Git Branching (tutoriel interactif)](https://learngitbranching.js.org/?locale=fr_FR)

### Git Flow

- [Git Flow : un modèle de branches pour Git](https://nvie.com/posts/a-successful-git-branching-model/)
- [GitHub Flow (variante simplifiée)](https://docs.github.com/fr/get-started/quickstart/github-flow)

### Docker

- [Documentation officielle Docker](https://docs.docker.com/)
- [Get Started with Docker](https://docs.docker.com/get-started/)
- [Docker — Tutoriel pour débutants (MDN)](https://developer.mozilla.org/fr/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line#docker)

### GitHub Actions

- [Documentation GitHub Actions](https://docs.github.com/fr/actions)
- [Comprendre GitHub Actions](https://docs.github.com/fr/actions/learn-github-actions/understanding-github-actions)
- [Workflow syntax for GitHub Actions](https://docs.github.com/fr/actions/using-workflows/workflow-syntax-for-github-actions)
