Deploying React App to GitHub Pages using GitHub Actions

This project automates the deployment of a React app to GitHub Pages using GitHub Actions.

Prerequisites

Before proceeding, ensure you have the following:

A GitHub repository for your React project.

GitHub Actions enabled.

Required secrets added to the repository settings:

REACT_APP_EMAILJS_SERVICE_ID

REACT_APP_EMAILJS_TEMPLATE_ID

REACT_APP_EMAILJS_USER_ID

Steps to Deploy

1. Setup GitHub Actions Workflow

Create a .github/workflows/deploy.yml file in your project directory with the following content:

ame: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-22.04

    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18

      - name: Create .env file
        run: |
          echo "REACT_APP_EMAILJS_SERVICE_ID=${{ secrets.REACT_APP_EMAILJS_SERVICE_ID }}" >> .env
          echo "REACT_APP_EMAILJS_TEMPLATE_ID=${{ secrets.REACT_APP_EMAILJS_TEMPLATE_ID }}" >> .env
          echo "REACT_APP_EMAILJS_USER_ID=${{ secrets.REACT_APP_EMAILJS_USER_ID }}" >> .env

      - name: Install dependencies
        run: npm install

      - name: Build the React app
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          branch: gh-pages
          folder: build
          token: ${{ secrets.GITHUB_TOKEN }}

2. Configure GitHub Pages

Go to your GitHub repository settings.

Navigate to the Pages section.

Under the Branch section, select gh-pages.

Save the settings.

3. Pushing to Main Branch

Once the workflow is set up, push your code to the main branch:

git add .
git commit -m "Deploying React app"
git push origin main

4. Verifying Deployment

After the GitHub Action completes successfully, your React app will be available at:

https://<your-github-username>.github.io/<repository-name>

Additional Notes

Ensure that your package.json has the homepage field set correctly:

"homepage": "https://<your-github-username>.github.io/<repository-name>/"

If you encounter deployment issues, check the Actions tab in your repository to debug.

Happy Deploying! 🚀