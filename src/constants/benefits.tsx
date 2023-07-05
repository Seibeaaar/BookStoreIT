import { ReactComponent as ShippingIcon } from 'src/assets/icons/Shipping.svg';
import { ReactComponent as LightningIcon } from 'src/assets/icons/Lightning.svg';
import { ReactComponent as SecureIcon } from 'src/assets/icons/Secure.svg';

export const BENEFITS = [
  {
    icon: <SecureIcon width={36} height={36} />,
    label: 'Secure Payments',
    info: 'Your transactions and checkout are all safe',
  },
  {
    icon: <ShippingIcon width={36} height={36} />,
    label: 'Free Shipping',
    info: 'No worries about the delivery and fees - it is on us',
  },
  {
    icon: <LightningIcon width={36} height={36} />,
    label: '100% Satisfaction',
    info: 'We guarantee a service quality and your best experience',
  },
];
