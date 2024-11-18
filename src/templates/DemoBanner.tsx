import Link from 'next/link';

import { StickyBanner } from '@/features/landing/StickyBanner';

export const DemoBanner = () => (
  <StickyBanner>
    Lotusfire has been sunset -
    {' '}
    <Link href="/why-was-lotusfire-sunset">Read more</Link>
  </StickyBanner>
);
