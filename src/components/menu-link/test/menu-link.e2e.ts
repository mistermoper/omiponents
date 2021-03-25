import { newE2EPage } from '@stencil/core/testing';

describe('menu-link', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<menu-link></menu-link>');

    const element = await page.find('menu-link');
    expect(element).toHaveClass('hydrated');
  });
});
