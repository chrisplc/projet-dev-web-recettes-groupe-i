# Recettes et listes de courses

Projet Dev Web ESILV (MBININ230326), thème 2.

Application pour gérer des recettes, des ingrédients et des listes de courses. Les utilisateurs gèrent leurs recettes et leurs listes, avec partage ou non selon le rôle. Les administrateurs supervisent les données globales.

## Stack

- Front : React, Vite
- Back : Node.js, Express 5, Sequelize
- Base de données : PostgreSQL 17
- Lancement : Docker Compose

## Structure

```
backend/    API Express
frontend/   Application React
compose.yml Base, back et front
```

## Lancer le projet

Prérequis : Docker et Docker Compose.

1. Cloner le dépôt

   ```bash
   git clone https://github.com/chrisplc/projet-dev-web-recettes-groupe-i.git
   cd projet-dev-web-recettes-groupe-i
   ```

2. Créer le fichier d'environnement (optionnel, des valeurs par défaut existent)

   ```bash
   cp .env.example .env
   ```

3. Démarrer

   ```bash
   docker compose up
   ```

4. Ouvrir

   - Front : http://localhost:5173
   - API : http://localhost:3000/api/health

Arrêter avec `docker compose down`. Ajouter `-v` pour effacer la base.

## Lancer sans Docker

Prérequis : Node.js 22 ou plus et un PostgreSQL local.

```bash
cd backend
npm install
DATABASE_URL=postgres://user:password@localhost:5432/recettes npm run dev
```

Dans un second terminal :

```bash
cd frontend
npm install
npm run dev
```
