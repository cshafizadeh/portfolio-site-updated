import { FaPython, FaCcPaypal, FaBootstrap, FaNode } from 'react-icons/fa';
import { FiFigma } from 'react-icons/fi';
import { SiJavascript, SiMysql, SiMongodb } from 'react-icons/si';
import { DiReact, DiCss3 } from 'react-icons/di';
import { AiOutlineTwitter } from 'react-icons/ai';
import { TiHtml5 } from 'react-icons/ti';
import { BsDiscord } from 'react-icons/bs';
import { MdMarkEmailRead } from 'react-icons/md';
import GsceBackground from '../../Components/img/YosemiteBackground.jpg';
import SqlBackground from '../../Components/img/SqlBackground.jpg';
import BartBackground from '../../Components/img/Bart.jpg';
import DiscordBackground from '../../Components/img/DiscordBackground.jpg';
import EcommerceBackground from '../../Components/img/EcommerceBackground.jpg';
import StockBackground from '../../Components/img/StockBackground.jpg';
import PortfolioBackground from '../../Components/img/PortfolioBackground.jpg';

export const projectData = [
  {
    id: 'gsce',
    title: 'GSCE',
    link: 'https://www.gscendowment.org/',
    embed: '',
    background: GsceBackground,
    description:
      'Freelance project for the Good Stewardship Community Endowment, an environmental non-profit combating climate change having invested over $50,000 into environmental progress. The site uses PayPal to securely allow donations to the endowment.',
    features: [
      'PayPal API implementation to allow secure payments through the site',
      'Emailjs used to submit forms filled out by the user and sent to the clients inbox',
      'Bootstrap used to create a clean, interactive, and responsive user experience',
    ],
    languages: [
      <DiReact />,
      <FaNode />,
      <FaCcPaypal />,
      <SiJavascript />,
      <DiCss3 />,
      <TiHtml5 />,
      <FaBootstrap />,
      <MdMarkEmailRead />,
    ],
    code: '',
  },
  {
    id: 'sql-database',
    title: 'SQL DATABASE',
    link: '',
    embed: 'https://www.youtube.com/embed/pkvBJdnA0Kc',
    background: SqlBackground,
    description:
      'SQL database with full CRUD functionality. Implements one-to-one, one-two-many, and many-to-many relationships, allowing the user to add, edit, update, and delete orders, customers, and products.',
    features: [
      'Full CRUD functionality',
      'Database creates relationships upon new entries, allowing users to interact with multiple tables at a time (ex. selecting what user an order is going to)',
      'Node js and axios used to handle api requests and communicate between frontend and backend',
      'Handlebars js dynamically creates tables and entries, allowing for a scalable website.',
    ],
    languages: [
      <FaNode />,
      <SiMysql />,
      <SiJavascript />,
      <DiCss3 />,
      <TiHtml5 />,
    ],
    code: 'https://github.com/cshafizadeh/cs340_project',
  },
  {
    id: 'bart-api',
    title: 'BART API',
    link: '',
    embed: '',
    background: BartBackground,
    description:
      'This web application uses BART API data to retrieve information about current and upcoming train schedules, allowing the user to find the destinations, and arrival times of trains at a station.',
    features: [
      "This web app utilizes two BART API's. The first gets a list of all available stations and is used as the station options for the user to select, and the second retrieves info about a selected station, presenting the final destinations of all passing trains, and the arrival times of those trains.",
      'Dynamically renders stations and arrival times for trains at each station, creating a fully scalable site.',
      'Error handling handles bad input, preventing the user from selecting invalid stations, and only makes an API call if the station selection has changed or the information has updated.',
    ],
    languages: [<DiReact />, <SiJavascript />, <DiCss3 />, <TiHtml5 />],
    code: 'https://github.com/cshafizadeh/ApiProjects/tree/master/src/Components/bartAPI',
  },
  {
    id: 'discord-bot',
    title: 'DISCORD BOT',
    link: '',
    embed: '',
    background: DiscordBackground,
    description:
      'Custom discord bot made from scratch using discordjs. Discord bot has a wide variety of features such as playing music, get info on your favorite Pokémon, and even retrieve tweets and twitter accounts using Twitters developer API.',
    features: [
      'Bot can connect to user voice channel and play music using discordjs/voice',
      'Using twitters developer API, user can enter "/twitter (username)", and get info on that twitter account, such as username, bio, and creation date. Upon sending the command, the bot makes a bearer authenticated async request to twitter and awaits a response. If the account exists and the token is valid, it sends back info on requested account. Can also be used to get a users latest tweet.',
      'Using the Pokémon API, user can enter "/pokemon (pokemon)", and receive info on a specific pokemon. If "shiny" is added at the end, the shiny variant will be retrieved.',
      'Other features include being able to get info on a user or the server.',
    ],
    languages: [
      <SiJavascript />,
      <BsDiscord />,
      <FaNode />,
      <AiOutlineTwitter />,
    ],
    code: 'https://github.com/cshafizadeh/discordBot',
  },
  {
    id: 'e-commerce-site',
    title: 'Full Stack E-Commerce Site',
    link: '',
    embed: '',
    background: EcommerceBackground,
    description:
      'Full-Stack website using CRUD stack. React reducer and local storage manage state and remember users. Users can update their profile and order products. Admins can create, edit, update, and delete users, products, and orders.',
    features: [
      'Reacts "useReducer()" used to manage state across the site, remembering a users cart, order status, or the current status when making an API request to the backend.',
      'Mongo Atlas used to store data on users, orders, and products. The site has full CRUD functionality, with the owner being able to add and remove admin from users, and admins able to delete users. Admins can also fully edit, create, and delete products, and can update users orders such as add a tracking number for shipping. Users can edit their account info such as Email and password, and can also delete their account.',
      'PayPal API implemented for payments. Allowing users to securely pay either through PayPal or using a credit card.',
      'Axios used for sending and receiving data from the backend. If the request is successful, a success message will pop up, otherwise an error message is returned and the request is not completed. Requests are token authenticated, and checks if user is an admin when editing products and orders.',
      'Passwords are one-way encrypted using bcryptjs. When checking a password when logging in, the entered password is encrypted and then compared to the encryption associated with the email entered, meaning the users password is never compromised.',
      'LocalStorage used to remember user info such as keeping them logged in, and remembering users address when making orders.',
    ],
    languages: [
      <DiReact />,
      <SiJavascript />,
      <SiMongodb />,
      <FaCcPaypal />,
      <FaBootstrap />,
      <FaNode />,
      <DiCss3 />,
      <TiHtml5 />,
    ],
    code: '',
  },
  {
    id: 'stock-api',
    title: 'STOCK API',
    link: '',
    embed: '',
    background: StockBackground,
    description:
      'Website using Polygons stock API. Allows user to select a stock symbol and date, and will return the high, low, opening, and closing values for selected date.',
    features: [
      'Error handling sends an error if the stock symbol entered does not exist. The API is also only allowed to make 5 requests per minute, so using React state hooks the stock symbol and current date are checked and a request is sent only of one of them has changed.',
      'Current date and time are kept track of and used in the stock calender selection, making sure that a user cannot select a future date.',
    ],
    languages: [<DiReact />, <SiJavascript />, <DiCss3 />, <TiHtml5 />],
    code: 'https://github.com/cshafizadeh/ApiProjects/tree/master/src/Components/stocks',
  },
  {
    id: 'portfolio-site',
    title: 'PORTFOLIO SITE',
    link: 'https://cyrusshafizadeh.com',
    embed: '',
    background: PortfolioBackground,
    description:
      'The very site you are looking at! A collection of my projects in a stunning site that presents my growth and experience.',
    features: [
      'Built using React. React hooks manage state such as the current project being viewed, and inputs in the email form.',
      'Project data is retrieved from a js file, and using .map(), project cards and pages are dynamically rendered.',
      'Figma used to create design templates for each page and are used as backgrounds.',
      'React-Bootstrap used for its flexbox grid system to make the site responsive.',
      'Emailjs allows for a contact form in which a user can send a message directly to my email. Error handling prevent any fields from being left blank, and react-toastify displays a success or error message upon trying to send an email.',
    ],
    languages: [
      <DiReact />,
      <FiFigma />,
      <MdMarkEmailRead />,
      <SiJavascript />,
      <FaBootstrap />,
      <DiCss3 />,
      <TiHtml5 />,
    ],
    code: '',
  },
];

/*
{
    id: '',
    title: '',
    link: '',
    embed: '',
    background: '',
    description: '',
    features: [],
    languages: [],
    code: '',
  }
  */
