import { removeHyphens } from './utils';
import { fontObserver } from './fonts-manager';

class App {
  init () {
    console.log(removeHyphens('H-e-l-l-o- -w-o-r-l-d-!'));
    fontObserver();
  }
}

export default App;
