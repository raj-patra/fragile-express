const HOST = process.env.HOST || "http://localhost"
module.exports.host = HOST;

module.exports.api_urls = {
    "insult": "https://evilinsult.com/generate_insult.php?lang=en&type=json",

    "quote": {
        "random": "https://api.quotable.io/random",
        "kanye": "https://api.kanye.rest/",
        "trump": "https://api.whatdoestrumpthink.com/api/v1/quotes/random",
        "superhero": "https://superhero-quotes.herokuapp.com/random",
        "poems": "https://www.poemist.com/api/v1/randompoems",
        "anime": "https://animechan.vercel.app/api/random",
        "powerful": "https://api.fisenko.net/v1/quotes/en/random",
        "stoicism": "https://api.themotivate365.com/stoic-quote"
    },

    "fact": {
        "random": "https://asli-fun-fact-api.herokuapp.com/",
        "useless": "https://uselessfacts.jsph.pl//random.json?language=en",
        "chuck_norris": "http://api.icndb.com/jokes/random",
        "trivia": "http://numbersapi.com/random/trivia",
        "math": "http://numbersapi.com/random/math",
        "date": "http://numbersapi.com/random/date",
        "year": "http://numbersapi.com/random/year",
    },

    "personality": {
        "insult": "https://evilinsult.com/generate_insult.php?lang=en&type=json",
        "advice": "https://api.adviceslip.com/advice",
        "affirmation": "https://www.affirmations.dev",
        "inspiration": "https://inspiration.goprogram.ai/"
    },

    "random_website": "https://www.boredbutton.com/random"
}

module.exports.api = {
    "message": "List of available resources.",
    "resources": {
        "root": HOST, 
        "about": HOST+"/about",
        "api": {
            "insult": HOST+"/api/insult",
            "random_website": HOST+"/api/bored",

            "quotes": {
                "index": HOST+"/api/quote",
                "random": HOST+"/api/quote/random",
                "kanye_west": HOST+"/api/quote/kanye",
                "donald_trump": HOST+"/api/quote/trump",
                "superhero": HOST+"/api/quote/superhero",
                "poems": HOST+"/api/quote/poems",
                "anime": HOST+"/api/quote/anime",
                "powerful": HOST+"/api/quote/powerful",
                "stoicism": HOST+"/api/quote/stoicism"
            },

            "facts": {
                "index": HOST+"/api/fact",
                "random": HOST+"/api/fact/random",
                "useless": HOST+"/api/fact/useless",
                "chuck_norris": HOST+"/api/fact/chuck_norris",
                "trivia": HOST+"/api/fact/trivia",
                "math": HOST+"/api/fact/math",
                "date": HOST+"/api/fact/date",
                "year": HOST+"/api/fact/year",
            },

            "personalities": {
                "index": HOST+"/api/personality",
                "advice": HOST+"/api/personality/advice",
                "affirmation": HOST+"/api/personality/affirmation",
                "inspiration": HOST+"/api/personality/inspiration"
            }
        }
    }
}

module.exports.root = {
    "message": "Welcome to the Fragile Express.",
    "resources": {
        "api": HOST+"/api",
        "random_insult": HOST+"/api/insult",
        "random_website": HOST+"/api/bored",
        "quotes": HOST+"/api/quote",
        "facts": HOST+"/api/fact",
        "personalities": HOST+"/api/personality"
    },
    "root": HOST
}

module.exports.personalities = {
    "message": "List of available resources.",
    "resources": {
        "advice": HOST+"/api/personality/advice",
        "affirmation": HOST+"/api/personality/affirmation",
        "inspiration": HOST+"/api/personality/inspiration"
    },
    "root": HOST
}

