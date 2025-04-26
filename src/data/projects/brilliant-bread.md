---
title: "Brilliant Bread"
description: "Bread Board Image to Diagram Converter"
repository: "https://github.com/eionpaulos/BrilliantBread"
url: "brilliant-bread"
tag: ["Gemini 2.0 Flash", "FastAPI", "shadcn", "TypeScript", "schemdraw"]
pubDate: 2025-04-13
---

# Brilliant Bread

### Introduction

This was a project I worked on for [Bitcamp](https://bit.camp/) along with [@eionpaulos](https://github.com/eionpaulos), [@novi-chok](https://github.com/novi-chok), and [@worldsoldure](https://github.com/worldsoldure). The goal was to create a web application that could convert images of breadboards into valid circuit diagrams. The project was built using FastAPI, shadcn, and TypeScript, and it utilized the Gemini 2.0 Flash model for part identification and schemdraw(https://schemdraw.readthedocs.io/en/stable/) for circuit diagram generation.

### Features

- Image Upload: Users can upload images of breadboards for processing.
- Part Identification: The application uses the Gemini 2.0 Flash model to identify components in the uploaded image.
- Circuit Diagram Generation: The identified components are then used to generate a valid circuit diagram using the schemdraw library.
- User-Friendly Interface: The application features a clean and intuitive interface built with shadcn and TypeScript.
- FastAPI Backend: The backend is built using FastAPI, ensuring high performance and scalability.
- Responsive Design: The application is designed to work seamlessly on both desktop and mobile devices.

### View the Project

- [Brilliant Bread](https://github.com/eionpaulos/BrilliantBread)
- Sample Image: [View](https://github.com/eionpaulos/BrilliantBread/blob/main/server/data/testpic1.jpg)
- Sample Output: [View](https://github.com/eionpaulos/BrilliantBread/blob/main/server/results/20250413_020809.svg)
