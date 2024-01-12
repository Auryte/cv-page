import { ModalProps as MUIModalProps } from '@mui/material/Modal';
import { FC, PropsWithChildren } from 'react';

export interface ModalProps {
  isOpen: boolean;
}

export type ModalComponent = FC<PropsWithChildren<ModalProps & Omit<MUIModalProps, 'open'>>>;
