
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
    {
      title: 'It’s Okay to Look the Same',
      subheading: 'Why frameworks are actualy pretty great',
      link: 'https://medium.com/p/e95e79f409b7',
      lead: 'Every once in a while I hear someone complain about the visual homogenization of the web, and front-end frameworks often get the brunt of the attack. This visual sameness isn’t necessarily a bad thing.'
    },
    {
      title: 'Designing in the Browser Faster',
      subheading: null,
      link: 'https://medium.com/p/bd413d2bc4f3',
      lead: 'I’ve been dabbling with HTML and CSS for years—building small websites for myself and friends and building prototypes to test designs. And, while I’ve been fascinated with the idea of designing in the browser for a long time, it wasn’t until recently that it’s become much, much faster for me than using traditional design software.'
    },
    {
      title: 'Hack Design: Using Icons in Interfaces',
      subheading: null,
      link: 'https://hackdesign.org/lessons/24',
      lead: 'With the proliferation of mobile devices, icons play an increasingly important role in interface design. Icons can help aid in scannability, save space at smaller screen sizes, and afford clear, tappable targets. That said, icons can cause user confusion and frustration when used poorly. A solid foundation of heuristic icon design principles will save a lot of time on user research and help lead to the success of a product.'
    },
    {
      title: 'An Update on the Hamburger Menu',
      subheading: null,
      link: 'http://jxnblk.tumblr.com/post/82486816704/an-update-on-the-hamburger-menu',
      lead: null
    },
    {
      title: 'I’m Sick of Your Tiny, Tiny Type',
      subheading: null,
      link: 'http://jxnblk.tumblr.com/post/41796724549/im-sick-of-your-tiny-tiny-type',
      lead: null
    },
    {
      title: 'Organizing Mobile Navigation Based on Information-Seeking Behavior',
      subheading: null,
      link: 'http://jxnblk.tumblr.com/post/40693165132/organizing-mobile-navigation-based-on',
      lead: null
    },
    {
      title: 'Buckets & Jumpoffs: Using Content-Centric Contextual Navigation',
      subheading: null,
      link: 'http://jxnblk.tumblr.com/post/37416765650/buckets-jumpoffs-using-content-centric-contextual',
      lead: null
    },
    {
      title: 'The Advantages of Table Views Over Left Nav Flyouts',
      subheading: null,
      link: 'http://jxnblk.tumblr.com/post/36972301487/the-advantages-of-table-views-over-left-nav-flyouts',
      lead: null
    },
    {
      title: 'Hamburgers & Basements: Why Not to Use Left Nav Flyouts',
      subheading: null,
      link: 'http://jxnblk.tumblr.com/post/36218805036/hamburgers-basements-why-not-to-use-left-nav-flyouts',
      lead: null
    },
  ]
}

fs.writeFileSync('index.json', JSON.stringify(data));

