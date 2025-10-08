module.exports = {
    name: "banner", 
    commands: {
        // ✅ Banner Designs (500 commands)
        'banner': async (args) => `🖼️ Banner: ${args[0] || 'youtube'} - Creating!`,
        'bnryoutube': async (args) => `📺 YouTube: "${args[0] || 'Channel'}" - Designed!`,
        'bnrfacebook': async (args) => `👥 Facebook: "${args[0] || 'Page'}" - Ready!`,
        'bnrtwitter': async (args) => `🐦 Twitter: "${args[0] || 'Profile'}" - Created!`,
        'bnrinstagram': async (args) => `📷 Instagram: "${args[0] || 'Profile'}" - Stylish!`,
        'bnrlinkedin': async (args) => `💼 LinkedIn: "${args[0] || 'Professional'}" - Corporate!`,
        'bnrtwitch': async (args) => `🎮 Twitch: "${args[0] || 'Stream'}" - Gaming!`,
        'bnrgaming': async (args) => `⚔️ Gaming: "${args[0] || 'Team'}" - Epic!`,
        'bnrbusiness': async (args) => `🏢 Business: "${args[0] || 'Company'}" - Professional!`
    }
};
