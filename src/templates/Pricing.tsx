import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { buttonVariants } from '@/components/ui/buttonVariants';
import { PricingCard } from '@/features/billing/PricingCard';
import { PricingFeature } from '@/features/billing/PricingFeature';
import { PricingInformation } from '@/features/billing/PricingInformation';
import { Section } from '@/features/landing/Section';
import { PLAN_ID } from '@/utils/AppConfig';

export const Pricing = () => {
  const t = useTranslations('Pricing');

  return (
    <>
      <Section
        subtitle={t('section_subtitle')}
        title={t('section_title')}
        description={t('section_description')}

      >
        <PricingInformation
          buttonList={{
            [PLAN_ID.FREE]: (
              <Link
                className={buttonVariants({
                  size: 'sm',
                  className: 'mt-5 w-full',
                })}
                href="/why-was-lotusfire-sunset"
              >
                {t('button_text')}
              </Link>
            ),
            [PLAN_ID.PREMIUM]: (
              <Link
                className={buttonVariants({
                  size: 'sm',
                  className: 'mt-5 w-full',
                })}
                href="/why-was-lotusfire-sunset"
              >
                {t('button_text')}
              </Link>
            ),
            [PLAN_ID.ENTERPRISE]: (
              <Link
                className={buttonVariants({
                  size: 'sm',
                  className: 'mt-5 w-full',
                })}
                href="/why-was-lotusfire-sunset"
              >
                {t('button_text')}
              </Link>
            ),
          }}
        />
      </Section>
      <Section
        title="Purchase the HDMI dongle"
        description="Expand your learning environment to Switch, Apple TV, PS5, Xbox and more!"
      >
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2">
          <div className="flex justify-center md:col-span-1">
            <div className="p-10">
              <img src="/assets/images/physical product.jpg" alt="physical product" className="size-full object-cover" />
            </div>
          </div>
          <div className="flex justify-center md:col-span-1">

            <PricingCard
              key="physical"
              planId="physical"
              price={4000}
              interval="one_time"
              button={(
                <Link
                  className={buttonVariants({
                    size: 'sm',
                    className: 'mt-5 w-full',
                  })}
                  href="/why-was-lotusfire-sunset"
                >
                  {t('button_text')}
                </Link>
              )}
            >
              <PricingFeature>
                HDMI-based passthrough. 10ms latency.
              </PricingFeature>
              <PricingFeature>
                Mobile app OCR and word collection
              </PricingFeature>
              <PricingFeature>
                無限内容 - Unlimited content
              </PricingFeature>
              <PricingFeature>
                無限詞匯 - Unlimited vocabulary
              </PricingFeature>
            </PricingCard>
          </div>
        </div>
      </Section>

    </>
  );
};
