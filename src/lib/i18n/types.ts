export type Dictionary = {
  'about': {
    download: string;
    introduction: string;
    linkButton: string;
    mainFeatures: {
      chapter1: string;
    };
    quote1: string;
    quote2: string;
    quote3: string;
    quote4: string;
    quote5: string;
  };
  'contact': {
    emailErrorMessage: string;
    emailErrorMessageMin: string;
    emailInputLabel: string;
    error: string;
    messageErrorMessage: string;
    messagetInputLabel: string;
    nameErrorMessageAlph: string;
    nameErrorMessageMax: string;
    nameErrorMessageMin: string;
    nameInputLabel: string;
    popupConfirm: string;
    popupMsg: string;
    popupTitle: string;
    subjectErrorMessage: string;
    subjectInputLabel: string;
    submit: string;
    summaryArticle: string;
    summaryTitle: string;
  };
  'errorPage': {
    error: string;
    goHome: string;
    retry: string;
    smthWrongMsg: string;
  };
  'headerMenu': {
    about: string;
    contact: string;
    home: string;
    projects: string;
    resume: string;
  };
  'headings': {
    about: string;
    resume: string;
    projects: string;
    contacts: string;
    developer: string;
  };
  'home': {
    heading: string;
    headingThree: string;
    headingTwo: string;
  };
  'not-found': {
    heading: string;
  };
  'projects': {
    interior: {
      linkButton: string;
      mainFeatures: {
        chapter1: string;
        chapter2: string;
        chapter3: string;
        chapter4: string;
      };
      summaryArticle: string;
      summaryTitle: string;
    };
    insurance: {
      linkButton: string;
      mainFeatures: {
        chapter1: string;
        chapter2: string;
        chapter3: string;
        chapter4: string;
      };
      summaryArticle: string;
      summaryTitle: string;
    };
    starwars: {
      linkButton: string;
      mainFeatures: {
        chapter1: string;
        chapter2: string;
        chapter3: string;
      };
      summaryArticle: string;
      summaryTitle: string;
    };
    weather: {
      linkButton: string;
      mainFeatures: {
        chapter1: string;
        chapter2: string;
        chapter3: string;
        chapter4: string;
        chapter5: string;
        chapter6: string;
      };
      summaryArticle: string;
      summaryTitle: string;
    };
  };
  'resume': {
    architect: string;
    architectDescription: string;
    architectTools: string;
    codeAcademy: string;
    education: string;
    engineer: string;
    experience: string;
    faculty: string;
    foodProject: {
      title: string;
      introduction: string;
      chapter1: string;
      chapter2: string;
      chapter3: string;
      chapter4: string;
    };
    forexProject: {
      title: string;
      introduction: string;
      chapter1: string;
      chapter2: string;
      chapter3: string;
      chapter4: string;
      chapter5: string;
      chapter6: string;
      chapter7: string;
      chapter8: string;
    };
    insuaranceProject: {
      title: string;
      introduction: string;
      chapter1: string;
      chapter2: string;
      chapter3: string;
      chapter4: string;
      chapter5: string;
    };
    kaunas: string;
    ktu: string;
    learnMore: string;
    program: string;
    skills: string;
    socialProject: {
      title: string;
      introduction: string;
      chapter1: string;
      chapter2: string;
      chapter3: string;
      chapter4: string;
      chapter5: string;
    };
    summaryArticle: string;
    summaryTitle: string;
    techSkills: string;
    tools: string;
    vilnius: string;
    weatherProject: {
      title: string;
      introduction: string;
      chapter1: string;
      chapter2: string;
      chapter3: string;
      chapter4: string;
      chapter5: string;
    };
  };
};

export type DictionaryModule = {
  default: Dictionary;
};
