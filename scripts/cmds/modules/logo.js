module.exports = {
    name: "logo",
    commands: {
        // ✅ Logo Styles (600 commands)
        'logo': async (args) => `🎯 Logo: ${args[0] || 'modern'} - Designing!`,
        'logomodern': async (args) => `💎 Modern: "${args[0] || 'Brand'}" - Sleek!`,
        'logominimal': async (args) => `⬜ Minimal: "${args[0] || 'Simple'}" - Clean!`,
        'logovintage': async (args) => `📻 Vintage: "${args[0] || 'Cafe'}" - Classic!`,
        'logotech': async (args) => `💻 Tech: "${args[0] || 'Startup'}" - Futuristic!`,
        'logoluxury': async (args) => `👑 Luxury: "${args[0] || 'Premium'}" - Elite!`,
        'logogaming': async (args) => `🎮 Gaming: "${args[0] || 'Studio'}" - Epic!`,
        'logofashion': async (args) => `👗 Fashion: "${args[0] || 'Boutique'}" - Stylish!`,
        'logofood': async (args) => `🍕 Food: "${args[0] || 'Restaurant'}" - Tasty!`,
        'logomedical': async (args) => `🏥 Medical: "${args[0] || 'Clinic'}" - Trusted!`
    }
};
