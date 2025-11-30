// Set variables and functions
const user = 'guest';
const server = 'okcoder1';
const root = '~';
let cwd = root;
const path = 'projects/contributions/skills';
const dirs = path.split('/');
var currentDate = new Date();
const rebootDate = new Date(currentDate.setSeconds(currentDate.getSeconds() + 1));
const poweroffDate = new Date(currentDate.setSeconds(currentDate.getSeconds() + 1));
const sleep = ms => new Promise(r => setTimeout(r, ms));
const getLang = () => navigator.language || navigator.browserLanguage || ( navigator.languages || [ "en" ] ) [ 0 ];
const locale = getLang();

// Files, executables & directories
const files = [
    'README.md'
]

const executables = [
    // TODO(@ok-coder1): Add executables
    // Issue URL: https://github.com/ok-coder1/ok-coder1.github.io/issues/1
    // labels: feature
    // `joke` is a placeholder (it's also a command)
    'joke'
]

const directories = {
    projects:
    [
        '',
        '<white>My Projects</white>',
        [
            [
                'Matrix Blocks',
                'https://modrinth.com/mod/matrix-blocks',
                'Minecraft mod that adds blocks with the matrix image'
            ],
            [
                'Portfolio Website',
                'https://okcoder1.hackclub.app/terminal',
                'The website which you are on right now'
            ],
            [
                'web_block',
                'https://pypi.org/project/web-block/',
                'A simple Python module that blocks websites'
            ]
        ].map(([name, url, description = '']) => {
            return `* <a target="_blank" href="${url}">${name}</a> &mdash; <white>${description}</white>`;
        }),
        ''
    ].flat(),
    contributions:
    [
        '',
        `<white>Projects I've contributed to</white>`,
        [
            [
                'SnapX (Team, Documentation)',
                'https://github.com/SnapXL/SnapX',
                'Capture, share, and boost productivity. All in one.'
            ],
            [
                'waka-readme-stats',
                'https://github.com/anmol098/waka-readme-stats',
                `This GitHub Action adds your WakaTime statistics to your GitHub profile's README.`
            ]
        ].map(([name, url, description = '']) => {
            return `* <a target="_blank" href="${url}">${name}</a> &mdash; <white>${description}</white>`;
        }),
        ''
    ].flat(),
    skills:
    [
        '',
        '<white>Languages that I use</white>',
        [
            'Python'
        ].map(lang => `* <yellow>${lang}</yellow>`),
        '',
        '<white>Libraries that I use</white>',
        [
            'Kivy',
            'discord.http',
        ].map(lib => `* <green>${lib}</green>`),
        '',
        '<white>OSes/Tools</white>',
        [
            'Visual Studio Code',
            '<orange>git</orange>',
            '<green>MongoDB</green>',
            '<white>macOS</white>',
            '<grey>Terminal</grey>'
        ].map(tools => `* <blue>${tools}</blue>`),
        ''
    ].flat()
};

