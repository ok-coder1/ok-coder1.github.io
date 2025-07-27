// Set variables
const currentDate = new Date();
const rebootDate = new Date(currentDate.setSeconds(currentDate.getSeconds() + 10));

// Set commands
const commands = {
    reboot()
    {
        term.set_prompt('').pause(true)
        term.echo(`System reboot scheduled at <b>${rebootDate}</b>.`)
        setTimeout(() => {
            term.clear();
            term.set_prompt('').pause(true)
            term.echo('<b>Rebooting.</b>');
        }, 1000);
        setTimeout(() => {
            term.clear();
            term.set_prompt('').pause(true)
            term.echo('<b>Rebooting..</b>');
        }, 2000);
        setTimeout(() => {
            term.set_prompt('').pause(true)
            term.clear();
            term.echo('<b>Rebooting...</b>');
        }, 3000);
        setTimeout(() => {
            location.reload(true);
        }, 4000);
    },
    help()
    {
        term.echo(`Commands that are <b>available</b>: ${help}`);
    },
    echo(...args)
    {
        term.echo(() => args.join(' '));
    }
}

// Initialise terminal
const term = $('body').terminal(commands,
    {
        greetings: false,
        checkArity: false
    });

// `help` command
const formatter = new Intl.ListFormat('en',
                                        {
                                            style: 'long',
                                            type: 'conjunction',
                                        });
const command_list = ['clear'].concat(Object.keys(commands));
const help = formatter.format(command_list);

// Colour Formatting
function rand(max) {
    return Math.floor(Math.random() * (max + 1));
}
function rainbow(string) {
    return lolcat.rainbow(function(char, color)
    {
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
    return figlet.textSync(text,
                            {
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