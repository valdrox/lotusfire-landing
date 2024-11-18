import { useTranslations } from 'next-intl';

import { Background } from '@/components/Background';
import { FeatureCard } from '@/features/landing/FeatureCard';
import { Section } from '@/features/landing/Section';

export const Features = () => {
  const t = useTranslations('Features');

  return (
    <Background>
      <Section
        subtitle={t('section_subtitle')}
        title={t('section_title')}
        description={t('section_description')}
      >
        <div className="grid grid-cols-1 gap-x-3 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            icon={(
              <img src="/assets/images/don't be afraid of english.png" alt="feature1" />
            )}
            title={t('feature1_title')}
          >
            {t('feature1_description')}
          </FeatureCard>

          <FeatureCard
            icon={(
              <img src="/assets/images/keep doing what you're doing.png" alt="feature2" />
            )}
            title={t('feature2_title')}
          >
            {t('feature2_description')}
          </FeatureCard>

          <FeatureCard
            icon={(
              <img src="/assets/images/tailored vocab lists.png" alt="feature3" />
            )}
            title={t('feature3_title')}
          >
            {t('feature3_description')}
          </FeatureCard>

          <FeatureCard
            icon={(
              <img src="/assets/images/dedicated vocab reviewer.png" alt="feature4" />
            )}
            title={t('feature4_title')}
          >
            {t('feature4_description')}
          </FeatureCard>

        </div>
      </Section>
    </Background>
  );
};
