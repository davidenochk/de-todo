import { DeTodoPage } from './app.po';

describe('de-todo App', () => {
  let page: DeTodoPage;

  beforeEach(() => {
    page = new DeTodoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
