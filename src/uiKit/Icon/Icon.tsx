import { ColorType, FontSizeType } from '@/components/Icon/Icon.types';
import { ArrowBackIcon } from '@/components/Icon/icons/ArrowBack';
import { ArrowDownIcon } from '@/components/Icon/icons/ArrowDown';
import { ArrowDropDownIcon } from '@/components/Icon/icons/ArrowDropDown';
import { ArrowDropUpIcon } from '@/components/Icon/icons/ArrowDropUp';
import { ArrowForwardIcon } from '@/components/Icon/icons/ArrowForward';
import { CalendarIcon } from '@/components/Icon/icons/Calendar';
import { CloseIcon } from '@/components/Icon/icons/Close';
import { CommentIcon } from '@/components/Icon/icons/Comment';
import { DarkThemeIcon } from '@/components/Icon/icons/DarkTheme';
import { DateRangeIcon } from '@/components/Icon/icons/DateRange';
import { ExpandLessIcon } from '@/components/Icon/icons/ExpandLess';
import { ExpandMoreIcon } from '@/components/Icon/icons/ExpandMore';
import { GithubIcon } from '@/components/Icon/icons/Github';
import { LightThemeIcon } from '@/components/Icon/icons/LightTheme';
import { LinkedinIcon } from '@/components/Icon/icons/Linkedin';
import { LogoIcon } from '@/components/Icon/icons/Logo';
import { PhoneIcon } from '@/components/Icon/icons/Phone';
import { PlaceIcon } from '@/components/Icon/icons/Place';

export const IconsMap = {
  arrowBack: ArrowBackIcon,
  arrowDown: ArrowDownIcon,
  arrowDropDown: ArrowDropDownIcon,
  arrowDropUp: ArrowDropUpIcon,
  arrowForward: ArrowForwardIcon,
  calendar: CalendarIcon,
  close: CloseIcon,
  comment: CommentIcon,
  darkTheme: DarkThemeIcon,
  dateRange: DateRangeIcon,
  expandLess: ExpandLessIcon,
  expandMore: ExpandMoreIcon,
  github: GithubIcon,
  lightTheme: LightThemeIcon,
  linkedin: LinkedinIcon,
  logo: LogoIcon,
  phone: PhoneIcon,
  place: PlaceIcon,
} as const;

export type IconType = keyof typeof IconsMap;

interface IconProps {
  color?: ColorType;
  fontSize?: FontSizeType;
  name: IconType;
  onClick?: () => void;
  sx?: Record<string, string>;
}

export function Icon(props: IconProps) {
  const { color = 'inherit', fontSize = 'inherit', name, onClick, sx } = props;

  const IconComponent = IconsMap[name];

  return (
    <IconComponent
      color={color}
      fontSize={fontSize}
      onClick={onClick}
      sx={sx}
    />
  );
}
