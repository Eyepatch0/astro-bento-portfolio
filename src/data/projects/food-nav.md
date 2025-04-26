---
title: "FoodNav"
description: "An AI-powered virtual assistant accessible via web, app, SMS, and voice, connecting food-insecure individuals with personalized food resources."
repository: "https://github.com/Eyepatch0/FoodNav"
url: "food-nav"
tag:
  [
    "Agent",
    "Generative AI",
    "Dialogflow CX",
    "FastAPI",
    "GCP",
    "shadcn",
    "TypeScript",
  ]
pubDate: 2025-04-24
---

# FoodNav

This is our initial MVP for [AI and Food Insecurity Case Competition](https://www.rhsmith.umd.edu/centers-initiatives/artificial-intelligence-business/ai-and-food-insecurity-case-competition) by Robert H. Smith School of Business, University of Maryland.
We have developed an AI based solution which uses a combination of advanced NLU, LLMs(Generative Ressponses) and a multilingual agent to help people find food assistance resources in the DMV area.

Our data is from [Capital Area Food Bank](https://www.capitalareafoodbank.org/), which is a non-profit organization that provides food assistance to people in need in the DMV area.

### Installation:

Refer to the [README](https://github.com/Eyepatch0/FoodNav/blob/main/README.md) for installation instructions.

### Features:

- Find's the top 3 nearest food assistance resources based on the user's location and takes into account the user's preferences and needs.

- We use `geocoding api` from google maps to geoencode users address and geoencoded addresses of the resources to calculate the distance.

- We use `Dialogflow CX `to create a multilingual agent that can understand and respond to user queries in multiple languages. (Currently only English and Spanish are supported)

- Primarily we focused on the Call based aspect of the agent, but we also have a web app and SMS based solution.

- We decided that generative responses and decision making are not the best use case for LLMs, so we used Intents and Entities to create a decision tree based agent using Dialogflow CX.

- Also, supports `call companion` feature, so the user can chat with the agent while on the call.

- After the user ends the call, we send the user a multilingual feedback form to get feedback on the agent's performance.

- Have support for human agent handoff in case the user is not satisfied with the agent's response.

- On the server since the database was less than 1MB, we used SQLite and pandas to store the data and perform queries. We also used FastAPI to create a REST API. This was the webhook for the Dialogflow CX agent.

- Also have APIs for the maps part of the web app.

- We used test cases and the analytics dashboard to monitor the performance of the agent and make improvements.

- For the web app we also made sure to use i18n to support multiple languages.

- We used ngrok to expose the local server to the internet for testing purposes.

### View the Project

- [FoodNav](https://github.com/Eyepatch0/FoodNav)

- [Demo Samples]()

### Collaborators:

- [@worldsoldure](https://github.com/worldsoldure) - Team Member, Primarily worked on the maps part of the web app, user research and presentation.

- [@eyepatch0](https://github.com/Eyepatch0) - Team Lead, worked on the Dialogflow CX agent, server and the web app.

### Contact:

Feel free to reach out to me on [LinkedIn](https://www.linkedin.com/in/syed-mohammed0/) if you have any questions or feedback.
I'm always open to suggestions and ideas for improvement.
