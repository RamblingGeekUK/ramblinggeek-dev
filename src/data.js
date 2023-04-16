import { getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
  ],
};
  
export const footerData = {
  links: [
    {
      title: 'Bit\'s n\' bobs',
      links: [
        { text: 'What I use', href: 'whatiuse' },
        { text: 'About', href: '#' },
      ],
    },
    {
      title: 'Links',
      links: [
        { text: 'Michael Jolley', href: 'https://baldbeardedbuilder.com/' },
        { text: 'Chris Jones', href: 'https://cmjchrisjones.dev/' },
        { text: 'Matthew Peck-Deloughry', href: 'https://deloughry.co.uk/' },
        { text: 'James', href: 'https://phrak.dev/' },
      ],
    },
      ],
  // secondaryLinks: [
  //   { text: 'Terms', href: getPermalink('/terms') },
  //   { text: 'Privacy Policy', href: getPermalink('/privacy') },
  //],
  socialLinks: [
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/ramblinggeekuk' },   
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: 'https://www.youtube.com/@ramblinggeekuk' },
    { ariaLabel: 'Twitch', icon: 'tabler:brand-twitch', href: 'https://www.twitch.tv/ramblinggeek' },
    { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: 'https://twitter.com/rgeekuk' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/ramblinggeek/' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `Love your family, work super hard, live your passion.`,
};
