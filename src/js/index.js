export default System.import('jquery').then(() => Promise.all([
  System.import('./tracking'),
  System.import('skel-framework'),
  System.import('./jquery.scrollex.min'),
  System.import('./jquery.scrolly.min'),
  System.import('./util'),
  System.import('./main')
]));
