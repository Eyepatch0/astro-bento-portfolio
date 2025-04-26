---
title: "Youtube Summarizer"
description: "A brief description of the project"
repository: "https://github.com/Eyepatch0/"
url: "youtube-summarizer"
tag:
  [
    "Python",
    "PostgreSQL",
    "pgvector",
    "FastAPI",
    "WebSockets",
    "React",
    "JavaScript",
  ]
pubDate: 2022-10-06
---

# YoutubeSummarizer

YoutubeSummarizer is a Chrome extension developed during the early days of AI when large language models were still evolving. Created with my friend [Mohammed Ateeq Uddin](https://www.linkedin.com/in/tpateeq/), we built this tool as an experimental project to harness Bard (now Gemini) during its early access phase. At a time when ChatGPT credits were expensive, we envisioned an alternative solution using the free access provided by Bard.

## Features

- • **Chrome Extension:** Seamlessly integrates into the browser to summarize YouTube transcripts.
- • **Transcript Extraction:** Automatically retrieves the transcript from YouTube videos.
- • **AI-Powered Summarization:** Utilizes Bard tokens from the user's browser session for generating summaries.
- • **Vector Embeddings & Chunking:** Transforms transcript content into vector embeddings using PostgreSQL with the pgvector extension and applies basic chunking to create concise summaries.

## Technical Details

The project was built using a mix of web technologies and database tools:

- • **Frontend:** Developed with React, JavaScript, HTML, and CSS to power the Chrome extension interface.
- • **Backend:** Python was used with FastAPI to process transcripts, manage interactions with AI services, and handle real-time communication through WebSockets, utilizing Uvicorn to run the asynchronous application.
- • **Database Integration:** Leveraged PostgreSQL with the pgvector extension to efficiently handle vector embeddings for text processing.
- • **AI Integration:** Employed early access Bard (Gemini) tokens to access AI capabilities for summarizing content directly from the user's browser.

## Implementation

The project was a proof-of-concept designed to explore AI-driven content summarization. We extracted YouTube transcripts and converted them into vector embeddings, then applied a simple chunking algorithm to generate summaries without any hints or complex analysis. Although the extension received positive feedback for its innovative approach, security concerns prevented us from publishing it for public use. This experimental venture provided valuable insights into the capabilities and limitations of early LLMs and set the stage for future explorations in AI-powered summarization.
