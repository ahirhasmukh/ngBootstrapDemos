import { NgBootstrapPage } from './app.po';

describe('ng-bootstrap App', () => {
  let page: NgBootstrapPage;

  beforeEach(() => {
    page = new NgBootstrapPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
