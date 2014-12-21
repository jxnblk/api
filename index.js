
var fs = require('fs');

var data = {};

data.name = 'Brent Jackson';
data.nick = 'Jxnblk';
data.username = 'jxnblk';
data.title = 'Designer';
data.byline = 'Product designer at Etsy. Based in Brooklyn, NY.';
data.homepage = '//jxnblk.com';
data.avatar = '//jxnblk.com/avatar/avatar.svg';
data.avatar_png = '//jxnblk.com/avatar/avatar-640.png';

data.social_networks = [
  { name: 'Twitter', link: '//twitter.com/jxnblk' },
  { name: 'Github', link: '//github.com/jxnblk' },
  { name: 'Tumblr', link: '//jxnblk.tumblr.com' },
  { name: 'Soundcloud', link: '//soundcloud.com/jxnblk' }
];

data.projects = {
  featured: [
    {
      name: 'Basscss', link: '//basscss.com',
      description: 'Low-level CSS toolkit'
    },
    {
      name: 'CSS Stats', link: '//cssstats.com',
      description: 'CSS parsing tool'
    },
    {
      name: 'Geomicons', link: '//geomicons.com',
      description: 'Open source icons for the web'
    },
    {
      name: 'Plangular', link: '//jxnblk.com/plangular',
      description: 'Create custom Soundcloud players'
    }
  ],
  other: [
    { name: 'Principles', link: '//jxnblk.com/principles', description: 'Web design principles' },
    { name: 'Writing', link: '//jxnblk.com/writing', description: 'Articles and blog posts' },
    { name: 'Reading List', link: '//jxnblk.com/reading-list', description: 'Recommended reading' },
    { name: 'Ashley', link: '//jxnblk.com/Ashley', description: 'Readable Tumblr theme' },
    { name: 'Heather', link: '//jxnblk.com/Heather', description: 'Hyperminimal Jekyll theme' },
    { name: 'Loading', link: '//jxnblk.com/loading', description: 'Animated SVG loading indicators' },
    { name: 'Twipster', link: '//jxnblk.com/Twipster', description: 'Simpler, Readabler Twitter' },
    { name: 'SoundRad', link: '//soundrad.com', description: 'A radically simpler and faster Soundcloud player' },
    { name: 'MrsJxn', link: '//mrsjxn.com', description: 'Post-future beats' },
    { name: 'Microbeats', link: '//microbeats.cc', description: 'Beats created in under an hour' },
    { name: 'Skullcat', link: '//jxnblk.com/skullcat', description: 'A avatar fur Mrmrs' },
    { name: 'Gifolio', link: '//jxnblk.com/gifolio', description: 'GIF portfolio' },
  ]
};

data.writing = {
  posts: [
  ]
}

fs.writeFileSync('index.json', JSON.stringify(data));