// Set commands
const commands = {
    reboot()
    {
        this.set_prompt('').pause(true);
        this.echo(`System reboot scheduled at <b>${rebootDate}</b>.`);
        setTimeout(() => {
            this.clear();
            this.set_prompt('').pause(true)
            this.echo('<b>Rebooting</b>').addClass('reboot');
        }, 1000);
        setTimeout(() => {
            this.clear();
            this.set_prompt('').pause(true);
            this.echo('<b>Rebooting.</b>').addClass('reboot');
        }, 2000);
        setTimeout(() => {
            this.clear();
            this.set_prompt('').pause(true);
            this.echo('<b>Rebooting..</b>').addClass('reboot');
        }, 3000);
        setTimeout(() => {
            this.set_prompt('').pause(true);
            this.clear();
            this.echo('<b>Rebooting...</b>').addClass('reboot');
        }, 4000);
        setTimeout(() => {
            location.reload(true);
        }, 5000);
    },
    /*poweroff()
    {
        this.set_prompt('').pause(true);
        this.echo(`System shutdown scheduled at <b>${poweroffDate}</b>.`);
        setTimeout(() => {
            this.clear();
            this.set_prompt('').pause(true)
            this.echo('<b>Shutting down</b>').addClass('poweroff');
        }, 1000);
        setTimeout(() => {
            this.clear();
            this.set_prompt('').pause(true);
            this.echo('<b>Shutting down.</b>').addClass('poweroff');
        }, 2000);
        setTimeout(() => {
            this.clear();
            this.set_prompt('').pause(true);
            this.echo('<b>Shutting down..</b>').addClass('poweroff');
        }, 3000);
        setTimeout(() => {
            this.set_prompt('').pause(true);
            this.clear();
            this.echo('<b>Shutting down...</b>').addClass('poweroff');
        }, 4000);
        setTimeout(() => {
            window.close();
        }, 5000);
    },*/
    fastfetch()
    {
        function ConvertSeconds(n) {
            var day = parseInt(n / (24 * 3600));
    
            n = n % (24 * 3600);
            var hour = parseInt(n / 3600);
    
            n %= 3600;
            var minutes = n / 60;
    
            n %= 60;
            var seconds = n;
            
            return day + " " + "days " + hour + " " + "hours " + minutes.toFixed() + " " + "minutes " + seconds.toFixed() + " " + "seconds ";
        }
        var upTimeSinceOpened = ConvertSeconds(performance.now() / 1000);
        var fastfetch_ascii = `        _,met$$$$$gg.
     ,g$$$$$$$$$$$$$$$P.
   ,g$$P""       """Y$$.".     guest@okcoder1
  ,$$P'              \`$$$.     --------------
',$$P       ,ggs.     \`$$b:    OS: Debian GNU/Linux 13 (trixie) x86_64
\`d$$'     ,$P"'   .    $$$     Host: KVM/QEMU Standard PC (i440FX + PIIX, 1996) (pc-i440fx-9.2)
 $$P      d$'     ,    $$P     Kernel: Linux 6.12.41+deb13-amd64
 $$:      $$.   -    ,d$$'     Uptime: ${upTimeSinceOpened}
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
                               Locale: ${locale}`;
        this.echo(rainbow(fastfetch_ascii));
    },
    ls(dir = null) {
        const dirs = path.split('/');
        function print_home()
        {
            term.echo(dirs.map(dir => {
                return `<blue class="directory">${dir}</blue>`;
            }).join('\n'));
            term.echo(executables.map(executable => {
                return `<green class=command-click>${executable}</green>`;
            }).join('\n'));
            term.echo(files.map(file => {
                return `<grey>${file}</grey>`;
            }).join('\n'));
       }
        if (dir)
        {
            if (dir.match(/^~\/?$/))
            {
                print_home();
            }
            else if (dir.startsWith('~/'))
            {
                const path = dir.substring(2);
                const dirs = path.split('/');
                if (dirs.length > 1)
                {
                    this.error(`ls: ${dir}: No such file or directory`);
                }
                else
                {
                    const dir = dirs[0];
                    this.echo(directories[dir].join('\n'));
                }
            }
            else if (cwd === root)
            {
                if (dir in directories)
                {
                    this.echo(directories[dir].join('\n'));
                }
                else
                {
                    this.error(`ls: ${dir}: No such file or directory`);
                }
            }
            else if (dir === '..')
            {
                print_home();
            }
            else
            {
                this.error(`ls: ${dir}: No such file or directory`);
            }
        }
        else if (cwd === root)
        {
            print_home();
        }
        else
        {
            const dir = cwd.substring(2);
            this.echo(directories[dir].join('\n'));
        }
    },
    whoami()
    {
        this.echo(`${user}`);
    },
    pwd()
    {
        this.echo(`${cwd}`)
    },
    async sha1sum(...args)
    {
        if (args.length > 0 && args.join(' ').trim() !== '')
        {
            const input = args.join(' ');
            const getSHA1Hash = async (input) => {
                const textAsBuffer = new TextEncoder().encode(input);
                const hashBuffer = await window.crypto.subtle.digest("SHA-1", textAsBuffer);
                const hashArray = Array.from(new Uint8Array(hashBuffer));
                const hash = hashArray.map((item) => item.toString(16).padStart(2, "0")).join("");
                return hash;
            };
            const hashed = await getSHA1Hash(input);
            this.echo(`${hashed} ${input}`);
        }
    },
    async sha256sum(...args)
    {
        if (args.length > 0 && args.join(' ').trim() !== '')
        {
            const input = args.join(' ');
            const getSHA256Hash = async (input) => {
                const textAsBuffer = new TextEncoder().encode(input);
                const hashBuffer = await window.crypto.subtle.digest("SHA-256", textAsBuffer);
                const hashArray = Array.from(new Uint8Array(hashBuffer));
                const hash = hashArray.map((item) => item.toString(16).padStart(2, "0")).join("");
                return hash;
            };
            const hashed = await getSHA256Hash(input);
            this.echo(`${hashed} ${input}`);
        }
    },
    async sha384sum(...args)
    {
        if (args.length > 0 && args.join(' ').trim() !== '')
        {
            const input = args.join(' ');
            const getSHA384Hash = async (input) => {
                const textAsBuffer = new TextEncoder().encode(input);
                const hashBuffer = await window.crypto.subtle.digest("SHA-384", textAsBuffer);
                const hashArray = Array.from(new Uint8Array(hashBuffer));
                const hash = hashArray.map((item) => item.toString(16).padStart(2, "0")).join("");
                return hash;
            };
            const hashed = await getSHA384Hash(input);
            this.echo(`${hashed} ${input}`);
        }
    },
    async sha512sum(...args)
    {
        if (args.length > 0 && args.join(' ').trim() !== '')
        {
            const input = args.join(' ');
            const getSHA512Hash = async (input) => {
                const textAsBuffer = new TextEncoder().encode(input);
                const hashBuffer = await window.crypto.subtle.digest("SHA-512", textAsBuffer);
                const hashArray = Array.from(new Uint8Array(hashBuffer));
                const hash = hashArray.map((item) => item.toString(16).padStart(2, "0")).join("");
                return hash;
            };
            const hashed = await getSHA512Hash(input);
            this.echo(`${hashed} ${input}`);
        }
    },
    cat(...args)
    {
        if (args == "README.md")
        {
            this.echo(`Hi there! I'm <b><green>okcoder1</green></b> as you may have seen above.\nI'm a <b>developer</b>. That's it?\nI mainly use <b><yellow>Python</yellow></b> (even though this website is in <b><i>JavaScript</i></b>) and <b>macOS</b> is my daily driver.\nCheckout (<i>git</i> it?) my (un)cool projects by typing '<b>github</b>'!\nType <white>help</white> to see more commands.`);
        }
        else if (args == "")
        {
            this.error(`cat: No file specified`);
        }
        else
        {
            this.error(`cat: ${args}: No such file or directory`)
        }
    },
    cd(dir = null) {
        if (dir === null || (dir === '..' && cwd !== root))
        {
            cwd = root;
        }
        else if (dir.startsWith('~/') && dirs.includes(dir.substring(2)))
        {
            cwd = dir;
        }
        else if (dir.startsWith('../') && cwd !== root && dirs.includes(dir.substring(3)))
        {
            cwd = root + '/' + dir.substring(3);
        }
        else if (dirs.includes(dir))
        {
            cwd = root + '/' + dir;
        }
        else
        {
            this.error(`cd: ${dir}: No such file or directory`);
        }
    },
    help()
    {
        this.echo(`Commands: <b>${help}<b>`);
    },
    async joke()
    {
        const jokeAPI = 'https://v2.jokeapi.dev/joke/Programming?safe-mode&blacklistFlags=nsfw,religious,political,racist,sexist,explicit';
        const res = await fetch(jokeAPI);
        const data = await res.json();
        if (data.type == 'twopart')
        {
            this.animation(async () => {
                await this.echo(`Question: ${data.setup}`, {
                    delay: 50,
                    typing: true
                });
                await this.echo(`Answer: ${data.delivery}`, {
                    delay: 50,
                    typing: true
                });
            });
        }
        else if (data.type == 'single')
        {
            this.echo(data.joke, {
                delay: 50,
                typing: true
            });
        }
    },
    echo(...args)
    {
        if (args.length > 0) {
            this.echo(args.join(' '));
        }
    },
    discord()
    {
        this.echo(`You wanna talk with me? Talk to me in <blue><b>Discord</blue></b>!`);
        window.open('https://discordapp.com/users/983692760072745020', '_blank');
    },
    hackclub_slack()
    {
        this.echo(`(Hack Club) This is where I usually <yellow><b>Slack</yellow></b> off.\n<b><red>WARNING</red>: You need to be a member of Hack Club to view this (you need to be <u><i>18 or under</i></u> to join).</b>`);
        window.open('https://hackclub.slack.com/team/U08F95SST0V', '_blank');
    },
    twitch()
    {
        this.echo(`<purple><b>Twitch</purple></b>? My streams (which I never do) are bad. Just a warning.`);
        window.open('https://www.twitch.tv/ok_coder1', '_blank');
    },
    github()
    {
        this.echo(`<white><b>GitHub</b></white> is where I code.`);
        window.open('https://github.com/ok-coder1', '_blank');
    },
    youtube()
    {
        this.echo(`You can see my (very bad) videos in <red><b>YouTube</red></b>.`);
        window.open('https://youtube.com/@okcoder1', '_blank');
    },
    mail()
    {
        this.echo(`You wanna send me an <white><b>email</b></white>? You gotcha!`);
        window.open('mailto:codershub.code@gmail.com', '_blank');
    },
    credits()
    {
        return [
            '',
            '<white>Used libraries for this website:</white>',
            '* <a target="_blank" href="https://terminal.jcubic.pl">jQuery Terminal</a>',
            '* <a target="_blank" href="https://github.com/patorjk/figlet.js">Figlet.js</a>',
            '* <a target="_blank" href="https://github.com/jcubic/isomorphic-lolcat">Isomorphic Lolcat</a>',
            '* <a target="_blank" href="https://jokeapi.dev">Joke API</a>',
            '* <a target="_blank" href="https://hackclub.com"> Hack Club for hosting the main website',
            ''
        ].join('\n');
    },
    rm(...args)
    {
        if (args != "")
        {
            const input = args.join(" ");
            if (input == "-rf /" || "-rf ./" || "-rf / --no-preserve-root" || "-rf ./ --no-preserve-root")
            {
                this.echo(`<b>No 😃.</b> BTW here's a joke for you:`);
                this.exec(`joke`);
            }
        }
    }/*,
    // TODO(@ok-coder1): Make `record` command work again
    // Issue URL: https://github.com/ok-coder1/ok-coder1.github.io/issues/2
    // labels: bug, feature
    record(...args)
    {
        if (args == `start`)
        {
            this.history_state(true);
            this.echo(`Recording started!`);
        }
        else if (args == `stop`)
        {
            this.history_state(false);
            this.echo(`Recording stopped!\nHere's the link to your terminal session: ${window.location.href}`)
        }
        else
        {
            this.echo(`Usage: <b>record start|stop</b>\nRecords a terminal session and gives you an URL to share it.`)
        }
    }*/
};

