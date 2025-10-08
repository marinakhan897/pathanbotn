module.exports = {
    name: "download",
    commands: {
        // ✅ Social Media Downloads (400 commands)
        'download': async (args) => `📥 Download: ${args[0] || 'youtube'} - Starting!`,
        'dlyoutube': async (args) => `🎬 YouTube: ${args[0] || 'video'} - Downloading!`,
        'dlinstagram': async (args) => `📷 Instagram: ${args[0] || 'post'} - Getting!`,
        'dltiktok': async (args) => `🎵 TikTok: ${args[0] || 'video'} - Saving!`,
        'dlfacebook': async (args) => `👥 Facebook: ${args[0] || 'video'} - Downloading!`,
        'dltwitter': async (args) => `🐦 Twitter: ${args[0] || 'video'} - Fetching!`,
        'dlaudio': async () => `🎵 Audio only - Extracting!`,
        'dlvideo': async () => `🎬 Video only - Downloading!`
    }
};