module.exports.quote = {
    "message": "List of available resources.",
    "resources": {
        "random": HOST+"/api/quote/random",
        "kanye_west": HOST+"/api/quote/kanye",
        "donald_trump": HOST+"/api/quote/trump",
        "superhero": HOST+"/api/quote/superhero",
        "poems": HOST+"/api/quote/poems",
        "anime": HOST+"/api/quote/anime",
        "powerful": HOST+"/api/quote/powerful",
        "stoicism": HOST+"/api/quote/stoicism"
    },
    "root": HOST
}

module.exports.fact = {
    "message": "List of available resources.",
    "resources": {
        "random": HOST+"/api/fact/random",
        "useless": HOST+"/api/fact/useless",
        "chuck_norris": HOST+"/api/fact/chuck_norris",
        "trivia": HOST+"/api/fact/trivia",
        "math": HOST+"/api/fact/math",
        "date": HOST+"/api/fact/date",
        "year": HOST+"/api/fact/year",
    },
    "root": HOST
}

module.exports.about = {
    "message": "Fragile Express, is an attempt to bring various resources and APIs from the net into one.",
    "dev": {
        "message": "Made with ❤ by a_ignorant_mortal",
        "repo": "https://github.com/raj-patra/fragile-express",
        "portfolio": "https://raj-patra.github.io/",
        "linktree": "https://linktr.ee/ign_mortal"
    },
    "root": HOST
}

module.exports.noun = [
    'fishbowl', 'chairman', 'vineyard', 'caretaker', 'carwash', 'inland', 'barnyard', 'because', 'password', 'fireman', 'worldwide', 'buttercup', 'quicksand', 'courthouse', 'workshop', 'dustpan', 'backfield', 'bobcat', 'ratline', 'background', 'bathroom', 'rawboned', 'grapefruit', 'aircraft', 'talebearer',
    'tapeworm', 'crackpot', 'rattlesnake', 'courtroom', 'rearward', 'teaspoon', 'became', 'countermeasure', 'passbook', 'earthworm', 'countdown', 'copycat', 'lifetime', 'cartwheel', 'stonewall', 'checkmate', 'carport', 'bedbug', 'airfield', 'passkey', 'taleteller', 'candid', 'ladybug', 'stepson', 'bedclothes',
    'outdoors', 'drawstring', 'cutthroat', 'rawhide', 'armchair', 'hallway', 'crossbeam', 'lifeblood', 'lifeboat', 'darkroomṇ', 'caveman', 'counterpoise', 'redcoat', 'earache', 'baseball', 'gateway', 'rearmost', 'reddish', 'oatmeal', 'jigsaw', 'fourteen', 'standpipe', 'carefree', 'earring', 'mealtime', 'eyebrow',
    'earphone', 'chopstick', 'courtyard', 'stickup', 'yourself', 'flashback', 'cardsharp', 'pancake', 'greenhouse', 'kneecap', 'keyhole', 'seashell', 'backfire', 'dishwasher', 'ratsbane', 'starfish', 'crybaby', 'firefly', 'lifesaver', 'drawbridge', 'readywitted', 'eggplant', 'handgun', 'eyeball', 'candlelight', 'notebook',
    'household', 'lifework', 'steamship', 'airbrush', 'raincoat', 'cheesecloth', 'heartbeat', 'carrack', 'rattletrap', 'backbreaker', 'elsewhere', 'eyelid', 'darkroom', 'carpool', 'railway', 'carsick', 'handcuff', 'cancan', 'crybaby', 'grasshopper', 'together', 'rainbow', 'armpit', 'backlash', 'iceberg', 'airlift',
    'eardrum', 'waistline', 'bulldog', 'aftermath', 'nightmare', 'catfish', 'drainpipe', 'briefcase', 'butterfly', 'carryall', 'rainwater', 'Cannot', 'afternoon', 'candlestick', 'teardrop', 'scarecrow', 'cattail', 'rearrange', 'firefly', 'undermine', 'become', 'bedtime', 'wallpaper', 'clockwork', 'carpetbagger',
    'earthquake', 'stockroom', 'driveway', 'footprint', 'backdrop', 'drumstick', 'counteroffensive', 'daredevil', 'cardboard', 'landslide', 'billboard', 'foolproof', 'marketplace', 'steamboat', 'endless', 'breakfast', 'sailboat', 'driftwood', 'cowboy', 'daydream', 'Passover', 'redcap', 'brainstorm'
]

