import { useTranslations } from 'next-intl';

import { PricingCard } from '@/features/billing/PricingCard';
import { PricingFeature } from '@/features/billing/PricingFeature';
import { PricingPlanList } from '@/utils/AppConfig';

export const PricingInformation = (props: {
  buttonList: Record<string, React.ReactNode>;
}) => {
  const t = useTranslations('PricingPlan');

  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-3">
      {Object.values(PricingPlanList).map(plan => (
        <PricingCard
          key={plan.id}
          planId={plan.id}
          price={plan.price}
          interval={plan.interval}
          button={props.buttonList[plan.id]}
        >
          <PricingFeature>
            無限内容 - Unlimited content
          </PricingFeature>
          <PricingFeature>
            無限詞匯 - Unlimited vocabulary
          </PricingFeature>
          {(plan.price > 0
            ? (
                <PricingFeature>
                  無廣告 - without ads
                </PricingFeature>
              )
            : (
                <PricingFeature>有廣告 - ad-supported</PricingFeature>
              ))}

          {(plan.price > 0
            && (
              <PricingFeature>
                {t('feature_email_support')}
              </PricingFeature>
            )
          )}
        </PricingCard>
      ))}
    </div>
  );
};
