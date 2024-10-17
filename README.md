# Drupal and ReactJS Headless Portfolio Project

This project is part of the Drupal Course at BCH. It is a personal portfolio. This project is a full-stack web application using Drupal as a backend CMS (Content Management System) and React as the frontend. The data (content) is stored in Drupal, fetched via JSONAPI module and displayed in React. The main pages include Home, About Me, Projects, and Contact.

### Table of Contents

* Overview

* Features

* Technologies

* Setup Instructions

  - Backend (Drupal)

  - Frontend (React)

* Usage

* Terminal Commands

* License

### Overview

This project demonstrates the decoupling of a Drupal backend and a React frontend. The content (like Home, About, Projects, and Contact) is managed through the Drupal admin interface, and React is used to fetch and display the content dynamically using Axios and the JSON module in Drupal.

### Features

* Drupal as CMS.

* ReactJS Frontend: Content displays dynamically with a responsive UI

* Axios for HTTP requests: Fetch data from Drupal using `'jsonapi'` endpoint.

* Bootstrap and css used for styling and to have enhanced user experience.


### Technologies

* Drupal (Backend)

* React.js (Frontend)

* Axios (for API requests)

* Bootstrap (for styling)

* JSON API Drupal module

### Setup and instructions

**Backend**

1. Drupal app needs to be installed, if it hasn't already.

```bash
mkdir mydrupalapp
cd mydrupalapp
lando init --recipe drupal10 --webroot web --name mydrupalapp
```

```bash
lando composer create-project drupal/recommended-project .
```

```bash
lando start
```

```bash
lando drush site:install --db-url=mysql://drupal10:drupal10@database/drupal10 --account-name=admin --account-pass=admin --site-name="My Drupal App"
```
- To restart the server:

```bash
lando restart
```

>> To clear cache:

```bash
lando drush cr
```

2. Install and extend: `'JSONAPI Module'` or `'JSONAPI extras'`

```bash
lando composer require drupal/jsonapi_extras
```

or

```bash
lando composer require drupal/jsonapi
```

>> In order to use the module it must be enabled:

```bash
lando drush en jsonapi -y
```

- Other useful command:

To check lando logs:

```bash
lando logs
```

**Frontend**

we can install the react vite project

```bash
npm create vite@latest
```
