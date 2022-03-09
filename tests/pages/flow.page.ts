import { ChainablePromiseElement } from 'webdriverio';
import Page from './page';

class FlowPage extends Page {
  public get pickupBtn(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $('button=Pickup');
  }

  public get deliveryBtn(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $('button=Delivery');
  }

  public get dineInBtn(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $('button=Dine-in');
  }

  public get foodCodeInput(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $('span*=flo.io').nextElement().$('input');
  }

  public open(): Promise<string> {
    return super.open('flowType');
  }
}

export default new FlowPage();
