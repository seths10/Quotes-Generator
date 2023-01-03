const quotes = [
	{
		text: 'Most of modern life, all our diseases, are diseases of abundance, not diseases of scarcity.',
		author: 'Naval Ravikant',
	},
	{
		text: 'Write books only if you are going to say in them the things you would never dare confide to anyone',
		author: 'Emil Cioran',
	},
	{
		text: 'Write books only if you are going to say in them the things you would never dare confide to anyone',
		author: 'Emil Cioran',
	},
	{
		text: 'If you wish to make an apple pie from scratch, you must first invent the universe',
		author: 'Carl Sagan',
	},
	{
		text: 'As you walk down the fairway of life you must smell the roses, for you only get to play one round.',
		author: 'Ben Hogan',
	},
	{
		text: 'The art of life is to know how to enjoy a little and to endure very much.',
		author: 'William Hazlitt',
	},
	{
		text: 'Write books only if you are going to say in them the things you would never tell anyone',
		author: 'Emil Cioran',
	},
	{
		text: "I'm telling you it is going to be easy. I'm telling you it is going to be worth it.",
		author: 'Art Williams',
	},
	{
		text: "Don't focus on the pain, Focus on the Progress.",
		author: 'Dwayne Johnson',
	},
	{
		text: "It always seems impossible until it's done.",
		author: 'Nelson Mandela',
	},
	{
		text: "Everything is hard before it is easy.",
		author: 'Johann Wolfgang von Goethe',
	},
	{
		text: 'Work hard in silence. Let your success be noise.',
		author: 'Frank Ocean',
	},
	{
		text: "Life is never fair, and perhaps it is a good thing for most of us that it is not.",
		author: 'Oscar Wilde',
	},
	{
		text: 'Maybe it’s not about having a beautiful day, but about finding beautiful moments. Maybe a whole day is just too much to ask. I could choose to believe that in every day, in all things, no matter how dark and ugly, there are shards of beauty if I look for them.',
		author: 'Anna White',
	},
	{
		text: "I've had the sort of day that would make St. Francis of Assisi kick babies.",
		author: 'JDouglas Adams',
	},
	{
		text: "If you really want to do something, you'll find a way. If you don't, you'll find an excuse.",
		author: 'Jim Rohn',
	},
	{
		text: 'Genius is one percent inspiration and ninety-nine percent perspiration.',
		author: 'Thomas Edison',
	},
	{
		text: 'Genius is one percent inspiration and ninety-nine percent perspiration.',
		author: 'Thomas Edison',
	},
	{
		text: 'You can observe a lot just by watching.',
		author: 'Yogi Berra',
	},
	{
		text: 'A house divided against itself cannot stand.',
		author: 'Abraham Lincoln',
	},
	{
		text: 'Difficulties increase the nearer we get to the goal.',
		author: 'Johann Wolfgang von Goethe',
	},
	{
		text: 'Fate is in your hands and no one elses',
		author: 'Byron Pulsifer',
	},
	{
    text: "Be worthy of the people and things you get in your life.",
    author: "Sulabh Bashyal",
  },
	 {
    text: "Without music, life would be a mistake.",
    author: "Friedrich Nietzsche",
  },
	 {
    text: "A question that sometimes drives me hazy: am I or are the others crazy?",
    author: "Albert Einstein",
  },
	{
    text: "We are surrounded by story.",
    author: "Alice McDermott",
  },
	{
    text: "The past beats inside me like a second heart.",
    author: "John Banville",
  },


{
    text: "To doubt is better, because it helps understand, aids searching. Question is everything, answer is maturity",
    author: "Laxmi Prasad Devkota",
  },
	{
		text: 'Be the chief but never the lord.',
		author: 'Lao Tzu',
	},
	{
		text: 'Nothing happens unless first we dream.',
		author: 'Carl Sandburg',
	},
	{
		text: 'Well begun is half done.',
		author: 'Aristotle',
	},
	{
		text: 'Life is a learning experience, only if you learn.',
		author: 'Yogi Berra',
	},
	{
		text: 'Self-complacency is fatal to progress.',
		author: 'Margaret Sangster',
	},
	{
		text: 'Peace comes from within. Do not seek it without.',
		author: 'Buddha',
	},
	{
		text: 'What you give is what you get.',
		author: 'Byron Pulsifer',
	},
	{
		text: 'Think how hard physics would be if particles could think',
		author: 'Murray Gell-Mann',
	},
	{
		text: "Life is a series of natural and spontaneous changes. Don't resist them - that only creates sorrow. Let reality be reality. Let things flow naturally forward in whatever way they like.",
		author: 'Lao Tzu',
	},
	{
		text: 'If you do not change direction, you may end up where you are heading.',
		author: 'Lao Tzu',
	},
	{
		text: 'To the mind that is still, the whole universe surrenders.',
		author: 'Lao Tzu',
	},
	{
		text: 'Nature does not hurry, yet everything is accomplished.',
		author: 'Lao Tzu',
	},
	{
		text: 'He who does not trust enough, Will not be trusted.',
		author: 'Lao Tzu',
	},
	{
		text: 'We can only learn to love by loving.',
		author: 'Iris Murdoch',
	},
	{
		text: 'Life is change. Growth is optional. Choose wisely.',
		author: 'Karen Clark',
	},
	{
		text: "You'll see it when you believe it.",
		author: 'Wayne Dyer',
	},
	{
		text: 'Today is the tomorrow we worried about yesterday.',
		author: null,
	},
	{
		text: "It's easier to see the mistakes on someone else's paper.",
		author: null,
	},
	{
		text: 'Every man dies. Not every man really lives.',
		author: null,
	},
	{
		text: 'To lead people walk behind them.',
		author: 'Lao Tzu',
	},
	{
		text: 'Having nothing, nothing can he lose.',
		author: 'William Shakespeare',
	},
	{
		text: 'Trouble is only opportunity in work clothes.',
		author: 'Henry J. Kaiser',
	},
	{
		text: 'A rolling stone gathers no moss.',
		author: 'Publilius Syrus',
	},
	{
		text: 'Ideas are the beginning points of all fortunes.',
		author: 'Napoleon Hill',
	},
	{
		text: 'Everything in life is luck.',
		author: 'Donald Trump',
	},
	{
		text: 'Doing nothing is better than being busy doing nothing.',
		author: 'Lao Tzu',
	},
	{
		text: 'Trust yourself. You know more than you think you do.',
		author: 'Benjamin Spock',
	},
	{
		text: 'Study the past, if you would divine the future.',
		author: 'Confucius',
	},
	{
		text: 'The day is already blessed, find peace within it.',
		author: null,
	},
	{
		text: 'From error to error one discovers the entire truth.',
		author: 'Sigmund Freud',
	},
	{
		text: 'Well done is better than well said.',
		author: 'Benjamin Franklin',
	},
	{
		text: 'Bite off more than you can chew, then chew it.',
		author: 'Ella Williams',
	},
	{
		text: 'Work out your own salvation. Do not depend on others.',
		author: 'Buddha',
	},
	{
		text: 'One today is worth two tomorrows.',
		author: 'Benjamin Franklin',
	},
	{
		text: 'The art of life is to know how to enjoy a little',
		author: 'William Hazlitt',
	},
	{
		text: 'Once you choose hope, anythings possible.',
		author: 'Christopher Reeve',
	},
	{
		text: 'God always takes the simplest way.',
		author: 'Albert Einstein',
	},
	{
		text: 'One fails forward toward success.',
		author: 'Charles Kettering',
	},
	{
		text: 'From small beginnings come great things.',
		author: null,
	},
	{
		text: 'Learning is a treasure that will follow its owner everywhere',
		author: 'Chinese proverb',
	},
	{
		text: 'Be as you wish to seem.',
		author: 'Socrates',
	},
	{
		text: 'The world is always in movement.',
		author: 'V. Naipaul',
	},
	{
		text: "When you have a dream, you've got to grab it and never let go.",
		author: 'Carol Burnett',
	},
	{
		text: 'There is nothing impossible to they who will try.',
		author: 'Alexander the Great',
	},
	{
		text: 'Never mistake activity for achievement.',
		author: 'John Wooden',
	},
	{
		text: 'What worries you masters you.',
		author: 'Haddon Robinson',
	},
	{
		text: 'One faces the future with ones past.',
		author: 'Pearl Buck',
	},
	{
		text: 'Goals are the fuel in the furnace of achievement.',
		author: 'Brian Tracy',
	},
	{
		text: 'Who sows virtue reaps honour.',
		author: 'Leonardo da Vinci',
	},
	{
		text: 'Be kind whenever possible. It is always possible.',
		author: 'Dalai Lama',
	},
	{
		text: "Talk doesn't cook rice.",
		author: 'Chinese proverb',
	},
	{
		text: 'He is able who thinks he is able.',
		author: 'Buddha',
	},
		{

text:"You know, Hobbes, some days even my lucky rocketship underpants don't help.",
author:"Bill Watterson"

},
{

text:"I haven't had a very good day. I think I might still be hungover and everyone's dead and my root beer's gone.",
author:"Holly Black"

},
{

text:"Even if we don't have the power to choose where we come from, we can still choose where we go from there",
author:"Stephen Chbosky"

},
{

text:"And now that you don't have to be perfect, you can be good.",
author:"John Steinbeck"

},
{

text:"Outside the windows the day was bright: golden sunshine, blue sky, pleasant wind... I wanted to punch the happy day in the face, grab it by the hair, and beat it until it told me what the hell it was so happy about.",
author:"Ilona Andrews"

},
	{
		text: 'A goal without a plan is just a wish.',
		author: 'Larry Elder',
	},
	{
		text: 'To succeed, we must first believe that we can.',
		author: 'Michael Korda',
	},
	{
		text: "All endings are also beginnings. We just don't know it at the time.",
		author: 'Mitch Albom',
	},
	{
		text: 'Learn from yesterday, live for today, hope for tomorrow.',
		author: 'Albert Einstein',
	},
	{
		text: 'A weed is no more than a flower in disguise.',
		author: 'James Lowell',
	},
	{
		text: 'Do, or do not. There is no try.',
		author: 'Yoda',
	},
	{
		text: 'All serious daring starts from within.',
		author: 'Harriet Beecher Stowe',
	},
	{
		text: 'The best teacher is experience learned from failures.',
		author: 'Byron Pulsifer',
	},
	{
		text: 'Think how hard physics would be if particles could think.',
		author: 'Murray Gell-Mann',
	},
	{
		text: "Love is the flower you've got to let grow.",
		author: 'John Lennon',
	},
	{
		text: "Don't wait. The time will never be just right.",
		author: 'Napoleon Hill',
	},
	{
		text: 'Time is the wisest counsellor of all.',
		author: 'Pericles',
	},
	{
		text: 'You give before you get.',
		author: 'Napoleon Hill',
	},
	{
		text: 'Wisdom begins in wonder.',
		author: 'Socrates',
	},
	{
		text: 'Without courage, wisdom bears no fruit.',
		author: 'Baltasar Gracian',
	},
	{
		text: 'Change in all things is sweet.',
		author: 'Aristotle',
	},
	{
		text: 'What you fear is that which requires action to overcome.',
		author: 'Byron Pulsifer',
	},
	{
		text: 'When performance exceeds ambition, the overlap is called success.',
		author: 'Cullen Hightower',
	},
	{
		text: 'When deeds speak, words are nothing.',
		author: 'African proverb',
	},
	{
		text: 'Real magic in relationships means an absence of judgement of others.',
		author: 'Wayne Dyer',
	},
	{
		text: 'I never think of the future. It comes soon enough.',
		author: 'Albert Einstein',
	},
	{
		text: 'Skill to do comes of doing.',
		author: 'Ralph Emerson',
	},
	{
		text: 'Wisdom is the supreme part of happiness.',
		author: 'Sophocles',
	},
	{
		text: 'I believe that every person is born with talent.',
		author: 'Maya Angelou',
	},
	{
		text: 'Your mind is for having ideas, not holding them.',
		author: 'David Allen',
	},
	{
		text: 'Important principles may, and must, be inflexible.',
		author: 'Abraham Lincoln',
	},
	{
		text: 'The undertaking of a new action brings new strength.',
		author: 'Richard Evans',
	},
	{
		text: 'The years teach much which the days never know.',
		author: 'Ralph Emerson',
	},
	{
		text: 'Our distrust is very expensive.',
		author: 'Ralph Emerson',
	},
	{
		text: 'All know the way; few actually walk it.',
		author: 'Bodhidharma',
	},
	{
		text: 'Great talent finds happiness in execution.',
		author: 'Johann Wolfgang von Goethe',
	},
	{
		text: 'Faith in oneself is the best and safest course.',
		author: 'Michelangelo',
	},
	{
		text: 'Courage is going from failure to failure without losing enthusiasm.',
		author: 'Winston Churchill',
	},
	{
		text: 'The two most powerful warriors are patience and time.',
		author: 'Leo Tolstoy',
	},
	{
		text: 'Anticipate the difficult by managing the easy.',
		author: 'Lao Tzu',
	},
	{
		text: 'Those who are free of resentful thoughts surely find peace.',
		author: 'Buddha',
	},
	{
		text: 'A short saying often contains much wisdom.',
		author: 'Sophocles',
	},
	{
		text: 'It takes both sunshine and rain to make a rainbow.',
		author: null,
	},
	{
		text: 'A beautiful thing is never perfect.',
		author: null,
	},
	{
		text: 'Only do what your heart tells you.',
		author: 'Princess Diana',
	},
	{
		text: 'Life is movement-we breathe, we eat, we walk, we move!',
		author: 'John Pierrakos',
	},
	{
		text: 'No one can make you feel inferior without your consent.',
		author: 'Eleanor Roosevelt',
	},
	{
		text: 'Argue for your limitations, and sure enough theyre yours.',
		author: 'Richard Bach',
	},
	{
		text: 'Luck is what happens when preparation meets opportunity.',
		author: 'Seneca',
	},
	{
		text: 'Victory belongs to the most persevering.',
		author: 'Napoleon Bonaparte',
	},
	{
		text: 'Love all, trust a few, do wrong to none.',
		author: 'William Shakespeare',
	},
	{
		text: 'In order to win, you must expect to win.',
		author: 'Richard Bach',
	},
	{
		text: 'A goal is a dream with a deadline.',
		author: 'Napoleon Hill',
	},
	{
		text: 'You can do it if you believe you can!',
		author: 'Napoleon Hill',
	},
		
	{
		text: "Set your goals high, and don't stop till you get there.",
		author: 'Bo Jackson',
	},
	{
		text: 'Every new day is another chance to change your life.',
		author: null,
	},
	{
		text: 'Smile, breathe, and go slowly.',
		author: 'Thich Nhat Hanh',
	},
	{
		text: 'Nobody will believe in you unless you believe in yourself.',
		author: 'Liberace',
	},
	{
		text: 'Do more than dream: work.',
		author: 'William Arthur Ward',
	},
	{
		text: 'No man was ever wise by chance.',
		author: 'Seneca',
	},
	{
		text: 'Some pursue happiness, others create it.',
		author: null,
	},
	{
		text: 'He that is giddy thinks the world turns round.',
		author: 'William Shakespeare',
	},
	{
		text: "Don't ruin the present with the ruined past.",
		author: 'Ellen Gilchrist',
	},
	{
		text: 'Do something wonderful, people may imitate it.',
		author: 'Albert Schweitzer',
	},
	{
		text: 'We do what we do because we believe.',
		author: null,
	},
	{
		text: 'Do one thing every day that scares you.',
		author: 'Eleanor Roosevelt',
	},
	{
		text: 'If you cannot be silent be brilliant and thoughtful.',
		author: 'Byron Pulsifer',
	},
	{
		text: 'Who looks outside, dreams; who looks inside, awakes.',
		author: 'Carl Jung',
	},
	{
		text: 'What we think, we become.',
		author: 'Buddha',
	},
	{
		text: 'The shortest answer is doing.',
		author: 'Lord Herbert',
	},
	{
		text: 'All our knowledge has its origins in our perceptions.',
		author: 'Leonardo da Vinci',
	},
	{
		text: 'The harder you fall, the higher you bounce.',
		author: null,
	},
	{
		text: 'Trusting our intuition often saves us from disaster.',
		author: 'Anne Wilson Schaef',
	},
	{
		text: 'Truth is powerful and it prevails.',
		author: 'Sojourner Truth',
	},
	{
		text: 'Light tomorrow with today!',
		author: 'Elizabeth Browning',
	},
	{
		text: 'Silence is a fence around wisdom.',
		author: 'German proverb',
	},
	{
		text: 'Society develops wit, but its contemplation alone forms genius.',
		author: 'Madame de Stael',
	},
	{
		text: 'The simplest things are often the truest.',
		author: 'Richard Bach',
	},
	{
		text: 'Everyone smiles in the same language.',
		author: null,
	},
	{
		text: 'Yesterday I dared to struggle. Today I dare to win.',
		author: 'Bernadette Devlin',
	},
	{
		text: 'No alibi will save you from accepting the responsibility.',
		author: 'Napoleon Hill',
	},
	{
		text: 'If you can dream it, you can do it.',
		author: 'Walt Disney',
	},
	{
		text: 'It is better to travel well than to arrive.',
		author: 'Buddha',
	},
	{
		text: "Life shrinks or expands in proportion to one's courage.",
		author: 'Anais Nin',
	},
	{
		text: 'You have to believe in yourself.',
		author: 'Sun Tzu',
	},
	{
		text: 'Our intention creates our reality.',
		author: 'Wayne Dyer',
	},
	{
		text: 'Silence is a true friend who never betrays.',
		author: 'Confucius',
	},
	{
		text: 'Character develops itself in the stream of life.',
		author: 'Johann Wolfgang von Goethe',
	},
	{
		text: 'From little acorns mighty oaks do grow.',
		author: 'American proverb',
	},
	{
		text: "You can't stop the waves, but you can learn to surf.",
		author: 'Jon Kabat-Zinn',
	},
	{
		text: 'Reality does not conform to the ideal, but confirms it.',
		author: 'Gustave Flaubert',
	},
	{
		text: 'Speak low, if you speak love.',
		author: 'William Shakespeare',
	},
	{
		text: 'A really great talent finds its happiness in execution.',
		author: 'Johann Wolfgang von Goethe',
	},
	{
		text: 'Reality leaves a lot to the imagination.',
		author: 'John Lennon',
	},
	{
		text: 'The greatest remedy for anger is delay.',
		author: 'Seneca',
	},
	{
		text: 'Growth itself contains the germ of happiness.',
		author: 'Pearl Buck',
	},
	{
		text: "You can do what's reasonable or you can decide what's possible.",
		author: null,
	},
	{
		text: 'he purpose of our lives is to be happy.',
		author: 'Dalai Lama',
	},
	{
		text: "Life is what happens when you're busy making other plans.",
		author: 'John Lennon',
	},
	{
		text: 'Get busy living or get busy dying',
		author: 'Stephen King',
	},
	{
		text: 'You only live once, but if you do it right, once is enough.',
		author: 'Mae West',
	},
	{
		text: 'Many of life’s failures are people who did not realize how close they were to success when they gave up.',
		author: 'Thomas Edison',
	},
	{
		text: 'If you want to live a happy life, tie it to a goal, not to people or things',
		author: 'Albert Einstein',
	},
	{
		text: 'Never let the fear of striking out keep you from playing the game.',
		author: 'Babe Ruth',
	},
	{
		text: 'Money and success don’t change people; they merely amplify what is already there.',
		author: 'Will Smith',
	},
	{
		text: 'Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.',
		author: 'Steve Jobs',
	},
	{
		text: 'The journey of a thousand miles begins with one step.',
		author: 'Lao Tzu',
	},
	{
		text: 'That which does not kill us makes us stronger.',
		author: 'Friedrich Nietzsche',
	},
	{
		text: 'Life is what happens when you’re busy making other plans.',
		author: 'John Lennon',
	},
	{
		text: 'When the going gets tough, the tough get going.',
		author: 'Joe Kennedy',
	},
	{
		text: 'You must be the change you wish to see in the world.',
		author: 'Mahatma Gandhi',
	},
	{
		text: 'You only live once, but if you do it right, once is enough.',
		author: 'Mae West',
	},
	{
		text: 'Tough times never last but tough people do.',
		author: 'Robert H. Schuller',
	},
	{
		text: 'Get busy living or get busy dying.',
		author: 'Stephen King',
	},
	{
		text: 'Whether you think you can or you think you can’t, you’re right.',
		author: 'Henry Ford',
	},
	{
		text: 'Tis better to have loved and lost than to have never loved at all.',
		author: 'Alrded Lord Tennyson',
	},
	{
		text: 'Genius is one percent inspiration and ninety-nine percent perspiration.',
		author: 'Thomas Edison',
	},
	{
		text: 'You can observe a lot just by watching.',
		author: 'Yogi Berra',
	},
	{
		text: 'A house divided against itself cannot stand.',
		author: 'Abraham Lincoln',
	},
	{
		text: 'Difficulties increase the nearer we get to the goal.',
		author: 'Johann Wolfgang von Goethe',
	},
	{
		text: 'Fate is in your hands and no one elses',
		author: 'Byron Pulsifer',
	},
	{
		text: 'Be the chief but never the lord.',
		author: 'Lao Tzu',
	},
	{
		text: 'Nothing happens unless first we dream.',
		author: 'Carl Sandburg',
	},
	{
		text: 'Well begun is half done.',
		author: 'Aristotle',
	},
	{
		text: 'Life is a learning experience, only if you learn.',
		author: 'Yogi Berra',
	},
	{
		text: 'Self-complacency is fatal to progress.',
		author: 'Margaret Sangster',
	},
	{
		text: 'Peace comes from within. Do not seek it without.',
		author: 'Buddha',
	},
	{
		text: 'What you give is what you get.',
		author: 'Byron Pulsifer',
	},
	{
		text: 'We can only learn to love by loving.',
		author: 'Iris Murdoch',
	},
	{
		text: 'Life is change. Growth is optional. Choose wisely.',
		author: 'Karen Clark',
	},
	{
		text: "You'll see it when you believe it.",
		author: 'Wayne Dyer',
	},
	{
		text: 'Today is the tomorrow we worried about yesterday.',
		author: null,
	},
	{
		text: "It's easier to see the mistakes on someone else's paper.",
		author: null,
	},
	{
		text: 'Every man dies. Not every man really lives.',
		author: null,
	},
	{
		text: 'To lead people walk behind them.',
		author: 'Lao Tzu',
	},
	{
		text: 'Having nothing, nothing can he lose.',
		author: 'William Shakespeare',
	},
	{
		text: 'Trouble is only opportunity in work clothes.',
		author: 'Henry J. Kaiser',
	},
	{
		text: 'A rolling stone gathers no moss.',
		author: 'Publilius Syrus',
	},
	{
		text: 'Ideas are the beginning points of all fortunes.',
		author: 'Napoleon Hill',
	},
	{
		text: 'Everything in life is luck.',
		author: 'Donald Trump',
	},
	{
		text: 'Doing nothing is better than being busy doing nothing.',
		author: 'Lao Tzu',
	},
	{
		text: 'Trust yourself. You know more than you think you do.',
		author: 'Benjamin Spock',
	},
	{
		text: 'Study the past, if you would divine the future.',
		author: 'Confucius',
	},
	{
		text: 'The day is already blessed, find peace within it.',
		author: null,
	},
	{
		text: 'From error to error one discovers the entire truth.',
		author: 'Sigmund Freud',
	},
	{
		text: 'Well done is better than well said.',
		author: 'Benjamin Franklin',
	},
	{
		text: 'Bite off more than you can chew, then chew it.',
		author: 'Ella Williams',
	},
	{
		text: 'Work out your own salvation. Do not depend on others.',
		author: 'Buddha',
	},
	{
		text: 'One today is worth two tomorrows.',
		author: 'Benjamin Franklin',
	},
	{
		text: 'Once you choose hope, anythings possible.',
		author: 'Christopher Reeve',
	},
	{
		text: 'God always takes the simplest way.',
		author: 'Albert Einstein',
	},
	{
		text: 'One fails forward toward success.',
		author: 'Charles Kettering',
	},
	{
		text: 'From small beginnings come great things.',
		author: null,
	},
	{
		text: 'Learning is a treasure that will follow its owner everywhere',
		author: 'Chinese proverb',
	},
	{
		text: 'Be as you wish to seem.',
		author: 'Socrates',
	},
	{
		text: 'The world is always in movement.',
		author: 'V. Naipaul',
	},
	{
		text: 'Never mistake activity for achievement.',
		author: 'John Wooden',
	},
	{
		text: 'What worries you masters you.',
		author: 'Haddon Robinson',
	},
	{
		text: 'One faces the future with ones past.',
		author: 'Pearl Buck',
	},
	{
		text: 'Goals are the fuel in the furnace of achievement.',
		author: 'Brian Tracy',
	},
	{
		text: 'Who sows virtue reaps honour.',
		author: 'Leonardo da Vinci',
	},
	{
		text: 'Be kind whenever possible. It is always possible.',
		author: 'Dalai Lama',
	},
	{
		text: "Talk doesn't cook rice.",
		author: 'Chinese proverb',
	},
	{
		text: 'He is able who thinks he is able.',
		author: 'Buddha',
	},
	{
		text: 'A goal without a plan is just a wish.',
		author: 'Larry Elder',
	},
	{
		text: 'To succeed, we must first believe that we can.',
		author: 'Michael Korda',
	},
	{
		text: 'Learn from yesterday, live for today, hope for tomorrow.',
		author: 'Albert Einstein',
	},
	{
		text: 'A weed is no more than a flower in disguise.',
		author: 'James Lowell',
	},
	{
		text: 'Do, or do not. There is no try.',
		author: 'Yoda',
	},
	{
		text: 'All serious daring starts from within.',
		author: 'Harriet Beecher Stowe',
	},
	{
		text: 'The best teacher is experience learned from failures.',
		author: 'Byron Pulsifer',
	},
	{
		text: 'Think how hard physics would be if particles could think.',
		author: 'Murray Gell-Mann',
	},
	{
		text: "Love is the flower you've got to let grow.",
		author: 'John Lennon',
	},
	{
		text: "Don't wait. The time will never be just right.",
		author: 'Napoleon Hill',
	},
	{
		text: 'Time is the wisest counsellor of all.',
		author: 'Pericles',
	},
	{
		text: 'You give before you get.',
		author: 'Napoleon Hill',
	},
	{
		text: 'Wisdom begins in wonder.',
		author: 'Socrates',
	},
	{
		text: 'Without courage, wisdom bears no fruit.',
		author: 'Baltasar Gracian',
	},
	{
		text: 'Change in all things is sweet.',
		author: 'Aristotle',
	},
	{
		text: 'What you fear is that which requires action to overcome.',
		author: 'Byron Pulsifer',
	},
	{
		text: 'When performance exceeds ambition, the overlap is called success.',
		author: 'Cullen Hightower',
	},
	{
		text: 'When deeds speak, words are nothing.',
		author: 'African proverb',
	},
	{
		text: 'Real magic in relationships means an absence of judgement of others.',
		author: 'Wayne Dyer',
	},
	{
		text: 'I never think of the future. It comes soon enough.',
		author: 'Albert Einstein',
	},
	{
		text: 'Skill to do comes of doing.',
		author: 'Ralph Emerson',
	},
	{
		text: 'Wisdom is the supreme part of happiness.',
		author: 'Sophocles',
	},
	{
		text: 'I believe that every person is born with talent.',
		author: 'Maya Angelou',
	},
	{
		text: 'Important principles may, and must, be inflexible.',
		author: 'Abraham Lincoln',
	},
	{
		text: 'The undertaking of a new action brings new strength.',
		author: 'Richard Evans',
	},
	{
		text: 'The years teach much which the days never know.',
		author: 'Ralph Emerson',
	},
	{
		text: 'Our distrust is very expensive.',
		author: 'Ralph Emerson',
	},
	{
		text: 'All know the way; few actually walk it.',
		author: 'Bodhidharma',
	},
	{
		text: 'Great talent finds happiness in execution.',
		author: 'Johann Wolfgang von Goethe',
	},
	{
		text: 'Faith in oneself is the best and safest course.',
		author: 'Michelangelo',
	},
	{
		text: 'Courage is going from failure to failure without losing enthusiasm.',
		author: 'Winston Churchill',
	},
	{
		text: 'The two most powerful warriors are patience and time.',
		author: 'Leo Tolstoy',
	},
	{
		text: 'Anticipate the difficult by managing the easy.',
		author: 'Lao Tzu',
	},
	{
		text: 'Those who are free of resentful thoughts surely find peace.',
		author: 'Buddha',
	},
	{
		text: 'A short saying often contains much wisdom.',
		author: 'Sophocles',
	},
	{
		text: 'It takes both sunshine and rain to make a rainbow.',
		author: null,
	},
	{
		text: 'A beautiful thing is never perfect.',
		author: null,
	},
	{
		text: 'Only do what your heart tells you.',
		author: 'Princess Diana',
	},
	{
		text: 'Life is movement-we breathe, we eat, we walk, we move!',
		author: 'John Pierrakos',
	},
	{
		text: 'No one can make you feel inferior without your consent.',
		author: 'Eleanor Roosevelt',
	},
	{
		text: 'Argue for your limitations, and sure enough theyre yours.',
		author: 'Richard Bach',
	},
	{
		text: 'Luck is what happens when preparation meets opportunity.',
		author: 'Seneca',
	},
	{
		text: 'Victory belongs to the most persevering.',
		author: 'Napoleon Bonaparte',
	},
	{
		text: 'Love all, trust a few, do wrong to none.',
		author: 'William Shakespeare',
	},
	{
		text: 'In order to win, you must expect to win.',
		author: 'Richard Bach',
	},
	{
		text: 'A goal is a dream with a deadline.',
		author: 'Napoleon Hill',
	},
	{
		text: 'You can do it if you believe you can!',
		author: 'Napoleon Hill',
	},
	{
		text: "Set your goals high, and don't stop till you get there.",
		author: 'Bo Jackson',
	},
	{
		text: 'Every new day is another chance to change your life.',
		author: null,
	},
	{
		text: 'Smile, breathe, and go slowly.',
		author: 'Thich Nhat Hanh',
	},
	{
		text: 'Nobody will believe in you unless you believe in yourself.',
		author: 'Liberace',
	},
	{
		text: 'Do more than dream: work.',
		author: 'William Arthur Ward',
	},
	{
		text: 'No man was ever wise by chance.',
		author: 'Seneca',
	},
	{
		text: 'Some pursue happiness, others create it.',
		author: null,
	},
	{
		text: 'He that is giddy thinks the world turns round.',
		author: 'William Shakespeare',
	},
	{
		text: "Don't ruin the present with the ruined past.",
		author: 'Ellen Gilchrist',
	},
	{
		text: 'Do something wonderful, people may imitate it.',
		author: 'Albert Schweitzer',
	},
	{
		text: 'We do what we do because we believe.',
		author: null,
	},
	{
		text: 'Do one thing every day that scares you.',
		author: 'Eleanor Roosevelt',
	},
	{
		text: 'If you cannot be silent be brilliant and thoughtful.',
		author: 'Byron Pulsifer',
	},
	{
		text: 'Who looks outside, dreams; who looks inside, awakes.',
		author: 'Carl Jung',
	},
	{
		text: 'What we think, we become.',
		author: 'Buddha',
	},
	{
		text: 'The shortest answer is doing.',
		author: 'Lord Herbert',
	},
	{
		text: 'All our knowledge has its origins in our perceptions.',
		author: 'Leonardo da Vinci',
	},
	{
		text: 'The harder you fall, the higher you bounce.',
		author: null,
	},
	{
		text: 'Trusting our intuition often saves us from disaster.',
		author: 'Anne Wilson Schaef',
	},
	{
		text: 'Truth is powerful and it prevails.',
		author: 'Sojourner Truth',
	},
	{
		text: 'Light tomorrow with today!',
		author: 'Elizabeth Browning',
	},
	{
		text: 'Silence is a fence around wisdom.',
		author: 'German proverb',
	},
	{
		text: 'Society develops wit, but its contemplation alone forms genius.',
		author: 'Madame de Stael',
	},
	{
		text: 'The simplest things are often the truest.',
		author: 'Richard Bach',
	},
	{
		text: 'Everyone smiles in the same language.',
		author: null,
	},
	{
		text: 'Yesterday I dared to struggle. Today I dare to win.',
		author: 'Bernadette Devlin',
	},
	{
		text: 'No alibi will save you from accepting the responsibility.',
		author: 'Napoleon Hill',
	},
	{
		text: 'If you can dream it, you can do it.',
		author: 'Walt Disney',
	},
	{
		text: 'It is better to travel well than to arrive.',
		author: 'Buddha',
	},
	{
		text: "Life shrinks or expands in proportion to one's courage.",
		author: 'Anais Nin',
	},
	{
		text: 'You have to believe in yourself.',
		author: 'Sun Tzu',
	},
	{
		text: 'Our intention creates our reality.',
		author: 'Wayne Dyer',
	},
	{
		text: 'Silence is a true friend who never betrays.',
		author: 'Confucius',
	},
	{
		text: 'Character develops itself in the stream of life.',
		author: 'Johann Wolfgang von Goethe',
	},
	{
		text: 'From little acorns mighty oaks do grow.',
		author: 'American proverb',
	},
	{
		text: "You can't stop the waves, but you can learn to surf.",
		author: 'Jon Kabat-Zinn',
	},
	{
		text: 'Reality does not conform to the ideal, but confirms it.',
		author: 'Gustave Flaubert',
	},
	{
		text: 'Speak low, if you speak love.',
		author: 'William Shakespeare',
	},
	{
		text: 'A really great talent finds its happiness in execution.',
		author: 'Johann Wolfgang von Goethe',
	},
	{
		text: 'Reality leaves a lot to the imagination.',
		author: 'John Lennon',
	},
	{
		text: 'The greatest remedy for anger is delay.',
		author: 'Seneca',
	},
	{
		text: 'Growth itself contains the germ of happiness.',
		author: 'Pearl Buck',
	},
	{
		text: "You can do what's reasonable or you can decide what's possible.",
		author: null,
	},
	{
		text: 'Make your life a dream, and a dream, a reality.',
		author: 'Antoine de Saint-Exupéry',
	},
	{
		text: 'Music is the langage of emotions.',
		author: 'Emmanuel Kant',
	},
	{
		text: 'Imagination is more important than knowledge.',
		author: 'Albert Einstein',
	},
	{
		text: 'If you want peace, prepare for war.',
		author: 'Jules César',
	},
	{
		text: "It's the Hell of the poor that makes the Heavens of the Rich.",
		author: 'Victor Hugo',
	},
	{
		text: 'There is no worst deaf that the ones who do not want to listen.',
		author: 'Molière',
	},
	{
		text: 'When we want we can, when we can we must.',
		author: 'Napoléon Bonaparte',
	},
	{
		text: 'I think, therefore I am.',
		author: 'René Descartes',
	},
	{
		text: 'Anyone who does not know history is doomed to relive it.',
		author: 'Karl Marx',
	},
	{
		text: 'Promises only bind those who receive them.',
		author: 'Jacques Chirac',
	},
	{
		text: "People won't have time for you if you are always angry or complaining.",
		author: 'Stephen Hawking',
	},
	{
		text: 'Keep your face to the sunshine and you cannot see a shadow.',
		author: 'Hellen Keller',
	},
	{
		text: 'Sometimes we stare so long at a door that is closing that we see too late the one that is open.',
		author: 'Alexander Graham Bell',
	},
	{
		text: 'I am always doing that which I cannot do, in order that I may learn how to do it.',
		author: 'Pablo Picasso',
	},
	{
		text: 'A small body of determined spirits fired by an unquenchable faith in their mission can alter the course of history.',
		author: 'Mahatma Gandhi',
	},
	{
		text: 'The greatest weapon against stress is our ability to choose one thought over another.',
		author: 'William James',
	},
	{
		text: 'The last of human freedoms—the ability to choose ones attitude in a given set of circumstances.',
		author: 'Viktor E. Frankl',
	},
	{
		text: 'First make the change easy (warning: this might be hard), then make the easy change.',
		author: 'Kent Beck',
	},
	{
		text: 'Before software can be reusable it first has to be usable.',
		author: 'Ralph Johnson',
	},
	{
		text: 'If it hurts, do it more frequently, and bring the pain forward.',
		author: 'Jez Humble',
	},
	{
		text: 'Good programmers know what to write. Great ones know what to rewrite and reuse.',
		author: 'Eric S. Raymond',
	},
	{
		text: "Don't take rest after your first victory because if you fail in second, more lips are waiting to say that your first victory was just luck.",
		author: 'Dr. A.P.J Abdul Kalam',
	},
	{
		text: 'Dream, dream, dream. Dreams transform into thoughts and thoughts result in action.',
		author: 'Dr. A.P.J Abdul Kalam',
	},
	{
		text: 'To succeed in your mission, you must have single-minded devotion to your goal.',
		author: 'Dr. A.P.J Abdul Kalam',
	},
	{
		text: 'If you fail, never give up because FAIL means First Attempt In Learning.',
		author: 'Dr. A.P.J Abdul Kalam',
	},
	{
		text: 'Creativity is seeing the same thing but thinking differently.',
		author: 'Dr. A.P.J Abdul Kalam',
	},
	{
		text: 'Failure will never overtake me if my determination to succeed is strong enough.',
		author: 'Dr. A.P.J Abdul Kalam',
	},
	{
		text: 'All of us do not have equal talent. But , all of us have an equal opportunity to develop our talents.',
		author: 'Dr. A.P.J Abdul Kalam',
	},
	{
		text: 'Winning isnt everything, but wanting it is.',
		author: 'Arnold Palmer',
	},
	{
		text: 'You can never cross the ocean unless you have the courage to lose sight of the shore.',
		author: 'Christopher Columbus',
	},
	{
		text: "The world isn't perfect. But it's there for us, doing the best it can… thats what makes it so damn beautiful.",
		author: 'Roy Mustang',
	},
	{
		text: 'Great sea captains are made in rough waters and deep seas.',
		author: 'Kathryn Kuhlman',
	},
	{
		text: 'Smooth sea never made a skillful sailor.',
		author: 'Anonymous',
	},
	{
		text: 'I am always doing that which I cannot do, in order that I may learn how to do it.',
		author: 'Pablo Picasso',
	},
	{
		text: 'The greatest weapon against stress is our ability to choose one thought over another.',
		author: 'William James',
	},
	{
		text: 'The last of human freedoms—the ability to choose ones attitude in a given set of circumstances.',
		author: 'Viktor E. Frankl',
	},
	{
		text: 'Leadership is hard to define and good leadership even harder. But if you can get people to follow you to the ends of the earth, you are a great leader.',
		author: 'Indra Nooyi',
	},
	{
		text: "It isn't what we say or think that defines us, but what we do.",
		author: 'Jane Austen',
	},
	{
		text: 'There is no charm equal to tenderness of heart.',
		author: 'Jane Austen',
	},
	{
		text: 'We have all a better guide in ourselves, if we would attend to it, than any other person can be.',
		author: 'Jane Austen',
	},
	{
		text: "Evil is not something superhuman, it's something less than human.",
		author: 'Agatha Christie',
	},
	{
		text: 'It is never too late to be who you might have been.',
		author: 'George Elliot',
	},
	{
		text: 'Never let the odds keep you from doing what you know in your heart you were meant to do.',
		author: 'H. Jackson Brown',
	},
	{
		text: 'Success usually comes to those who are too busy looking for it.',
		author: 'Henry David Thoreau',
	},
	{
		text: 'I never dreamed about success. I worked for it.',
		author: 'Estee Lauder',
	},
	{
		text: 'Experience is a hard teacher because she gives the test first, the lesson afterwards.',
		author: 'Vernon Sanders Law',
	},
	{
		text: 'Empty your mind, be formless. Shapeless, like water. If you put water into a cup, it becomes the cup. You put water into a bottle and it becomes the bottle. You put it in a teapot it becomes the teapot. Now, water can flow or it can crash. Be water, my friend.',
		author: 'Bruce Lee',
	},
	{
		text: 'We all live in a house on fire, no fire department to call, no way out.',
		author: 'Tennessee Williams',
	},
	{
		text: 'All truths are easy to understand once they are discovered. The point is to discover them.',
		author: 'Galileo Galilei',
	},
	{
		text: "Hunting is not a sport. In a sport, both sides should know they're in the game.",
		author: 'Paul Rodriguez',
	},
	{
		text: 'No matter how dark the moment, love and hope are always possible.',
		author: 'George Chakiris',
	},
	{
		text: 'All humanity is one undivided and indivisible family. I cannot detach myself from the wickedest soul.',
		author: 'Mahatma Gandhi',
	},
	{
		text: 'It is a wise father that knows his own child.',
		author: 'William Shakespeare',
	},
	{
		text: 'Life will knock us down, but we can choose whether or not to stand back up.',
		author: 'Jackie Chan',
	},
	{
		text: 'Sometimes it takes only one act of kindness and caring to change a person’s life.',
		author: 'Jackie Chan',
	},
	{
		text: 'Do not let circumstances control you. You change your circumstances.',
		author: 'Jackie Chan',
	},
	{
		text: 'Being still and doing nothing are two completely different things.',
		author: 'Jackie Chan',
	},
	{
		text: 'Nothing makes me more determined to succeed than someone telling me something’s impossible.',
		author: 'Jackie Chan',
	},
	{
		text: 'Family is not who’s blood is in you, is who you love and who loves you.',
		author: 'Jackie Chan',
	},
	{
		text: 'Why did I become Jackie Chan? Mostly because I work very hard. When people were sleeping, I was still training.',
		author: 'Jackie Chan',
	},
	{
		text: 'I never wanted to be the next Bruce Lee. I just wanted to be the first Jackie Chan.',
		author: 'Jackie Chan',
	},
	{
		text: 'I hope next time when we meet, we won’t be fighting each other. Instead we will be drinking tea together.',
		author: 'Jackie Chan',
	},
	{
		text: 'The best fights are ones we avoid.',
		author: 'Jackie Chan',
	},
	{
		text: 'I prepare for the worst, but hope for the best.',
		author: 'Jackie Chan',
	},
	{
		text: "Don't wait for the change of circumstances. You change the circumstances",
		author: 'Jackie Chan',
	},
	{
		text: "You don't get to do over parts or go back and change your path. Your life is decided by your character and the decisions you make in the moment.",
		author: 'Jackie Chan',
	},
	{
		text: 'I only want my work to make people happy.',
		author: 'Jackie Chan',
	},
	{
		text: 'If one does not attach himself to people and desires, never shall his heart be broken. But then, does he ever truly live?',
		author: 'Jackie Chan',
	},
	{
		text: 'Pain is my daily routine. As long as I don’t go to the hospital, it’s nothing for me.',
		author: 'Jackie Chan',
	},
	{
		text: 'We learn martial arts as helping weakness. You never fight for people to get hurt. You’re always helping people.',
		author: 'Jackie Chan',
	},
	{
		text: 'Quiet people have the loudest minds.',
		author: 'Stephen Hawking',
	},
	{
		text: "Life would be tragic if it weren't funny.",
		author: 'Stephen Hawking',
	},
	{
		text: 'Intelligence is the ability to adapt to change.',
		author: 'Stephen Hawking',
	},
	{
		text: "The universe doesn't allow perfection.",
		author: 'Stephen Hawking',
	},
	{
		text: 'My goal is simple. It is a complete understanding of the universe, why it is as it is and why it exists at all.',
		author: 'Stephen Hawking',
	},
	{
		text: 'Although I cannot move and I have to speak through a computer, in my mind I am free',
		author: 'Stephen Hawking',
	},
	{
		text: 'If time travel is possible, where are the tourists from the future?',
		author: 'Stephen Hawking',
	},
	{
		text: 'People who boast about their I.Q. are losers.',
		author: 'Stephen Hawking',
	},
	{
		text: 'The only true wisdom is in knowing you know nothing.',
		author: 'Socrates',
	},
	{
		text: 'People who boast about their I.Q. are losers.',
		author: 'Stephen Hawking',
	},
	{
		text: 'The thing about smart people is that they seem like crazy people to dumb people.',
		author: 'Stephen Hawking',
	},
	{
		text: "I'm not afraid of death, but I'm in no hurry to die.",
		author: 'Stephen Hawking',
	},
	{
		text: 'Not only does God play dice but... he sometimes throws them where they cannot be seen.',
		author: 'Stephen Hawking',
	},
	{
		text: "I don't think the human race will survive the next thousand years, unless we spread into space.",
		author: 'Stephen Hawking',
	},
	{
		text: 'There is no avoiding war; it can only be postponed to the advantage of others.',
		author: 'Niccolo Machiavelli',
	},
	{
		text: 'Life is trying things to see if they work.',
		author: 'Ray Bradbury',
	},
	{
		text: 'Strike me down, and I will become more powerful than you could possibly imagine.',
		author: 'Obi-Wan Kenobi',
	},
	{
		text: "I'd rather be someone that's underrated than overrated.",
		author: 'Clint Dempsey',
	},
	{
		text: 'To live is to choose. But to choose well, you must know who you are and what you stand for, where you want to go and why you want to get there.',
		author: 'Kofi Annan',
	},
	{
		text: 'We need to keep hope alive and strive to do better.',
		author: 'Kofi Annan',
	},
	{
		text: 'Change is a process which has to be managed.',
		author: 'Kofi Annan',
	},
	{
		text: 'Freedom is not something that one people can bestow on another as a gift. Thy claim it as their own and none can keep it from them.',
		author: 'Kwame Nkrumah',
	},
	{
		text: 'Thought without practice is empty; and action without thought is blind.',
		author: 'Kwame Nkrumah',
	},
	{
		text: 'People are worms, and even the God who created them is immensely bored with their antics.',
		author: 'Ama Ata Aidoo',
	},
	{
		text: 'When evil men destroy, good men must build and bind.',
		author: 'Anas Aremeyaw Anas',
	},
	{
		text: 'The future belongs to those who believe in the beauty of their dreams.',
		author: 'John Agyekum Kufuor',
	},
	{
		text: 'All our dreams can come true, if we have the courage to pursue them.',
		author: 'John Agyekum Kufuor',
	},
	{
		text: "Dream as if you'll live forever. Live as if you'll die today.",
		author: 'John Agyekum Kufuor',
	},
	{
		text: 'Success is not final, failure is not fatal. It is the courage to continue that counts.',
		author: 'Winston Churchill',
	},
	{
		text: 'Success is not final, failure is not fatal. It is the courage to continue that counts.',
		author: 'Winston Churchill',
	},
	{
		text: "Never give up on something that you can't go a day without thinking about.",
		author: 'Winston Churchill',
	},
	{
		text: 'Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no hope at all.',
		author: 'Dale Carnegie',
	},
	{
		text: 'Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.',
		author: 'Thomas Edison',
	},
	{
		text: "Most people are other people. Their thoughtx are someone else's opinions, their lives a mimicry, their passions a quotation.",
		author: 'Oscar Wilde',
	},
	{
		text: "We accept the reality of the world with which we are presented. It's as simple as that.",
		author: 'The Truman Show',
	},
	{
		text: "Who kills a man kills a reasonable creature, God's image; but he who destroys a good book, kills reason itself, kills the image of God, as it were, in the eye.",
		author: 'John Milton',
	},
	{
		text: 'We stopped looking for monsters under our bed when we realised that they were inside us.',
		author: 'Charles Darwin',
	},
	{
		text: "Life isn't just about darkness or light, rather it's about finding light within the darkness.",
		author: 'Landon Parham',
	},
	{
		text: 'I have written you down. Now you will live forever.',
		author: 'Bastille',
	},
	{
		text: 'For sale: baby shoes, never worn.',
		author: 'Ernest Hemingway',
	},
	{
		text: 'In the end, we will remember not the words of our enemies, but the silence of our friends.',
		author: 'Martin Luther King Jr.',
	},
	{
		text: 'A person can change, at the moment when the person wishes to change.',
		author: 'Haruhi Fujioka',
	},
	{
		text: 'Music is a hogher revelation than all wisdom and philosophy. Music is the electrical soil in which the spirit lives, thinks and invents.',
		author: 'Ludwig van Beethoven',
	},
	{
		text: "Children are not colouring books. You don't get to fill them with your favourite colours.",
		author: 'Khaled Hosseini',
	},
	{
		text: "It's not what happens to you, but how you react to it that matters.",
		author: 'Epictetus',
	},
	{
		text: 'The only true wisdom is in knowing you know nothing.',
		author: 'Socrates',
	},
	{
		text: 'History repeats itself, first as tragedy, second as farce.',
		author: 'Karl Marx',
	},
	{
		text: 'To live is to suffer, to survive is to find some meaning in the suffering.',
		author: 'Friedrich Nietzsche',
	},
	{
		text: 'It does not matter how slowly you go as long as you do not stop.',
		author: 'Confucius',
	},
	{
		text: 'Be the change that you wish to see in the world.',
		author: 'Mahatma Gandhi',
	},
	{
		text: "I can't hold enough of you in my hands.",
		author: 'Franz Kafka',
	},
	{
		text: 'You make a choice: continue living your life feeling muddled in this abyss of self-misunderstanding, or you find your identity independent of it. You draw your own box.',
		author: 'Duchess Meghan',
	},
	{
		text: 'I construct my memories with my present.',
		author: 'Jean-Paul Sartre',
	},
	{
		text: 'I am a man, Jupiter, and each man must invent his own path.',
		author: 'Jean-Paul Sartre',
	},
	{
		text: 'We live in a world where people can ridicule you at the push of the button. They can question you at the push of a button.',
		author: 'Chadwick Boseman',
	},
	{
		text: 'The only difference between the hero and the villain is that the villain chooses to use that power in a way that is selfish and hurts other people.',
		author: 'Chadwick Boseman',
	},
	{
		text: 'If someone could only see my actions and not hear my words, what would they say are my priorities?',
		author: ' James Clear',
	},
	{
		text: 'We are not given a short life, but we make it short, and we are not ill-supplied but wasteful of it.',
		author: 'Null',
	},
	{
		text: 'The way to get started is to quit talking and begin doing.',
		author: 'Walt Disney',
	},
	{
		text: "Life is what happens when you're busy making other plans.",
		author: 'John Lennon',
	},
	{
		text: 'You only live once - but if you work it right, once is enough.',
		author: 'Joe E. Lewis',
	},
	{
		text: 'Fate chooses your relations, you choose your friends.',
		author: 'Jacques Delille',
	},
	{
		text: 'Never underestimate your problem or your ability to deal with it.',
		author: 'Robert Schuller',
	},
	{
		text: 'The best prophet of the future is the past.',
		author: 'Lord Byron',
	},
	{
		text: 'Be content with what you have; rejoice in the way things are. When you realize there is nothing lacking, the whole world belongs to you',
		author: 'Plato',
	},
	{
		text: 'At the touch of love everyone becomes a poet.',
		author: 'Plato',
	},
	{
		text: 'One word frees us of all the weight and pain in life, that word is Love.',
		author: 'Sophocles',
	},
	{
		text: 'He who conquers himself is the mightiest warrior.',
		author: 'Confucius',
	},
	{
		text: 'True wisdom comes to each of us when we realize how little we understand about life, ourselves, and the world around us.',
		author: 'Socrates',
	},
	{
		text: 'What we are today comes from our thoughts of yesterday, and our present thoughts build our life of tomorrow. Our life is the creation of our mind.',
		author: 'Gautama Buddha',
	},
	{
		text: 'First say to yourself what would you be; and then do what you need to do.',
		author: 'Epictetus',
	},
	{
		text: 'Music is a moral law. It gives soul to the universe, wings to the mind, flight to the imagination, and charm and gaiety to life and to everything.',
		author: 'Plato',
	},
	{
		text: 'The more sand had escaped from the hourglass of our life, the clearer we should see through it.',
		author: 'Niccolo Machiavelli',
	},
	{
		test: "I have Nakama who are not strong... But I still want them to be with me! So I have to be stronger than anybody else... or else I'll lose them all!",
		author: 'Monkey D. Luffy',
	},
	{
		text: 'I’m going down as a legend, whether or not you like me or not. I am the new Jim Morrison. I am the new Kurt Cobain.',
		author: 'Kanye West',
	},
	{
		text: 'Perform your obligatory duty, because action is indeed better than inaction.',
		author: 'Shri Krishna (Bhagavad Gita)',
	},
	{
		text: 'Man is made by his belief. As he believes, so he is.',
		author: 'Shri Krishna (Bhagavad Gita)',
	},
	{
		text: 'You are only entitled to the action, never to its fruits.',
		author: 'Shri Krishna (Bhagavad Gita)',
	},
	{
		text: 'Whatever happened, happened for the good. Whatever is happening, is happening for the good. Whatever will happen, will also happen for the good.',
		author: 'Shri Krishna (Bhagavad Gita)',
	},
	{
		text: 'Lust, anger and greed are the three gates to self-destructive hell.',
		author: 'Shri Krishna (Bhagavad Gita)',
	},
	{
		text: 'Change is the law of the universe. You can be a millionaire, or a pauper in an instant.',
		author: 'Shri Krishna (Bhagavad Gita)',
	},
	{
		text: 'I can accept failure. Everyone fails at something. But I can’t accept not trying.',
		author: 'Michael Jordan',
	},
	{
		text: 'Act as if what you do makes a difference. It does.',
		author: 'William James',
	},
	{
		text: 'No matter what people tell you, words and ideas can change the world.',
		author: 'Robin Williams',
	},
	{
		text: " That's one small step for a man, one giant leap for mankind .",
		author: 'Neil Armstrong ',
	},
	{
		text: "I wish there was a way to know you're in the good old days before you've actually left them.",
		author: 'Andy Bernard',
	},
	{
		text: "I'm not superstitious, but I am a little stitious.",
		author: 'Michael Scott',
	},
	{
		text: 'Write it on your heart that every day is the best day in the year.',
		author: 'Ralph Waldo Emerson',
	},
	{
		text: 'We accept the love we think we deserve',
		author: 'Todd Anderson',
	},
	{
		text: 'Clouds come floating into my life, no longer to carry rain or usher storm, but to add color to my sunset sky.',
		author: 'Rabindranath Tagore',
	},
	{
		text: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
		author: 'James Cameron',
	},
	{
		text: "Life is what happens when you're busy making other plans.",
		author: 'John Lennon',
	},
	{
		text: 'You will face many defeats in life, but never let yourself be defeated.',
		author: 'Maya Angelou',
	},
	{
		text: 'The only impossible journey is the one you never begin.',
		author: 'Tony Robbins',
	},
	{
		text: 'The purpose of our lives is to be happy.',
		author: 'Dalai Lama',
	},
	{
		text: 'If you want to shine like a sun, first burn like a sun',
		author: 'A. P. J. Abdul Kalam',
	},
	{
		text: 'Excellence is a continuous process and not an accident',
		author: 'A. P. J. Abdul Kalam',
	},
	{
		text: 'The youth need to be enabled to become job generators from job seekers',
		author: 'A. P. J. Abdul Kalam',
	},
	{
		text: 'Great dreams of great dreamers are always transcended',
		author: 'A. P. J. Abdul Kalam',
	},
	{
		text: 'You have to dream before your dreams can come true',
		author: 'A. P. J. Abdul Kalam',
	},
	{
		text: 'When the going gets weird, the weird turn pro.',
		author: 'Hunter S. Thompson',
	},
	{
		text: 'There is nothing more helpless and irresponsible than a man in the depths of an ether binge.',
		author: 'Hunter S. Thompson',
	},
	{
		text: "If you're going through hell, keep going.",
		author: 'Winston Churchill',
	},
	{
		text: 'Be happy for this moment. This moment is your life.',
		author: 'Omar Khayyam',
	},
	{
		text: 'Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.',
		author: 'Lao Tzu',
	},
	{
		text: 'Tis better to have loved and lost than never to have loved at all.',
		author: 'Alfred Lord Tennyson',
	},
	{
		text: 'Let us always meet each other with smile, for the smile is the beginning of love.',
		author: 'Mother Teresa',
	},
	{
		text: 'Kind words can be short and easy to speak, but their echoes are truly endless.',
		author: 'Mother Teresa',
	},
	{
		text: "You can't blame gravity for falling in love.",
		author: 'Albert Einstein',
	},
	{
		text: 'Hope is a waking dream.',
		author: 'Aristotle',
	},
	{
		text: 'Hope is being able to see that there is light despite all of the darkness.',
		author: 'Desmond Tutu',
	},
	{
		text: 'Hope is like the sun, which, as we journey toward it, casts the shadow of our burden behind us.',
		author: 'Samuel Smiles',
	},
	{
		text: 'Do not spoil what you have by desiring what you have not; remember that what you now have was once among the things you only hoped for.',
		author: 'Epicurus',
	},
	{
		text: 'Hope springs eternal in the human breast: Man never is, but always to be blest.',
		author: 'Alexander Pope',
	},
	{
		text: 'Hope is not the conviction that something will turn out well but the certainty that something makes sense, regardless of how it turns out.',
		author: 'Vaclav Havel',
	},
	{
		text: 'A little more persistence, a little more effort, and what seemed hopeless failure may turn to glorious success.',
		author: 'Elbert Hubbard',
	},
	{
		text: 'Strive not to be a success, but rather to be of value.',
		author: 'Albert Einstein',
	},
	{
		text: 'All you need in this life is ignorance and confidence, and then success is sure.',
		author: 'Mark Twain',
	},
	{
		text: 'He who has a why to live can bear almost any how.',
		author: 'Friedrich Nietzsche',
	},
	{
		text: 'To live is to suffer, to survive is to find some meaning in the suffering.',
		author: 'Friedrich Nietzsche',
	},
	{
		text: "I'm not trying to be different. To me, I'm just being myself.",
		author: 'Jaylen Brown',
	},
	{
		text: 'One of the penalties for refusing to participate in politics is that you end up being governed by your inferiors.',
		author: 'Plato',
	},
	{
		text: 'We hang the petty thieves and appoint the great ones to public office.',
		author: 'Aesop',
	},
	{
		text: 'If nominated, I will not run; if elected, I will not serve.',
		author: 'William Tecumseh Sherman',
	},
	{
		text: 'Life without liberty is like a body without spirit.',
		author: 'Khalil Gibran',
	},
	{
		text: 'We do not remember days, we remember moments.',
		author: 'Cesare Pavese',
	},
	{
		text: 'The object of the superior man is truth.',
		author: 'Confucius',
	},
	{
		text: "It's not what you look at that matters, it's what you see.",
		author: 'Henry David Thoreau',
	},
	{
		text: 'O, what a tangled web we weave when first we practise to deceive!',
		author: 'Walter Scott',
	},
	{
		text: 'No man is free who is not master of himself.	',
		author: 'Epictetus',
	},
	{
		text: 'Opportunity is missed by most people because it is dressed in overalls and looks like work.',
		author: 'Thomas A. Edison',
	},
	{
		text: 'Play by the rules, but be ferocious.',
		author: 'Phil Knight',
	},
	{
		text: 'Business opportunities are like buses, there’s always another one coming',
		author: 'Richard Branson',
	},
	{
		text: 'Every problem is a gift—without problems we would not grow.',
		author: 'Anthony Robbins',
	},
	{
		text: 'Success usually comes to those who are too busy to be looking for it.',
		author: 'Henry David Thoreau',
	},
	{
		text: 'There’s no shortage of remarkable ideas, what’s missing is the will to execute them.',
		author: 'Seth Godin',
	},
	{
		text: 'I don’t know the word ‘quit.’ Either I never did, or I have abolished it.',
		author: 'Susan Butcher',
	},
	{
		text: 'If you really look closely, most overnight successes took a long time.',
		author: 'Steve Jobs',
	},
	{
		text: 'Even if you are on the right track, you’ll get run over if you just sit there',
		author: 'Will Rodgers',
	},
	{
		text: 'The first one gets the oyster, the second gets the shell.',
		author: 'Andrew Carnegie',
	},
	{
		text: 'The way to get started is to quit talking and begin doing.',
		author: 'Walt Disney',
	},
	{
		text: 'Money is a terrible master but an excellent servant.',
		author: 'P.T. Barnum',
	},
	{
		text: 'A man who pays his bills on time is soon forgotten.',
		author: 'Oscar Wilde',
	},
	{
		text: 'The most difficult thing is the decision to act, the rest is merely tenacity.',
		author: 'Amelia Earhart',
	},
	{
		text: 'Beware of little expenses; a small leak will sink a great ship.',
		author: 'Benjamin Franklin',
	},
	{
		text: 'You cannot escape the responsibility of tomorrow by evading it today.',
		author: 'Abraham Lincoln',
	},
	{
		text: 'The desire of gold is not for gold. It is for the means of freedom and benefit.',
		author: 'Ralph Waldo Emerson',
	},
	{
		text: 'To contract new debts is not the way to pay old ones.',
		author: 'George Washington',
	},
	{
		text: 'Fortune befriends the bold.',
		author: 'Emily Dickinson',
	},
	{
		text: 'When prosperity comes, do not use all of it.',
		author: 'Confucius',
	},
	{
		text: 'Do the best you can, and don’t take life too serious.',
		author: 'Will Rogers',
	},
	{
		text: 'Everything in moderation, including moderation.',
		author: 'Oscar Wilde',
	},
	{
		text: "It's the imperfections that make things beautiful",
		author: 'Jenny Han',
	},
	{
		text: 'Write books only if you are going to say in them the things you would never dare confide to anyone',
		author: 'Emil Cioran',
	},
	{
		text: 'In some ways, programming is like painting. You start with a blank canvas and certain basic raw materials. You use a combination of science, art, and craft to determine what to do with them.',
		author: 'Andrew Hunt',
	},
	{
		text: 'Write books only if you are going to say in them the things you would never dare confide to anyone',
		author: 'Emil Cioran',
	},
	{
		text: 'If you wish to make an apple pie from scratch, you must first invent the universe',
		author: 'Carl Sagan',
	},
	{
		text: 'As you walk down the fairway of life you must smell the roses, for you only get to play one round.',
		author: 'Ben Hogan',
	},
	{
		text: "Nothing is impossible. The word itself says 'I'm possible!'",
		author: 'Audrey Hepburn',
	},
	{
		text: 'The art of life is to know how to enjoy a little and to endure very much.',
		author: 'William Hazlitt',
	},
	{
		text: 'Genius is one percent inspiration and ninety-nine percent perspiration.',
		author: 'Thomas Edison',
	},
	{
		text: 'You can observe a lot just by watching.',
		author: 'Yogi Berra',
	},
	{
		text: 'A house divided against itself cannot stand.',
		author: 'Abraham Lincoln',
	},
	{
		text: 'Difficulties increase the nearer we get to the goal.',
		author: 'Johann Wolfgang von Goethe',
	},
	{
		text: 'Fate is in your hands and no one elses',
		author: 'Byron Pulsifer',
	},
	{
		text: 'Be the chief but never the lord.',
		author: 'Lao Tzu',
	},
	{
		text: 'Nothing happens unless first we dream.',
		author: 'Carl Sandburg',
	},
	{
		text: 'Well begun is half done.',
		author: 'Aristotle',
	},
	{
		text: 'Life is a learning experience, only if you learn.',
		author: 'Yogi Berra',
	},
	{
		text: 'Self-complacency is fatal to progress.',
		author: 'Margaret Sangster',
	},
	{
		text: 'Peace comes from within. Do not seek it without.',
		author: 'Buddha',
	},
	{
		text: 'What you give is what you get.',
		author: 'Byron Pulsifer',
	},
	{
		text: 'Think how hard physics would be if particles could think',
		author: 'Murray Gell-Mann',
	},
	{
		text: "Life is a series of natural and spontaneous changes. Don't resist them - that only creates sorrow. Let reality be reality. Let things flow naturally forward in whatever way they like.",
		author: 'Lao Tzu',
	},
	{
		text: 'If you do not change direction, you may end up where you are heading.',
		author: 'Lao Tzu',
	},
	{
		text: 'To the mind that is still, the whole universe surrenders.',
		author: 'Lao Tzu',
	},
	{
		text: 'Nature does not hurry, yet everything is accomplished.',
		author: 'Lao Tzu',
	},
	{
		text: 'He who does not trust enough, Will not be trusted.',
		author: 'Lao Tzu',
	},
	{
		text: 'We can only learn to love by loving.',
		author: 'Iris Murdoch',
	},
	{
		text: 'Life is change. Growth is optional. Choose wisely.',
		author: 'Karen Clark',
	},
	{
		text: "You'll see it when you believe it.",
		author: 'Wayne Dyer',
	},
	{
		text: 'Today is the tomorrow we worried about yesterday.',
		author: 'Dale Carnegie',
	},
	{
		text: "It's easier to see the mistakes on someone else's paper.",
		author: 'Cynthia Lewis',
	},
	{
		text: 'Every man dies. Not every man really lives.',
		author: 'William Wallace',
	},
	{
		text: 'To lead people walk behind them.',
		author: 'Lao Tzu',
	},
	{
		text: 'Having nothing, nothing can he lose.',
		author: 'William Shakespeare',
	},
	{
		text: 'Trouble is only opportunity in work clothes.',
		author: 'Henry J. Kaiser',
	},
	{
		text: 'A rolling stone gathers no moss.',
		author: 'Publilius Syrus',
	},
	{
		text: 'Ideas are the beginning points of all fortunes.',
		author: 'Napoleon Hill',
	},
	{
		text: 'Everything in life is luck.',
		author: 'Donald Trump',
	},
	{
		text: 'Doing nothing is better than being busy doing nothing.',
		author: 'Lao Tzu',
	},
	{
		text: 'Trust yourself. You know more than you think you do.',
		author: 'Benjamin Spock',
	},
	{
		text: 'Study the past, if you would divine the future.',
		author: 'Confucius',
	},
	{
		text: 'The day is already blessed, find peace within it.',
		author: null,
	},
	{
		text: 'From error to error one discovers the entire truth.',
		author: 'Sigmund Freud',
	},
	{
		text: 'Well done is better than well said.',
		author: 'Benjamin Franklin',
	},
	{
		text: 'Bite off more than you can chew, then chew it.',
		author: 'Ella Williams',
	},
	{
		text: 'Work out your own salvation. Do not depend on others.',
		author: 'Buddha',
	},
	{
		text: 'One today is worth two tomorrows.',
		author: 'Benjamin Franklin',
	},
	{
		text: 'Once you choose hope, anythings possible.',
		author: 'Christopher Reeve',
	},
	{
		text: 'God always takes the simplest way.',
		author: 'Albert Einstein',
	},
	{
		text: 'One fails forward toward success.',
		author: 'Charles Kettering',
	},
	{
		text: 'From small beginnings come great things.',
		author: null,
	},
	{
		text: 'Learning is a treasure that will follow its owner everywhere',
		author: 'Chinese proverb',
	},
	{
		text: 'Be as you wish to seem.',
		author: 'Socrates',
	},
	{
		text: 'The world is always in movement.',
		author: 'V. Naipaul',
	},
	{
		text: "When you have a dream, you've got to grab it and never let go.",
		author: 'Carol Burnett',
	},
	{
		text: 'There is nothing impossible to they who will try.',
		author: 'Alexander the Great',
	},
	{
		text: 'Never mistake activity for achievement.',
		author: 'John Wooden',
	},
	{
		text: 'What worries you masters you.',
		author: 'Haddon Robinson',
	},
	{
		text: 'One faces the future with ones past.',
		author: 'Pearl Buck',
	},
	{
		text: 'Goals are the fuel in the furnace of achievement.',
		author: 'Brian Tracy',
	},
	{
		text: 'Who sows virtue reaps honour.',
		author: 'Leonardo da Vinci',
	},
	{
		text: 'Be kind whenever possible. It is always possible.',
		author: 'Dalai Lama',
	},
	{
		text: "Talk doesn't cook rice.",
		author: 'Chinese proverb',
	},
	{
		text: 'He is able who thinks he is able.',
		author: 'Buddha',
	},
	{
		text: 'A goal without a plan is just a wish.',
		author: 'Larry Elder',
	},
	{
		text: 'To succeed, we must first believe that we can.',
		author: 'Michael Korda',
	},
	{
		text: "All endings are also beginnings. We just don't know it at the time.",
		author: 'Mitch Albom',
	},
	{
		text: 'Learn from yesterday, live for today, hope for tomorrow.',
		author: 'Albert Einstein',
	},
	{
		text: 'A weed is no more than a flower in disguise.',
		author: 'James Lowell',
	},
	{
		text: 'Do, or do not. There is no try.',
		author: 'Yoda',
	},
	{
		text: 'All serious daring starts from within.',
		author: 'Harriet Beecher Stowe',
	},
	{
		text: 'The best teacher is experience learned from failures.',
		author: 'Byron Pulsifer',
	},
	{
		text: 'Think how hard physics would be if particles could think.',
		author: 'Murray Gell-Mann',
	},
	{
		text: "Love is the flower you've got to let grow.",
		author: 'John Lennon',
	},
	{
		text: "Don't wait. The time will never be just right.",
		author: 'Napoleon Hill',
	},
	{
		text: 'Time is the wisest counsellor of all.',
		author: 'Pericles',
	},
	{
		text: 'You give before you get.',
		author: 'Napoleon Hill',
	},
	{
		text: 'Wisdom begins in wonder.',
		author: 'Socrates',
	},
	{
		text: 'Without courage, wisdom bears no fruit.',
		author: 'Baltasar Gracian',
	},
	{
		text: 'Change in all things is sweet.',
		author: 'Aristotle',
	},
	{
		text: 'What you fear is that which requires action to overcome.',
		author: 'Byron Pulsifer',
	},
	{
		text: 'When performance exceeds ambition, the overlap is called success.',
		author: 'Cullen Hightower',
	},
	{
		text: 'When deeds speak, words are nothing.',
		author: 'African proverb',
	},
	{
		text: 'Real magic in relationships means an absence of judgement of others.',
		author: 'Wayne Dyer',
	},
	{
		text: 'I never think of the future. It comes soon enough.',
		author: 'Albert Einstein',
	},
	{
		text: 'Skill to do comes of doing.',
		author: 'Ralph Emerson',
	},
	{
		text: 'Wisdom is the supreme part of happiness.',
		author: 'Sophocles',
	},
	{
		text: 'I believe that every person is born with talent.',
		author: 'Maya Angelou',
	},
	{
		text: 'Your mind is for having ideas, not holding them.',
		author: 'David Allen',
	},
	{
		text: 'Important principles may, and must, be inflexible.',
		author: 'Abraham Lincoln',
	},
	{
		text: 'The undertaking of a new action brings new strength.',
		author: 'Richard Evans',
	},
	{
		text: 'The years teach much which the days never know.',
		author: 'Ralph Emerson',
	},
	{
		text: 'Our distrust is very expensive.',
		author: 'Ralph Emerson',
	},
	{
		text: 'All know the way; few actually walk it.',
		author: 'Bodhidharma',
	},
	{
		text: 'Great talent finds happiness in execution.',
		author: 'Johann Wolfgang von Goethe',
	},
	{
		text: 'Faith in oneself is the best and safest course.',
		author: 'Michelangelo',
	},
	{
		text: 'Courage is going from failure to failure without losing enthusiasm.',
		author: 'Winston Churchill',
	},
	{
		text: 'The two most powerful warriors are patience and time.',
		author: 'Leo Tolstoy',
	},
	{
		text: 'Anticipate the difficult by managing the easy.',
		author: 'Lao Tzu',
	},
	{
		text: 'Those who are free of resentful thoughts surely find peace.',
		author: 'Buddha',
	},
	{
		text: 'A short saying often contains much wisdom.',
		author: 'Sophocles',
	},
	{
		text: 'It takes both sunshine and rain to make a rainbow.',
		author: 'Roy T. Bennett',
	},
	{
		text: 'A beautiful thing is never perfect.',
		author: null,
	},
	{
		text: 'Only do what your heart tells you.',
		author: 'Princess Diana',
	},
	{
		text: 'Life is movement-we breathe, we eat, we walk, we move!',
		author: 'John Pierrakos',
	},
	{
		text: 'No one can make you feel inferior without your consent.',
		author: 'Eleanor Roosevelt',
	},
	{
		text: 'Argue for your limitations, and sure enough theyre yours.',
		author: 'Richard Bach',
	},
	{
		text: 'Luck is what happens when preparation meets opportunity.',
		author: 'Seneca',
	},
	{
		text: 'Victory belongs to the most persevering.',
		author: 'Napoleon Bonaparte',
	},
	{
		text: 'Love all, trust a few, do wrong to none.',
		author: 'William Shakespeare',
	},
	{
		text: 'In order to win, you must expect to win.',
		author: 'Richard Bach',
	},
	{
		text: 'A goal is a dream with a deadline.',
		author: 'Napoleon Hill',
	},
	{
		text: 'You can do it if you believe you can!',
		author: 'Napoleon Hill',
	},
	{
		text: "Set your goals high, and don't stop till you get there.",
		author: 'Bo Jackson',
	},
	{
		text: 'Every new day is another chance to change your life.',
		author: null,
	},
	{
		text: 'Smile, breathe, and go slowly.',
		author: 'Thich Nhat Hanh',
	},
	{
		text: 'Nobody will believe in you unless you believe in yourself.',
		author: 'Liberace',
	},
	{
		text: 'Do more than dream: work.',
		author: 'William Arthur Ward',
	},
	{
		text: 'No man was ever wise by chance.',
		author: 'Seneca',
	},
	{
		text: 'Some pursue happiness, others create it.',
		author: null,
	},
	{
		text: 'He that is giddy thinks the world turns round.',
		author: 'William Shakespeare',
	},
	{
		text: "Don't ruin the present with the ruined past.",
		author: 'Ellen Gilchrist',
	},
	{
		text: 'Do something wonderful, people may imitate it.',
		author: 'Albert Schweitzer',
	},
	{
		text: 'We do what we do because we believe.',
		author: null,
	},
	{
		text: 'Do one thing every day that scares you.',
		author: 'Eleanor Roosevelt',
	},
	{
		text: 'If you cannot be silent be brilliant and thoughtful.',
		author: 'Byron Pulsifer',
	},
	{
		text: 'Who looks outside, dreams; who looks inside, awakes.',
		author: 'Carl Jung',
	},
	{
		text: 'What we think, we become.',
		author: 'Buddha',
	},
	{
		text: 'The shortest answer is doing.',
		author: 'Lord Herbert',
	},
	{
		text: 'All our knowledge has its origins in our perceptions.',
		author: 'Leonardo da Vinci',
	},
	{
		text: 'The harder you fall, the higher you bounce.',
		author: null,
	},
	{
		text: 'Trusting our intuition often saves us from disaster.',
		author: 'Anne Wilson Schaef',
	},
	{
		text: 'Truth is powerful and it prevails.',
		author: 'Sojourner Truth',
	},
	{
		text: 'Light tomorrow with today!',
		author: 'Elizabeth Browning',
	},
	{
		text: 'Silence is a fence around wisdom.',
		author: 'German proverb',
	},
	{
		text: 'Society develops wit, but its contemplation alone forms genius.',
		author: 'Madame de Stael',
	},
	{
		text: 'The simplest things are often the truest.',
		author: 'Richard Bach',
	},
	{
		text: 'Everyone smiles in the same language.',
		author: null,
	},
	{
		text: 'Yesterday I dared to struggle. Today I dare to win.',
		author: 'Bernadette Devlin',
	},
	{
		text: 'No alibi will save you from accepting the responsibility.',
		author: 'Napoleon Hill',
	},
	{
		text: 'If you can dream it, you can do it.',
		author: 'Walt Disney',
	},
	{
		text: 'It is better to travel well than to arrive.',
		author: 'Buddha',
	},
	{
		text: "Life shrinks or expands in proportion to one's courage.",
		author: 'Anais Nin',
	},
	{
		text: 'You have to believe in yourself.',
		author: 'Sun Tzu',
	},
	{
		text: 'Our intention creates our reality.',
		author: 'Wayne Dyer',
	},
	{
		text: 'Silence is a true friend who never betrays.',
		author: 'Confucius',
	},
	{
		text: 'Character develops itself in the stream of life.',
		author: 'Johann Wolfgang von Goethe',
	},
	{
		text: 'From little acorns mighty oaks do grow.',
		author: 'American proverb',
	},
	{
		text: "You can't stop the waves, but you can learn to surf.",
		author: 'Jon Kabat-Zinn',
	},
	{
		text: 'Reality does not conform to the ideal, but confirms it.',
		author: 'Gustave Flaubert',
	},
	{
		text: 'Speak low, if you speak love.',
		author: 'William Shakespeare',
	},
	{
		text: 'A really great talent finds its happiness in execution.',
		author: 'Johann Wolfgang von Goethe',
	},
	{
		text: 'Reality leaves a lot to the imagination.',
		author: 'John Lennon',
	},
	{
		text: 'The greatest remedy for anger is delay.',
		author: 'Seneca',
	},
	{
		text: 'Growth itself contains the germ of happiness.',
		author: 'Pearl Buck',
	},
	{
		text: "You can do what's reasonable or you can decide what's possible.",
		author: null,
	},
	{
		text: 'he purpose of our lives is to be happy.',
		author: 'Dalai Lama',
	},
	{
		text: "Life is what happens when you're busy making other plans.",
		author: 'John Lennon',
	},
	{
		text: 'Get busy living or get busy dying',
		author: 'Stephen King',
	},
	{
		text: 'You only live once, but if you do it right, once is enough.',
		author: 'Mae West',
	},
	{
		text: 'Many of life’s failures are people who did not realize how close they were to success when they gave up.',
		author: 'Thomas Edison',
	},
	{
		text: 'If you want to live a happy life, tie it to a goal, not to people or things',
		author: 'Albert Einstein',
	},
	{
		text: 'Never let the fear of striking out keep you from playing the game.',
		author: 'Babe Ruth',
	},
	{
		text: 'Money and success don’t change people; they merely amplify what is already there.',
		author: 'Will Smith',
	},
	{
		text: 'Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.',
		author: 'Steve Jobs',
	},
	{
		text: 'The journey of a thousand miles begins with one step.',
		author: 'Lao Tzu',
	},
	{
		text: 'That which does not kill us makes us stronger.',
		author: 'Friedrich Nietzsche',
	},
	{
		text: 'Life is what happens when you’re busy making other plans.',
		author: 'John Lennon',
	},
	{
		text: 'When the going gets tough, the tough get going.',
		author: 'Joe Kennedy',
	},
	{
		text: 'You must be the change you wish to see in the world.',
		author: 'Mahatma Gandhi',
	},
	{
		text: 'You only live once, but if you do it right, once is enough.',
		author: 'Mae West',
	},
	{
		text: 'Tough times never last but tough people do.',
		author: 'Robert H. Schuller',
	},
	{
		text: 'Get busy living or get busy dying.',
		author: 'Stephen King',
	},
	{
		text: 'Whether you think you can or you think you can’t, you’re right.',
		author: 'Henry Ford',
	},
	{
		text: 'Tis better to have loved and lost than to have never loved at all.',
		author: 'Alrded Lord Tennyson',
	},
	{
		text: 'Genius is one percent inspiration and ninety-nine percent perspiration.',
		author: 'Thomas Edison',
	},
	{
		text: 'You can observe a lot just by watching.',
		author: 'Yogi Berra',
	},
	{
		text: 'A house divided against itself cannot stand.',
		author: 'Abraham Lincoln',
	},
	{
		text: 'Difficulties increase the nearer we get to the goal.',
		author: 'Johann Wolfgang von Goethe',
	},
	{
		text: 'Fate is in your hands and no one elses',
		author: 'Byron Pulsifer',
	},
	{
		text: 'Be the chief but never the lord.',
		author: 'Lao Tzu',
	},
	{
		text: 'Nothing happens unless first we dream.',
		author: 'Carl Sandburg',
	},
	{
		text: 'Well begun is half done.',
		author: 'Aristotle',
	},
	{
		text: 'Life is a learning experience, only if you learn.',
		author: 'Yogi Berra',
	},
	{
		text: 'Self-complacency is fatal to progress.',
		author: 'Margaret Sangster',
	},
	{
		text: 'Peace comes from within. Do not seek it without.',
		author: 'Buddha',
	},
	{
		text: 'What you give is what you get.',
		author: 'Byron Pulsifer',
	},
	{
		text: 'We can only learn to love by loving.',
		author: 'Iris Murdoch',
	},
	{
		text: 'Life is change. Growth is optional. Choose wisely.',
		author: 'Karen Clark',
	},
	{
		text: "You'll see it when you believe it.",
		author: 'Wayne Dyer',
	},
	{
		text: 'To lead people walk behind them.',
		author: 'Lao Tzu',
	},
	{
		text: 'Having nothing, nothing can he lose.',
		author: 'William Shakespeare',
	},
	{
		text: 'Trouble is only opportunity in work clothes.',
		author: 'Henry J. Kaiser',
	},
	{
		text: 'A rolling stone gathers no moss.',
		author: 'Publilius Syrus',
	},
	{
		text: 'Ideas are the beginning points of all fortunes.',
		author: 'Napoleon Hill',
	},
	{
		text: 'Everything in life is luck.',
		author: 'Donald Trump',
	},
	{
		text: 'Doing nothing is better than being busy doing nothing.',
		author: 'Lao Tzu',
	},
	{
		text: 'Trust yourself. You know more than you think you do.',
		author: 'Benjamin Spock',
	},
	{
		text: 'Study the past, if you would divine the future.',
		author: 'Confucius',
	},
	{
		text: 'The day is already blessed, find peace within it.',
		author: null,
	},
	{
		text: 'From error to error one discovers the entire truth.',
		author: 'Sigmund Freud',
	},
	{
		text: 'Well done is better than well said.',
		author: 'Benjamin Franklin',
	},
	{
		text: 'Bite off more than you can chew, then chew it.',
		author: 'Ella Williams',
	},
	{
		text: 'Work out your own salvation. Do not depend on others.',
		author: 'Buddha',
	},
	{
		text: 'One today is worth two tomorrows.',
		author: 'Benjamin Franklin',
	},
	{
		text: 'Once you choose hope, anythings possible.',
		author: 'Christopher Reeve',
	},
	{
		text: 'God always takes the simplest way.',
		author: 'Albert Einstein',
	},
	{
		text: 'One fails forward toward success.',
		author: 'Charles Kettering',
	},
	{
		text: 'From small beginnings come great things.',
		author: null,
	},
	{
		text: 'Learning is a treasure that will follow its owner everywhere',
		author: 'Chinese proverb',
	},
	{
		text: 'Be as you wish to seem.',
		author: 'Socrates',
	},
	{
		text: 'The world is always in movement.',
		author: 'V. Naipaul',
	},
	{
		text: 'Never mistake activity for achievement.',
		author: 'John Wooden',
	},
	{
		text: 'What worries you masters you.',
		author: 'Haddon Robinson',
	},
	{
		text: 'One faces the future with ones past.',
		author: 'Pearl Buck',
	},
	{
		text: 'Goals are the fuel in the furnace of achievement.',
		author: 'Brian Tracy',
	},
	{
		text: 'Who sows virtue reaps honour.',
		author: 'Leonardo da Vinci',
	},
	{
		text: 'Be kind whenever possible. It is always possible.',
		author: 'Dalai Lama',
	},
	{
		text: "Talk doesn't cook rice.",
		author: 'Chinese proverb',
	},
	{
		text: 'He is able who thinks he is able.',
		author: 'Buddha',
	},
	{
		text: 'A goal without a plan is just a wish.',
		author: 'Larry Elder',
	},
	{
		text: 'To succeed, we must first believe that we can.',
		author: 'Michael Korda',
	},
	{
		text: 'Learn from yesterday, live for today, hope for tomorrow.',
		author: 'Albert Einstein',
	},
	{
		text: 'A weed is no more than a flower in disguise.',
		author: 'James Lowell',
	},
	{
		text: 'Do, or do not. There is no try.',
		author: 'Yoda',
	},
	{
		text: 'All serious daring starts from within.',
		author: 'Harriet Beecher Stowe',
	},
	{
		text: 'The best teacher is experience learned from failures.',
		author: 'Byron Pulsifer',
	},
	{
		text: 'Think how hard physics would be if particles could think.',
		author: 'Murray Gell-Mann',
	},
	{
		text: "Love is the flower you've got to let grow.",
		author: 'John Lennon',
	},
	{
		text: "Don't wait. The time will never be just right.",
		author: 'Napoleon Hill',
	},
	{
		text: 'Time is the wisest counsellor of all.',
		author: 'Pericles',
	},
	{
		text: 'You give before you get.',
		author: 'Napoleon Hill',
	},
	{
		text: 'Wisdom begins in wonder.',
		author: 'Socrates',
	},
	{
		text: 'Without courage, wisdom bears no fruit.',
		author: 'Baltasar Gracian',
	},
	{
		text: 'Change in all things is sweet.',
		author: 'Aristotle',
	},
	{
		text: 'What you fear is that which requires action to overcome.',
		author: 'Byron Pulsifer',
	},
	{
		text: 'When performance exceeds ambition, the overlap is called success.',
		author: 'Cullen Hightower',
	},
	{
		text: 'When deeds speak, words are nothing.',
		author: 'African proverb',
	},
	{
		text: 'Real magic in relationships means an absence of judgement of others.',
		author: 'Wayne Dyer',
	},
	{
		text: 'I never think of the future. It comes soon enough.',
		author: 'Albert Einstein',
	},
	{
		text: 'Skill to do comes of doing.',
		author: 'Ralph Emerson',
	},
	{
		text: 'Wisdom is the supreme part of happiness.',
		author: 'Sophocles',
	},
	{
		text: 'I believe that every person is born with talent.',
		author: 'Maya Angelou',
	},
	{
		text: 'Important principles may, and must, be inflexible.',
		author: 'Abraham Lincoln',
	},
	{
		text: 'The undertaking of a new action brings new strength.',
		author: 'Richard Evans',
	},
	{
		text: 'The years teach much which the days never know.',
		author: 'Ralph Emerson',
	},
	{
		text: 'Our distrust is very expensive.',
		author: 'Ralph Emerson',
	},
	{
		text: 'All know the way; few actually walk it.',
		author: 'Bodhidharma',
	},
	{
		text: 'Great talent finds happiness in execution.',
		author: 'Johann Wolfgang von Goethe',
	},
	{
		text: 'Faith in oneself is the best and safest course.',
		author: 'Michelangelo',
	},
	{
		text: 'Courage is going from failure to failure without losing enthusiasm.',
		author: 'Winston Churchill',
	},
	{
		text: 'The two most powerful warriors are patience and time.',
		author: 'Leo Tolstoy',
	},
	{
		text: 'Anticipate the difficult by managing the easy.',
		author: 'Lao Tzu',
	},
	{
		text: 'Those who are free of resentful thoughts surely find peace.',
		author: 'Buddha',
	},
	{
		text: 'A short saying often contains much wisdom.',
		author: 'Sophocles',
	},
	{
		text: 'A beautiful thing is never perfect.',
		author: null,
	},
	{
		text: 'Only do what your heart tells you.',
		author: 'Princess Diana',
	},
	{
		text: 'Life is movement-we breathe, we eat, we walk, we move!',
		author: 'John Pierrakos',
	},
	{
		text: 'No one can make you feel inferior without your consent.',
		author: 'Eleanor Roosevelt',
	},
	{
		text: 'Argue for your limitations, and sure enough theyre yours.',
		author: 'Richard Bach',
	},
	{
		text: 'Luck is what happens when preparation meets opportunity.',
		author: 'Seneca',
	},
	{
		text: 'Victory belongs to the most persevering.',
		author: 'Napoleon Bonaparte',
	},
	{
		text: 'Love all, trust a few, do wrong to none.',
		author: 'William Shakespeare',
	},
	{
		text: 'In order to win, you must expect to win.',
		author: 'Richard Bach',
	},
	{
		text: 'A goal is a dream with a deadline.',
		author: 'Napoleon Hill',
	},
	{
		text: 'You can do it if you believe you can!',
		author: 'Napoleon Hill',
	},
	{
		text: "Set your goals high, and don't stop till you get there.",
		author: 'Bo Jackson',
	},
	{
		text: 'Every new day is another chance to change your life.',
		author: null,
	},
	{
		text: 'Smile, breathe, and go slowly.',
		author: 'Thich Nhat Hanh',
	},
	{
		text: 'Nobody will believe in you unless you believe in yourself.',
		author: 'Liberace',
	},
	{
		text: 'Do more than dream: work.',
		author: 'William Arthur Ward',
	},
	{
		text: 'No man was ever wise by chance.',
		author: 'Seneca',
	},
	{
		text: 'Some pursue happiness, others create it.',
		author: null,
	},
	{
		text: 'He that is giddy thinks the world turns round.',
		author: 'William Shakespeare',
	},
	{
		text: "Don't ruin the present with the ruined past.",
		author: 'Ellen Gilchrist',
	},
	{
		text: 'Do something wonderful, people may imitate it.',
		author: 'Albert Schweitzer',
	},
	{
		text: 'We do what we do because we believe.',
		author: null,
	},
	{
		text: 'Do one thing every day that scares you.',
		author: 'Eleanor Roosevelt',
	},
	{
		text: 'If you cannot be silent be brilliant and thoughtful.',
		author: 'Byron Pulsifer',
	},
	{
		text: 'Who looks outside, dreams; who looks inside, awakes.',
		author: 'Carl Jung',
	},
	{
		text: 'What we think, we become.',
		author: 'Buddha',
	},
	{
		text: 'The shortest answer is doing.',
		author: 'Lord Herbert',
	},
	{
		text: 'All our knowledge has its origins in our perceptions.',
		author: 'Leonardo da Vinci',
	},
	{
		text: 'The harder you fall, the higher you bounce.',
		author: null,
	},
	{
		text: 'Trusting our intuition often saves us from disaster.',
		author: 'Anne Wilson Schaef',
	},
	{
		text: 'Truth is powerful and it prevails.',
		author: 'Sojourner Truth',
	},
	{
		text: 'Light tomorrow with today!',
		author: 'Elizabeth Browning',
	},
	{
		text: 'Silence is a fence around wisdom.',
		author: 'German proverb',
	},
	{
		text: 'Society develops wit, but its contemplation alone forms genius.',
		author: 'Madame de Stael',
	},
	{
		text: 'The simplest things are often the truest.',
		author: 'Richard Bach',
	},
	{
		text: 'Everyone smiles in the same language.',
		author: null,
	},
	{
		text: 'Yesterday I dared to struggle. Today I dare to win.',
		author: 'Bernadette Devlin',
	},
	{
		text: 'No alibi will save you from accepting the responsibility.',
		author: 'Napoleon Hill',
	},
	{
		text: 'If you can dream it, you can do it.',
		author: 'Walt Disney',
	},
	{
		text: 'It is better to travel well than to arrive.',
		author: 'Buddha',
	},
	{
		text: "Life shrinks or expands in proportion to one's courage.",
		author: 'Anais Nin',
	},
	{
		text: 'You have to believe in yourself.',
		author: 'Sun Tzu',
	},
	{
		text: 'Our intention creates our reality.',
		author: 'Wayne Dyer',
	},
	{
		text: 'Silence is a true friend who never betrays.',
		author: 'Confucius',
	},
	{
		text: 'Character develops itself in the stream of life.',
		author: 'Johann Wolfgang von Goethe',
	},
	{
		text: 'From little acorns mighty oaks do grow.',
		author: 'American proverb',
	},
	{
		text: "You can't stop the waves, but you can learn to surf.",
		author: 'Jon Kabat-Zinn',
	},
	{
		text: 'Reality does not conform to the ideal, but confirms it.',
		author: 'Gustave Flaubert',
	},
	{
		text: 'Speak low, if you speak love.',
		author: 'William Shakespeare',
	},
	{
		text: 'A really great talent finds its happiness in execution.',
		author: 'Johann Wolfgang von Goethe',
	},
	{
		text: 'Reality leaves a lot to the imagination.',
		author: 'John Lennon',
	},
	{
		text: 'The greatest remedy for anger is delay.',
		author: 'Seneca',
	},
	{
		text: 'Growth itself contains the germ of happiness.',
		author: 'Pearl Buck',
	},
	{
		text: "You can do what's reasonable or you can decide what's possible.",
		author: null,
	},
	{
		text: 'Make your life a dream, and a dream, a reality.',
		author: 'Antoine de Saint-Exupéry',
	},
	{
		text: 'Music is the langage of emotions.',
		author: 'Emmanuel Kant',
	},
	{
		text: 'Imagination is more important than knowledge.',
		author: 'Albert Einstein',
	},
	{
		text: 'If you want peace, prepare for war.',
		author: 'Jules César',
	},
	{
		text: "It's the Hell of the poor that makes the Heavens of the Rich.",
		author: 'Victor Hugo',
	},
	{
		text: 'There is no worst deaf that the ones who do not want to listen.',
		author: 'Molière',
	},
	{
		text: 'When we want we can, when we can we must.',
		author: 'Napoléon Bonaparte',
	},
	{
		text: 'I think, therefore I am.',
		author: 'René Descartes',
	},
	{
		text: 'Anyone who does not know history is doomed to relive it.',
		author: 'Karl Marx',
	},
	{
		text: 'Promises only bind those who receive them.',
		author: 'Jacques Chirac',
	},
	{
		text: "People won't have time for you if you are always angry or complaining.",
		author: 'Stephen Hawking',
	},
	{
		text: 'Keep your face to the sunshine and you cannot see a shadow.',
		author: 'Hellen Keller',
	},
	{
		text: 'Sometimes we stare so long at a door that is closing that we see too late the one that is open.',
		author: 'Alexander Graham Bell',
	},
	{
		text: 'I am always doing that which I cannot do, in order that I may learn how to do it.',
		author: 'Pablo Picasso',
	},
	{
		text: 'The greatest weapon against stress is our ability to choose one thought over another.',
		author: 'William James',
	},
	{
		text: 'The last of human freedoms—the ability to choose ones attitude in a given set of circumstances.',
		author: 'Viktor E. Frankl',
	},
	{
		text: 'First make the change easy (warning: this might be hard), then make the easy change.',
		author: 'Kent Beck',
	},
	{
		text: 'Before software can be reusable it first has to be usable.',
		author: 'Ralph Johnson',
	},
	{
		text: 'If it hurts, do it more frequently, and bring the pain forward.',
		author: 'Jez Humble',
	},
	{
		text: 'Good programmers know what to write. Great ones know what to rewrite and reuse.',
		author: 'Eric S. Raymond',
	},
	{
		text: "Don't take rest after your first victory because if you fail in second, more lips are waiting to say that your first victory was just luck.",
		author: 'Dr. A.P.J Abdul Kalam',
	},
	{
		text: 'Dream, dream, dream. Dreams transform into thoughts and thoughts result in action.',
		author: 'Dr. A.P.J Abdul Kalam',
	},
	{
		text: 'To succeed in your mission, you must have single-minded devotion to your goal.',
		author: 'Dr. A.P.J Abdul Kalam',
	},
	{
		text: 'If you fail, never give up because FAIL means First Attempt In Learning.',
		author: 'Dr. A.P.J Abdul Kalam',
	},
	{
		text: 'Creativity is seeing the same thing but thinking differently.',
		author: 'Dr. A.P.J Abdul Kalam',
	},
	{
		text: 'Failure will never overtake me if my determination to succeed is strong enough.',
		author: 'Dr. A.P.J Abdul Kalam',
	},
	{
		text: 'All of us do not have equal talent. But , all of us have an equal opportunity to develop our talents.',
		author: 'Dr. A.P.J Abdul Kalam',
	},
	{
		text: 'Winning isnt everything, but wanting it is.',
		author: 'Arnold Palmer',
	},
	{
		text: 'You can never cross the ocean unless you have the courage to lose sight of the shore.',
		author: 'Christopher Columbus',
	},
	{
		text: 'Great sea captains are made in rough waters and deep seas.',
		author: 'Kathryn Kuhlman',
	},
	{
		text: 'Smooth sea never made a skillful sailor.',
		author: 'Anonymous',
	},
	{
		text: 'I am always doing that which I cannot do, in order that I may learn how to do it.',
		author: 'Pablo Picasso',
	},
	{
		text: 'The greatest weapon against stress is our ability to choose one thought over another.',
		author: 'William James',
	},
	{
		text: 'The last of human freedoms—the ability to choose ones attitude in a given set of circumstances.',
		author: 'Viktor E. Frankl',
	},
	{
		text: 'Leadership is hard to define and good leadership even harder. But if you can get people to follow you to the ends of the earth, you are a great leader.',
		author: 'Indra Nooyi',
	},
	{
		text: "It isn't what we say or think that defines us, but what we do.",
		author: 'Jane Austen',
	},
	{
		text: 'There is no charm equal to tenderness of heart.',
		author: 'Jane Austen',
	},
	{
		text: 'We have all a better guide in ourselves, if we would attend to it, than any other person can be.',
		author: 'Jane Austen',
	},
	{
		text: "Evil is not something superhuman, it's something less than human.",
		author: 'Agatha Christie',
	},
	{
		text: 'It is never too late to be who you might have been.',
		author: 'George Elliot',
	},
	{
		text: 'Never let the odds keep you from doing what you know in your heart you were meant to do.',
		author: 'H. Jackson Brown',
	},
	{
		text: 'Success usually comes to those who are too busy looking for it.',
		author: 'Henry David Thoreau',
	},
	{
		text: 'I never dreamed about success. I worked for it.',
		author: 'Estee Lauder',
	},
	{
		text: 'Experience is a hard teacher because she gives the test first, the lesson afterwards.',
		author: 'Vernon Sanders Law',
	},
	{
		text: 'Empty your mind, be formless. Shapeless, like water. If you put water into a cup, it becomes the cup. You put water into a bottle and it becomes the bottle. You put it in a teapot it becomes the teapot. Now, water can flow or it can crash. Be water, my friend.',
		author: 'Bruce Lee',
	},
	{
		text: 'We all live in a house on fire, no fire department to call, no way out.',
		author: 'Tennessee Williams',
	},
	{
		text: 'All truths are easy to understand once they are discovered. The point is to discover them.',
		author: 'Galileo Galilei',
	},
	{
		text: "Hunting is not a sport. In a sport, both sides should know they're in the game.",
		author: 'Paul Rodriguez',
	},
	{
		text: 'No matter how dark the moment, love and hope are always possible.',
		author: 'George Chakiris',
	},
	{
		text: 'All humanity is one undivided and indivisible family. I cannot detach myself from the wickedest soul.',
		author: 'Mahatma Gandhi',
	},
	{
		text: 'It is a wise father that knows his own child.',
		author: 'William Shakespeare',
	},
	{
		text: 'Life will knock us down, but we can choose whether or not to stand back up.',
		author: 'Jackie Chan',
	},
	{
		text: 'Sometimes it takes only one act of kindness and caring to change a person’s life.',
		author: 'Jackie Chan',
	},
	{
		text: 'Do not let circumstances control you. You change your circumstances.',
		author: 'Jackie Chan',
	},
	{
		text: 'Being still and doing nothing are two completely different things.',
		author: 'Jackie Chan',
	},
	{
		text: 'Nothing makes me more determined to succeed than someone telling me something’s impossible.',
		author: 'Jackie Chan',
	},
	{
		text: 'Family is not who’s blood is in you, is who you love and who loves you.',
		author: 'Jackie Chan',
	},
	{
		text: 'Why did I become Jackie Chan? Mostly because I work very hard. When people were sleeping, I was still training.',
		author: 'Jackie Chan',
	},
	{
		text: 'I never wanted to be the next Bruce Lee. I just wanted to be the first Jackie Chan.',
		author: 'Jackie Chan',
	},
	{
		text: 'I hope next time when we meet, we won’t be fighting each other. Instead we will be drinking tea together.',
		author: 'Jackie Chan',
	},
	{
		text: 'The best fights are ones we avoid.',
		author: 'Jackie Chan',
	},
	{
		text: 'I prepare for the worst, but hope for the best.',
		author: 'Jackie Chan',
	},
	{
		text: "Don't wait for the change of circumstances. You change the circumstances",
		author: 'Jackie Chan',
	},
	{
		text: "You don't get to do over parts or go back and change your path. Your life is decided by your character and the decisions you make in the moment.",
		author: 'Jackie Chan',
	},
	{
		text: 'I only want my work to make people happy.',
		author: 'Jackie Chan',
	},
	{
		text: 'If one does not attach himself to people and desires, never shall his heart be broken. But then, does he ever truly live?',
		author: 'Jackie Chan',
	},
	{
		text: 'Pain is my daily routine. As long as I don’t go to the hospital, it’s nothing for me.',
		author: 'Jackie Chan',
	},
	{
		text: 'We learn martial arts as helping weakness. You never fight for people to get hurt. You’re always helping people.',
		author: 'Jackie Chan',
	},
	{
		text: 'Quiet people have the loudest minds.',
		author: 'Stephen Hawking',
	},
	{
		text: "Life would be tragic if it weren't funny.",
		author: 'Stephen Hawking',
	},
	{
		text: 'Intelligence is the ability to adapt to change.',
		author: 'Stephen Hawking',
	},
	{
		text: "The universe doesn't allow perfection.",
		author: 'Stephen Hawking',
	},
	{
		text: 'My goal is simple. It is a complete understanding of the universe, why it is as it is and why it exists at all.',
		author: 'Stephen Hawking',
	},
	{
		text: 'Although I cannot move and I have to speak through a computer, in my mind I am free',
		author: 'Stephen Hawking',
	},
	{
		text: 'If time travel is possible, where are the tourists from the future?',
		author: 'Stephen Hawking',
	},
	{
		text: 'People who boast about their I.Q. are losers.',
		author: 'Stephen Hawking',
	},
	{
		text: 'The thing about smart people is that they seem like crazy people to dumb people.',
		author: 'Stephen Hawking',
	},
	{
		text: "I'm not afraid of death, but I'm in no hurry to die.",
		author: 'Stephen Hawking',
	},
	{
		text: 'Not only does God play dice but... he sometimes throws them where they cannot be seen.',
		author: 'Stephen Hawking',
	},
	{
		text: "I don't think the human race will survive the next thousand years, unless we spread into space.",
		author: 'Stephen Hawking',
	},
	{
		text: 'There is no avoiding war; it can only be postponed to the advantage of others.',
		author: 'Niccolo Machiavelli',
	},
	{
		text: 'Life is trying things to see if they work.',
		author: 'Ray Bradbury',
	},
	{
		text: 'Strike me down, and I will become more powerful than you could possibly imagine.',
		author: 'Obi-Wan Kenobi',
	},
	{
		text: "I'd rather be someone that's underrated than overrated.",
		author: 'Clint Dempsey',
	},
	{
		text: 'To live is to choose. But to choose well, you must know who you are and what you stand for, where you want to go and why you want to get there.',
		author: 'Kofi Annan',
	},
	{
		text: 'We need to keep hope alive and strive to do better.',
		author: 'Kofi Annan',
	},
	{
		text: 'Change is a process which has to be managed.',
		author: 'Kofi Annan',
	},
	{
		text: 'Freedom is not something that one people can bestow on another as a gift. Thy claim it as their own and none can keep it from them.',
		author: 'Kwame Nkrumah',
	},
	{
		text: 'Thought without practice is empty; and action without thought is blind.',
		author: 'Kwame Nkrumah',
	},
	{
		text: 'People are worms, and even the God who created them is immensely bored with their antics.',
		author: 'Ama Ata Aidoo',
	},
	{
		text: 'When evil men destroy, good men must build and bind.',
		author: 'Anas Aremeyaw Anas',
	},
	{
		text: 'The future belongs to those who believe in the beauty of their dreams.',
		author: 'John Agyekum Kufuor',
	},
	{
		text: 'All our dreams can come true, if we have the courage to pursue them.',
		author: 'John Agyekum Kufuor',
	},
	{
		text: "Dream as if you'll live forever. Live as if you'll die today.",
		author: 'John Agyekum Kufuor',
	},
	{
		text: 'Success is not final, failure is not fatal. It is the courage to continue that counts.',
		author: 'Winston Churchill',
	},
	{
		text: 'Success is not final, failure is not fatal. It is the courage to continue that counts.',
		author: 'Winston Churchill',
	},
	{
		text: "Never give up on something that you can't go a day without thinking about.",
		author: 'Winston Churchill',
	},
	{
		text: 'Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no hope at all.',
		author: 'Dale Carnegie',
	},
	{
		text: 'Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.',
		author: 'Thomas Edison',
	},
	{
		text: "Most people are other people. Their thoughtx are someone else's opinions, their lives a mimicry, their passions a quotation.",
		author: 'Oscar Wilde',
	},
	{
		text: "We accept the reality of the world with which we are presented. It's as simple as that.",
		author: 'The Truman Show',
	},
	{
		text: "Who kills a man kills a reasonable creature, God's image; but he who destroys a good book, kills reason itself, kills the image of God, as it were, in the eye.",
		author: 'John Milton',
	},
	{
		text: 'We stopped looking for monsters under our bed when we realised that they were inside us.',
		author: 'Charles Darwin',
	},
	{
		text: "Life isn't just about darkness or light, rather it's about finding light within the darkness.",
		author: 'Landon Parham',
	},
	{
		text: 'I have written you down. Now you will live forever.',
		author: 'Bastille',
	},
	{
		text: 'For sale: baby shoes, never worn.',
		author: 'Ernest Hemingway',
	},
	{
		text: 'In the end, we will remember not the words of our enemies, but the silence of our friends.',
		author: 'Martin Luther King Jr.',
	},
	{
		text: 'Music is a hogher revelation than all wisdom and philosophy. Music is the electrical soil in which the spirit lives, thinks and invents.',
		author: 'Ludwig van Beethoven',
	},
	{
		text: "Children are not colouring books. You don't get to fill them with your favourite colours.",
		author: 'Khaled Hosseini',
	},
	{
		text: "It's not what happens to you, but how you react to it that matters.",
		author: 'Epictetus',
	},
	{
		text: 'The only true wisdom is in knowing you know nothing.',
		author: 'Socrates',
	},
	{
		text: 'History repeats itself, first as tragedy, second as farce.',
		author: 'Karl Marx',
	},
	{
		text: 'To live is to suffer, to survive is to find some meaning in the suffering.',
		author: 'Friedrich Nietzsche',
	},
	{
		text: 'It does not matter how slowly you go as long as you do not stop.',
		author: 'Confucius',
	},
	{
		text: 'Be the change that you wish to see in the world.',
		author: 'Mahatma Gandhi',
	},
	{
		text: "I can't hold enough of you in my hands.",
		author: 'Franz Kafka',
	},
	{
		text: 'You make a choice: continue living your life feeling muddled in this abyss of self-misunderstanding, or you find your identity independent of it. You draw your own box.',
		author: 'Duchess Meghan',
	},
	{
		text: 'I construct my memories with my present.',
		author: 'Jean-Paul Sartre',
	},
	{
		text: 'I am a man, Jupiter, and each man must invent his own path.',
		author: 'Jean-Paul Sartre',
	},
	{
		text: 'We live in a world where people can ridicule you at the push of the button. They can question you at the push of a button.',
		author: 'Chadwick Boseman',
	},
	{
		text: 'The only difference between the hero and the villain is that the villain chooses to use that power in a way that is selfish and hurts other people.',
		author: 'Chadwick Boseman',
	},
	{
		text: 'If someone could only see my actions and not hear my words, what would they say are my priorities?',
		author: ' James Clear',
	},
	{
		text: 'We are not given a short life, but we make it short, and we are not ill-supplied but wasteful of it.',
		author: 'Null',
	},
	{
		text: 'The way to get started is to quit talking and begin doing.',
		author: 'Walt Disney',
	},
	{
		text: "Life is what happens when you're busy making other plans.",
		author: 'John Lennon',
	},
	{
		text: 'You only live once - but if you work it right, once is enough.',
		author: 'Joe E. Lewis',
	},
	{
		text: 'Fate chooses your relations, you choose your friends.',
		author: 'Jacques Delille',
	},
	{
		text: 'Never underestimate your problem or your ability to deal with it.',
		author: 'Robert Schuller',
	},
	{
		text: 'The best prophet of the future is the past.',
		author: 'Lord Byron',
	},
	{
		text: 'Be content with what you have; rejoice in the way things are. When you realize there is nothing lacking, the whole world belongs to you',
		author: 'Plato',
	},
	{
		text: 'At the touch of love everyone becomes a poet.',
		author: 'Plato',
	},
	{
		text: 'One word frees us of all the weight and pain in life, that word is Love.',
		author: 'Sophocles',
	},
	{
		text: 'He who conquers himself is the mightiest warrior.',
		author: 'Confucius',
	},
	{
		text: 'True wisdom comes to each of us when we realize how little we understand about life, ourselves, and the world around us.',
		author: 'Socrates',
	},
	{
		text: 'What we are today comes from our thoughts of yesterday, and our present thoughts build our life of tomorrow. Our life is the creation of our mind.',
		author: 'Gautama Buddha',
	},
	{
		text: 'First say to yourself what would you be; and then do what you need to do.',
		author: 'Epictetus',
	},
	{
		text: 'Music is a moral law. It gives soul to the universe, wings to the mind, flight to the imagination, and charm and gaiety to life and to everything.',
		author: 'Plato',
	},
	{
		text: 'The more sand had escaped from the hourglass of our life, the clearer we should see through it.',
		author: 'Niccolo Machiavelli',
	},
	{
		test: "I have Nakama who are not strong... But I still want them to be with me! So I have to be stronger than anybody else... or else I'll lose them all!",
		author: 'Monkey D. Luffy',
	},
	{
		text: 'I am the number one human being in music. That means any person that’s living or breathing is number two.',
		author: 'Kanye West',
	},
	{
		text: 'Kim has diarrhea a lot. Like way more than a normal person should have it.',
		author: 'Kanye West',
	},
	{
		text: 'Nothing in life is promised except death.',
		author: 'Kanye West',
	},
	{
		text: "I love sleep; it's my favorite.",
		author: 'Kanye West',
	},
	{
		text: "I refuse to accept other people's ideas of happiness for me. As if there's a 'one size fits all' standard for happiness.",
		author: 'Kanye West',
	},
	{
		text: "People always tell you, 'Be humble. Be humble.' When was the last time someone told you to be amazing? Be great! Be great! Be awesome! Be awesome!",
		author: 'Kanye West',
	},
	{
		text: 'My greatest pain in life is that I will never be able to see myself perform live.',
		author: 'Kanye West',
	},
	{
		text: 'For me to say I wasn’t a genius, I would just be lying to you and to myself.',
		author: 'Kanye West',
	},
	{
		text: 'I am Warhol! I am the number one most impactful artist of our generation. I am Shakespeare in the flesh. Walt Disney, Nike, Google.',
		author: 'Kanye West',
	},
	{
		text: 'You know, I’m a creative genius and there’s no other way to word it.',
		author: 'Kanye West',
	},
	{
		text: '50 is Eminem’s favourite rapper. I’m my favourite rapper.',
		author: 'Kanye West',
	},
	{
		text: 'Kim has diarrhea a lot. Like way more than a normal person should have it.',
		author: 'Kanye West',
	},
	{
		text: 'I’m going down as a legend, whether or not you like me or not. I am the new Jim Morrison. I am the new Kurt Cobain.',
		author: 'Kanye West',
	},
	{
		text: "There's no fangs. I don't have fangs. I'm a porcupine. I'm a blowfish. Like, I'm a — what's the fish that blows up? I'm a blowfish. I'm not a shark, I'm a blowfish.",
		author: 'Kanye West',
	},
	{
		text: 'I don’t want to say these really big, over-the-top statements that end up getting quoted.',
		author: 'Kanye West',
	},
	{
		text: 'Perform your obligatory duty, because action is indeed better than inaction.',
		author: 'Shri Krishna (Bhagavad Gita)',
	},
	{
		text: 'Man is made by his belief. As he believes, so he is.',
		author: 'Shri Krishna (Bhagavad Gita)',
	},
	{
		text: 'You are only entitled to the action, never to its fruits.',
		author: 'Shri Krishna (Bhagavad Gita)',
	},
	{
		text: 'Whatever happened, happened for the good. Whatever is happening, is happening for the good. Whatever will happen, will also happen for the good.',
		author: 'Shri Krishna (Bhagavad Gita)',
	},
	{
		text: 'Lust, anger and greed are the three gates to self-destructive hell.',
		author: 'Shri Krishna (Bhagavad Gita)',
	},
	{
		text: 'Change is the law of the universe. You can be a millionaire, or a pauper in an instant.',
		author: 'Shri Krishna (Bhagavad Gita)',
	},
	{
		text: 'I can accept failure. Everyone fails at something. But I can’t accept not trying.',
		author: 'Michael Jordan',
	},
	{
		text: 'Act as if what you do makes a difference. It does.',
		author: 'William James',
	},
	{
		text: 'No matter what people tell you, words and ideas can change the world.',
		author: 'Robin Williams',
	},
	{
		text: " That's one small step for a man, one giant leap for mankind .",
		author: 'Neil Armstrong ',
	},
	{
		text: "I wish there was a way to know you're in the good old days before you've actually left them.",
		author: 'Andy Bernard',
	},
	{
		text: "I'm not superstitious, but I am a little stitious.",
		author: 'Michael Scott',
	},
	{
		text: 'Write it on your heart that every day is the best day in the year.',
		author: 'Ralph Waldo Emerson',
	},
	{
		text: 'We accept the love we think we deserve',
		author: 'Todd Anderson',
	},
	{
		text: 'When you reach the end of your rope, tie a knot in it and hang on.',
		author: 'Franklin D. Roosevelt',
	},
	{
		text: 'Clouds come floating into my life, no longer to carry rain or usher storm, but to add color to my sunset sky.',
		author: 'Rabindranath Tagore',
	},
	{
		text: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
		author: 'James Cameron',
	},
	{
		text: "Life is what happens when you're busy making other plans.",
		author: 'John Lennon',
	},
	{
		text: 'You will face many defeats in life, but never let yourself be defeated.',
		author: 'Maya Angelou',
	},
	{
		text: 'The only impossible journey is the one you never begin.',
		author: 'Tony Robbins',
	},
	{
		text: 'The purpose of our lives is to be happy.',
		author: 'Dalai Lama',
	},
	{
		text: 'If you want to shine like a sun, first burn like a sun',
		author: 'A. P. J. Abdul Kalam',
	},
	{
		text: 'Excellence is a continuous process and not an accident',
		author: 'A. P. J. Abdul Kalam',
	},
	{
		text: 'The youth need to be enabled to become job generators from job seekers',
		author: 'A. P. J. Abdul Kalam',
	},
	{
		text: 'Great dreams of great dreamers are always transcended',
		author: 'A. P. J. Abdul Kalam',
	},
	{
		text: 'You have to dream before your dreams can come true',
		author: 'A. P. J. Abdul Kalam',
	},
	{
		text: 'We are what our thoughts have made us; so take care about what you think. Words are secondary. Thoughts live; they travel far.',
		author: 'Swami Vivekananda',
	},
	{
		text: 'The whole secret of existence is to have no fear. Never fear what will become of you, depend on no one. Only the moment you reject all help are you freed.',
		author: 'Swami Vivekananda',
	},
	{
		text: 'All the powers in the universe are already ours. It is we who have put our hands before our eyes and cry that it is dark.',
		author: null,
	},
	{
		text: "Don't judge each day by the harvest you reap but by the seeds that you plant",
		author: 'Robert Louis Stevenson',
	},
	{
		text: 'When you reach the end of your rope, tie a knot in it and hang on',
		author: 'Franklin D. Roosevelt',
	},
	{
		quote:
			"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
		name: 'Albert Einstein',
	},
	{
		quote:
			"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
		name: ' Bernard M. Baruch',
	},
	{
		quote:
			"“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
		name: 'Dr. Seuss',
	},
	{
		text: "Don't judge each day by the harvest you reap but by the seeds that you plant",
		author: 'Robert Louis Stevenson',
	},
	{
		text: 'When you reach the end of your rope, tie a knot in it and hang on',
		author: 'Franklin D. Roosevelt',
	},
	{
		quote:
			"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
		name: 'Albert Einstein',
	},
	{
		quote:
			"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
		name: ' Bernard M. Baruch',
	},
	{
		quote:
			"You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
		name: 'Dr. Seuss',
	},
	{
		quote:
			"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
		name: 'Albert Einstein',
	},
	{
		quote:
			"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
		name: 'Bernard M. Baruch',
	},
	{
		quote:
			"You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
		name: 'Dr. Seuss',
	},
	{
		text: 'Strength is Life, Weakness is Death. Expansion is Life, Contraction is Death. Love is Life, Hatred is Death.',
		author: 'Swami Vivekananda',
	},
	{
		text: 'Truth can be stated in a thousand different ways, yet each one can be true.',
		author: 'Swami Vivekananda',
	},
	{
		text: 'If faith in ourselves had been more extensively taught and practiced, I am sure a very large portion of the evils and miseries that we have would have vanished.',
		author: 'Swami Vivekananda',
	},
	{
		text: 'As different streams having different sources all mingle their waters in the sea, so different tendencies, various though they appear, crooked or straight, all lead to God.',
		author: 'Swami Vivekananda',
	},
	{
		text: 'External nature is only internal nature writ large.',
		author: 'Swami Vivekananda',
	},
	{
		text: 'The will is not free - it is a phenomenon bound by cause and effect - but there is something behind the will which is free.',
		author: 'Swami Vivekananda',
	},
	{
		text: 'Never think there is anything impossible for the soul. It is the greatest heresy to think so. If there is sin, this is the only sin; to say that you are weak, or others are weak.',
		author: 'Swami Vivekananda',
	},
	{
		text: 'Our duty is to encourage every one in his struggle to live up to his own highest idea, and strive at the same time to make the ideal as near as possible to the Truth.',
		author: 'Swami Vivekananda',
	},
	{
		text: "In a day, when you don't come across any problems - you can be sure that you are travelling in a wrong path.",
		author: 'Swami Vivekananda',
	},
	{
		text: 'Talk to yourself once in a day, otherwise you may miss meeting an intelligent person in this world.',
		author: 'Swami Vivekananda',
	},
	{
		text: 'We have to dare to be ourselves, however frightening or strange that self may prove to be.',
		author: 'May Sarton',
	},
	{
		text: 'There is nothing either good or bad, but thinking makes it so.',
		author: 'William Shakespeare',
	},
	{
		text: 'Man suffers only because he takes seriously what the gods made for fun.',
		author: 'Alan Wilson Watts',
	},
	{
		text: 'The cosmos is within us. We are made of star-stuff. We are a way for the universe to know itself.',
		author: 'Carl Sagan',
	},
	{
		text: 'I was never aware of any other option but to question everything.',
		author: 'Noam Chomsky',
	},
	{
		text: 'Do the best you can, and don’t take life too serious.',
		author: 'Will Rogers',
	},
	{
		text: 'Everything in moderation, including moderation.',
		author: 'Oscar Wilde',
	},
	{
		text: "It's the imperfections that make things beautiful",
		author: 'Jenny Han',
	},
	{
		text: 'Write books only if you are going to say in them the things you would never dare confide to anyone',
		author: 'Emil Cioran',
	},
	{
		text: 'In some ways, programming is like painting. You start with a blank canvas and certain basic raw materials. You use a combination of science, art, and craft to determine what to do with them.',
		author: 'Andrew Hunt',
	},
	{
		text: 'Write books only if you are going to say in them the things you would never dare confide to anyone',
		author: 'Emil Cioran',
	},
	{
		text: 'If you wish to make an apple pie from scratch, you must first invent the universe',
		author: 'Carl Sagan',
	},
	{
		text: 'As you walk down the fairway of life you must smell the roses, for you only get to play one round.',
		author: 'Ben Hogan',
	},
	{
		text: "Nothing is impossible. The word itself says 'I'm possible!'",
		author: 'Audrey Hepburn',
	},
	{
		text: 'The art of life is to know how to enjoy a little and to endure very much.',
		author: 'William Hazlitt',
	},
	{
		text: 'Genius is one percent inspiration and ninety-nine percent perspiration.',
		author: 'Thomas Edison',
	},
	{
		text: 'Do not brood over your past mistakes and failures as this will only fill your mind with grief, regret and depression. Do not repeat them in the future.',
		author: 'Sri Swami Sivananda',
	},
	{
		text: 'Be yourself; everyone else is already taken.',
		author: 'Oscar Wilde',
	},
	{
		text: 'Love is not an emotion. It is your very existence.',
		author: 'Sri Sri Ravi Shankar',
	},
	{
		text: 'So many books, so little time',
		author: 'Frank Zappa',
	},
	{
		text: 'Life is nothing to be very serious about. Life is a ball in your hands to play with. Don’t hold on to the ball',
		author: 'Sri Sri Ravi Shankar',
	},
	{
		text: 'A friend is someone who knows all about you and still loves you',
		author: 'Elbert Hubbard',
	},
	{
		text: 'You can observe a lot just by watching.',
		author: 'Yogi Berra',
	},
	{
		text: 'A house divided against itself cannot stand.',
		author: 'Abraham Lincoln',
	},
	{
		text: 'Difficulties increase the nearer we get to the goal.',
		author: 'Johann Wolfgang von Goethe',
	},
	{
		text: 'Fate is in your hands and no one elses',
		author: 'Byron Pulsifer',
	},
	{
		text: 'Be the chief but never the lord.',
		author: 'Lao Tzu',
	},
	{
		text: 'Nothing happens unless first we dream.',
		author: 'Carl Sandburg',
	},
	{
		text: 'Well begun is half done.',
		author: 'Aristotle',
	},
	{
		text: 'Life is a learning experience, only if you learn.',
		author: 'Yogi Berra',
	},
	{
		text: 'Self-complacency is fatal to progress.',
		author: 'Margaret Sangster',
	},
	{
		text: 'Peace comes from within. Do not seek it without.',
		author: 'Buddha',
	},
	{
		text: 'What you give is what you get.',
		author: 'Byron Pulsifer',
	},
	{
		text: 'Think how hard physics would be if particles could think',
		author: 'Murray Gell-Mann',
	},
	{
		text: "Life is a series of natural and spontaneous changes. Don't resist them - that only creates sorrow. Let reality be reality. Let things flow naturally forward in whatever way they like.",
		author: 'Lao Tzu',
	},
	{
		text: 'If you do not change direction, you may end up where you are heading.',
		author: 'Lao Tzu',
	},
	{
		text: 'To the mind that is still, the whole universe surrenders.',
		author: 'Lao Tzu',
	},
	{
		text: 'Nature does not hurry, yet everything is accomplished.',
		author: 'Lao Tzu',
	},
	{
		text: 'He who does not trust enough, Will not be trusted.',
		author: 'Lao Tzu',
	},
	{
		text: 'We can only learn to love by loving.',
		author: 'Iris Murdoch',
	},
	{
		text: 'Life is change. Growth is optional. Choose wisely.',
		author: 'Karen Clark',
	},
	{
		text: "You'll see it when you believe it.",
		author: 'Wayne Dyer',
	},
	{
		text: 'Today is the tomorrow we worried about yesterday.',
		author: 'Dale Carnegie',
	},
	{
		text: "It's easier to see the mistakes on someone else's paper.",
		author: 'Cynthia Lewis',
	},
	{
		text: 'Every man dies. Not every man really lives.',
		author: 'William Wallace',
	},
	{
		text: 'To lead people walk behind them.',
		author: 'Lao Tzu',
	},
	{
		text: 'Having nothing, nothing can he lose.',
		author: 'William Shakespeare',
	},
	{
		text: 'Trouble is only opportunity in work clothes.',
		author: 'Henry J. Kaiser',
	},
	{
		text: 'A rolling stone gathers no moss.',
		author: 'Publilius Syrus',
	},
	{
		text: 'Ideas are the beginning points of all fortunes.',
		author: 'Napoleon Hill',
	},
	{
		text: 'Everything in life is luck.',
		author: 'Donald Trump',
	},
	{
		text: 'Doing nothing is better than being busy doing nothing.',
		author: 'Lao Tzu',
	},
	{
		text: 'Trust yourself. You know more than you think you do.',
		author: 'Benjamin Spock',
	},
	{
		text: 'Study the past, if you would divine the future.',
		author: 'Confucius',
	},
	{
		text: 'The day is already blessed, find peace within it.',
		author: null,
	},
	{
		text: 'From error to error one discovers the entire truth.',
		author: 'Sigmund Freud',
	},
	{
		text: 'Well done is better than well said.',
		author: 'Benjamin Franklin',
	},
	{
		text: 'Bite off more than you can chew, then chew it.',
		author: 'Ella Williams',
	},
	{
		text: 'Work out your own salvation. Do not depend on others.',
		author: 'Buddha',
	},
	{
		text: 'One today is worth two tomorrows.',
		author: 'Benjamin Franklin',
	},
	{
		text: 'Once you choose hope, anythings possible.',
		author: 'Christopher Reeve',
	},
	{
		text: 'God always takes the simplest way.',
		author: 'Albert Einstein',
	},
	{
		text: 'One fails forward toward success.',
		author: 'Charles Kettering',
	},
	{
		text: 'From small beginnings come great things.',
		author: null,
	},
	{
		text: 'Learning is a treasure that will follow its owner everywhere',
		author: 'Chinese proverb',
	},
	{
		text: 'Be as you wish to seem.',
		author: 'Socrates',
	},
	{
		text: 'The world is always in movement.',
		author: 'V. Naipaul',
	},
	{
		text: "When you have a dream, you've got to grab it and never let go.",
		author: 'Carol Burnett',
	},
	{
		text: 'There is nothing impossible to they who will try.',
		author: 'Alexander the Great',
	},
	{
		text: 'Never mistake activity for achievement.',
		author: 'John Wooden',
	},
	{
		text: 'What worries you masters you.',
		author: 'Haddon Robinson',
	},
	{
		text: 'One faces the future with ones past.',
		author: 'Pearl Buck',
	},
	{
		text: 'Goals are the fuel in the furnace of achievement.',
		author: 'Brian Tracy',
	},
	{
		text: 'Who sows virtue reaps honour.',
		author: 'Leonardo da Vinci',
	},
	{
		text: 'Be kind whenever possible. It is always possible.',
		author: 'Dalai Lama',
	},
	{
		text: "Talk doesn't cook rice.",
		author: 'Chinese proverb',
	},
	{
		text: 'He is able who thinks he is able.',
		author: 'Buddha',
	},
	{
		text: 'A goal without a plan is just a wish.',
		author: 'Larry Elder',
	},
	{
		text: 'To succeed, we must first believe that we can.',
		author: 'Michael Korda',
	},
	{
		text: "All endings are also beginnings. We just don't know it at the time.",
		author: 'Mitch Albom',
	},
	{
		text: 'Learn from yesterday, live for today, hope for tomorrow.',
		author: 'Albert Einstein',
	},
	{
		text: 'A weed is no more than a flower in disguise.',
		author: 'James Lowell',
	},
	{
		text: 'Do, or do not. There is no try.',
		author: 'Yoda',
	},
	{
		text: 'All serious daring starts from within.',
		author: 'Harriet Beecher Stowe',
	},
	{
		text: 'The best teacher is experience learned from failures.',
		author: 'Byron Pulsifer',
	},
	{
		text: 'Think how hard physics would be if particles could think.',
		author: 'Murray Gell-Mann',
	},
	{
		text: "Love is the flower you've got to let grow.",
		author: 'John Lennon',
	},
	{
		text: "Don't wait. The time will never be just right.",
		author: 'Napoleon Hill',
	},
	{
		text: 'Time is the wisest counsellor of all.',
		author: 'Pericles',
	},
	{
		text: 'You give before you get.',
		author: 'Napoleon Hill',
	},
	{
		text: 'Wisdom begins in wonder.',
		author: 'Socrates',
	},
	{
		text: 'Without courage, wisdom bears no fruit.',
		author: 'Baltasar Gracian',
	},
	{
		text: 'Change in all things is sweet.',
		author: 'Aristotle',
	},
	{
		text: 'What you fear is that which requires action to overcome.',
		author: 'Byron Pulsifer',
	},
	{
		text: 'When performance exceeds ambition, the overlap is called success.',
		author: 'Cullen Hightower',
	},
	{
		text: 'When deeds speak, words are nothing.',
		author: 'African proverb',
	},
	{
		text: 'Real magic in relationships means an absence of judgement of others.',
		author: 'Wayne Dyer',
	},
	{
		text: 'I never think of the future. It comes soon enough.',
		author: 'Albert Einstein',
	},
	{
		text: 'Skill to do comes of doing.',
		author: 'Ralph Emerson',
	},
	{
		text: 'Wisdom is the supreme part of happiness.',
		author: 'Sophocles',
	},
	{
		text: 'I believe that every person is born with talent.',
		author: 'Maya Angelou',
	},
	{
		text: 'Your mind is for having ideas, not holding them.',
		author: 'David Allen',
	},
	{
		text: 'Important principles may, and must, be inflexible.',
		author: 'Abraham Lincoln',
	},
	{
		text: 'The undertaking of a new action brings new strength.',
		author: 'Richard Evans',
	},
	{
		text: 'The years teach much which the days never know.',
		author: 'Ralph Emerson',
	},
	{
		text: 'Our distrust is very expensive.',
		author: 'Ralph Emerson',
	},
	{
		text: 'All know the way; few actually walk it.',
		author: 'Bodhidharma',
	},
	{
		text: 'Great talent finds happiness in execution.',
		author: 'Johann Wolfgang von Goethe',
	},
	{
		text: 'Faith in oneself is the best and safest course.',
		author: 'Michelangelo',
	},
	{
		text: 'Courage is going from failure to failure without losing enthusiasm.',
		author: 'Winston Churchill',
	},
	{
		text: 'The two most powerful warriors are patience and time.',
		author: 'Leo Tolstoy',
	},
	{
		text: 'Anticipate the difficult by managing the easy.',
		author: 'Lao Tzu',
	},
	{
		text: 'Those who are free of resentful thoughts surely find peace.',
		author: 'Buddha',
	},
	{
		text: 'A short saying often contains much wisdom.',
		author: 'Sophocles',
	},
	{
		text: 'It takes both sunshine and rain to make a rainbow.',
		author: 'Roy T. Bennett',
	},
	{
		text: 'A beautiful thing is never perfect.',
		author: null,
	},
	{
		text: 'Only do what your heart tells you.',
		author: 'Princess Diana',
	},
	{
		text: 'Life is movement-we breathe, we eat, we walk, we move!',
		author: 'John Pierrakos',
	},
	{
		text: 'No one can make you feel inferior without your consent.',
		author: 'Eleanor Roosevelt',
	},
	{
		text: 'Argue for your limitations, and sure enough theyre yours.',
		author: 'Richard Bach',
	},
	{
		text: 'Luck is what happens when preparation meets opportunity.',
		author: 'Seneca',
	},
	{
		text: 'Victory belongs to the most persevering.',
		author: 'Napoleon Bonaparte',
	},
	{
		text: 'Love all, trust a few, do wrong to none.',
		author: 'William Shakespeare',
	},
	{
		text: 'In order to win, you must expect to win.',
		author: 'Richard Bach',
	},
	{
		text: 'A goal is a dream with a deadline.',
		author: 'Napoleon Hill',
	},
	{
		text: 'You can do it if you believe you can!',
		author: 'Napoleon Hill',
	},
	{
		text: "Set your goals high, and don't stop till you get there.",
		author: 'Bo Jackson',
	},
	{
		text: 'Every new day is another chance to change your life.',
		author: null,
	},
	{
		text: 'Smile, breathe, and go slowly.',
		author: 'Thich Nhat Hanh',
	},
	{
		text: 'Nobody will believe in you unless you believe in yourself.',
		author: 'Liberace',
	},
	{
		text: 'Do more than dream: work.',
		author: 'William Arthur Ward',
	},
	{
		text: 'No man was ever wise by chance.',
		author: 'Seneca',
	},
	{
		text: 'Some pursue happiness, others create it.',
		author: null,
	},
	{
		text: 'He that is giddy thinks the world turns round.',
		author: 'William Shakespeare',
	},
	{
		text: "Don't ruin the present with the ruined past.",
		author: 'Ellen Gilchrist',
	},
	{
		text: 'Do something wonderful, people may imitate it.',
		author: 'Albert Schweitzer',
	},
	{
		text: 'We do what we do because we believe.',
		author: null,
	},
	{
		text: 'Do one thing every day that scares you.',
		author: 'Eleanor Roosevelt',
	},
	{
		text: 'If you cannot be silent be brilliant and thoughtful.',
		author: 'Byron Pulsifer',
	},
	{
		text: 'Who looks outside, dreams; who looks inside, awakes.',
		author: 'Carl Jung',
	},
	{
		text: 'What we think, we become.',
		author: 'Buddha',
	},
	{
		text: 'The shortest answer is doing.',
		author: 'Lord Herbert',
	},
	{
		text: 'All our knowledge has its origins in our perceptions.',
		author: 'Leonardo da Vinci',
	},
	{
		text: 'The harder you fall, the higher you bounce.',
		author: null,
	},
	{
		text: 'Trusting our intuition often saves us from disaster.',
		author: 'Anne Wilson Schaef',
	},
	{
		text: 'Truth is powerful and it prevails.',
		author: 'Sojourner Truth',
	},
	{
		text: 'Light tomorrow with today!',
		author: 'Elizabeth Browning',
	},
	{
		text: 'Silence is a fence around wisdom.',
		author: 'German proverb',
	},
	{
		text: 'Society develops wit, but its contemplation alone forms genius.',
		author: 'Madame de Stael',
	},
	{
		text: 'The simplest things are often the truest.',
		author: 'Richard Bach',
	},
	{
		text: 'Everyone smiles in the same language.',
		author: null,
	},
	{
		text: 'Yesterday I dared to struggle. Today I dare to win.',
		author: 'Bernadette Devlin',
	},
	{
		text: 'No alibi will save you from accepting the responsibility.',
		author: 'Napoleon Hill',
	},
	{
		text: 'If you can dream it, you can do it.',
		author: 'Walt Disney',
	},
	{
		text: 'It is better to travel well than to arrive.',
		author: 'Buddha',
	},
	{
		text: "Life shrinks or expands in proportion to one's courage.",
		author: 'Anais Nin',
	},
	{
		text: 'You have to believe in yourself.',
		author: 'Sun Tzu',
	},
	{
		text: 'Our intention creates our reality.',
		author: 'Wayne Dyer',
	},
	{
		text: 'Silence is a true friend who never betrays.',
		author: 'Confucius',
	},
	{
		text: 'Character develops itself in the stream of life.',
		author: 'Johann Wolfgang von Goethe',
	},
	{
		text: 'From little acorns mighty oaks do grow.',
		author: 'American proverb',
	},
	{
		text: "You can't stop the waves, but you can learn to surf.",
		author: 'Jon Kabat-Zinn',
	},
	{
		text: 'Reality does not conform to the ideal, but confirms it.',
		author: 'Gustave Flaubert',
	},
	{
		text: 'Speak low, if you speak love.',
		author: 'William Shakespeare',
	},
	{
		text: 'A really great talent finds its happiness in execution.',
		author: 'Johann Wolfgang von Goethe',
	},
	{
		text: 'Reality leaves a lot to the imagination.',
		author: 'John Lennon',
	},
	{
		text: 'The greatest remedy for anger is delay.',
		author: 'Seneca',
	},
	{
		text: 'Growth itself contains the germ of happiness.',
		author: 'Pearl Buck',
	},
	{
		text: "You can do what's reasonable or you can decide what's possible.",
		author: null,
	},
	{
		text: 'he purpose of our lives is to be happy.',
		author: 'Dalai Lama',
	},
	{
		text: "Life is what happens when you're busy making other plans.",
		author: 'John Lennon',
	},
	{
		text: 'Get busy living or get busy dying',
		author: 'Stephen King',
	},
	{
		text: 'You only live once, but if you do it right, once is enough.',
		author: 'Mae West',
	},
	{
		text: 'Many of life’s failures are people who did not realize how close they were to success when they gave up.',
		author: 'Thomas Edison',
	},
	{
		text: 'If you want to live a happy life, tie it to a goal, not to people or things',
		author: 'Albert Einstein',
	},
	{
		text: 'Never let the fear of striking out keep you from playing the game.',
		author: 'Babe Ruth',
	},
	{
		text: 'Money and success don’t change people; they merely amplify what is already there.',
		author: 'Will Smith',
	},
	{
		text: 'Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.',
		author: 'Steve Jobs',
	},
	{
		text: 'The journey of a thousand miles begins with one step.',
		author: 'Lao Tzu',
	},
	{
		text: 'That which does not kill us makes us stronger.',
		author: 'Friedrich Nietzsche',
	},
	{
		text: 'Life is what happens when you’re busy making other plans.',
		author: 'John Lennon',
	},
	{
		text: 'When the going gets tough, the tough get going.',
		author: 'Joe Kennedy',
	},
	{
		text: 'You must be the change you wish to see in the world.',
		author: 'Mahatma Gandhi',
	},
	{
		text: 'You only live once, but if you do it right, once is enough.',
		author: 'Mae West',
	},
	{
		text: 'Tough times never last but tough people do.',
		author: 'Robert H. Schuller',
	},
	{
		text: 'Get busy living or get busy dying.',
		author: 'Stephen King',
	},
	{
		text: 'Whether you think you can or you think you can’t, you’re right.',
		author: 'Henry Ford',
	},
	{
		text: 'Tis better to have loved and lost than to have never loved at all.',
		author: 'Alrded Lord Tennyson',
	},
	{
		text: 'Genius is one percent inspiration and ninety-nine percent perspiration.',
		author: 'Thomas Edison',
	},
	{
		text: 'You can observe a lot just by watching.',
		author: 'Yogi Berra',
	},
	{
		text: 'A house divided against itself cannot stand.',
		author: 'Abraham Lincoln',
	},
	{
		text: 'Difficulties increase the nearer we get to the goal.',
		author: 'Johann Wolfgang von Goethe',
	},
	{
		text: 'Fate is in your hands and no one elses',
		author: 'Byron Pulsifer',
	},
	{
		text: 'Be the chief but never the lord.',
		author: 'Lao Tzu',
	},
	{
		text: 'Nothing happens unless first we dream.',
		author: 'Carl Sandburg',
	},
	{
		text: 'Well begun is half done.',
		author: 'Aristotle',
	},
	{
		text: 'Life is a learning experience, only if you learn.',
		author: 'Yogi Berra',
	},
	{
		text: 'Self-complacency is fatal to progress.',
		author: 'Margaret Sangster',
	},
	{
		text: 'Peace comes from within. Do not seek it without.',
		author: 'Buddha',
	},
	{
		text: 'What you give is what you get.',
		author: 'Byron Pulsifer',
	},
	{
		text: 'We can only learn to love by loving.',
		author: 'Iris Murdoch',
	},
	{
		text: 'Life is change. Growth is optional. Choose wisely.',
		author: 'Karen Clark',
	},
	{
		text: "You'll see it when you believe it.",
		author: 'Wayne Dyer',
	},
	{
		text: 'To lead people walk behind them.',
		author: 'Lao Tzu',
	},
	{
		text: 'Having nothing, nothing can he lose.',
		author: 'William Shakespeare',
	},
	{
		text: 'Trouble is only opportunity in work clothes.',
		author: 'Henry J. Kaiser',
	},
	{
		text: 'A rolling stone gathers no moss.',
		author: 'Publilius Syrus',
	},
	{
		text: 'Ideas are the beginning points of all fortunes.',
		author: 'Napoleon Hill',
	},
	{
		text: 'Everything in life is luck.',
		author: 'Donald Trump',
	},
	{
		text: 'Doing nothing is better than being busy doing nothing.',
		author: 'Lao Tzu',
	},
	{
		text: 'Trust yourself. You know more than you think you do.',
		author: 'Benjamin Spock',
	},
	{
		text: 'Study the past, if you would divine the future.',
		author: 'Confucius',
	},
	{
		text: 'The day is already blessed, find peace within it.',
		author: null,
	},
	{
		text: 'From error to error one discovers the entire truth.',
		author: 'Sigmund Freud',
	},
	{
		text: 'Well done is better than well said.',
		author: 'Benjamin Franklin',
	},
	{
		text: 'Bite off more than you can chew, then chew it.',
		author: 'Ella Williams',
	},
	{
		text: 'Work out your own salvation. Do not depend on others.',
		author: 'Buddha',
	},
	{
		text: 'One today is worth two tomorrows.',
		author: 'Benjamin Franklin',
	},
	{
		text: 'Once you choose hope, anythings possible.',
		author: 'Christopher Reeve',
	},
	{
		text: 'God always takes the simplest way.',
		author: 'Albert Einstein',
	},
	{
		text: 'One fails forward toward success.',
		author: 'Charles Kettering',
	},
	{
		text: 'From small beginnings come great things.',
		author: null,
	},
	{
		text: 'Learning is a treasure that will follow its owner everywhere',
		author: 'Chinese proverb',
	},
	{
		text: 'Be as you wish to seem.',
		author: 'Socrates',
	},
	{
		text: 'The world is always in movement.',
		author: 'V. Naipaul',
	},
	{
		text: 'Never mistake activity for achievement.',
		author: 'John Wooden',
	},
	{
		text: 'What worries you masters you.',
		author: 'Haddon Robinson',
	},
	{
		text: 'One faces the future with ones past.',
		author: 'Pearl Buck',
	},
	{
		text: 'Goals are the fuel in the furnace of achievement.',
		author: 'Brian Tracy',
	},
	{
		text: 'Who sows virtue reaps honour.',
		author: 'Leonardo da Vinci',
	},
	{
		text: 'Be kind whenever possible. It is always possible.',
		author: 'Dalai Lama',
	},
	{
		text: "Talk doesn't cook rice.",
		author: 'Chinese proverb',
	},
	{
		text: 'He is able who thinks he is able.',
		author: 'Buddha',
	},
	{
		text: 'A goal without a plan is just a wish.',
		author: 'Larry Elder',
	},
	{
		text: 'To succeed, we must first believe that we can.',
		author: 'Michael Korda',
	},
	{
		text: 'Learn from yesterday, live for today, hope for tomorrow.',
		author: 'Albert Einstein',
	},
	{
		text: 'A weed is no more than a flower in disguise.',
		author: 'James Lowell',
	},
	{
		text: 'Do, or do not. There is no try.',
		author: 'Yoda',
	},
	{
		text: 'All serious daring starts from within.',
		author: 'Harriet Beecher Stowe',
	},
	{
		text: 'The best teacher is experience learned from failures.',
		author: 'Byron Pulsifer',
	},
	{
		text: 'Think how hard physics would be if particles could think.',
		author: 'Murray Gell-Mann',
	},
	{
		text: "Love is the flower you've got to let grow.",
		author: 'John Lennon',
	},
	{
		text: "Don't wait. The time will never be just right.",
		author: 'Napoleon Hill',
	},
	{
		text: 'Time is the wisest counsellor of all.',
		author: 'Pericles',
	},
	{
		text: 'You give before you get.',
		author: 'Napoleon Hill',
	},
	{
		text: 'Wisdom begins in wonder.',
		author: 'Socrates',
	},
	{
		text: 'Without courage, wisdom bears no fruit.',
		author: 'Baltasar Gracian',
	},
	{
		text: 'Change in all things is sweet.',
		author: 'Aristotle',
	},
	{
		text: 'What you fear is that which requires action to overcome.',
		author: 'Byron Pulsifer',
	},
	{
		text: 'When performance exceeds ambition, the overlap is called success.',
		author: 'Cullen Hightower',
	},
	{
		text: 'When deeds speak, words are nothing.',
		author: 'African proverb',
	},
	{
		text: 'Real magic in relationships means an absence of judgement of others.',
		author: 'Wayne Dyer',
	},
	{
		text: 'I never think of the future. It comes soon enough.',
		author: 'Albert Einstein',
	},
	{
		text: 'Skill to do comes of doing.',
		author: 'Ralph Emerson',
	},
	{
		text: 'Wisdom is the supreme part of happiness.',
		author: 'Sophocles',
	},
	{
		text: 'I believe that every person is born with talent.',
		author: 'Maya Angelou',
	},
	{
		text: 'Important principles may, and must, be inflexible.',
		author: 'Abraham Lincoln',
	},
	{
		text: 'The undertaking of a new action brings new strength.',
		author: 'Richard Evans',
	},
	{
		text: 'The years teach much which the days never know.',
		author: 'Ralph Emerson',
	},
	{
		text: 'Our distrust is very expensive.',
		author: 'Ralph Emerson',
	},
	{
		text: 'All know the way; few actually walk it.',
		author: 'Bodhidharma',
	},
	{
		text: 'Great talent finds happiness in execution.',
		author: 'Johann Wolfgang von Goethe',
	},
	{
		text: 'Faith in oneself is the best and safest course.',
		author: 'Michelangelo',
	},
	{
		text: 'Courage is going from failure to failure without losing enthusiasm.',
		author: 'Winston Churchill',
	},
	{
		text: 'The two most powerful warriors are patience and time.',
		author: 'Leo Tolstoy',
	},
	{
		text: 'Anticipate the difficult by managing the easy.',
		author: 'Lao Tzu',
	},
	{
		text: 'Those who are free of resentful thoughts surely find peace.',
		author: 'Buddha',
	},
	{
		text: 'A short saying often contains much wisdom.',
		author: 'Sophocles',
	},
	{
		text: 'A beautiful thing is never perfect.',
		author: null,
	},
	{
		text: 'Only do what your heart tells you.',
		author: 'Princess Diana',
	},
	{
		text: 'Life is movement-we breathe, we eat, we walk, we move!',
		author: 'John Pierrakos',
	},
	{
		text: 'No one can make you feel inferior without your consent.',
		author: 'Eleanor Roosevelt',
	},
	{
		text: 'Argue for your limitations, and sure enough theyre yours.',
		author: 'Richard Bach',
	},
	{
		text: 'Luck is what happens when preparation meets opportunity.',
		author: 'Seneca',
	},
	{
		text: 'Victory belongs to the most persevering.',
		author: 'Napoleon Bonaparte',
	},
	{
		text: 'Love all, trust a few, do wrong to none.',
		author: 'William Shakespeare',
	},
	{
		text: 'In order to win, you must expect to win.',
		author: 'Richard Bach',
	},
	{
		text: 'A goal is a dream with a deadline.',
		author: 'Napoleon Hill',
	},
	{
		text: 'You can do it if you believe you can!',
		author: 'Napoleon Hill',
	},
	{
		text: "Set your goals high, and don't stop till you get there.",
		author: 'Bo Jackson',
	},
	{
		text: 'Every new day is another chance to change your life.',
		author: null,
	},
	{
		text: 'Smile, breathe, and go slowly.',
		author: 'Thich Nhat Hanh',
	},
	{
		text: 'Nobody will believe in you unless you believe in yourself.',
		author: 'Liberace',
	},
	{
		text: 'Do more than dream: work.',
		author: 'William Arthur Ward',
	},
	{
		text: 'No man was ever wise by chance.',
		author: 'Seneca',
	},
	{
		text: 'Some pursue happiness, others create it.',
		author: null,
	},
	{
		text: 'He that is giddy thinks the world turns round.',
		author: 'William Shakespeare',
	},
	{
		text: "Don't ruin the present with the ruined past.",
		author: 'Ellen Gilchrist',
	},
	{
		text: 'Do something wonderful, people may imitate it.',
		author: 'Albert Schweitzer',
	},
	{
		text: 'We do what we do because we believe.',
		author: null,
	},
	{
		text: 'Do one thing every day that scares you.',
		author: 'Eleanor Roosevelt',
	},
	{
		text: 'If you cannot be silent be brilliant and thoughtful.',
		author: 'Byron Pulsifer',
	},
	{
		text: 'Who looks outside, dreams; who looks inside, awakes.',
		author: 'Carl Jung',
	},
	{
		text: 'What we think, we become.',
		author: 'Buddha',
	},
	{
		text: 'The shortest answer is doing.',
		author: 'Lord Herbert',
	},
	{
		text: 'All our knowledge has its origins in our perceptions.',
		author: 'Leonardo da Vinci',
	},
	{
		text: 'The harder you fall, the higher you bounce.',
		author: null,
	},
	{
		text: 'Trusting our intuition often saves us from disaster.',
		author: 'Anne Wilson Schaef',
	},
	{
		text: 'Truth is powerful and it prevails.',
		author: 'Sojourner Truth',
	},
	{
		text: 'Light tomorrow with today!',
		author: 'Elizabeth Browning',
	},
	{
		text: 'Silence is a fence around wisdom.',
		author: 'German proverb',
	},
	{
		text: 'Society develops wit, but its contemplation alone forms genius.',
		author: 'Madame de Stael',
	},
	{
		text: 'The simplest things are often the truest.',
		author: 'Richard Bach',
	},
	{
		text: 'Everyone smiles in the same language.',
		author: null,
	},
	{
		text: 'Yesterday I dared to struggle. Today I dare to win.',
		author: 'Bernadette Devlin',
	},
	{
		text: 'No alibi will save you from accepting the responsibility.',
		author: 'Napoleon Hill',
	},
	{
		text: 'If you can dream it, you can do it.',
		author: 'Walt Disney',
	},
	{
		text: 'It is better to travel well than to arrive.',
		author: 'Buddha',
	},
	{
		text: "Life shrinks or expands in proportion to one's courage.",
		author: 'Anais Nin',
	},
	{
		text: 'You have to believe in yourself.',
		author: 'Sun Tzu',
	},
	{
		text: 'Our intention creates our reality.',
		author: 'Wayne Dyer',
	},
	{
		text: 'Silence is a true friend who never betrays.',
		author: 'Confucius',
	},
	{
		text: 'Character develops itself in the stream of life.',
		author: 'Johann Wolfgang von Goethe',
	},
	{
		text: 'From little acorns mighty oaks do grow.',
		author: 'American proverb',
	},
	{
		text: "You can't stop the waves, but you can learn to surf.",
		author: 'Jon Kabat-Zinn',
	},
	{
		text: 'Reality does not conform to the ideal, but confirms it.',
		author: 'Gustave Flaubert',
	},
	{
		text: 'Speak low, if you speak love.',
		author: 'William Shakespeare',
	},
	{
		text: 'A really great talent finds its happiness in execution.',
		author: 'Johann Wolfgang von Goethe',
	},
	{
		text: 'Reality leaves a lot to the imagination.',
		author: 'John Lennon',
	},
	{
		text: 'The greatest remedy for anger is delay.',
		author: 'Seneca',
	},
	{
		text: 'Growth itself contains the germ of happiness.',
		author: 'Pearl Buck',
	},
	{
		text: "You can do what's reasonable or you can decide what's possible.",
		author: null,
	},
	{
		text: 'Make your life a dream, and a dream, a reality.',
		author: 'Antoine de Saint-Exupéry',
	},
	{
		text: 'Music is the langage of emotions.',
		author: 'Emmanuel Kant',
	},
	{
		text: 'Imagination is more important than knowledge.',
		author: 'Albert Einstein',
	},
	{
		text: 'If you want peace, prepare for war.',
		author: 'Jules César',
	},
	{
		text: "It's the Hell of the poor that makes the Heavens of the Rich.",
		author: 'Victor Hugo',
	},
	{
		text: 'There is no worst deaf that the ones who do not want to listen.',
		author: 'Molière',
	},
	{
		text: 'When we want we can, when we can we must.',
		author: 'Napoléon Bonaparte',
	},
	{
		text: 'I think, therefore I am.',
		author: 'René Descartes',
	},
	{
		text: 'Anyone who does not know history is doomed to relive it.',
		author: 'Karl Marx',
	},
	{
		text: 'Promises only bind those who receive them.',
		author: 'Jacques Chirac',
	},
	{
		text: "People won't have time for you if you are always angry or complaining.",
		author: 'Stephen Hawking',
	},
	{
		text: 'Keep your face to the sunshine and you cannot see a shadow.',
		author: 'Hellen Keller',
	},
	{
		text: 'Sometimes we stare so long at a door that is closing that we see too late the one that is open.',
		author: 'Alexander Graham Bell',
	},
	{
		text: 'I am always doing that which I cannot do, in order that I may learn how to do it.',
		author: 'Pablo Picasso',
	},
	{
		text: 'The greatest weapon against stress is our ability to choose one thought over another.',
		author: 'William James',
	},
	{
		text: 'The last of human freedoms—the ability to choose ones attitude in a given set of circumstances.',
		author: 'Viktor E. Frankl',
	},
	{
		text: 'First make the change easy (warning: this might be hard), then make the easy change.',
		author: 'Kent Beck',
	},
	{
		text: 'Before software can be reusable it first has to be usable.',
		author: 'Ralph Johnson',
	},
	{
		text: 'If it hurts, do it more frequently, and bring the pain forward.',
		author: 'Jez Humble',
	},
	{
		text: 'Good programmers know what to write. Great ones know what to rewrite and reuse.',
		author: 'Eric S. Raymond',
	},
	{
		text: "Don't take rest after your first victory because if you fail in second, more lips are waiting to say that your first victory was just luck.",
		author: 'Dr. A.P.J Abdul Kalam',
	},
	{
		text: 'Dream, dream, dream. Dreams transform into thoughts and thoughts result in action.',
		author: 'Dr. A.P.J Abdul Kalam',
	},
	{
		text: 'To succeed in your mission, you must have single-minded devotion to your goal.',
		author: 'Dr. A.P.J Abdul Kalam',
	},
	{
		text: 'If you fail, never give up because FAIL means First Attempt In Learning.',
		author: 'Dr. A.P.J Abdul Kalam',
	},
	{
		text: 'Creativity is seeing the same thing but thinking differently.',
		author: 'Dr. A.P.J Abdul Kalam',
	},
	{
		text: 'Failure will never overtake me if my determination to succeed is strong enough.',
		author: 'Dr. A.P.J Abdul Kalam',
	},
	{
		text: 'All of us do not have equal talent. But , all of us have an equal opportunity to develop our talents.',
		author: 'Dr. A.P.J Abdul Kalam',
	},
	{
		text: 'Winning isnt everything, but wanting it is.',
		author: 'Arnold Palmer',
	},
	{
		text: 'You can never cross the ocean unless you have the courage to lose sight of the shore.',
		author: 'Christopher Columbus',
	},
	{
		text: 'Great sea captains are made in rough waters and deep seas.',
		author: 'Kathryn Kuhlman',
	},
	{
		text: 'Smooth sea never made a skillful sailor.',
		author: 'Anonymous',
	},
	{
		text: 'I am always doing that which I cannot do, in order that I may learn how to do it.',
		author: 'Pablo Picasso',
	},
	{
		text: 'The greatest weapon against stress is our ability to choose one thought over another.',
		author: 'William James',
	},
	{
		text: 'The last of human freedoms—the ability to choose ones attitude in a given set of circumstances.',
		author: 'Viktor E. Frankl',
	},
	{
		text: 'Leadership is hard to define and good leadership even harder. But if you can get people to follow you to the ends of the earth, you are a great leader.',
		author: 'Indra Nooyi',
	},
	{
		text: "It isn't what we say or think that defines us, but what we do.",
		author: 'Jane Austen',
	},
	{
		text: 'There is no charm equal to tenderness of heart.',
		author: 'Jane Austen',
	},
	{
		text: 'We have all a better guide in ourselves, if we would attend to it, than any other person can be.',
		author: 'Jane Austen',
	},
	{
		text: "Evil is not something superhuman, it's something less than human.",
		author: 'Agatha Christie',
	},
	{
		text: 'It is never too late to be who you might have been.',
		author: 'George Elliot',
	},
	{
		text: 'Never let the odds keep you from doing what you know in your heart you were meant to do.',
		author: 'H. Jackson Brown',
	},
	{
		text: 'Success usually comes to those who are too busy looking for it.',
		author: 'Henry David Thoreau',
	},
	{
		text: 'I never dreamed about success. I worked for it.',
		author: 'Estee Lauder',
	},
	{
		text: 'Experience is a hard teacher because she gives the test first, the lesson afterwards.',
		author: 'Vernon Sanders Law',
	},
	{
		text: 'Empty your mind, be formless. Shapeless, like water. If you put water into a cup, it becomes the cup. You put water into a bottle and it becomes the bottle. You put it in a teapot it becomes the teapot. Now, water can flow or it can crash. Be water, my friend.',
		author: 'Bruce Lee',
	},
	{
		text: 'We all live in a house on fire, no fire department to call, no way out.',
		author: 'Tennessee Williams',
	},
	{
		text: 'All truths are easy to understand once they are discovered. The point is to discover them.',
		author: 'Galileo Galilei',
	},
	{
		text: "Hunting is not a sport. In a sport, both sides should know they're in the game.",
		author: 'Paul Rodriguez',
	},
	{
		text: 'No matter how dark the moment, love and hope are always possible.',
		author: 'George Chakiris',
	},
	{
		text: 'All humanity is one undivided and indivisible family. I cannot detach myself from the wickedest soul.',
		author: 'Mahatma Gandhi',
	},
	{
		text: 'It is a wise father that knows his own child.',
		author: 'William Shakespeare',
	},
	{
		text: 'Life will knock us down, but we can choose whether or not to stand back up.',
		author: 'Jackie Chan',
	},
	{
		text: 'Sometimes it takes only one act of kindness and caring to change a person’s life.',
		author: 'Jackie Chan',
	},
	{
		text: 'Do not let circumstances control you. You change your circumstances.',
		author: 'Jackie Chan',
	},
	{
		text: 'Being still and doing nothing are two completely different things.',
		author: 'Jackie Chan',
	},
	{
		text: 'Nothing makes me more determined to succeed than someone telling me something’s impossible.',
		author: 'Jackie Chan',
	},
	{
		text: 'Family is not who’s blood is in you, is who you love and who loves you.',
		author: 'Jackie Chan',
	},
	{
		text: 'Why did I become Jackie Chan? Mostly because I work very hard. When people were sleeping, I was still training.',
		author: 'Jackie Chan',
	},
	{
		text: 'I never wanted to be the next Bruce Lee. I just wanted to be the first Jackie Chan.',
		author: 'Jackie Chan',
	},
	{
		text: 'I hope next time when we meet, we won’t be fighting each other. Instead we will be drinking tea together.',
		author: 'Jackie Chan',
	},
	{
		text: 'The best fights are ones we avoid.',
		author: 'Jackie Chan',
	},
	{
		text: 'I prepare for the worst, but hope for the best.',
		author: 'Jackie Chan',
	},
	{
		text: "Don't wait for the change of circumstances. You change the circumstances",
		author: 'Jackie Chan',
	},
	{
		text: "You don't get to do over parts or go back and change your path. Your life is decided by your character and the decisions you make in the moment.",
		author: 'Jackie Chan',
	},
	{
		text: 'I only want my work to make people happy.',
		author: 'Jackie Chan',
	},
	{
		text: 'If one does not attach himself to people and desires, never shall his heart be broken. But then, does he ever truly live?',
		author: 'Jackie Chan',
	},
	{
		text: 'Pain is my daily routine. As long as I don’t go to the hospital, it’s nothing for me.',
		author: 'Jackie Chan',
	},
	{
		text: 'We learn martial arts as helping weakness. You never fight for people to get hurt. You’re always helping people.',
		author: 'Jackie Chan',
	},
	{
		text: 'Quiet people have the loudest minds.',
		author: 'Stephen Hawking',
	},
	{
		text: "Life would be tragic if it weren't funny.",
		author: 'Stephen Hawking',
	},
	{
		text: 'Intelligence is the ability to adapt to change.',
		author: 'Stephen Hawking',
	},
	{
		text: "The universe doesn't allow perfection.",
		author: 'Stephen Hawking',
	},
	{
		text: 'My goal is simple. It is a complete understanding of the universe, why it is as it is and why it exists at all.',
		author: 'Stephen Hawking',
	},
	{
		text: 'Although I cannot move and I have to speak through a computer, in my mind I am free',
		author: 'Stephen Hawking',
	},
	{
		text: 'If time travel is possible, where are the tourists from the future?',
		author: 'Stephen Hawking',
	},
	{
		text: 'People who boast about their I.Q. are losers.',
		author: 'Stephen Hawking',
	},
	{
		text: 'The thing about smart people is that they seem like crazy people to dumb people.',
		author: 'Stephen Hawking',
	},
	{
		text: "I'm not afraid of death, but I'm in no hurry to die.",
		author: 'Stephen Hawking',
	},
	{
		text: 'Not only does God play dice but... he sometimes throws them where they cannot be seen.',
		author: 'Stephen Hawking',
	},
	{
		text: "I don't think the human race will survive the next thousand years, unless we spread into space.",
		author: 'Stephen Hawking',
	},
	{
		text: 'There is no avoiding war; it can only be postponed to the advantage of others.',
		author: 'Niccolo Machiavelli',
	},
	{
		text: 'Life is trying things to see if they work.',
		author: 'Ray Bradbury',
	},
	{
		text: 'Strike me down, and I will become more powerful than you could possibly imagine.',
		author: 'Obi-Wan Kenobi',
	},
	{
		text: "I'd rather be someone that's underrated than overrated.",
		author: 'Clint Dempsey',
	},
	{
		text: 'To live is to choose. But to choose well, you must know who you are and what you stand for, where you want to go and why you want to get there.',
		author: 'Kofi Annan',
	},
	{
		text: 'We need to keep hope alive and strive to do better.',
		author: 'Kofi Annan',
	},
	{
		text: 'Change is a process which has to be managed.',
		author: 'Kofi Annan',
	},
	{
		text: 'Freedom is not something that one people can bestow on another as a gift. Thy claim it as their own and none can keep it from them.',
		author: 'Kwame Nkrumah',
	},
	{
		text: 'Thought without practice is empty; and action without thought is blind.',
		author: 'Kwame Nkrumah',
	},
	{
		text: 'People are worms, and even the God who created them is immensely bored with their antics.',
		author: 'Ama Ata Aidoo',
	},
	{
		text: 'When evil men destroy, good men must build and bind.',
		author: 'Anas Aremeyaw Anas',
	},
	{
		text: 'The future belongs to those who believe in the beauty of their dreams.',
		author: 'John Agyekum Kufuor',
	},
	{
		text: 'All our dreams can come true, if we have the courage to pursue them.',
		author: 'John Agyekum Kufuor',
	},
	{
		text: "Dream as if you'll live forever. Live as if you'll die today.",
		author: 'John Agyekum Kufuor',
	},
	{
		text: 'Success is not final, failure is not fatal. It is the courage to continue that counts.',
		author: 'Winston Churchill',
	},
	{
		text: 'Success is not final, failure is not fatal. It is the courage to continue that counts.',
		author: 'Winston Churchill',
	},
	{
		text: "Never give up on something that you can't go a day without thinking about.",
		author: 'Winston Churchill',
	},
	{
		text: 'Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no hope at all.',
		author: 'Dale Carnegie',
	},
	{
		text: 'Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.',
		author: 'Thomas Edison',
	},
	{
		text: "Most people are other people. Their thoughtx are someone else's opinions, their lives a mimicry, their passions a quotation.",
		author: 'Oscar Wilde',
	},
	{
		text: "We accept the reality of the world with which we are presented. It's as simple as that.",
		author: 'The Truman Show',
	},
	{
		text: "Who kills a man kills a reasonable creature, God's image; but he who destroys a good book, kills reason itself, kills the image of God, as it were, in the eye.",
		author: 'John Milton',
	},
	{
		text: 'We stopped looking for monsters under our bed when we realised that they were inside us.',
		author: 'Charles Darwin',
	},
	{
		text: "Life isn't just about darkness or light, rather it's about finding light within the darkness.",
		author: 'Landon Parham',
	},
	{
		text: 'I have written you down. Now you will live forever.',
		author: 'Bastille',
	},
	{
		text: 'For sale: baby shoes, never worn.',
		author: 'Ernest Hemingway',
	},
	{
		text: 'In the end, we will remember not the words of our enemies, but the silence of our friends.',
		author: 'Martin Luther King Jr.',
	},
	{
		text: 'Music is a hogher revelation than all wisdom and philosophy. Music is the electrical soil in which the spirit lives, thinks and invents.',
		author: 'Ludwig van Beethoven',
	},
	{
		text: "Children are not colouring books. You don't get to fill them with your favourite colours.",
		author: 'Khaled Hosseini',
	},
	{
		text: "It's not what happens to you, but how you react to it that matters.",
		author: 'Epictetus',
	},
	{
		text: 'The only true wisdom is in knowing you know nothing.',
		author: 'Socrates',
	},
	{
		text: 'History repeats itself, first as tragedy, second as farce.',
		author: 'Karl Marx',
	},
	{
		text: 'To live is to suffer, to survive is to find some meaning in the suffering.',
		author: 'Friedrich Nietzsche',
	},
	{
		text: 'It does not matter how slowly you go as long as you do not stop.',
		author: 'Confucius',
	},
	{
		text: 'Be the change that you wish to see in the world.',
		author: 'Mahatma Gandhi',
	},
	{
		text: "I can't hold enough of you in my hands.",
		author: 'Franz Kafka',
	},
	{
		text: 'You make a choice: continue living your life feeling muddled in this abyss of self-misunderstanding, or you find your identity independent of it. You draw your own box.',
		author: 'Duchess Meghan',
	},
	{
		text: 'I construct my memories with my present.',
		author: 'Jean-Paul Sartre',
	},
	{
		text: 'I am a man, Jupiter, and each man must invent his own path.',
		author: 'Jean-Paul Sartre',
	},
	{
		text: 'We live in a world where people can ridicule you at the push of the button. They can question you at the push of a button.',
		author: 'Chadwick Boseman',
	},
	{
		text: 'The only difference between the hero and the villain is that the villain chooses to use that power in a way that is selfish and hurts other people.',
		author: 'Chadwick Boseman',
	},
	{
		text: 'If someone could only see my actions and not hear my words, what would they say are my priorities?',
		author: ' James Clear',
	},
	{
		text: 'We are not given a short life, but we make it short, and we are not ill-supplied but wasteful of it.',
		author: 'Null',
	},
	{
		text: 'The way to get started is to quit talking and begin doing.',
		author: 'Walt Disney',
	},
	{
		text: "Life is what happens when you're busy making other plans.",
		author: 'John Lennon',
	},
	{
		text: 'You only live once - but if you work it right, once is enough.',
		author: 'Joe E. Lewis',
	},
	{
		text: 'Fate chooses your relations, you choose your friends.',
		author: 'Jacques Delille',
	},
	{
		text: 'Never underestimate your problem or your ability to deal with it.',
		author: 'Robert Schuller',
	},
	{
		text: 'The best prophet of the future is the past.',
		author: 'Lord Byron',
	},
	{
		text: 'Be content with what you have; rejoice in the way things are. When you realize there is nothing lacking, the whole world belongs to you',
		author: 'Plato',
	},
	{
		text: 'At the touch of love everyone becomes a poet.',
		author: 'Plato',
	},
	{
		text: 'One word frees us of all the weight and pain in life, that word is Love.',
		author: 'Sophocles',
	},
	{
		text: 'He who conquers himself is the mightiest warrior.',
		author: 'Confucius',
	},
	{
		text: 'True wisdom comes to each of us when we realize how little we understand about life, ourselves, and the world around us.',
		author: 'Socrates',
	},
	{
		text: 'What we are today comes from our thoughts of yesterday, and our present thoughts build our life of tomorrow. Our life is the creation of our mind.',
		author: 'Gautama Buddha',
	},
	{
		text: 'First say to yourself what would you be; and then do what you need to do.',
		author: 'Epictetus',
	},
	{
		text: 'Music is a moral law. It gives soul to the universe, wings to the mind, flight to the imagination, and charm and gaiety to life and to everything.',
		author: 'Plato',
	},
	{
		text: 'The more sand had escaped from the hourglass of our life, the clearer we should see through it.',
		author: 'Niccolo Machiavelli',
	},
	{
		test: "I have Nakama who are not strong... But I still want them to be with me! So I have to be stronger than anybody else... or else I'll lose them all!",
		author: 'Monkey D. Luffy',
	},
	{
		text: 'I am the number one human being in music. That means any person that’s living or breathing is number two.',
		author: 'Kanye West',
	},
	{
		text: 'Kim has diarrhea a lot. Like way more than a normal person should have it.',
		author: 'Kanye West',
	},
	{
		text: 'Nothing in life is promised except death.',
		author: 'Kanye West',
	},
	{
		text: "I love sleep; it's my favorite.",
		author: 'Kanye West',
	},
	{
		text: "I refuse to accept other people's ideas of happiness for me. As if there's a 'one size fits all' standard for happiness.",
		author: 'Kanye West',
	},
	{
		text: "People always tell you, 'Be humble. Be humble.' When was the last time someone told you to be amazing? Be great! Be great! Be awesome! Be awesome!",
		author: 'Kanye West',
	},
	{
		text: 'My greatest pain in life is that I will never be able to see myself perform live.',
		author: 'Kanye West',
	},
	{
		text: 'For me to say I wasn’t a genius, I would just be lying to you and to myself.',
		author: 'Kanye West',
	},
	{
		text: 'I am Warhol! I am the number one most impactful artist of our generation. I am Shakespeare in the flesh. Walt Disney, Nike, Google.',
		author: 'Kanye West',
	},
	{
		text: 'You know, I’m a creative genius and there’s no other way to word it.',
		author: 'Kanye West',
	},
	{
		text: '50 is Eminem’s favourite rapper. I’m my favourite rapper.',
		author: 'Kanye West',
	},
	{
		text: 'Kim has diarrhea a lot. Like way more than a normal person should have it.',
		author: 'Kanye West',
	},
	{
		text: 'I’m going down as a legend, whether or not you like me or not. I am the new Jim Morrison. I am the new Kurt Cobain.',
		author: 'Kanye West',
	},
	{
		text: "There's no fangs. I don't have fangs. I'm a porcupine. I'm a blowfish. Like, I'm a — what's the fish that blows up? I'm a blowfish. I'm not a shark, I'm a blowfish.",
		author: 'Kanye West',
	},
	{
		text: 'I don’t want to say these really big, over-the-top statements that end up getting quoted.',
		author: 'Kanye West',
	},
	{
		text: 'Perform your obligatory duty, because action is indeed better than inaction.',
		author: 'Shri Krishna (Bhagavad Gita)',
	},
	{
		text: 'Man is made by his belief. As he believes, so he is.',
		author: 'Shri Krishna (Bhagavad Gita)',
	},
	{
		text: 'You are only entitled to the action, never to its fruits.',
		author: 'Shri Krishna (Bhagavad Gita)',
	},
	{
		text: 'Whatever happened, happened for the good. Whatever is happening, is happening for the good. Whatever will happen, will also happen for the good.',
		author: 'Shri Krishna (Bhagavad Gita)',
	},
	{
		text: 'Lust, anger and greed are the three gates to self-destructive hell.',
		author: 'Shri Krishna (Bhagavad Gita)',
	},
	{
		text: 'Change is the law of the universe. You can be a millionaire, or a pauper in an instant.',
		author: 'Shri Krishna (Bhagavad Gita)',
	},
	{
		text: 'I can accept failure. Everyone fails at something. But I can’t accept not trying.',
		author: 'Michael Jordan',
	},
	{
		text: 'Act as if what you do makes a difference. It does.',
		author: 'William James',
	},
	{
		text: 'No matter what people tell you, words and ideas can change the world.',
		author: 'Robin Williams',
	},
	{
		text: " That's one small step for a man, one giant leap for mankind .",
		author: 'Neil Armstrong ',
	},
	{
		text: "I wish there was a way to know you're in the good old days before you've actually left them.",
		author: 'Andy Bernard',
	},
	{
		text: "I'm not superstitious, but I am a little stitious.",
		author: 'Michael Scott',
	},
	{
		text: 'Write it on your heart that every day is the best day in the year.',
		author: 'Ralph Waldo Emerson',
	},
	{
		text: 'We accept the love we think we deserve',
		author: 'Todd Anderson',
	},
	{
		text: 'When you reach the end of your rope, tie a knot in it and hang on.',
		author: 'Franklin D. Roosevelt',
	},
	{
		text: 'Clouds come floating into my life, no longer to carry rain or usher storm, but to add color to my sunset sky.',
		author: 'Rabindranath Tagore',
	},
	{
		text: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
		author: 'James Cameron',
	},
	{
		text: "Life is what happens when you're busy making other plans.",
		author: 'John Lennon',
	},
	{
		text: 'You will face many defeats in life, but never let yourself be defeated.',
		author: 'Maya Angelou',
	},
	{
		text: 'The only impossible journey is the one you never begin.',
		author: 'Tony Robbins',
	},
	{
		text: 'The purpose of our lives is to be happy.',
		author: 'Dalai Lama',
	},
	{
		text: 'If you want to shine like a sun, first burn like a sun',
		author: 'A. P. J. Abdul Kalam',
	},
	{
		text: 'Excellence is a continuous process and not an accident',
		author: 'A. P. J. Abdul Kalam',
	},
	{
		text: 'The youth need to be enabled to become job generators from job seekers',
		author: 'A. P. J. Abdul Kalam',
	},
	{
		text: 'Great dreams of great dreamers are always transcended',
		author: 'A. P. J. Abdul Kalam',
	},
	{
		text: 'You have to dream before your dreams can come true',
		author: 'A. P. J. Abdul Kalam',
	},
	{
		text: 'We are what our thoughts have made us; so take care about what you think. Words are secondary. Thoughts live; they travel far.',
		author: 'Swami Vivekananda',
	},
	{
		text: 'The whole secret of existence is to have no fear. Never fear what will become of you, depend on no one. Only the moment you reject all help are you freed.',
		author: 'Swami Vivekananda',
	},
	{
		text: 'All the powers in the universe are already ours. It is we who have put our hands before our eyes and cry that it is dark.',
		author: null,
	},
	{
		text: "Don't judge each day by the harvest you reap but by the seeds that you plant",
		author: 'Robert Louis Stevenson',
	},
	{
		text: 'When you reach the end of your rope, tie a knot in it and hang on',
		author: 'Franklin D. Roosevelt',
	},
	{
		quote:
			"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
		name: 'Albert Einstein',
	},
	{
		quote:
			"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
		name: ' Bernard M. Baruch',
	},
	{
		quote:
			"“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
		name: 'Dr. Seuss',
	},
	{
		text: "Don't judge each day by the harvest you reap but by the seeds that you plant",
		author: 'Robert Louis Stevenson',
	},
	{
		text: 'When you reach the end of your rope, tie a knot in it and hang on',
		author: 'Franklin D. Roosevelt',
	},
	{
		quote:
			"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
		name: 'Albert Einstein',
	},
	{
		quote:
			"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
		name: ' Bernard M. Baruch',
	},
	{
		quote:
			"“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
		name: 'Dr. Seuss',
	},
	{
		quote:
			"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
		name: 'Albert Einstein',
	},
	{
		quote:
			"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
		name: ' Bernard M. Baruch',
	},
	{
		quote:
			"“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
		name: 'Dr. Seuss',
	},
	{
		text: 'Strength is Life, Weakness is Death. Expansion is Life, Contraction is Death. Love is Life, Hatred is Death.',
		author: 'Swami Vivekananda',
	},
	{
		text: 'Truth can be stated in a thousand different ways, yet each one can be true.',
		author: 'Swami Vivekananda',
	},
	{
		text: 'If faith in ourselves had been more extensively taught and practiced, I am sure a very large portion of the evils and miseries that we have would have vanished.',
		author: 'Swami Vivekananda',
	},
	{
		text: 'As different streams having different sources all mingle their waters in the sea, so different tendencies, various though they appear, crooked or straight, all lead to God.',
		author: 'Swami Vivekananda',
	},
	{
		text: 'External nature is only internal nature writ large.',
		author: 'Swami Vivekananda',
	},
	{
		text: 'The will is not free - it is a phenomenon bound by cause and effect - but there is something behind the will which is free.',
		author: 'Swami Vivekananda',
	},
	{
		text: 'Never think there is anything impossible for the soul. It is the greatest heresy to think so. If there is sin, this is the only sin; to say that you are weak, or others are weak.',
		author: 'Swami Vivekananda',
	},
	{
		text: 'Our duty is to encourage every one in his struggle to live up to his own highest idea, and strive at the same time to make the ideal as near as possible to the Truth.',
		author: 'Swami Vivekananda',
	},
	{
		text: "In a day, when you don't come across any problems - you can be sure that you are travelling in a wrong path.",
		author: 'Swami Vivekananda',
	},
	{
		text: 'Talk to yourself once in a day, otherwise you may miss meeting an intelligent person in this world.',
		author: 'Swami Vivekananda',
	},
	{
		text: 'We have to dare to be ourselves, however frightening or strange that self may prove to be.',
		author: 'May Sarton',
	},
	{
		text: 'There is nothing either good or bad, but thinking makes it so.',
		author: 'William Shakespeare',
	},
	{
		text: 'Man suffers only because he takes seriously what the gods made for fun.',
		author: 'Alan Wilson Watts',
	},
	{
		text: 'The cosmos is within us. We are made of star-stuff. We are a way for the universe to know itself.',
		author: 'Carl Sagan',
	},
	{
		text: 'I was never aware of any other option but to question everything.',
		author: 'Noam Chomsky',
	},
	{
		text: "The question isn't who is going to let me; it's who is going to stop me.",
		author: 'Ayn Rand',
	},
	{
		text: 'A surplus of effort could overcome a deficit of confidence.',
		author: 'Sonia Sotomayor',
	},
	{
		text: 'If your dreams do not scare you, they are not big enough',
		author: 'Ellen Johnson Sirleaf',
	},
	{
		text: 'Trying to define yourself is like trying to bite your own teeth.',
		author: 'Alan Wilson Watts',
	},
	{
		text: 'Muddy water is best cleared by leaving it alone.',
		author: 'Alan Wilson Watts',
	},
	{
		text: 'When the going gets weird, the weird turn pro.',
		author: 'Hunter S. Thompson',
	},
	{
		text: 'There is nothing more helpless and irresponsible than a man in the depths of an ether binge.',
		author: 'Hunter S. Thompson',
	},
	{
		text: "If you're going through hell, keep going.",
		author: 'Winston Churchill',
	},
	{
		text: 'Be happy for this moment. This moment is your life.',
		author: 'Omar Khayyam',
	},
	{
		text: 'Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.',
		author: 'Lao Tzu',
	},
	{
		text: 'Tis better to have loved and lost than never to have loved at all.',
		author: 'Alfred Lord Tennyson',
	},
	{
		text: 'Let us always meet each other with smile, for the smile is the beginning of love.',
		author: 'Mother Teresa',
	},
	{
		text: "You can't blame gravity for falling in love.",
		author: 'Albert Einstein',
	},
	{
		text: 'Hope is a waking dream.',
		author: 'Aristotle',
	},
	{
		text: 'Hope is being able to see that there is light despite all of the darkness.',
		author: 'Desmond Tutu',
	},
	{
		text: 'Hope is like the sun, which, as we journey toward it, casts the shadow of our burden behind us.',
		author: 'Samuel Smiles',
	},
	{
		text: 'Do not spoil what you have by desiring what you have not; remember that what you now have was once among the things you only hoped for.',
		author: 'Epicurus',
	},
	{
		text: 'Hope springs eternal in the human breast: Man never is, but always to be blest.',
		author: 'Alexander Pope',
	},
	{
		text: 'Hope is not the conviction that something will turn out well but the certainty that something makes sense, regardless of how it turns out.',
		author: 'Vaclav Havel',
	},
	{
		text: 'A little more persistence, a little more effort, and what seemed hopeless failure may turn to glorious success.',
		author: 'Elbert Hubbard',
	},
	{
		text: 'Strive not to be a success, but rather to be of value.',
		author: 'Albert Einstein',
	},
	{
		text: 'All you need in this life is ignorance and confidence, and then success is sure.',
		author: 'Mark Twain',
	},
	{
		text: 'He who has a why to live can bear almost any how.',
		author: 'Friedrich Nietzsche',
	},
	{
		text: 'To live is to suffer, to survive is to find some meaning in the suffering.',
		author: 'Friedrich Nietzsche',
	},
	{
		text: "I'm not trying to be different. To me, I'm just being myself.",
		author: 'Jaylen Brown',
	},
	{
		quote:
			"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
		name: 'Albert Einstein',
	},
	{
		quote:
			"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
		name: ' Bernard M. Baruch',
	},
	{
		quote:
			"“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
		name: 'Dr. Seuss',
	},
	{
		text: "Don't judge each day by the harvest you reap but by the seeds that you plant.",
		author: 'Robert Louis Stevenson',
	},
	{
		text: "I have learned over the years that when one's mind is made up, this diminishes fear.",
		author: 'Rosa Parks',
	},
	{
		text: ' Wealth grows wherever men exert energy.',
		author: 'George S. Clason',
	},
	{
		text: 'The greatest loss that we all have to deal with is the loss of the image of ourselves as a perfect person.',
		author: 'Fred Rogers',
	},
	{
		text: 'It is not knowledge, but the act of learning, not possession but the act of getting there, which grants the greatest enjoyment',
		author: 'Carl Friedrich Gauss',
	},
	{
		text: 'If I have seen further, it is by standing on the shoulders of giants.',
		author: 'Isaac Newton',
	},
	{
		text: 'Do not brood over your past mistakes and failures as this will only fill your mind with grief, regret and depression. Do not repeat them in the future.',
		author: 'Sri Swami Sivananda',
	},
	{
		text: 'Sorrow spares no one, and scars respect no person.',
		author: 'Sherrilyn Kenyon',
	},
	{
		text: "The worst wounds, the deadliest of them, aren't the ones people see on the outside. They're the ones that make us bleed internally.",
		author: 'Sherrilyn Kenyon',
	},
	{
		text: 'Life is pain. Anyone who says differently is selling something.',
		author: 'Sherrilyn Kenyon',
	},
	{
		text: 'In the land of Bad Ass, Acheron reigned supreme.',
		author: 'Sherrilyn Kenyon',
	},
	{
		text: 'Better to be judged by twelve than carried by six',
		author: 'Sherrilyn Kenyon',
	},
	{
		text: 'All of us have darkness inside us, and at times it possesses and seduces us in ways we never thought possible.',
		author: 'Sherrilyn Kenyon',
	},
	{
		text: "Life isn't a puzzle to be solved. It's an adventure to be savored.",
		author: 'Sherrilyn Kenyon',
	},
	{
		text: 'Absence of evidence is not the evidence of absence',
		author: 'Carl Sagan',
	},
	{
		text: 'The only risk of failure is promotion.',
		author: 'Scot Adams',
	},
	{
		text: 'The only risk of failure is promotion.',
		author: 'Scot Adams',
	},
	{
		text: "We all have our time machines. Some take us back, they're called memories. Some take us forward, they're called dreams.",
		author: 'Jeremy Irons',
	},
	{
		text: 'Do not brood over your past mistakes and failures as this will only fill your mind with grief, regret and depression. Do not repeat them in the future.',
		author: 'Sri Swami Sivananda',
	},
	{
		text: 'It is not important to be better than someone else, but to be better than yesterday.',
		author: 'Jigoro Kano',
	},
	{
		text: 'He who cannot rest, cannot work; he who cannot let go, cannot hold on; he who cannot find footing, cannot go forward.',
		author: 'Harry Emerson Fosdick',
	},
	{
		text: 'You are not your thoughts.',
		author: 'Frances Trussell',
	},
	{
		text: "Money is one thing which rarely unites and mostly divides people.",
		author: 'Sudha Murty',
	},
	{
		text: "You will never win if you never begin.",
		author: 'Helen Rowland',
	},
	{
		text: "Moments, when lost, can't be found again. They're just gone.",
		author: 'Jenny Han',
	},
	{
		text: "You told me once that I bring out the worst in you. Well, you bring out the best in me.",
		author: 'Anna Todd',
	},
	{
		text: 'If we are emotional, subjective and short-sighted, we only add to our troubles.',
		author: 'Ryan Holiday',
	},
	{
		text: 'The obstacle in the path becomes the path.',
		author: 'Ryan Holiday',
 	},
  	{
   		text: 'You’ll never achieve 100 percent if 99 percent is okay.',
		author: 'Will Smith',
  	},
  	{		
    		text: "Many of life's failures are people who did not realize how close to success they were when they gave up.",
		author: 'Thomas Edison',
	},
	{		
    		text: "We are healed of a suffering only by experiencing it to the full.",
		author: 'Marcel Proust',
	},
	{
		text: "Life can only be understood backwards; but it must be lived forwards.",
		author: 'Soren Kierkegaard',
	},
	{
		text: 'I see now that the circumstances of one\'s birth are irrelevant. It is what you do with the gift of life that determines who you are.',
		author: 'Mewtwo',
  },
  {		
    text: "Education is the most powerful weapon which you can use to change the world.",
		author: 'Nelson Mandela',
	},
  {		
    text: "It is in your hands, to make a better world for all who live in it.",
		author: 'Nelson Mandela',
	},
  {		
    text: "A winner is a dreamer who never gives up.",
		author: 'Nelson Mandela',
	},
  {		
    text: "Overcoming poverty is not a task of charity, it is an act of justice.",
		author: 'Nelson Mandela',
	},
  {		
    text: "One cannot be prepared for something while secretly believing it will not happen.",
		author: 'Nelson Mandela',
	},
  {		
    text: "Do not judge me by my successes, judge me by how many times I fell down and got back up again.",
		author: 'Nelson Mandela',
	},
  {		
    text: "What counts in life is not the mere fact that we have lived. It is what difference we have made to the lives of others.",
		author: 'Nelson Mandela',
 	},
 	{
   	text: 'You’ll never achieve 100 percent if 99 percent is okay.',
		author: 'Will Smith',
  },
	{
    text: 'just move on and dont look back',
		author: 'Cary salvatore ',
  },
	{
		text: 'You’ll never achieve 100 percent if 99 percent is okay.',
		author: 'Will Smith',
	},
	{
		text: "Many of life's failures are people who did not realize how close to success they were when they gave up.",
		author: 'Thomas Edison',
	},
	{		
		text: "If you do not come out of your shell, you are just a nut.",
			author: 'Sadhguru(Jagdish Vasudev)',
	},
	{		
		text: "The secrets of life will not yield to a flirtatious mind.It needs the attention of a dedicated lover.",
			author: 'Sadhguru(Jagdish Vasudev)',
	},
	{		
		text: "This is a brief life. What you make out of it is completely in your hands.",
		author: 'Sadhguru(Jagdish Vasudev)',
  },
	{
		text: 'Youth has no age',
		author: null,
	},
	{
		text: 'You are too concerned with what was and what will be. Yesterday is history, tomorrow is a mystery. But today- today is a gift! That is why it is called present',
		author: 'Kung fu Panda',
	},
	{
		text: 'Success is stumbling from failure to failure with no loss of enthusiasm.',
		author: 'Winston Churchill'
	},
	{
		text: 'If you fall, I will be there -ground',
		author: null
	},
	{
		text: 'In the beginning I looked around and, not finding the automobile of my dreams, decided to build it myself.',
		author: 'Ferdinand Porsche',
	},
	{
		text: 'I have written you down. Now you will live forever.',
		author: 'Bastille',
	},
	{
		text: 'Education is not the filling of a pail, but the lighting of a fire.',
		author: 'William Butler Yeats',
	},
	{
		text: 'The aim of science is not to open the door to infinite wisdom, but to set a limit to infinite error.',
		author: 'Bertolt Brecht',
	},
	{
		text: 'Youth is happy because it has the capacity to see beauty. Anyone who keeps the ability to see beauty never grows old.',
		author: 'Franz Kafka',
	},
	{
		text: 'Reading gives us someplace to go when we have to stay where we are.',
		author: 'Mason Cooley',
  },
  {
		text: "I am a cage, in search of a bird.",
		author: "Franz Kafka",
	},
	{
		text: "Every existing thing is born without reason, prolongs itself out of weakness, and dies by chance.",
		author: "Jean-Paul Sartre",
  },
  {
		text:"Every existing thing is born without reason, prolongs itself out of weakness, and dies by chance.",
		author:"Jean-Paul Sartre",
	},
	{
		text:"If your actions inspire others to dream more, learn more, do more and become more, you are a leader.",
		author:"Simon Sinek",
	},
	{
		text:"Innovative people struggle to stick to conventional wisdom when needed.",
		author:"Kunal Shah",
	},
	{
		text:"Courage isn't having the strength to go on, it is going on when you don't have strength.",
		author:"Napoleon Bonaparte",
	},
  {
		text: "People are drawn deeper into tragedy not by their defects but by their virtues.",
		author: 'Haruki Murakami',
	},
	{
		text: "It’s like my identity’s an orbit that I’ve strayed far away from.",
		author: 'Haruki Murakami',
  },
  {
      text:"It is not in the stars to hold our destiny but in ourselves.",
      author:"William Shakespeare",
  },
  {
      text:"Never give up on something that you can't go a day without thinking about.",
      author:"Winston Churchill",
  },
  {
      text:"Success is a lousy teache. It seduces smart peopleinto thinking they can't loose.",
      author:"Bill Gates",
  },
  {
      text:"If you want to live a happy life,tie it to a goal.Not to people or things.",
      author:"Albert Einstein",
  },
  {
      text:"You can't edit a blank page.",
      author:"Jodi Picoult",
  },
  {
      text:"In a gentle way, you can shake the world.",
      author:"Mahatma gandhi",
  },
  {
		text:"In order to write about life first you must live it.",
		author:"Ernest Hemingway",
  },
	{
		text:"Life is not a problem to be solved, but a reality to be experienced.",
		author:"Soren Kierkegaard",
  },
	{
		text:"Turn your wounds into wisdom.",
		author:"Oprah Winfrey",
	},
	{
		text:"Life imposes things on you that you can’t control, but you still have the choice of how you’re going to live through this.",
		author:"Celine Dion",
  },
	{
		text:"The path to success is to take massive, determined actions.",
		author:"Tony Robbins",
	},
	{
		text:"People may doubt what you say, but they will believe what you do.",
		author:"Lewis Cass",
	},
	{
		text:"Vision without action is merely a dream. Action without vision just passes the time. Vision with action can change the world.",
		author:"Joel A. Barker",
	},
	{
		text:"Progress is impossible without change, and those who cannot change their minds cannot change anything.",
		author:"George Bernard Shaw",
	},
	{
		text:"Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
		author:"Albert Schweitzer",
  },
  {
		text:"I don't like to commit myself about heaven and hell- you see, I have friends in both places.",
		author:"Mark Twain",
	}
];
