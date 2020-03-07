## Introduction

CiteCheckr is a web scraper used to check backlinks within a website. By inputting a URL of choice and a link that a user would like to check, the user will be able to check for the status code and URL attributes. 

## Technologies Used

MongoDB, ExpressJS, React, NodeJS, Sass, Cheerio, Mongoose, Axios, JSON Webtokens

## Getting Started

- clone repo
- npm i
- node server for backend
- npm run start for frontend

## Unsolved Problems

- CORS related issue related to Axios
- Setting up a proxy server or internal, server-side proxy for the CORS issue
- Styling
- Website model creation
- Creating a function to parse html and scan for link types
- Status code checking function

## Future Enhancements

- Status Code Checker
- Majestic API / Ahrefs API functionality
- Oauth

---

## Technical Requirements

- A **working** full-stack, single-page application hosted on Heroku.
- Incorporate the technologies of the **MERN-stack**:
    - MongoDB/Mongoose
    - Express
    - React
    - Node
- **Have a well-styled interactive front-end** that communicates with the **Express** backend via AJAX.
- Implement token-based **authentication**. Including the ability of a user to sign-up, log in & log out.
- Implement **authorization** by restricting CUD data functionality to authenticated users. Also, navigation should respond to the login status of the user.
- **Have a comprehensive feature-set**. For example, **if the app does not include full-CRUD** data operations, **ensure the addition** of one or more of the following:
    - Consume a third-party API.
    - Include *admin* features.
    - Utilize multi-user, real-time communications (difficult and time consuming)