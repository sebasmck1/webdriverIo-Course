import NavComponent from './components/nav-comp';

class HomePage {
  open() {
    return browser.url('/');
  }

  get NavComponent() {
    return NavComponent;
  }
}
export default new HomePage();