module.exports.adjective = [
    'adorable', 'adventurous', 'aggressive', 'agreeable', 'alert', 'alive', 'amused', 'angry', 'calm', 'careful', 'cautious', 'charming', 'cheerful', 'clean', 'clear', 'clever', 'cloudy', 'clumsy', 'eager', 'easy', 'elated', 'elegant', 'embarrassed', 'enchanting', 'encouraging', 'bad', 'beautiful', 'better',
    'bewildered', 'black', 'bloody', 'blue', 'blue-eyed', 'dangerous', 'dark', 'dead', 'defeated', 'defiant', 'delightful', 'depressed', 'determined', 'different', 'fair', 'faithful', 'famous', 'fancy', 'fantastic', 'fierce', 'filthy', 'fine', 'annoyed', 'annoying', 'anxious', 'arrogant', 'ashamed', 'attractive',
    'average', 'awful', 'colorful', 'combative', 'comfortable', 'concerned', 'condemned', 'confused', 'cooperative', 'courageous', 'curious', 'cute', 'energetic', 'enthusiastic', 'envious', 'evil', 'excited', 'expensive', 'exuberant', 'blushing', 'bored', 'brainy', 'brave', 'breakable', 'bright', 'busy', 'buttery',
    'difficult', 'disgusted', 'distinct', 'disturbed', 'dizzy', 'doubtful', 'drab', 'dull', 'dusty', 'foolish', 'fragile', 'frail', 'frantic', 'friendly', 'frightened', 'funny', 'furry', 'gentle', 'gifted', 'glamorous', 'gleaming', 'glorious', 'good', 'ill', 'important', 'impossible', 'inexpensive', 'innocent',
    'inquisitive', 'nasty', 'naughty', 'nervous', 'nice', 'nutty', 'obedient', 'obnoxious', 'odd', 'old-fashioned', 'handsome', 'happy', 'healthy', 'helpful', 'helpless', 'hilarious', 'lazy', 'light', 'lively', 'lonely', 'long', 'lovely', 'lucky', 'panicky', 'perfect', 'plain', 'pleasant', 'poised', 'poor', 'powerful',
    'gorgeous', 'graceful', 'grieving', 'grotesque', 'grumpy', 'grungy', 'itchy', 'jealous', 'jittery', 'jolly', 'joyous', 'kind', 'open', 'outrageous', 'outstanding', 'homeless', 'homely', 'horrible', 'hungry', 'hurt', 'hushed', 'magnificent', 'misty', 'modern', 'motionless', 'muddy', 'mushy', 'mysterious', 'precious',
    'prickly', 'proud', 'putrid', 'puzzled', 'quaint', 'queasy', 'real', 'relieved', 'repulsive', 'rich', 'scary', 'selfish', 'shiny', 'shy', 'silly', 'sleepy', 'smiling', 'vast', 'victorious', 'vivacious', 'wandering', 'weary', 'wicked', 'wide-eyed', 'talented', 'tame', 'tasty', 'tender', 'tense', 'terrible', 'thankful',
    'thoughtful', 'thoughtless', 'tired', 'smoggy', 'sore', 'sparkling', 'splendid', 'spotless', 'stormy', 'strange', 'stupid', 'successful', 'super ', 'svelte', 'wild', 'witty', 'worried', 'worrisome', 'wrong', 'zany', 'zealous', 'tough', 'troubled', 'ugliest', 'ugly', 'uninterested', 'unsightly', 'unusual', 'upset',
    'uptight', 'useful'
]