const HOST = process.env.HOST || "http://localhost"
const _ = require('lodash');

const api_urls = {
    random: {
        alias: "",
        website: "https://www.boredbutton.com/random",
        human: "https://thispersondoesnotexist.com/image",
        activity: "http://www.boredapi.com/api/activity",
    },

    quotes: {
        random: "https://api.quotable.io/random",
        superhero: "https://superhero-quotes.herokuapp.com/random",
        poems: "https://www.poemist.com/api/v1/randompoems",
        anime: "https://animechan.vercel.app/api/random",
        powerful: "https://api.fisenko.net/v1/quotes/en/random",
        stoicism: "https://api.themotivate365.com/stoic-quote",
        game_of_thrones: "https://game-of-thrones-quotes.herokuapp.com/v1/random",
        brba: "https://breakingbadapi.com/api/quote/random",
        breaking_bad: "https://breaking-bad-quotes.herokuapp.com/v1/quotes",
    },

    facts: {
        random: "https://asli-fun-fact-api.herokuapp.com/",
        useless: "https://uselessfacts.jsph.pl//random.json?language=en",
        chuck_norris: "http://api.icndb.com/jokes/random",
        number: "http://numbersapi.com/random/trivia",
        math: "http://numbersapi.com/random/math",
        date: "http://numbersapi.com/random/date",
        year: "http://numbersapi.com/random/year",
        cat: "https://meowfacts.herokuapp.com/",
        quiz: "https://opentdb.com/api.php?amount=1",
    },

    personalities: {
        insult: "https://evilinsult.com/generate_insult.php?lang=en&type=json",
        advice: "https://api.adviceslip.com/advice",
        affirmation: "https://www.affirmations.dev",
        inspiration: "https://type.fit/api/quotes",
        kanye: "https://api.kanye.rest/",
        trump: "https://api.whatdoestrumpthink.com/api/v1/quotes/random",
    },

    games: {
        pc: "https://www.freetogame.com/api/games?platform=pc",
        browser: " https://www.freetogame.com/api/games?platform=browser"
    },

    jokes: {
        random: "https://sv443.net/jokeapi/v2/joke/Any",
        chuck_norris: "https://api.chucknorris.io/jokes/random",
        yo_mama: "https://yomomma-api.herokuapp.com/jokes",
        dad: "https://icanhazdadjoke.com/"
    },

    memes:{
        random: "https://inspirobot.me/api?generate=true",
        reddit: "https://meme-api.herokuapp.com/gimme",
        templates: "https://api.imgflip.com/get_memes",
        namo: "https://namo-memes.herokuapp.com/memes/1",
        yes: "https://yesno.wtf/api?force=yes",
        no: "https://yesno.wtf/api?force=no",
    }

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
        about: HOST+"/about",
        api: HOST+"/api"
    },
    about: {
        message: "Fragile Express, is an attempt to bring various resources and APIs from the net into one.",
        dev: {
            message: "Made with ❤ by a_ignorant_mortal",
            repository: "https://github.com/raj-patra/fragile-express",
            portfolio: "https://raj-patra.github.io/",
            linktree: "https://linktr.ee/ign_mortal"
        }
    },

    api: indexing(api_urls, ""),
    random: indexing(api_urls.random, "random/"),
    quotes: indexing(api_urls.quotes, "quotes/"),
    facts: indexing(api_urls.facts, "facts/"),
    personalities: indexing(api_urls.personalities, "personalities/"),
    games: indexing(api_urls.games, "games/"),
    jokes: indexing(api_urls.jokes, "jokes/"),
    memes: indexing(api_urls.memes, "memes/"),

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
    }
}