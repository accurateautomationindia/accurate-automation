import https from 'https';

/**
 * STANDALONE PING SCRIPT (Node.js)
 * Instructions:
 * 1. Run this script on a separate free instance or GitHub Action to keep your site alive.
 * 2. It pings your site every 14 minutes.
 * 
 * Usage: node ping.js [YOUR_SITE_URL]
 */

const PING_URL = process.argv[2] || 'https://www.accurateautomation.com'; // Default URL
const INTERVAL_MINUTES = 14; 

function sendPing() {
    const time = new Date().toLocaleTimeString();
    
    https.get(PING_URL, (res) => {
        console.log(`[${time}] Pinging ${PING_URL} - Status: ${res.statusCode}`);
    }).on('error', (err) => {
        console.error(`[${time}] Ping failed for ${PING_URL}:`, err.message);
    });
}

// Start pinger
console.log(`Starting 24/7 pinger for: ${PING_URL}`);
console.log(`Interval: Every ${INTERVAL_MINUTES} minutes`);

// Initial ping
sendPing();

// Schedule repeated pings
setInterval(sendPing, INTERVAL_MINUTES * 60 * 1000);
