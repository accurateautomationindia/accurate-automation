/**
 * SELF-PING / KEEP-ALIVE MECHANISM
 * This script pings the application's origin URL every 14 minutes.
 * This prevents hosting providers like Render (Free Tier) from putting the service to sleep.
 */
export const initSelfPing = () => {
    // 14 minutes in milliseconds (Render sleeps after 15 mins)
    const INTERVAL = 14 * 60 * 1000;
    
    // We only ping if the page is currently loaded in a browser
    if (typeof window !== 'undefined') {
        const url = window.location.origin;
        
        console.log(`[Self-Ping] Initializing keep-alive for ${url}`);
        
        setInterval(async () => {
            try {
                const response = await fetch(url, { mode: 'no-cors' });
                console.log(`[Self-Ping] Heartbeat sent at ${new Date().toLocaleTimeString()}. Status: ${response.type}`);
            } catch (error) {
                console.warn(`[Self-Ping] Heartbeat failed at ${new Date().toLocaleTimeString()}`, error);
            }
        }, INTERVAL);
    }
};
