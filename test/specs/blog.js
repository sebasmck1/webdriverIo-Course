import BlogPage from '../pages/blog-page';

describe('Blog', () => {
  it('Should validate the number of blog posts is not empty on page load', async () => {
    await browser.url('/blog');

    const recentPostsList = await BlogPage.recentPostsList;

    for (const item of recentPostsList) {
      const text = await item.getText();
      await expect(text.length).toBeGreaterThan(10);
    }

    // Assert array length
    await expect(recentPostsList).toHaveLength(5);
  });
});
