import { expect, test } from '@playwright/test';

const viewportWidths = [390, 820, 1280];

async function expectAppropriateVariant(image) {
  await expect(image).toBeVisible();
  await expect
    .poll(() => image.evaluate(element => element.complete))
    .toBe(true);

  const metrics = await image.evaluate(element => ({
    clientWidth: element.clientWidth,
    currentSrc: element.currentSrc,
  }));
  const requestedWidth = Number(
    new URL(metrics.currentSrc).searchParams.get('w')
  );

  expect(requestedWidth).toBeGreaterThanOrEqual(metrics.clientWidth);
  expect(requestedWidth).toBeLessThanOrEqual(metrics.clientWidth * 1.75);
}

for (const viewportWidth of viewportWidths) {
  test(`selects appropriately sized images at ${viewportWidth}px`, async ({
    page,
  }) => {
    await page.setViewportSize({ height: 900, width: viewportWidth });
    await page.goto('/');

    await expectAppropriateVariant(
      page.getByAltText('The skyline of Charlotte, NC on a sunny day.')
    );
    await expectAppropriateVariant(
      page.getByAltText('Blaseball Reference').first()
    );

    await page.goto('/work/');
    await expectAppropriateVariant(
      page.getByAltText('Blaseball Reference').first()
    );
  });
}
