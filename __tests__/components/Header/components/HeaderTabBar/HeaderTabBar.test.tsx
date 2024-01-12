import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';

import { HeaderTabBar } from '@/components/Header/components/HeaderTabBar/HeaderTabBar';

const mockPages = [
  {
    id: 'mockHome',
    url: 'http://localhost:3000/en',
  },
  {
    id: 'mockAbout',
    url: 'http://localhost:3000/en/about',
  },
];
const mockDictionary = {
  about: "About",
  contact: "Contact",
  home: "Home",
  projects: "Projects",
  resume: "Resume"
}
const mockDefaultPage = 'mockHome';
const props = {
  pages: mockPages,
  defaultPage: mockDefaultPage,
  dictionary: mockDictionary
}
const propsFail= {
  pages: [],
  defaultPage: mockDefaultPage,
  dictionary: mockDictionary
}
describe('Component: HeaderTabBar.', () => {
  it('Should render all Tab Bars based on props.', () => {
    render(<HeaderTabBar {...props}/>);
    expect(screen.getByText('mockHome')).toBeInTheDocument();
    expect(screen.getByText('mockAbout')).toBeInTheDocument();
  });

  it('Should render 2 Tab Bars if mockPages are 2.', () => {
    render(<HeaderTabBar {...props}/>);
    const tabs = screen.getAllByRole('tab');
    expect(tabs).toHaveLength(2);
  });

  it('Should render no Tab Bars if mockPages is missing from props.', () => {
    render(<HeaderTabBar {...propsFail}/>);
    const tabs = screen.queryAllByRole('tab');
    expect(tabs).toHaveLength(0);
  });

});
