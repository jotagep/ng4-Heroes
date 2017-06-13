import { Ng4HeroesPage } from './app.po';

describe('ng4-heroes App', () => {
  let page: Ng4HeroesPage;

  beforeEach(() => {
    page = new Ng4HeroesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
