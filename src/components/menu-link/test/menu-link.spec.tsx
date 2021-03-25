import { newSpecPage } from '@stencil/core/testing';
import { MenuLink } from '../menu-link';

describe('menu-link', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MenuLink],
      html: `<menu-link></menu-link>`,
    });
    expect(page.root).toEqualHtml(`
      <menu-link>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </menu-link>
    `);
  });
});
