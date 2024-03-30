import { Inter, Noto_Sans_JP } from 'next/font/google';
 
export const inter = Inter({ subsets: ['latin'] });
export const notoSansJP = Noto_Sans_JP({
    subsets: ['latin'],
    variable: '--font-noto-sans-jp',
    fallback: ['system-ui', 'arial'], // local font fallback なので不要
  })