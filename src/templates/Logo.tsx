import { AppConfig } from '@/utils/AppConfig';

export const Logo = (props: {
  isTextHidden?: boolean;
}) => (
  <div className="flex items-center text-xl font-semibold">
    <img src="/assets/images/lotusfire-reverse.png" alt="logo" className="size-10" />
    {!props.isTextHidden && AppConfig.name}
  </div>
);