// Set prompt
function prompt()
{
    return `<green>${user}@${server}</green>:<purple>${cwd}</purple>$ `;
}

// Initialise terminal
const term = $('body').terminal(commands,
                                {
                                    greetings: false,
                                    checkArity: false,
                                    completion(string)
                                    {
                                        const cmd = this.get_command();
                                        const { name, rest } = $.terminal.parse_command(cmd);
                                        if (['cd', 'ls'].includes(name))
                                        {
                                            if (rest.startsWith('~/'))
                                            {
                                                return dirs.map(dir => `~/${dir}`);
                                            }
                                            if (rest.startsWith('../') && cwd != root)
                                            {
                                                return dirs.map(dir => `../${dir}`);
                                            }
                                            if (cwd === root)
                                            {
                                                return dirs;
                                            }
                                        }
                                        return Object.keys(commands);
                                    },
                                    exit: false,
                                    prompt,
                                    // TODO(@ok-coder1): Make `record` command work again
                                    // Issue URL: https://github.com/ok-coder1/ok-coder1.github.io/issues/2
                                    // labels: bug, feature
                                    // execHash: true,
                                    execAnimation: true
                                }
);

// `help` command
const formatter = new Intl.ListFormat('en',
                                        {
                                            style: 'long',
                                            type: 'conjunction',
                                        });
