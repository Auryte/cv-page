import { Dictionary } from '@/lib/i18n';
import { FC } from 'react';

interface PopupAlertProps {
  isOpen: boolean;
  dictionary: Dictionary['contact'];
  onClose: () => void;
}

export type PopupAlertComponent = FC<PopupAlertProps>;
