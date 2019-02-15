const randomString = (length) => {
  const x = 36 ** (length + 1);
  const y = 36 ** length;
  return Math.round(x - (Math.random() * y)).toString(36).slice(1);
};

const pages = [
  {
    route: '/',
    title: 'Sushil Pandey',
    heading: 'ABOUT THIS SITE',
  },
  {
    route: '/about',
    title: 'About | Sushil Pandey',
    heading: 'ABOUT ME',
  },
  {
    route: '/projects',
    title: 'Projects | Sushil Pandey',
    heading: 'PROJECTS',
  },
  {
    route: '/stats',
    title: 'Stats | Sushil Pandey',
    heading: 'STATS',
  },
  {
    route: '/contact',
    title: 'Contact | Sushil Pandey',
    heading: 'CONTACT',
  },
];

export { pages, randomString };
