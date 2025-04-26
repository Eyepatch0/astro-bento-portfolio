---
title: "Speech Phonation Microservice"
description: "A microservice for analyzing speech to test for parkinson's disease"
repository: "https://github.com/Eyepatch0/speech-phonation-microservice"
url: "speech-phonation-microservice"
tag: ["FastAPI", "Librosa", "Parselmouth", "Firebase", "Docker"]
pubDate: 2025-03-15
---

# Speech Phonation Microservice

Built a microservice using **FastAPI** to analyze speech samples for testing **Parkinson's disease**. The service utilizes **Librosa** and **Parselmouth** for audio analysis, extracting features such as pitch, jitter, shimmer, and HNR. The results are stored in a **Firebase** database for easy access and retrieval. The microservice is containerized using **Docker**, ensuring easy deployment and scalability.
It's part of a larger project made for [H2AI - 25](https://www.georgetown-h2ai.com/) targeting the **Neuro AI Innovation** challenge.
This microservice was containerized using **Docker** and deployed on **Amazon ECS**. The architecture is designed to be scalable and efficient, allowing for easy integration with other services and applications.

## Features

- • **Speech Analysis:** The microservice analyzes speech samples to extract key features relevant to Parkinson's disease detection, including pitch, jitter, shimmer, and HNR.
- • **FastAPI Framework:** Built using **FastAPI**, the microservice provides a robust and efficient API for handling requests and responses, ensuring high performance and low latency.
- • **Audio Processing Libraries:** Utilizes **Librosa** and **Parselmouth** for advanced audio processing and feature extraction, enabling accurate analysis of speech samples.
- • **Firebase Integration:** The results of the analysis are stored in a **Firebase** database, providing a scalable and secure solution for data storage and retrieval.
- • **Docker Containerization:** The microservice is containerized using **Docker**, allowing for easy deployment and scalability across different environments.
- • **Amazon ECS Deployment:** Deployed on **Amazon ECS**, ensuring high availability and scalability, making it suitable for production use.
