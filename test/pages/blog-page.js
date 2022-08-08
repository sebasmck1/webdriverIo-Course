class BlogPage {
  open() {
    return browser.url('/');
  }

  get listRecentPosts() {
    return $('#recent-posts-3 url li');
  }
}

export default new BlogPage();
