import { expect, test } from '@playwright/test';
import { instant } from '@next/playwright';

test('renders the home page instantly on an initial visit', async ({
  baseURL,
  page,
}) => {
  await instant(
    page,
    async () => {
      await page.goto('/');
      await expect(
        page.getByRole('heading', { name: 'software engineer' })
      ).toBeVisible();
    },
    { baseURL }
  );
});

test('navigates instantly from Home to Work', async ({ page }) => {
  await page.goto('/');

  await instant(page, async () => {
    await page.getByRole('link', { name: 'View all projects.' }).click();
    await page.waitForURL(url => url.pathname === '/work/');
    await expect(
      page.getByRole('heading', { name: 'Work', exact: true })
    ).toBeVisible();
  });
});

test('shows a project shell instantly before detail content streams in', async ({
  page,
}) => {
  await page.goto('/work/');
  const projectLink = page.locator('a[href="/work/wright-weather/"]');

  await instant(page, async () => {
    await projectLink.click();
    await page.waitForURL(url => url.pathname === '/work/wright-weather/');
    await expect(page.getByTestId('work-detail-loading')).toBeVisible();
  });

  await expect(
    page.getByRole('heading', { name: 'Wright Weather', exact: true })
  ).toBeVisible();
});

test('renders a generated project instantly on an initial visit', async ({
  baseURL,
  page,
}) => {
  await instant(
    page,
    async () => {
      await page.goto('/work/blaseball-reference/');
      await expect(
        page.getByRole('heading', {
          name: 'Blaseball Reference',
          exact: true,
        })
      ).toBeVisible();
    },
    { baseURL }
  );
});

test('preserves the not-found page for an unknown project', async ({
  page,
}) => {
  await page.goto('/work/unknown-project/');
  await expect(
    page.getByRole('heading', { name: '404 Not Found', exact: true })
  ).toBeVisible();
});
