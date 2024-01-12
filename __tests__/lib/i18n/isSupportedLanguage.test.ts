import { isSupportedLanguage } from "../../../src/lib/i18n/isSupportedLanguage";

describe("isSupportedLanguage", () => {
  it("Should return true for supported languages", () => {
    const supportedLanguage = "en";
    const result = isSupportedLanguage(supportedLanguage);
    expect(result).toBe(true);
  });

  it("Should return false for languages that are not supported", () => {
    const unsupportedLanguage = "pl";
    const result = isSupportedLanguage(unsupportedLanguage);
    expect(result).toBe(false);
  });
});
