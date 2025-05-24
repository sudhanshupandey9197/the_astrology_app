// size 31 based on date
const complements = [
  'Your creative energy lights up any room you enter',
  "Your intuition guides you perfectly through life's journey",
  'You have an extraordinary ability to make others feel special',
  'Your determination inspires those around you',
  'You possess a rare combination of wisdom and compassion',
  'Your positive attitude transforms challenges into opportunities',
  'You have a natural gift for understanding others',
  'Your strength lies in your gentle and caring nature',
  'You bring harmony wherever you go',
  'Your intellectual curiosity sets you apart',
  'You have an amazing capacity for leadership',
  'Your artistic soul sees beauty in everything',
  'You possess an incredible emotional depth',
  'Your practical wisdom helps solve complex problems',
  'You have a magical way of bringing joy to others',
  'Your resilience in facing challenges is remarkable',
  'You possess a unique and beautiful perspective on life',
  'Your dedication to growth is truly inspiring',
  'You have an extraordinary capacity for love and kindness',
  'Your presence brings peace to those around you',
  'You possess a rare and beautiful spirit',
  'Your authenticity touches hearts everywhere',
  'You have a special gift for making others smile',
  'Your inner strength is truly remarkable',
  "You possess a natural grace that's impossible to ignore",
  'Your empathy makes the world a better place',
  'You have an incredible ability to overcome obstacles',
  'Your optimism is contagious and uplifting',
  'You possess a beautiful balance of heart and mind',
  'Your generosity of spirit is truly remarkable',
  'You have a unique ability to see the best in others',
];

// size 20, based on random number
const empathyMessages = [
  "You always do good to others, but don't get it in return",
  'People often misunderstand your pure intentions',
  "You carry burdens silently to protect others' happiness",
  'Your kindness is sometimes taken for granted',
  'You give more love than you receive',
  "Others don't see how much you sacrifice for them",
  "You're strong even when no one offers support",
  'Few understand the depth of your emotional struggles',
  'Your generosity often goes unnoticed',
  'You help others heal while hiding your own pain',
  "People don't appreciate your sensitivity enough",
  "You're always there for others who aren't there for you",
  'Your loyalty deserves more recognition',
  'You face challenges alone despite helping everyone',
  'Others underestimate your emotional depth',
  "You've been hurt by those you trusted most",
  'Your efforts often go unacknowledged',
  "You put others' needs before your own",
  "You've endured more than people realize",
  'Your heart is pure but often gets wounded',
];

// size 30
const recommendations = [
  'Feed a stray dog or cat today',
  'Plant a tree in your neighborhood',
  'Meditate for 10 minutes each morning',
  "Write three things you're grateful for",
  "Call a family member you haven't spoken to recently",
  'Learn something new for 30 minutes',
  'Clean your living space thoroughly',
  'Drink more water throughout the day',
  'Take a walk in nature',
  'Help someone without expecting anything in return',
  'Start a small garden',
  'Practice deep breathing exercises',
  'Organize your workspace',
  'Read an inspiring book',
  'Cook a healthy meal from scratch',
  'Smile at strangers you meet',
  'Do 10 minutes of stretching',
  'Write down your goals',
  'Listen to uplifting music',
  'Donate unused items',
  'Start a savings habit',
  'Practice forgiveness',
  'Learn a new skill online',
  'Send a kind message to someone',
  'Try a new healthy recipe',
  'Keep a gratitude journal',
  'Visit an elderly neighbor',
  'Pick up trash in your area',
  'Share your knowledge with others',
  'Practice random acts of kindness',
];

// size 20
const predictions = [
  'You will become a crorepati in the next few years',
  'A major career breakthrough awaits you',
  "You'll travel to your dream destination soon",
  'Love of your life will enter your world',
  'A business opportunity will change everything',
  "You'll achieve fame in your field",
  'A hidden talent will bring success',
  "You'll inspire thousands of people",
  'Financial abundance is coming your way',
  "You'll own your dream house",
  'Your creativity will be widely recognized',
  "You'll start a successful business",
  'A life-changing opportunity approaches',
  "You'll make a remarkable achievement",
  'Your hard work will pay off tremendously',
  "You'll receive an unexpected inheritance",
  'Your investments will multiply',
  "You'll find your true calling",
  'Success in foreign lands awaits you',
  "You'll become a respected leader",
];

const loadingContainer = document.getElementById('loadingContainer');

// selecting form element
const form = document.querySelector('#zodiacForm');

