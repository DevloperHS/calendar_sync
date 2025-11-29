# Google Calendar Integration for ADK Voice Assistant

This guide details the setup and usage of the Google Calendar integration for the ADK Voice Assistant. This integration allows your assistant to interact seamlessly with your Google Calendar.

## 📋 Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
  - [Gemini API Key](#1-set-up-gemini-api-key)
  - [Google Cloud Project](#2-create-a-google-cloud-project)
  - [OAuth Credentials](#3-create-oauth-20-credentials)
- [Authentication](#authentication)
- [Running the Application](#running-the-application)
- [Troubleshooting](#troubleshooting)
- [Security](#security)

## Prerequisites
- Python 3.8 or newer
- A Google Cloud Platform account
- A Google AI Studio account
- A Google Calendar account

## Installation

### 0. Clone the repo
Clone the repo using
```bash
https://github.com/DevloperHS/calendar_sync.git
```
Navigate to root folder
```
cd calendar_sync
```

### 1. Environment Setup
First, create and activate a virtual environment to manage dependencies.

**Create the virtual environment:**
```bash
python -m venv .venv
```

**Activate the virtual environment:**

*   **Windows:**
    ```cmd
    .venv\Scripts\activate
    ```
*   **macOS/Linux:**
    ```bash
    source .venv/bin/activate
    ```

### 2. Install Dependencies
Install all required Python packages using `pip`:
```bash
pip install -r requirements.txt
```

## Configuration

### 1. Set Up Gemini API Key
1.  Log in to [Google AI Studio](https://aistudio.google.com/).
2.  Navigate to the **API Keys** section and generate a new key.
3.  Create a `.env` file in the project root and add your key:
    ```env
    GOOGLE_API_KEY=your_api_key_here
    ```

### 2. Create a Google Cloud Project
1.  Go to the [Google Cloud Console](https://console.cloud.google.com/).
2.  Create a new project or select an existing one.
3.  Navigate to **APIs & Services** > **Library**.
4.  Search for **"Google Calendar API"** and enable it.

### 3. Create OAuth 2.0 Credentials
1.  Navigate to **APIs & Services** > **Credentials**.
2.  Click **Create Credentials** and select **OAuth client ID**.
3.  **Application Type:** Select "Desktop application".
4.  **Name:** Enter a name (e.g., "ADK Voice Calendar Integration").
5.  Click **Create**.
6.  Download the JSON credentials file and save it as `credentials.json` in the **root directory** of this project.

## Authentication

Run the setup script to authenticate the application with your Google Calendar account.

```bash
python setup_cal.py
```

**What this script does:**
1.  Initiates the OAuth 2.0 authorization flow.
2.  Opens your default browser for you to authorize the application.
3.  Securely saves the generated access token for future use.
4.  Tests the connection to ensure everything is working.

## Running the Application

Once setup is complete, launch the ADK Voice Assistant with hot-reloading enabled:

```bash
uvicorn calendar_sync.main:app --reload
```

You can now interact with your voice assistant via the provided interface.

## Troubleshooting

### Token Errors
If you experience authentication issues:
1.  Delete the existing token file located at `~/.credentials/calendar_token.json`.
2.  Re-run the setup script: `python setup_cal.py`.

### Permission Issues
If the application lacks necessary permissions:
1.  Delete the token file at `~/.credentials/calendar_token.json`.
2.  Update the `SCOPES` variable in `calendar_sync/tools/cal_utils.py` if needed.
3.  Re-run the setup script.

### API Quota Limits
If you hit usage limits:
1.  Go to **APIs & Services** > **Dashboard** in the Google Cloud Console.
2.  Select **Google Calendar API** to view your quota usage.

### Installation Issues
If `pip install` fails:
1.  Ensure you are using **Python 3.8+**.
2.  Upgrade pip: `pip install --upgrade pip`.
3.  Try installing packages individually to identify the conflict.

## Security
- **Token Storage:** The OAuth token is stored securely in your user directory.
- **Credentials:** Never share your `credentials.json` file or the generated token.
- **Permissions:** This application requests only the minimum permissions required for calendar operations.
