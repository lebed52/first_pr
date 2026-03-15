import { Page } from "@playwright/test";

export class MainPage {
protected page: Page | undefined;   

constructor(page: Page) {
    this.page = page;
}

}