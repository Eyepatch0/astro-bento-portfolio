---
title: "Gemmabench"
description: "GemmaBench is a tool for benchmarking Gemma 3 models and other Hugging Face language models using standard benchmarking tasks."
repository: "https://github.com/Eyepatch0/gemmabench"
url: "gemmabench"
tag: ["Hugging Face", "Lighteval", "lm-evaluation-harness", "Gemma", "LLMs"]
pubDate: 2025-04-06
---

# Gemmabench

### Introduction

GemmaBench is a benchmarking tool designed to evaluate the performance of Gemma and other Hugging Face language models using standard benchmarking tasks. It integrates seamlessly with the LightEval framework and supports multiple backends for flexible benchmarking.

### Features

- Benchmark Gemma and other Hugging Face models
- Integration with LightEval benchmarking framework
- Multiple backend options (Accelerate, vLLM, Nanotron)
- System resource detection and backend recommendations
- Supports all benchmarks available in LightEval

### Installation

**Prerequisites:**

- Python 3.8+
- For GPU acceleration:
  - NVIDIA GPU with appropriate drivers
  - CUDA toolkit compatible with your PyTorch installation

1. Clone the repository:

```bash
git clone https://github.com/Eyepatch0/gemmabench.git
cd gemmabench
```

2.  Create a virtual environment (optional but recommended):

    ```bash
    python -m venv venv
    venv\Scripts\activate # Activate it (Windows)
    source venv/bin/activate # Activate it (Linux/macOS)
    ```

3.  Install the required packages:

    ```bash
    pip install --upgrade pip
    pip install -r requirements.txt
    ```

4.  Create a `.env` file in the root directory and add your Hugging Face token:
    ```bash
    HUGGINGFACE_TOKEN=your_huggingface_token
    ```

### Usage:

To benchmark a model, run the following command:

```bash
python run_benchmark.py
```

The script will guide you through:

- Selecting a model
- Choosing a backend (accelerate, vllm, nanotron)
- Configuring task parameters
- Running the benchmark

### Backend Options:

- **Accelerate**: For local benchmarking with CPU/GPU support.
- **vLLM**: For distributed benchmarking across multiple GPUs or nodes.
- **Nanotron**: For high-performance benchmarking with advanced optimizations.

### Future Work:

- Add support for benchmarking local models (specifying a file path).
- Add support for running benchmarks with `lm-evaluation-harness`.
- Improve recommendations for backend selection (consider model size, VRAM).
- Add more options for customizing benchmark selection (e.g., run multiple tasks).
- Introduce a config.yaml for setting defaults.
- Implement basic parsing of benchmark framework output files.
- Add a feature for comparing results from multiple runs (e.g., console table).
- Add better error handling and user feedback (especially for OOM, args, dependencies).
- Add basic visualization of results and investigate live updates during benchmarking.
- Add a feature for comparing multiple specified models at once.
- Add an agent to consider natural language instructions for benchmarking.
- Add checks for common dependencies (e.g., bitsandbytes if needed).
- Add basic unit/integration tests.

### Contact:

You can reach out to me on [LinkedIn](https://www.linkedin.com/in/syed-mohammed0/) or [GitHub](https://github.com/Eyepatch0)
for any questions or feedback.
I am always open to suggestions and improvements.

### Links:

- [Gemmabench](https://eyepatch0.github.io/gemmabench/)
