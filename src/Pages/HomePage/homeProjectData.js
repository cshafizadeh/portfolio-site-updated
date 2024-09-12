import RAGBackground from '../../Components/img/RAGBackground.jpg';
import SpotAIBackground from '../../Components/img/SpotifyBackground.jpg';
import YosemiteBackground from '../../Components/img/YosemiteBackground.jpg';
import EcommerceBackground from '../../Components/img/EcommerceBackground.jpg';
import DiscordBackground from '../../Components/img/DiscordBackground.jpg';
import TwitterBackground from '../../Components/img/TwitterBackground.jpg';

export const homeProjectData = [
  {
    id: 'spot-ai',
    title: 'SPOTAI',
    description:
      'Flask-based web app that generates personalized Spotify playlists using ML algorithms. SpotAI analyzes your listening data to create custom playlists tailored to your music preferences.',
    background: SpotAIBackground,
    github: 'https://github.com/jonathandow/SpotAI',
    video: '',
    visit: '',
  },
  {
    id: 'openai-rag-model',
    title: 'RAG Model',
    description:
      "Retrieval-Augmented Generation (RAG) project using OpenAI's GPT-based models, coupled with a Microsoft SQL Server database. The project leverages OpenAI’s embeddings API to create vector representations of text chunks and stores them in SQL Server as binary data.",
    background: RAGBackground,
    github: 'https://github.com/cshafizadeh/OpenAI-RAG-Model',
    video: '',
    visit: '',
  },
  {
    id: 'gsce',
    title: 'GSCE',
    description:
      'Freelance project for the Good Stewardship Community Endowment, an environmental non-profit combating climate change having invested over $50,000 into environmental progress. The site uses PayPal to securely allow donations to the endowment.',
    background: YosemiteBackground,
    github: '',
    video: '',
    visit: 'https://www.gscendowment.org',
  },
  {
    id: 'e-commerce-site',
    title: 'E-COMMERCE WEBSITE',
    description:
      'Full-Stack website using MERN stack. React reducer and local storage manage state and remember users. Users can update their profile and order products. Admins can create, edit, update, and delete users, products, and orders.',
    background: EcommerceBackground,
    github: 'https://github.com/cshafizadeh/EcommerceMERN',
    video: '',
    visit: '',
  },
  {
    id: 'discord-bot',
    title: 'DISCORD BOT',
    description:
      'Custom discord bot made from scratch using discordjs. Discord bot has a wide variety of features such as playing music, getting info on your favorite Pokémon, and even retrieving tweets and Twitter accounts using Twitters developer API.',
    background: DiscordBackground,
    github: 'https://github.com/cshafizadeh/discordBot',
    video: '',
    visit: '',
  },
  {
    id: 'twitter-bot',
    title: 'TWITTER BOT',
    description:
      "An autonomous script that generates and posts unique tweets using OpenAI's API and OAuth2 authentication. It stores past responses in Firebase for context and runs automatically on AWS twice daily, ensuring a continuous stream of original tweets.",
    background: TwitterBackground,
    github: 'https://github.com/cshafizadeh/XBot',
    video: '',
    visit: '',
  },
];