// adding event listener on the form element
form.addEventListener('submit', (e) => {
  e.preventDefault();
  // console.log('Submitted');

  // removing existing results before resubmission
  const result = document.querySelector('#result');
  result.innerHTML = '';

  // fetching user input
  const firstName = document.querySelector('#firstName').value;

  const lastName = document.querySelector('#lastName').value;
  // console.log(firstName, lastName);

  const day = parseInt(document.querySelector('#day').value);

  const month = parseInt(document.querySelector('#month').value);

  const year = parseInt(document.querySelector('#year').value);
  // console.log(day, month, year);

  // Validating data for abnormal dates (e.g. 30th feb or 31st June)
  if (!validateDate(day, month, year)) {
    alert('Please enter a valid date');
    return;
  }

  // clearing previous results
  result.classList.remove('show');

  // Show loading state
  const submitButton = form.querySelector('button');
  submitButton.disabled = true;
  loadingContainer.style.display = 'block';

  // Generating result content
  // greeting the user
  const firstMessage = `Hello, ${capitalizeFirstLetter(
    firstName
  )} ${capitalizeFirstLetter(lastName)}!`;
  // console.log(firstMessage);

  // zodiac sign
  const zodiacSign = getZodiacSign(day, month);
  // console.log(zodiacSign);

  // telling the user his/her zodiac sign
  const secondMessage = `Your Zodiac Sign is ${zodiacSign}.`;
  // console.log(secondMessage);

  // complement
  const thirdMessage = complements[day - 1];
  // console.log(thirdMessage);

  // empathy message
  const forthMessage = empathyMessages[Math.floor(Math.random() * 20)];
  // console.log(forthMessage);

  // index for accessing recommendations array values
  let index = (firstName.length * lastName.length * year) % 30;
  // console.log(index);

  // our recommendation to the user
  const fifthMessage = recommendations[index];
  // console.log(fifthMessage);

  // index to access predictions array values
  index = (day * month * year) % 20;
  // console.log(index);

  // user's future prediction
  const sixthMessage = predictions[index];
  // console.log(sixthMessage);

  // console.log(result);

  // content of the result
  const resultHTML = `
    <h2>${firstMessage}</h2>
    <p>${secondMessage}</p>
    <p>${thirdMessage}.</p>
    <p>${forthMessage}.</p>
    <p>Our recommendation for you: ${fifthMessage}.</p>
    <p>Your future prediction is: ${sixthMessage}.</p>
  `;
  // console.log(resultHTML);

  // Adding show class after a small delay for animation (i.e; 3 seconds) and setting up the content of result
  setTimeout(() => {
    result.style.display = 'block';
    // console.log(result);
    result.innerHTML = resultHTML;
    // console.log(result);

    // resetting loading state
    // turning animation off after 3 seconds
    loadingContainer.style.display = 'none';
    submitButton.disabled = false;

    // Show result with slight delay for smooth transition
    requestAnimationFrame(() => {
      result.classList.add('show');
    });
  }, 3000);
});

// capitalize the first letter of user's firstName and lastName
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// function to calculate zodiac sign of the user based on day and date of his birth
function getZodiacSign(day, month) {
  // size 12
  const dates = [20, 19, 21, 20, 21, 21, 23, 23, 23, 23, 22, 22];

  // size 12
  const signs = [
    'Aquarius',
    'Pisces',
    'Aries',
    'Taurus',
    'Gemini',
    'Cancer',
    'Leo',
    'Virgo',
    'Libra',
    'Scorpio',
    'Sagittarius',
    'Capricorn',
  ];

  let signIndex = month - 1;
  if (day < dates[month - 1]) {
    signIndex = signIndex === 0 ? 11 : signIndex;
  }
  return signs[signIndex];
}

function validateDate(day, month, year) {
  const date = new Date(year, month - 1, day);
  return date.getMonth() === month - 1 && date.getDate() === parseInt(day);
}

// Twinkling Stars Animation

// Selecting div#stars element
const starContainer = document.querySelector('#star-container');

// Number of Stars
const no_of_stars = 150;

// creating stars using for loop
for (let i = 0; i < no_of_stars; i++) {
  // creating div.star element
  const star = document.createElement('div');
  // class star
  star.className = 'star';

  // Problem: all stars are of same size.
  // What we want: they should be of different sizes.
  // We are going to randomly allocate the height and width of the star, this project is going to be my PHD on Math.random 😉

  // width of div.star random allocation (1px or 2px): 3px was a bit much
  star.style.width = `${Math.random() * 2 + 1}px`;
  // we removed Math.floor just to make sure that every star is of different height ranging from 1.0px to 1.9999px (More Dynamic in nature)

  // height of div.star equal to width
  star.style.height = star.style.width;

  // border radius to make divs round
  // star.style.borderRadius = '50%';
  // something's up with this property, stars are not round, so we are gonna do it with css

  // setting background color of stars as white to make it more visually appealing
  star.style.backgroundColor = 'white';
  // well something is not working.
  // Problem: stars are stuck with the left end of the card
  // What we want: stars on the background spread everywhere
  // Observation: we have not set the height and width for the div#star-container element. If we assign this star-container div it's own height and width then we can get stars everywhere on the background.
  // Let's do that, we can use flex to position the stars,
  // how about doing that with css? We can do that using js as well, but that feature does not change with every star, so it does not need to be dynamic

  // It's still not working as expected.
  // Problem: all stars are on one line
  // What we want: stars spread everywhere on the background
  // Idea: How about using the position property to set the positions of the stars dynamically?

  // setting top and left property of every single star dynamically using Math.random (Thank You ChatGPT, I thought about removing the stars on the background, and forego the idea. Literally saved my day 😂)

  star.style.top = `${Math.floor(Math.random() * 100)}%`;
  // now stars are vertically on the same line, but they keep changing their position on the line dynamically (1up for me, 0 for the forego idea)

  star.style.left = `${Math.floor(Math.random() * 100)}%`;
  // Yes, we got it, stars are spread everywhere on the screen and I'm on the moon.

  // Now that we have stars spread everywhere on the screen, it's time to use the css magic to make them twinkle. (keyframes)

  // Problem: all stars are twinkling the same way, I mean when they are lit all are lit, when they are dim, all are dim.
  // What we want: we want the stars do twinkle randomly not simultaneously
  // so, we can play with the opacity property using Math.random, today, I will apply Math.random to anything and everything 😂

  // Problem: opacity is not working, ChatGPT suggests that we use animation delay property (Thank You CharGPT again for saving my day)

  star.style.animationDelay = Math.random() * 1 + 's';
  // Yes, now it's working just fine.

  // appending star into div#star-container
  starContainer.append(star);
}