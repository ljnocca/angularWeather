import { WeatherAngularPage } from './app.po';

describe('weather-angular App', () => {
  let page: WeatherAngularPage;

  beforeEach(() => {
    page = new WeatherAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
