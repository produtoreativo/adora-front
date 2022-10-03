import launcher from 'k6/x/browser';

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  const browser = launcher.launch('chromium', {
    headless: true,
  });
  const context = browser.newContext();
  const page = context.newPage();

  // eslint-disable-next-line no-undef
  page.goto(__ENV.BASE_URL, {
    waitUntil: 'load',
  });

  page.close();
  browser.close();
}
