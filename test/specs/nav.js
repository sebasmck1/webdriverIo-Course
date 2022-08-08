import HomePage from '../pages/home-page';

describe('Navigation menu', () => {
  it('Should get the texts of the menus', async () => {
    HomePage.open();

    const expectedLinks = [
      'Home',
      'About',
      'Shop',
      'Blog',
      'Contact',
      'My account',
    ];
    const actualLinks = [];

    // const navLinks = await $('#primary-menu').$$('li[id*=menu]');

    // Abreviated form of the above
    const navLinks = await HomePage.NavComponent.linksNavMenu;

    for (const link of navLinks) {
      actualLinks.push(await link.getText());
    }

    await expect(expectedLinks).toEqual(actualLinks);
  });
});
