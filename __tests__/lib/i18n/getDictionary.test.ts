import "@testing-library/jest-dom";
import { LANGUAGE, getDictionary } from "../../../src/lib/i18n";

describe("getDictionary", () => {
  it("Should return the dictionary for the selected language", async () => {
    const expectedLanguage = LANGUAGE.en;

    jest.mock("../../../src/lib/i18n", () => ({
      i18nConfig: { defaultLanguage: "en" },
      isSupportedLanguage: jest.fn().mockReturnValue(true),
      LANGUAGE: { en: "en", lt: "lt" },
    }));

    jest.mock("../../../src/dictionaries/en/en.json", () => expectedLanguage);

    const dictionary = await getDictionary(LANGUAGE.en);
    expect(dictionary).toEqual(expectedLanguage);
  });

  it('Should return the default dictionary if selected language is not supported', async() => {
    const defaultLanguage = LANGUAGE.en;
    const expectedLanguage = LANGUAGE.en;

    jest.mock("../../../src/lib/i18n", () => ({
        i18nConfig: { defaultLanguage: 'en' },
        isSupportedLanguage: jest.fn().mockReturnValue(false),
        LANGUAGE: { en: "en", lt: "lt"  },
      }));
  
      jest.mock("../../../src/dictionaries/en/en.json", () => defaultLanguage);
  
      const dictionary = await getDictionary();
      expect(dictionary).toEqual(expectedLanguage);
  })
});
