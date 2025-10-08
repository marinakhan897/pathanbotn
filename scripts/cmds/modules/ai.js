module.exports = {
    name: "ai",
    commands: {
        // ✅ AI Generation (400 commands)
        'ai': async (args) => `🤖 AI: "${args.join(' ') || 'image'}" - Generating!`,
        'aiphotorealistic': async (args) => `📸 Photo: "${args.join(' ') || 'realistic'}" - Creating!`,
        'aidigitalart': async (args) => `🎨 Digital: "${args.join(' ') || 'art'}" - Designing!`,
        'aianime': async (args) => `👾 Anime: "${args.join(' ') || 'character'}" - Drawing!`,
        'aifantasy': async (args) => `🐉 Fantasy: "${args.join(' ') || 'landscape'}" - Imagining!`,
        'aiscifi': async (args) => `🚀 Sci-Fi: "${args.join(' ') || 'future'}" - Creating!`,
        'aiportrait': async (args) => `👤 Portrait: "${args.join(' ') || 'person'}" - Generating!`,
        'ailandscape': async (args) => `🏞️ Landscape: "${args.join(' ') || 'nature'}" - Designing!`
    }
};
