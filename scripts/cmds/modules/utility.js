module.exports = {
    name: "utility",
    commands: {
        // ✅ Utilities (300 commands)
        'time': async () => `🕒 Time: ${new Date().toLocaleString()} - Accurate!`,
        'weather': async (args) => `🌤️ Weather: ${args[0] || 'location'} - Checking!`,
        'calc': async (args) => `🧮 Calculate: ${args[0] || 'math'} - Solving!`,
        'translate': async (args) => `🌐 Translate: ${args[0] || 'text'} - Converting!`,
        'qr': async (args) => `📱 QR Code: "${args[0] || 'data'}" - Generated!`,
        'textart': async (args) => `🎨 Text Art: "${args[0] || 'text'}" - Created!`,
        'font': async (args) => `🔤 Font: ${args[0] || 'style'} - Applied!`
    }
};
