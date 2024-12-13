# YouTube Playlist Scraper

  A simple Node.js script to scrape YouTube playlist videos and save the video titles, links, and thumbnails to an HTML file.

## Features

  * Fetches video data from a YouTube playlist using the YouTube Data API v3.
  * Retrieves video titles, links, and thumbnail images.
  * Handles pagination if the playlist contains more than 50 videos.
  * Saves the list of videos in an easy-to-read HTML file.

## Prerequisites

  * [Node.js](https://nodejs.org/en/) installed on your system.
  * A valid YouTube API key from the [Google Cloud Console](https://console.cloud.google.com/).
  * A YouTube playlist ID.

## Setup Instructions

### Step 1: Clone the Repository

  Clone this repository to your local machine.

  git clone https://github.com/Trabajador/youtube-playlist-scraper.git

  Navigate into the project directory:

  cd youtube-playlist-scraper

### Step 2: Install Dependencies

  `npm install`

### Step 3: Get Your YouTube API Key

  * Go to the [Google Cloud Console](https://console.cloud.google.com/).
  * Create a new project (or select an existing one).
  * Enable the YouTube Data API v3 for your project.
  * Go to the Credentials section and create a new API Key.
  * Copy the API Key for later use.

### Step 4: Configure Your Script

  Open the `scrape.js` file and set your API Key and Playlist ID in the following variables:

  `const API_KEY = 'YOUR_YOUTUBE_API_KEY'; // Replace with your YouTube API key`<br>
  `const PLAYLIST_ID = 'YOUR_PLAYLIST_ID'; // Replace with your YouTube Playlist ID`

### Step 5: Run the Script

  Run the script to fetch the playlist videos and save them in an HTML file:

  `node scrape.js`

### Step 6: View the Output

  The script will generate a file named `playlist.html` containing the list of video titles, links, and thumbnails. Open this file in your browser to view the scraped videos.

### License

This project is licensed under the MIT [License](https://console.cloud.google.com/) - see the LICENSE file for details.
