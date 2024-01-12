import { FC } from 'react';

import { Dictionary } from '@/lib/i18n';

type PopupAlertProps = {
  isOpen: boolean;
  dictionary: Dictionary['contact'];
  onClose: () => void;
};

export type PopupAlertComponent = FC<PopupAlertProps>;
