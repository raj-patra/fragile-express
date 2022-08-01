const HOST = process.env.HOST || "http://localhost"
const _ = require('lodash');

const api_urls = {

    animals: {
        cats: "https://api.thecatapi.com/v1/images/search",
    },

    games: {
        browser: "https://www.freetogame.com/api/games?platform=browser",
        pc: "https://www.freetogame.com/api/games?platform=pc",
        valorant: "https://valorant-api.com/v1/",
    },

    images: {
        cat: "https://cataas.com/cat/cute",
        dog: "https://random.dog",
        duck: "https://random-d.uk/api/randomimg",
        emoji: "https://emojihub.herokuapp.com/api/random",
        fox: "https://randomfox.ca",
        lorem_picsum: "https://picsum.photos/1920/1080/?random",
        nekos: "https://nekos.best/api/v2/neko",
        unsplash: "https://source.unsplash.com/random",
        waifu: "https://api.waifu.im/random",
    },

    jokes: {
        dad: "https://icanhazdadjoke.com/",
        random: "https://sv443.net/jokeapi/v2/joke/Any",
        yo_mama: "https://yomomma-api.herokuapp.com/jokes",
    },

    memes: {
        namo: "https://namo-memes.herokuapp.com/memes/1",
        no: "https://yesno.wtf/api?force=no",
        random: "https://inspirobot.me/api?generate=true",
        reddit: "https://meme-api.herokuapp.com/gimme",
        templates: "https://api.imgflip.com/get_memes",
        yes: "https://yesno.wtf/api?force=yes",
    },

    personalities: {
        advice: "https://api.adviceslip.com/advice",
        affirmation: "https://www.affirmations.dev",
        chuck_norris: "https://api.chucknorris.io/jokes/random",
        inspiration: "https://type.fit/api/quotes",
        insult: "https://evilinsult.com/generate_insult.php?lang=en&type=json",
        kanye: "https://api.kanye.rest/",
        ron_swanson: "https://ron-swanson-quotes.herokuapp.com/v2/quotes",
        trump: "https://api.whatdoestrumpthink.com/api/v1/quotes/random",
    },

    quotes: {
        anime: "https://animechan.vercel.app/api/random",
        design: "https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand&per_page=1",
        poems: "https://www.poemist.com/api/v1/randompoems",
        powerful: "https://api.fisenko.net/v1/quotes/en/random",
        qotd: "https://favqs.com/api/qotd",
        random: "https://api.quotable.io/random",
        stoicism: "https://api.themotivate365.com/stoic-quote",
        superhero: "https://superhero-quotes.herokuapp.com/random",
        zen: "https://zenquotes.io/api/random",
    },

    random: {
        activity: "http://www.boredapi.com/api/activity",
        alias: "",
        human: "https://thispersondoesnotexist.com/image",
        website: "https://www.boredbutton.com/random",
    },

    shows: {
        brba: "https://breakingbadapi.com/api/quote/random",
        breaking_bad: "https://breaking-bad-quotes.herokuapp.com/v1/quotes",
        final_space: "https://finalspaceapi.com/api/v0/quote",
        game_of_thrones: "https://game-of-thrones-quotes.herokuapp.com/v1/random",
        harry_potter: "http://hp-api.herokuapp.com/api/characters/",
        lucifer: "https://lucifer-quotes.vercel.app/api/quotes",
        random: "https://web-series-quotes-api.deta.dev/quote/",
        stranger_things: "https://strangerthings-quotes.vercel.app/api/quotes",
    },

    trivia: {
        cat: "https://meowfacts.herokuapp.com/",
        chess: "https://api.chess.com/pub/puzzle/random",
        chuck_norris: "http://api.icndb.com/jokes/random",
        date: "http://numbersapi.com/random/date",
        math: "http://numbersapi.com/random/math",
        number: "http://numbersapi.com/random/trivia",
        quiz: "https://opentdb.com/api.php?amount=1",
        random: "https://asli-fun-fact-api.herokuapp.com/",
        useless: "https://uselessfacts.jsph.pl//random.json?language=en",
        year: "http://numbersapi.com/random/year",
    },
}

const indexing = (obj, route) => {
    let keys = _.keys(obj);
    return {
        message: "List of available resources.",
        resources: _.zipObject(keys, _.map(keys, (key) => HOST+"/api/"+route+key)),
        root: HOST
    }
}

