import { $ } from '@wdio/globals';
import TheInternetPage from './theInternet.page.js';

class AddRemoveElementsPage extends TheInternetPage {
    // selectors
    get btnAddElement() {
        return $('button[onclick="addElement()"]');
    }

    get btnRemoveElement() {
        return $('button[onclick="deleteElement()"]');
    }

    // automation methods
    async clickAddElement() {
        await this.btnAddElement.click();
    }

    async clickDelete() {
        await this.btnRemoveElement.click();
    }

    // overwrites
    open() {
        return super.open('add_remove_elements');
    }
}

export default new AddRemoveElementsPage();