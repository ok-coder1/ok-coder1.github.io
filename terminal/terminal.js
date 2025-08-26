// Set variables and functions
var currentDate = new Date();
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
    fastfetch()
    {
        var fastfetch_ascii = `        _,met$$$$$gg.
     ,g$$$$$$$$$$$$$$$P.
   ,g$$P""       """Y$$.".     guest@okcoder1
  ,$$P'              \`$$$.     -------------
',$$P       ,ggs.     \`$$b:    OS: Debian GNU/Linux 13 (trixie) x86_64
\`d$$'     ,$P"'   .    $$$     Host: KVM/QEMU Standard PC (i440FX + PIIX, 1996) (pc-i440fx-9.2)
 $$P      d$'     ,    $$P     Kernel: Linux 6.12.41+deb13-amd64
 $$:      $$.   -    ,d$$'     Uptime: 1 day, 1 hour, 42 mins
 $$;      Y$b._   _,d$P'       Packages: 4372 (dpkg), 47 (nix-default)
 Y$$.    \`.\`"Y$$$$P"'          Shell: bash 5.2.37
 \`$$b      "-.__               Cursor: Adwaita
  \`Y$$b                        Terminal: /dev/pts/13
   \`Y$$.                       CPU: AMD EPYC 9454P 48-Core (96) @ 2.75 GHz
     \`$$b.                     GPU: Unknown Device 1111 (VGA compatible)
       \`Y$$b.                  Memory: 165.29 GiB / 235.19 GiB (70%)
         \`"Y$b._               Swap: 79.22 GiB / 470.39 GiB (17%)
             \`""""             Disk (/): 2.52 TiB / 2.98 TiB (85%) - ext4
                               Local IP (ens18): 37.27.51.34/32
                               Locale: en_US.UTF-8`;
        term.echo(rainbow(fastfetch_ascii));
    },
    ls()
    {
        term.echo(`README.md        `);
    },
    dir()
    {
        term.echo(`README.md`);
    },
    whoami()
    {
        term.echo(`guest`);
    },
    pwd()
    {
        term.echo(`/home/guest`)
    },
    async sha1sum(...args)
    {
        const input = args.join(' ');
        const getSHA1Hash = async (input) => {
            const textAsBuffer = new TextEncoder().encode(input);
            const hashBuffer = await window.crypto.subtle.digest("SHA-1", textAsBuffer);
            const hashArray = Array.from(new Uint8Array(hashBuffer));
            const hash = hashArray
              .map((item) => item.toString(16).padStart(2, "0"))
              .join("");
            return hash;
        };
        const hashed = await getSHA1Hash(input);
        term.echo(`${hashed} ${input}`);
    },
    async sha256sum(...args)
    {
        const input = args.join(' ');
        const getSHA256Hash = async (input) => {
            const textAsBuffer = new TextEncoder().encode(input);
            const hashBuffer = await window.crypto.subtle.digest("SHA-256", textAsBuffer);
            const hashArray = Array.from(new Uint8Array(hashBuffer));
            const hash = hashArray
              .map((item) => item.toString(16).padStart(2, "0"))
              .join("");
            return hash;
        };
        const hashed = await getSHA256Hash(input);
        term.echo(`${hashed} ${input}`);
    },
    async sha384sum(...args)
    {
        const input = args.join(' ');
        const getSHA384Hash = async (input) => {
            const textAsBuffer = new TextEncoder().encode(input);
            const hashBuffer = await window.crypto.subtle.digest("SHA-384", textAsBuffer);
            const hashArray = Array.from(new Uint8Array(hashBuffer));
            const hash = hashArray
              .map((item) => item.toString(16).padStart(2, "0"))
              .join("");
            return hash;
        };
        const hashed = await getSHA384Hash(input);
        term.echo(`${hashed} ${input}`);
    },
    async sha512sum(...args)
    {
        const input = args.join(' ');
        const getSHA512Hash = async (input) => {
            const textAsBuffer = new TextEncoder().encode(input);
            const hashBuffer = await window.crypto.subtle.digest("SHA-512", textAsBuffer);
            const hashArray = Array.from(new Uint8Array(hashBuffer));
            const hash = hashArray
              .map((item) => item.toString(16).padStart(2, "0"))
              .join("");
            return hash;
        };
        const hashed = await getSHA512Hash(input);
        term.echo(`${hashed} ${input}`);
    },
    cat(...args)
    {
        if (args == "README.md")
        {
            term.echo(`Hi there! I'm <b><green>okcoder1</green></b> as you may have seen above.\nI'm a <b>developer</b>. That's it?\nI mainly use <b><yellow>Python</yellow></b> (even though this website is in <b><i>JavaScript</i></b>) and <b>macOS</b> is my daily driver.\nCheckout (<i>git</i> it?) my (un)cool projects by typing '<b>github</b>'!\nType '<b>help</b>' to see more commands.`);
        }
        else if (args == "")
        {
            term.echo(`cat: No file specified`);
        }
        else
        {
            term.echo(`cat: <b>${args}</b>: No such file or directory`)
        }
    },
    help()
    {
        term.echo(`Commands: <b>${help}<b>`);
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
        term.echo(`(Hack Club) This is where I usually <yellow><b>Slack</yellow></b> off.\n<b><red>WARNING</red>: You need to be a member of Hack Club to view this (you need to be <i>18</i> or under to join).</b>`);
        window.open('https://hackclub.slack.com/team/U08F95SST0V', '_blank');
    },
    twitch()
    {
        term.echo(`<purple><b>Twitch</purple></b>? My streams (which I never do) are bad. Just a warning.`);
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
const formatted_list = command_list.map(cmd => {
    return `<white class="command-click-help">${cmd}</white>`;
});
const help = formatter.format(formatted_list);
term.on('click', '.command-click-help', function() {
    const command_click = $(this).text();
    term.exec(command_click);
 });

// Colour Formatting
function rand(max) {
    return Math.floor(Math.random() * (max + 1));
}
function hex(color) {
    return '#' + [color.red, color.green, color.blue].map(n => {
        return n.toString(16).padStart(2, '0');
    }).join('');
}
function rainbow(string) {
    return lolcat.rainbow(function(char, color)
    {
        char = $.terminal.escape_brackets(char);
        return `[[;${hex(color)};]${char}]`;
    }, string).join('\n');
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
    var currentDate = new Date();
    term.echo(() => `(<b>INFO</b>) [${currentDate}] Starting up...`).addClass('startup-log');
    var currentDate = new Date();
    await sleep(1000);
    term.echo(() => `(<b><green>SUCCESS</green></b>) [${currentDate}] Successfully loaded all modules!`).addClass('startup-log');
    var currentDate = new Date();
    await sleep(500);
    term.echo(() => `(<b>INFO</b>) [${currentDate}] Loading jQuery...`).addClass('startup-log');
    var currentDate = new Date();
    await sleep(1000);
    term.echo(() => `(<b>INFO</b>) [${currentDate}] Loading jQuery Terminal...`).addClass('startup-log');
    var currentDate = new Date();
    await sleep(1500);
    term.echo(`(<b><green>SUCCESS</green></b>) [${currentDate}] Successfully loaded jQuery!`).addClass('startup-log');
    var currentDate = new Date();
    term.echo(`(<b>INFO</b>) [${currentDate}] Starting up services...`).addClass('startup-log');
    var currentDate = new Date();
    await sleep(750);
    term.echo(`(<b><green>SUCCESS</green></b>) [${currentDate}] Successfully started services!`).addClass('startup-log');
    var currentDate = new Date();
    await sleep(250);
    term.echo(`(<b>INFO</b>) [${currentDate}] Loading terminal...`).addClass('startup-log');
    var currentDate = new Date();
    await sleep(1000);
    term.echo(`(<b><green>SUCCESS</green></b>) [${currentDate}] Successfully loaded terminal!`).addClass('startup-log');
    var currentDate = new Date();
    await sleep(500);
    term.clear();
    term.echo(rainbow(render('okcoder1')), { ansi: true });
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
