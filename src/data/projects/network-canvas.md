---
title: "Network Canvas"
description: "A Cloudflare Worker to handle webhook requests and route them based on defined conditions."
repository: "https://github.com/Eyepatch0/Network-Canvas"
url: "network-canvas"
tag: ["Python", "Pandas", "Plotly", "Algorithms"]
pubDate: 2025-03-08
---

# Network-Canvas

### Introduction

Network Canvas is a project built as a solution for [Bus Division Cellular Coverage Study](https://ischool.umd.edu/about/info-challenge-initiative/challenge/projects/) offered by [GL Communications,Inc](https://www.gl.com/) and [University of Maryland](https://umd.edu/) for the [Info Challenge 2025](https://ischool.umd.edu/about/info-challenge-initiative/challenge/projects/).

This project evaluates and compares the robustness and reliability of cellular communication links from three different service providers within an indoor bus maintenance facility.

### Project Overview

Network Canvas transforms complex signal data into actionable insights through interactive visualizations, empowering transit agencies to make informed decisions about cellular coverage within their facilities.

### Challenge Statement

A transit agency needed to evaluate cellular coverage across three carriers in their indoor bus maintenance facility. The objectives were to:

- Compare cellular carriers' performance
- Verify adequate cellular data coverage
- Identify any major coverage gaps
- Provide recommendations for repeater placement (optional)

### Methodology

The project utilized a combination of data collection, analysis, and visualization techniques to achieve the objectives. The methodology involved:

1. Data Preprocessing

- Applied a data science lifecycle approach to process three carrier datasets
- Identified and removed null values to ensure data integrity
- Discovered and resolved duplicate measurements within quads
- Implemented dual processing strategies:

  - Average values method for baseline comparison
  - Maximum values method for peak performance analysis

2. Exploratory Data Analysis

Developed interactive visualizations for multiple metrics:

- Signal strength (RSSI)
- TCP Upload Speed
- Quality of Service (QoS)
- Round Trip Time (RTT)

Created comprehensive statistical dashboards with:

- Histograms showing distribution of metrics
- Box plots revealing statistical ranges
- Violin plots highlighting carrier differences

Also, have a scatter plot to view the relationship between the 3 datasets.

3. Coverage Visualization

- Implemented interactive heatmap visualizations of cellular performance
- Color-coded display indicating performance categories from "Poor" to "Good"
- Grid-based representation of the facility showing metric performance by location
- Toggle functionality to switch between metrics and carriers

4. Repeater Placement Algorithm

- Designed an optimization algorithm to identify optimal repeater locations
- Modified standard coverage formulas to better fit the indoor facility context
- Visualized recommended repeater placement with interactive overlays
- Prioritized locations based on maximum coverage improvement potential

5. Comparative Analysis

- Developed normalized scoring system across all critical metrics
- Created dual-scoring methodology for both average and peak performance
- Generated weighted metrics based on importance for transit operations
- Visualized comparative performance through heatmaps and summary statistics

### Results & Recommendations

- Identified the best-performing carrier based on weighted metrics
- Provided strategic repeater placement recommendations
- Delivered interactive dashboard for monitoring

### How to run the code

**Prerequisites:**

- Git
- Python 3.6+

1. Clone the repository

```bash
git clone https://github.com/Eyepatch0/Network-Canvas

cd Network-Canvas
```

2. Create a virtual environment

```bash
python -m venv venv

# Activate it (Windows)
venv\Scripts\activate

# Activate it (Linux/macOS)
source venv/bin/activate
```

3. Install the required packages

```bash
pip install --upgrade pip
pip install -r requirements.txt
```

4. Run the code

```bash
# Option 1: Run with Jupyter Notebook
jupyter notebook
```

**Note**:Once Jupyter launches, select the correct kernel matching your virtual environment, then run the notebook cells.

#### Quick Visualization Mode

To view only the visualizations without running any code:
bash

- Run Voila to view the notebook as an interactive web app.

```bash
voila cellular_coverage_study.ipynb
```

Then open http://localhost:8866 in your browser to view the interactive visualizations.

### Future Work

- Integrate real-time data feeds for dynamic monitoring
- Expand coverage to additional facilities
- Incorporate machine learning for predictive analytics
- Enhance user interface for improved usability

### AI Usage:

Throughout the _Network Canvas_ project, I used AI to improve code efficiency where appropriate. After writing functional but repetitive code for the repeater optimization algorithm, I leveraged language models to refactor into cleaner loop-based solutions. This allowed me to maintain focus on the analytical methodology while ensuring code quality. AI served as a programming assistant, enhancing implementation without replacing my original problem-solving approach.

- Used [Claude 3.7Sonnet](https://www.anthropic.com/news/claude-3-7-sonnet) to refactor code
- Used [Perplexity (Deep Research)](https://www.perplexity.ai/) to save time researching contextual information

### Technologies Used

Can be found in the `requirements.txt` file.

### Future Work

- Integration with real-time cellular data collection
- Expansion to additional facilities
- Incorporation of machine learning for predictive analytics
- Enhanced user interface for improved usability
- Improved documentation and user guides
- Additional metrics and analysis features

### Contact

You can reach out to me on [LinkedIn](https://www.linkedin.com/in/syed-mohammed0/) or [GitHub](https://github.com/Eyepatch0)
for any questions or feedback.
I am always open to suggestions and improvements.

### Acknowledgements

Special thanks to the University of Maryland and GL Communications, Inc. for providing the opportunity to work on this project. I would also like to thank Dr. Kam F. Yee, and my mentors for their support and guidance throughout the project.
