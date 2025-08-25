// Set variables and functions
const currentDate = new Date();
const rebootDate = new Date(currentDate.setSeconds(currentDate.getSeconds() + 1));
const sleep = ms => new Promise(r => setTimeout(r, ms));

// Set commands
const commands = {
    reboot()
    {
        term.set_prompt('').pause(true);
        term.echo(`System reboot scheduled at <b>${rebootDate}</b>.`);
        setTimeout(() => {
            term.clear();
            term.set_prompt('').pause(true)
            term.echo('<b>Rebooting</b>').addClass('reboot');
        }, 1000);
        setTimeout(() => {
            term.clear();
            term.set_prompt('').pause(true);
            term.echo('<b>Rebooting.</b>').addClass('reboot');
        }, 2000);
        setTimeout(() => {
            term.clear();
            term.set_prompt('').pause(true);
            term.echo('<b>Rebooting..</b>').addClass('reboot');
        }, 3000);
        setTimeout(() => {
            term.set_prompt('').pause(true);
            term.clear();
            term.echo('<b>Rebooting...</b>').addClass('reboot');
        }, 4000);
        setTimeout(() => {
            location.reload(true);
        }, 5000);
    },
    help()
    {
        term.echo(`Commands that are available: <b>${help}<b>`);
    },
    echo(...args)
    {
        term.echo(() => args.join(' '));
    },
    discord()
    {
        term.echo(`You wanna talk with me? Talk to me in <blue><b>Discord</blue></b>!`);
        window.open('https://discordapp.com/users/983692760072745020', '_blank');
    },
    hackclub_slack()
    {
        term.echo(`(Hack Club) This is where I usually <yellow><b>Slack</yellow></b> off.`);
        window.open('https://hackclub.slack.com/team/U08F95SST0V', '_blank');
    },
    twitch()
    {
        term.echo(`<purple><b>Twitch</purple></b>? You're gonna be <b>twitching your eye</b> when you see my streams (which I never do often)!`);
        window.open('https://www.twitch.tv/ok_coder1', '_blank');
    },
    github()
    {
        term.echo(`<b>GitHub</b> is where I code.`);
        window.open('https://github.com/ok-coder1', '_blank');
    },
    youtube()
    {
        term.echo(`You can see my (very bad) videos in <red><b>YouTube</red></b>.`);
        window.open('https://youtube.com/@okcoder1', '_blank');
    },
    mail()
    {
        term.echo(`You wanna send me an <b>email<b>? You gotcha!`);
        window.open('mailto:codershub.code@gmail.com', '_blank');
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
async function ready()
{
    term.clear();
    term.set_prompt('').pause(true);
    term.echo(() => `(<b>INFO</b>) [${currentDate}] Starting up...`).addClass('startup-log');
    await sleep(1000);
    term.echo(() => `(<b><green>SUCCESS</green></b>) [${currentDate}] Successfully loaded all modules!`).addClass('startup-log');
    await sleep(500);
    term.echo(() => `(<b>INFO</b>) [${currentDate}] Loading jQuery...`).addClass('startup-log');
    await sleep(1000);
    term.echo(() => `(<b>INFO</b>) [${currentDate}] Loading jQuery Terminal...`).addClass('startup-log');
    await sleep(1500);
    term.echo(() => `(<b><green>SUCCESS</green></b>) [${currentDate}] Successfully loaded jQuery!`).addClass('startup-log');
    term.echo(() => `(<b>INFO</b>) [${currentDate}] Starting up services...`).addClass('startup-log');
    await sleep(750);
    term.echo(() => `(<b><green>SUCCESS</green></b>) [${currentDate}] Successfully started services!`).addClass('startup-log');
    await sleep(250);
    term.echo(() => `(<b>INFO</b>) [${currentDate}] Loading terminal...`).addClass('startup-log');
    await sleep(1000);
    term.echo(() => `(<b><green>SUCCESS</green></b>) [${currentDate}] Successfully loaded terminal!`).addClass('startup-log');
    await sleep(500);
    term.clear();
    term.echo(() => rainbow(render('okcoder1')), { ansi: true });
    // TODO(@ok-coder1): Add back animations
    // labels: bug, feature
    /*
    term.echo(() => new $.terminal.FramesAnimation(
        [
            [
                `<b>H</b>                               `,
                `                                       `
            ],
            [
                `<b>Hi</b>                              `,
                `                                       `
            ],
            [
                `<b>Hi!</b>                             `,
                `                                       `
            ],
            [
                `<b>Hi! I</b>                           `,
                `                                       `
            ],
            [
                `<b>Hi! I'</b>                          `,
                `                                       `
            ],
            [
                `<b>Hi! I'm</b>                         `,
                `                                       `
            ],
            [
                `<b>Hi! I'm <green>o</green></b>        `,
                `                                       `
            ],
            [
                `<b>Hi! I'm <green>ok</green></b>       `,
                `                                       `
            ],
            [
                `<b>Hi! I'm <green>okc</green></b>      `,
                `                                       `
            ],
            [
                `<b>Hi! I'm <green>okco</green></b>     `,
                `                                       `
            ],
            [
                `<b>Hi! I'm <green>okcod</green></b>    `,
                `                                       `
            ],
            [
                `<b>Hi! I'm <green>okcode</green></b>   `,
                `                                       `
            ],
            [
                `<b>Hi! I'm <green>okcoder</green></b>  `,
                `                                       `
            ],
            [
                `<b>Hi! I'm <green>okcoder1</green></b> `,
                `                                       `
            ],
            [
                `<b>Hi! I'm <green>okcoder1</green>!</b>`,
                `                                       `
            ]
        ], 1)).addClass('intro-okcoder1');
        */
    term.echo(() => `<b>Hi! I'm <green>okcoder1</green>!</b>`).addClass('intro-okcoder1');
    term.echo(() => `Use <b>help</b> to get information on commands.`)
    term.set_prompt(`<green>guest@okcoder1</green>:<purple>~</purple>$ `).resume();
}
