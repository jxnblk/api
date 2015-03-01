
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
      name: 'Basscss',
      link: '//basscss.com',
      description: 'Low-level CSS toolkit',
      color: 'white',
      logo: 'http://d2v52k3cl9vedd.cloudfront.net/assets/images/bass-bolt.svg',
      backgroundImage: 'linear-gradient(-45deg, rgba(255,63,0,.15), rgba(0,255,127,.1)), url(http://d2v52k3cl9vedd.cloudfront.net/assets/images/triangles.svg)',
      backgroundColor: 'black',
      customClass: 'caps left-align bg-cover bg-center',
    },
    {
      name: 'CSS Stats',
      link: '//cssstats.com',
      description: 'CSS parsing tool',
      logo: 'http://d2v52k3cl9vedd.cloudfront.net/assets/images/cssstats.svg',
      color: 'black',
      backgroundColor: 'white',
      customClass: 'border-gray',
    },
    {
      name: 'Geomicons',
      link: '//geomicons.com',
      description: 'Open source icons for the web',
      logo: 'http://d2v52k3cl9vedd.cloudfront.net/assets/images/geomicons-heart.svg',
      color: 'white',
      backgroundColor: 'black',
      backgroundImage: 'url(http://d2v52k3cl9vedd.cloudfront.net/assets/images/geomicons-grid.svg)',
    },
    {
      name: 'Shade',
      link: '//jxnblk.com/shade',
      description: 'Mathematically-derived gradients',
      color: 'white',
      backgroundColor: 'bright-blue',
      backgroundImage: 'linear-gradient(-90deg, #F6FF00, #FF00A1)',
      customClass: '', // Compensate for width bug
    },
    {
      name: 'Colorable',
      link: '//jxnblk.com/colorable',
      description: 'Color palette contrast tester',
      color: 'red',
      backgroundColor: 'navy',
      logo: 'http://d2v52k3cl9vedd.cloudfront.net/assets/images/colorable.svg',
    },
    {
      name: 'Spectral',
      link: '//jxnblk.com/Spectral',
      description: 'Click the Rainbow',
      //backgroundImage: 'url(http://d2v52k3cl9vedd.cloudfront.net/assets/images/spectral-background.svg)',
      backgroundColor: 'bright-blue',
      customClass: 'bg-cover bg-center',
    },
    {
      name: 'Fitter Happier Text',
      link: '//jxnblk.com/fitter-happier-text',
      description: 'Performant, Fully Fluid Headings',
      color: 'white',
      backgroundColor: 'red',
      //logoSvg: '<svg xmlns="http://www.w3.org/2000/svg" fill="white" overflow="visible" viewBox="0 0 222 22"> <style> text { font-family: "Avenir Next", "Helvetica Neue", Helvetica, sans-serif; font-weight: 600; text-transform: uppercase; letter-spacing: .2em; } </style> <text x="50%" y="16" font-family="inherit" font-size="1rem" font-weight="inherit" style="text-anchor:middle">Fitter Happier Text</text> </svg>',
      customClass: 'caps',
    },
    {
      name: 'Plangular',
      link: '//jxnblk.com/plangular',
      description: 'Create custom Soundcloud players',
      color: 'red',
      backgroundColor: 'black',
      logo: 'http://d2v52k3cl9vedd.cloudfront.net/assets/images/plangular.svg',
      customClass: 'regular caps',
    },
    {
      name: 'Loading',
      link: '//jxnblk.com/loading',
      description: 'Animated SVG Loading Indicators',
      logo: 'http://d2v52k3cl9vedd.cloudfront.net/assets/images/loading-bubbles.svg',
      color: 'white',
      backgroundColor: 'purple'
    },
  ],

  other: [
    { name: 'Principles', link: '//jxnblk.com/principles', description: 'Web Design Principles' },
    //{ name: 'Writing', link: '//jxnblk.com/writing', description: 'Articles and Blog Posts' },
    { name: 'Reading List', link: '//jxnblk.com/reading-list', description: 'Recommended Reading' },
    { name: 'Ashley', link: '//jxnblk.com/Ashley', description: 'Readable Tumblr Theme' },
    { name: 'Heather', link: '//jxnblk.com/Heather', description: 'Hyperminimal Jekyll Theme' },
    { name: 'Twipster', link: '//jxnblk.com/Twipster', description: 'Simpler, Readabler Twitter' },
    { name: 'SoundRad', link: '//soundrad.com', description: 'Simple, Fast Soundcloud Player' },
    { name: 'MrsJxn', link: '//mrsjxn.com', description: 'Post-Future Beats' },
    { name: 'Microbeats', link: '//microbeats.cc', description: 'Beats Created in Under an Hour' },
    { name: 'Skullcat', link: '//jxnblk.com/skullcat', description: 'A Avatar fur Mrmrs' },
    { name: 'Gifolio', link: '//jxnblk.com/gifolio', description: 'GIF Portfolio' },
    { name: 'Papercraft', link: '//jxnblk.com/papercraft', description: 'Hand-Coded SVG Lettering' },
    { name: 'Stepkit', link: '//jxnblk.com/stepkit', description: 'Web Audio Step Sequencer' },
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

module.exports = data;


