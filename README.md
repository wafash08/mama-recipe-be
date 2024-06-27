# Mama Recipe

<div align="center">
  <img src="./assets/logo.png">
  <br>
  <br>
  <a href="https://wafash-mama-recipe.vercel.app/">View Demo Front End</a>
  <span>|</span>
  <a href="https://mama-recipe-five.vercel.app/">View Demo Back End</a>
</div>

## Table of Contents

- [About](#about)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Project Repository](#project-repository)
- [Postman Documentation](#postman-documentation)
- [Features](#features)
- [Getting Started](#getting-started)
- [Contributions](#contributions)
- [Contact](#contact)
- [Related Projects](#related-projects)

## About

The backend of MamaRecipe is designed to support the functionality of the MamaRecipe Front End. It provides secure and efficient APIs for user authentication, recipe list, add, edit, delete, save, like as well as user profile. Built with scalability and performance in mind, the backend ensures smooth interactions between the frontend and the database, enabling a seamless user experience for both job seekers and employers.

These RESTful APIs are built by [Muhammad Risano](https://github.com/muhammadrisano). Feel free to explore the code.

Make sure to explore the API by visiting the [Postman documentation](https://documenter.getpostman.com/view/7675329/2sA3QqerrC) and experience its full range of features.

## Technologies Used

The APIs are built with following technologies:

- Express JS
- PostgreSQL
- Prisma ORM
- JSON Web Token (JWT)
- Cloudinary

## Project Structure

```
└── mama-recipe-be
    ├── assets                       # Contains static assets such as images.
    ├── prisma                       # Contains Prisma ORM configurations and migrations.
    ├── src                          # Contains the source code of the application.
    │   ├── controllers              # Contains controllers that handle requests and responses.
    │   ├── helpers                  # Contains helper functions and utilities.
    │   ├── middlewares              # Contains middleware functions for request processing.
    │   ├── models                   # Contains database models and schemas.
    │   ├── routes                   # Contains route definitions and API endpoints.
    │   ├── utils                    # Contains utility functions.
    ├── .gitignore                   # Specifies files and directories that should be ignored by Git.
    ├── index.js                     # The entry point of the application.
    ├── package-lock.json            # Describes the exact dependency tree generated, ensuring reproducible builds.
    ├── package.json                 # Contains project dependencies and scripts.
    ├── README.md                    # The project documentation file.
    ├── vercel.json                  # Configuration file for deployment on Vercel.
    └── yarn.lock                    # Locks the version of dependencies installed via Yarn.
```

## Project Repository

This project consists of both frontend and backend repositories. You can find link of front end repositoy and the postman documentation below:

- Front End Repository: [MamaRecipe Front End](https://github.com/wafash08/recipe-app)

- [Postman Documentation](#postman-documentation)

## Postman Documentation

You can see the list of API and its example usage by clicking the link below

[![Run in Postman](https://run.pstmn.io/button.svg)](https://documenter.getpostman.com/view/7675329/2sA3QqerrC)

## Features

- Authentication and Authorization using JWT
- CRUD Recipe
- User's Profile
- Save and Unsave Recipe
- Like and Cancel Like Recipe

## Getting Started

To get a local copy up and running, follow these simple steps.

### Installation

1. Clone the repository

```sh
git clone https://github.com/muhammadrisano/pijar-mama-recipe.git
```

2. Navigate to the project directory:

```sh
cd mama-recipe-be
```

3. Install the dependencies:

```sh
npm install
```

5. Start the development server:

```sh
npm run dev
```

This will start the development server and open the application in your default web browser. If it doesn't, you can access it at http://localhost:4000.

## Contributions

If you have an idea for a new feature or have found a bug, please follow these steps to contribute:

### How to Contribute

1. Fork the Repository:

Fork the repository to your own GitHub account by clicking the "Fork" button at the top right of [this repository](https://github.com/muhammadrisano/pijar-mama-recipe).

2. Clone the Forked Repository:

```sh
git clone https://github.com/muhammadrisano/pijar-mama-recipe.git
```

3. Create a New Branch:

Create a new branch for your feature or bug fix:

```sh
git checkout -b feature/YourFeatureName
```

or

```sh
git checkout -b bugfix/YourBugFixName
```

4. Make Your Changes:

Make the necessary changes in your local development environment.

5. Commit Your Changes:

Commit your changes with a descriptive commit message:

```sh
git add .
git commit -m "Add Your Descriptive Commit Message"
```

6. Push to Your Fork:

Push your changes to your forked repository:

```sh
git push origin feature/YourFeatureName
```

or

```sh
git push origin bugfix/YourBugFixName
```

7. Open a Pull Request:

Open a pull request to the main repository by navigating to the original repository and clicking the "New Pull Request" button. Ensure your pull request includes a clear description of the changes and why they are necessary.

### Issues

If you encounter any issues, please open an issue in the GitHub repository. Provide as much detail as possible to help us resolve the problem quickly.

## Contact

If you have questions, suggestions, or just want to get in touch, feel free to contact the following!

- Muhammad Risano (Creator of Back End MamaRecipe)
  - Github: [muhammadrisano](https://github.com/muhammadrisano)
  - Linkedin: [linkedin.com/in/muhammad-risano](https://www.linkedin.com/in/muhammad-risano-80847b152/?originalSubdomain=id)
- Wafa Saefulhaq (Creator of Front End MamaRecipe)
  - Email: saefulhaqwafa@gmail.com
  - Linkedin: [linkedin.com/in/m-wafa-saeful-haq](https://www.linkedin.com/in/m-wafa-saeful-haq)
  - Twitter: [@saefulhaqwafa](https://x.com/saefulhaqwafa)

## Related Projects

- [MamaRecipe Front End 🧑‍🍳](https://github.com/wafash08/recipe-app)
- [Peworld 🏢](https://github.com/wafash08/fwgo-peworld)
- [Marketplace 🛒](https://github.com/wafash08/fwgo-marketplace)
