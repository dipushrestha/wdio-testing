import { ChainablePromiseElement } from 'webdriverio';
import Page from './page';

class LandingPage extends Page {
  public get pickupBtn(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $('h3=Pickup');
  }

  public get deliveryBtn(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $('h3=Delivery');
  }

  public get dineInBtn(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $('h3=Dine-in');
  }

  public get airportsSection(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $('h3=Our Airports').parentElement();
  }

  public open(): Promise<string> {
    return super.open('');
  }

  public pickup() {
    this.pickupBtn.click();
  }

  public delivery() {
    this.deliveryBtn.click();
  }

  public dineIn() {
    this.dineInBtn.click();
  }
}

export default new LandingPage();
