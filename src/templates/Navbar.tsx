import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { buttonVariants } from '@/components/ui/buttonVariants';
import { CenteredMenu } from '@/features/landing/CenteredMenu';
import { Section } from '@/features/landing/Section';

import { Logo } from './Logo';

export const Navbar = () => {
  const t = useTranslations('Navbar');

  return (
    <Section className="px-3 py-6">
      <CenteredMenu
        logo={<Logo />}
        rightMenu={(
          <>

            <li className="ml-1 mr-2.5" data-fade>
              <Link href="/why-was-lotusfire-sunset">{t('sign_in')}</Link>
            </li>
            <li>
              <Link className={buttonVariants()} href="/why-was-lotusfire-sunset">
                {t('sign_up')}
              </Link>
            </li>
          </>
        )}
      >
        <li>
          <Link href="/why-was-lotusfire-sunset">{t('product')}</Link>
        </li>

        <li>
          <Link href="/why-was-lotusfire-sunset">{t('blog')}</Link>
        </li>

        <li>
          <Link href="/why-was-lotusfire-sunset">{t('community')}</Link>
        </li>

        <li>
          <Link href="/why-was-lotusfire-sunset">{t('company')}</Link>
        </li>
      </CenteredMenu>
    </Section>
  );
};
