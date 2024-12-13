const axios = require('axios');
const fs = require('fs');

// Replace with your YouTube API Key and Playlist ID
const API_KEY = 'YOUR_YOUTUBE_API_KEY';
const PLAYLIST_ID = 'YOUR_PLAYLIST_ID'; // You can get this from the playlist URL

// YouTube Data API URL
const API_URL = `https://www.googleapis.com/youtube/v3/playlistItems`;

// Function to fetch playlist details
async function fetchPlaylistVideos(playlistId) {
    try {
        let videos = [];
        let nextPageToken = ''; // To handle pagination

        // Loop to handle pagination in case of many videos in the playlist
        do {
            const response = await axios.get(API_URL, {
                params: {
                    part: 'snippet',
                    playlistId: playlistId,
                    maxResults: 50, // Max videos per request (up to 50)
                    pageToken: nextPageToken,
                    key: API_KEY,
                },
            });

            console.log('API Response:', response.data); // Log full response for debugging

            // Extract video details
            response.data.items.forEach(item => {
                const videoTitle = item.snippet.title;
                const videoLink = `https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`;
                const thumbnailUrl = item.snippet.thumbnails.high.url;

                videos.push({ title: videoTitle, link: videoLink, thumbnail: thumbnailUrl });
            });

            // Check if there is another page of results
            nextPageToken = response.data.nextPageToken;
        } while (nextPageToken);

        // Save to HTML file
        const htmlContent = generateHTML(videos);
        fs.writeFileSync('playlist.html', htmlContent);
        console.log('HTML file saved as "playlist.html"');
    } catch (error) {
        console.error('Error fetching playlist videos:', error.message);
        console.error('Error details:', error.response ? error.response.data : error);
    }
}

// Function to generate HTML content
function generateHTML(videos) {
    let html = `
<!DOCTYPE html>
<html>
<head>
    <title>YouTube Playlist</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        .video { margin: 20px 0; }
        .thumbnail { width: 150px; height: auto; }
        .title { font-size: 18px; font-weight: bold; }
        .link { font-size: 14px; color: blue; text-decoration: underline; }
    </style>
</head>
<body>
    <h1>YouTube Playlist Videos</h1>
    <div id="videos">
`;

    videos.forEach(video => {
        html += `
        <div class="video">
            <img class="thumbnail" src="${video.thumbnail}" alt="${video.title}">
            <div class="title">${video.title}</div>
            <a class="link" href="${video.link}" target="_blank">Watch Video</a>
        </div>
        `;
    });

    html += `
    </div>
</body>
</html>
`;

    return html;
}

// Start fetching videos from the playlist
fetchPlaylistVideos(PLAYLIST_ID);
