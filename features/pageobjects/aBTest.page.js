import { $ } from '@wdio/globals'
import TheInternetPage from './theInternet.page';

class ABTest extends TheInternetPage {
    get hdrDescription() {
        return $('h3*=A/B Test');
    }
}

export default new ABTest();