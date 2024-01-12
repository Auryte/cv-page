export const setLocaleCookie = (locale: string) => {
  if (typeof window !== 'undefined') {
    document.cookie = `NEXT_LOCALE=${locale}; max-age=31536000; path=/`;
  }
};

export const setThemeCookie = (theme: string) => {
  if (typeof window !== 'undefined') {
    document.cookie = `NEXT_THEME=${theme}; max-age=31536000; path=/`;
  }
};

export const getCookie = (name: string) => {
  const nameLenghtPlus = name.length + 1;

  return (
    document.cookie
      .split(';')
      .map((c) => c.trim())
      .filter((cookie) => cookie.substring(0, nameLenghtPlus) === `${name}=`)
      .map((cookie) => decodeURIComponent(cookie.substring(nameLenghtPlus)))[0] || null
  );
};
