/* eslint-disable react-dom/no-unsafe-target-blank */
import Image from 'next/image';

import { LogoCloud } from '@/features/landing/LogoCloud';

export const SponsorLogos = () => (
  <LogoCloud text="如所見於 - As seen in">
    <a
      href="https://www.kocpc.com.tw/archives/340593"
      target="_blank"
      rel="noopener"
    >
      <Image
        src="/assets/images/reference-1.png"
        alt="Kocpc logo"
        width="256"
        height="74"
      />
    </a>

    <a
      href="https://agirls.aotter.net/post/57899"
      target="_blank"
      rel="noopener"
    >
      <Image
        src="/assets/images/reference-2.png"
        alt="Agirls logo"
        width="256"
        height="74"
      />
    </a>

    <a
      href="https://briian.com/70025/"
      target="_blank"
      rel="noopener"
    >
      <Image
        src="/assets/images/reference-3.png"
        alt="Briian logo"
        width="256"
        height="74"
      />
    </a>

    <a
      href="https://ez3c.tw/8663"
      target="_blank"
      rel="noopener"
    >
      <Image
        src="/assets/images/reference-4.png"
        alt="Ez3c logo"
        width="256"
        height="74"
      />
    </a>
  </LogoCloud>
);
