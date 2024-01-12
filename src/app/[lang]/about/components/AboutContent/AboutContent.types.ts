import { Dictionary, LANGUAGE } from "@/lib/i18n";
import { FC } from "react";

export interface AboutContentProps {
    dictionary: Dictionary['about']; 
    lang: LANGUAGE
  }
  export type AboutContentComponent = FC<AboutContentProps>;