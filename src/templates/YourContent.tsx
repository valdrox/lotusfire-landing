'use client'; // Add this at the top of the file

import { CenteredHero } from '@/features/landing/CenteredHero';
import { Section } from '@/features/landing/Section';

export const YourContent = () => {
  return (
    <Section className="py-36">
      <CenteredHero
        banner={null}
        buttons={null}
        title="Just go about your day"
        description="Use Facebook, Instagram, play video games on your pc or console, read books, watch movies, listen to music, etc. Lotusfire uses AI to find opportunities for you to learn vocabulary you care about."
      />
    </Section>
  );
};
