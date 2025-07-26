// Initialisation
const commands = {};

const term = $('body').terminal(commands,
                                {
                                    greetings: false
                                });

// Colour Formatting
function rand(max) {
    return Math.floor(Math.random() * (max + 1));
}
function rainbow(string) {
    return lolcat.rainbow(function(char, color) {
        char = $.terminal.escape_brackets(char);
        return `[[;${hex(color)};]${char}]`;
    }, string).join('\n');
}

function hex(color) {
    return '#' + [color.red, color.green, color.blue].map(n => {
        return n.toString(16).padStart(2, '0');
    }).join('');
}

// Greetings
const font = 'Big Money-ne';
figlet.defaults({ fontPath: 'https://cdn.jsdelivr.net/npm/figlet/fonts' });
figlet.preloadFonts([font], ready);
function render(text)
{
    const cols = term.cols();
    return figlet.textSync(text, {
        font: font,
        width: cols,
        whitespaceBreak: true
    });
}

// Output
function ready()
{
    term.echo(() => rainbow(render('okcoder1')), { ansi: true });
    term.echo(() => "<b><white>Hi! I'm</white> <green>okcoder1</green>!</b>")
}