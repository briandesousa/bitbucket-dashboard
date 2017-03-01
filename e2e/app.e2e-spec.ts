import { BitbucketDashboardAppPage } from './app.po';

describe('bitbucket-dashboard-app App', function() {
  let page: BitbucketDashboardAppPage;

  beforeEach(() => {
    page = new BitbucketDashboardAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