module.exports = {
    api_urls: api_urls,
    host: HOST,

    root: {
        message: "Welcome to the Fragile Express.",
        api: HOST+"/api",
        metadata: {
            about: HOST+"/about",
            reference: HOST+"/reference",
        }
    },
    about: {
        message: "Fragile Express, is an attempt to bring various resources and APIs from the web into one.",
        version: "3.0.0",
        dev: {
            message: "Made with ❤ by a_ignorant_mortal",
            repository: "https://github.com/raj-patra/fragile-express",
            portfolio: "https://raj-patra.github.io/",
            linktree: "https://linktr.ee/ign_mortal"
        }
    },

    api: indexing(api_urls, ""),
    games: indexing(api_urls.games, "games/"),
    images: indexing(api_urls.images, "images/"),
    jokes: indexing(api_urls.jokes, "jokes/"),
    memes: indexing(api_urls.memes, "memes/"),
    personalities: indexing(api_urls.personalities, "personalities/"),
    quotes: indexing(api_urls.quotes, "quotes/"),
    random: indexing(api_urls.random, "random/"),
    shows: indexing(api_urls.shows, "shows/"),
    trivia: indexing(api_urls.trivia, "trivia/"),

    noun: [
        'fishbowl', 'chairman', 'vineyard', 'caretaker', 'carwash', 'inland', 'barnyard', 'because', 'password', 'fireman', 'worldwide', 'buttercup', 'quicksand', 'courthouse', 'workshop', 'dustpan', 'backfield', 'bobcat', 'ratline', 'background', 'bathroom', 'rawboned', 'grapefruit', 'aircraft', 'talebearer',
        'tapeworm', 'crackpot', 'rattlesnake', 'courtroom', 'rearward', 'teaspoon', 'became', 'countermeasure', 'passbook', 'earthworm', 'countdown', 'copycat', 'lifetime', 'cartwheel', 'stonewall', 'checkmate', 'carport', 'bedbug', 'airfield', 'passkey', 'taleteller', 'candid', 'ladybug', 'stepson', 'bedclothes',
        'outdoors', 'drawstring', 'cutthroat', 'rawhide', 'armchair', 'hallway', 'crossbeam', 'lifeblood', 'lifeboat', 'darkroomṇ', 'caveman', 'counterpoise', 'redcoat', 'earache', 'baseball', 'gateway', 'rearmost', 'reddish', 'oatmeal', 'jigsaw', 'fourteen', 'standpipe', 'carefree', 'earring', 'mealtime', 'eyebrow',
        'earphone', 'chopstick', 'courtyard', 'stickup', 'yourself', 'flashback', 'cardsharp', 'pancake', 'greenhouse', 'kneecap', 'keyhole', 'seashell', 'backfire', 'dishwasher', 'ratsbane', 'starfish', 'crybaby', 'firefly', 'lifesaver', 'drawbridge', 'readywitted', 'eggplant', 'handgun', 'eyeball', 'candlelight', 'notebook',
        'household', 'lifework', 'steamship', 'airbrush', 'raincoat', 'cheesecloth', 'heartbeat', 'carrack', 'rattletrap', 'backbreaker', 'elsewhere', 'eyelid', 'darkroom', 'carpool', 'railway', 'carsick', 'handcuff', 'cancan', 'crybaby', 'grasshopper', 'together', 'rainbow', 'armpit', 'backlash', 'iceberg', 'airlift',
        'eardrum', 'waistline', 'bulldog', 'aftermath', 'nightmare', 'catfish', 'drainpipe', 'briefcase', 'butterfly', 'carryall', 'rainwater', 'Cannot', 'afternoon', 'candlestick', 'teardrop', 'scarecrow', 'cattail', 'rearrange', 'firefly', 'undermine', 'become', 'bedtime', 'wallpaper', 'clockwork', 'carpetbagger',
        'earthquake', 'stockroom', 'driveway', 'footprint', 'backdrop', 'drumstick', 'counteroffensive', 'daredevil', 'cardboard', 'landslide', 'billboard', 'foolproof', 'marketplace', 'steamboat', 'endless', 'breakfast', 'sailboat', 'driftwood', 'cowboy', 'daydream', 'Passover', 'redcap', 'brainstorm'
    ],
    adjective: [
        'adorable', 'adventurous', 'aggressive', 'agreeable', 'alert', 'alive', 'amused', 'angry', 'calm', 'careful', 'cautious', 'charming', 'cheerful', 'clean', 'clear', 'clever', 'cloudy', 'clumsy', 'eager', 'easy', 'elated', 'elegant', 'embarrassed', 'enchanting', 'encouraging', 'bad', 'beautiful', 'better',
        'bewildered', 'black', 'bloody', 'blue', 'blue-eyed', 'dangerous', 'dark', 'dead', 'defeated', 'defiant', 'delightful', 'depressed', 'determined', 'different', 'fair', 'faithful', 'famous', 'fancy', 'fantastic', 'fierce', 'filthy', 'fine', 'annoyed', 'annoying', 'anxious', 'arrogant', 'ashamed', 'attractive',
        'average', 'awful', 'colorful', 'combative', 'comfortable', 'concerned', 'condemned', 'confused', 'cooperative', 'courageous', 'curious', 'cute', 'energetic', 'enthusiastic', 'envious', 'evil', 'excited', 'expensive', 'exuberant', 'blushing', 'bored', 'brainy', 'brave', 'breakable', 'bright', 'busy', 'buttery',
        'difficult', 'disgusted', 'distinct', 'disturbed', 'dizzy', 'doubtful', 'drab', 'dull', 'dusty', 'foolish', 'fragile', 'frail', 'frantic', 'friendly', 'frightened', 'funny', 'furry', 'gentle', 'gifted', 'glamorous', 'gleaming', 'glorious', 'good', 'ill', 'important', 'impossible', 'inexpensive', 'innocent',
        'inquisitive', 'nasty', 'naughty', 'nervous', 'nice', 'nutty', 'obedient', 'obnoxious', 'odd', 'old-fashioned', 'handsome', 'happy', 'healthy', 'helpful', 'helpless', 'hilarious', 'lazy', 'light', 'lively', 'lonely', 'long', 'lovely', 'lucky', 'panicky', 'perfect', 'plain', 'pleasant', 'poised', 'poor', 'powerful',
        'gorgeous', 'graceful', 'grieving', 'grotesque', 'grumpy', 'grungy', 'itchy', 'jealous', 'jittery', 'jolly', 'joyous', 'kind', 'open', 'outrageous', 'outstanding', 'homeless', 'homely', 'horrible', 'hungry', 'hurt', 'hushed', 'magnificent', 'misty', 'modern', 'motionless', 'muddy', 'mushy', 'mysterious', 'precious',
        'prickly', 'proud', 'putrid', 'puzzled', 'quaint', 'queasy', 'real', 'relieved', 'repulsive', 'rich', 'scary', 'selfish', 'shiny', 'shy', 'silly', 'sleepy', 'smiling', 'vast', 'victorious', 'vivacious', 'wandering', 'weary', 'wicked', 'wide-eyed', 'talented', 'tame', 'tasty', 'tender', 'tense', 'terrible', 'thankful',
        'thoughtful', 'thoughtless', 'tired', 'smoggy', 'sore', 'sparkling', 'splendid', 'spotless', 'stormy', 'strange', 'stupid', 'successful', 'super ', 'svelte', 'wild', 'witty', 'worried', 'worrisome', 'wrong', 'zany', 'zealous', 'tough', 'troubled', 'ugliest', 'ugly', 'uninterested', 'unsightly', 'unusual', 'upset',
        'uptight', 'useful'
    ],

    quiz_options: {
        difficulty: ["easy", "medium", "hard"],
        category:   {
            9: "General Knowledge",
            10: "Entertainment: Books",
            11: "Entertainment: Film",
            12: "Entertainment: Music",
            13: "Entertainment: Musicals & Theatres",
            14: "Entertainment: Television",
            15: "Entertainment: Video Games",
            16: "Entertainment: Board Games",
            17: "Science & Nature",
            18: "Science: Computers",
            19: "Science: Mathematics",
            20: "Mythology",
            21: "Sports",
            22: "Geography",
            23: "History",
            24: "Politics",
            25: "Art",
            26: "Celebrities",
            27: "Animals",
            28: "Vehicles",
            29: "Entertainment: Comics",
            30: "Science: Gadgets",
            31: "Entertainment: Japanese Anime & Manga",
            32: "Entertainment: Cartoon & Animations",
        },
        type: ["multiple", "boolean"],
    },

    hp_options: [
        "/students",
        "/staff",
    ],

    valo_options: [
        "/agents", "/buddies", "/bundles", "/ceremonies",
        "/competitivetiers", "/contenttiers", "/contracts", "/currencies",
        "/events", "/gamemodes", "/gear", "/maps",
        "/playercards", "/playertitles", "/seasons",
        "/sprays", "/themes", "/weapons"
    ],

    404: {
        message: "Endpoint does not exist."
    }
}