const command_list = ['clear'].concat(Object.keys(commands)).sort();
const formatted_list = command_list.map(cmd => {
    return `<white class="command-click">${cmd}</white>`;
});
const help = formatter.format(formatted_list);

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
    // Formatting of terminal
    const regex = new RegExp(`^\s*(${command_list.join('|')})(\s?.*)`);
    $.terminal.new_formatter([regex, function(_, command, args) {
        return `<white class=command-click>${command}</white><green>${args}</green>`;
    }]);
    $.terminal.xml_formatter.tags.green = (attrs) => {
        return `[[;#44D544;;${attrs.class}]`;
    };
    $.terminal.xml_formatter.tags.blue = (attrs) => {
        return `[[;#55F;;${attrs.class}]`;
    };
    term.on('click', '.command-click', function() {
        const command = $(this).data('text');
        term.exec(command, { delay: 25, typing: true });
    });
    term.on('click', '.directory', function() {
        const dir = $(this).data('text');
        term.exec(`cd ~/${dir}`);
    });

    // Startup
    term.pause();
    term.clear();
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
    term.echo(`(<b>INFO</b>) [${currentDate}] Starting up terminal...`).addClass('startup-log');
    await sleep(1000);
    term.clear();

    term.resume();
    term.animation(async () => {
        await term.echo(`<green>User@laptop</green>:<purple>~</purple>$ ssh guest@okcoder1`, { delay: 75, typing: true });
    });
    await sleep(2600);
    term.clear();

    term.echo(rainbow(render('okcoder1')), { ansi: true }).addClass('intro');
    term.animation(async () => {
        await term.echo(`<b>Hi! I'm <green>okcoder1</green>!</b>`, { delay: 75, typing: true });
        await term.echo(`Type <white>help</white> to get information on commands.`, { delay: 50, typing: true });
    });
}
