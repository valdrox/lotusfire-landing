'use client'; // Add this at the top of the file

import { InstagramLogoIcon } from '@radix-ui/react-icons';
import { useTranslations } from 'next-intl';
import { AppStoreButton, ButtonsContainer, GooglePlayButton } from 'react-mobile-app-button';

import { badgeVariants } from '@/components/ui/badgeVariants';
import { CenteredHero } from '@/features/landing/CenteredHero';
import { Section } from '@/features/landing/Section';

export const Hero = () => {
  const t = useTranslations('Hero');

  const APKUrl = '/why-was-lotusfire-sunset';
  const IOSUrl = '/why-was-lotusfire-sunset';

  return (
    <Section className="py-36">
      <CenteredHero
        banner={(
          <a
            className={badgeVariants()}
            href="https://www.instagram.com/lotusfire_app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramLogoIcon className="mr-1 size-5" />
            {' '}
            {t('follow_twitter')}
          </a>
        )}
        title={t.rich('title', {
          important: chunks => (
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              {chunks}
            </span>
          ),
        })}
        description={t('description')}
        buttons={(
          <ButtonsContainer>

            <GooglePlayButton
              url={APKUrl}
              theme="dark"
              className="tp-button-play-style"
            />

            <AppStoreButton
              url={IOSUrl}
              theme="dark"
              className="tp-button-apple-style"
            />
          </ButtonsContainer>

        )}
      />
    </Section>
  );
};
