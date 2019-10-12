
# Full Stack Developer technical test

## Project context
At Chance, one of our core asset is a large jobs database. A job is basically few information like title, description, similar names… and a bunch of characteristics responsible for expressing the job required skills.

Your mission: **Build the Chance Job Manager**

As a developer, you receive the UI design file `/docs/jobsManager.sketch` and an existing dataset `/docs/jobs.json` and `/docs/characteristics.json`. You are in charge of building this application using Express (back) / React (front). The front-end is delivered as a serverless SPA. You are not responsible for putting it online.

Let’s start!

### Project Features

- Basic authentication using JWT
- A home page with information about you (with authentication)
- List all the jobs (with authentication)
- Add/Edit a job (with authentication)
- Add/Edit a characteristic (with authentication)
- Bind characteristic to a job (with authentication)

### Required technologies

| **Back-end** | **Front-end** |
|:--|:--|
| NodeJS, ExpressJS, JWT | ReactJS, styled-components |

## Get started

> For your local environment recommend to use **Node ≥10.15** and  **Yarn ≥1.12**

### Git process

- Init a new git repository at this location
- While you are executing the test, commit as often as possible, and try to be explicit in your commit descriptions
- At the end of the project, do not hesitate to add a description of your solution at the end of this `README.md` — especially your technical choices.
- Then, run `$ git bundle create [your_name].bundle HEAD`
- Send your bundle file via email to **dev@chance.co**

### Back-end

Directory: `/back` — preconfigured with `express` package

API: Based on your choice you can provide a REST or a GraphQL API — the design is up to you.

Auth: The authentication must rely on JWT — the user credentials can be written in a `.env` file to avoid database entry.

Database: We recommend to use [lowDB](https://github.com/typicode/lowdb) for the sake of simplicity. If you prefer using an actual database, make sure we can launch it in a couple of terminal instructions.

### Front-end

Directory: `/front` — preconfigured with `create-react-app` starter kit

CSS: We recommend to use `styled-component` — If you are not comfortable with it first please give it a try. Finally, if you don’t manage, get back to your favorite technology.

Network: We recommend to use `axios` if the API is REST based — If you decide to use GraphQL, you may come up with the most relevant tool according to you.

Data State management: You can pick the state manager of your choice (even none) as far it helps you achieving the test, and you are able to explain why you used it.

### Code style and structure

1. Make sure your code editor is respecting the `.editorconfig` definition
2. For back-end, we recommend to not use ES compilers (aka Babel) — on the other hand, all the native Node10 + ES6/7 features are more than welcome
3. We do not impose any linter, feel free to add one if you think it helps you keeping your code consistent.
4. We should be able to run your application using `npm start` on both back-end and front-end directories.
4. If you change or add some extra features/scripts. Please write down your instructions at the end of this file.

---

## About the technical test

### Mindset

This project does not aim to be shipped on production tomorrow. We prefer you to focus on clean code and smart architectural solutions than having 100% of the scope covered with spaghetti code. Choose a couple of features you find the most challenging and go for it!

For you, this test is relevant to discover our most common stack and tools along the type of products we are currently shipping — simplified indeed.

For us, this test is not only a way to understand your coding skill but also your mindset toward problem solving and self-organization.

It’s important you enjoy doing this test, if you find something (process, instructions…) that you find could be improved, please write down a counter-proposal at the end of this `README`.

### Evaluation criteria

This is a non-exhaustive list of the aspects that will be evaluated about your code:

- Global project architecture
- Clean code, naming, consistency and DRY principles
- Javascript standards along with ES6/7
- Implementation sequence and commit descriptions
- BE / API design
- BE / basic security principles
- BE / Auth strategy
- FE / CSS strategy and implementation
- FE / Components logic and architecture
- FE / State management

### What’s next?

After you send us your git bundle, we will take few days to review your work on our side. Then, we will contact you to schedule a live session to let you present your choices/approaches to the problem and for us to give you feedback.

## Questions / Issues

If you encounter any issue or if you have questions do not hesitate to reach us out on **dev@chance.co**.

---

## Candidate notes

## Available Scripts

In the project directory, you can run:

### `npm run all`
Runs 'npm run back' and 'npm run front' concurrently in one console



-------------COMMENTS----------------
I tried not to use Babel on the backend, but tbh I don't see a point in it.
