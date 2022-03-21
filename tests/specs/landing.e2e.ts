import Jimp from 'jimp';
import jsQR from 'jsqr';
import LandingPage from '../pages/landing.page';
import FlowPage from '../pages/flow.page';

describe('OTG Flo landing page', () => {
  it('should redirect to Landing Page from QR code', async () => {
    const image = await Jimp.read('assets/otg_qr.png');
    const code = jsQR(
      new Uint8ClampedArray(image.bitmap.data.buffer),
      image.bitmap.width,
      image.bitmap.height
    );

    await browser.url(code?.data || '');
    await expect(browser).toHaveUrlContaining('flo.io');
  });

  it('should see Pickup, Delivery, Dine-in', async () => {
    await LandingPage.open();
    await expect(LandingPage.pickupBtn).toBeExisting();
    await expect(LandingPage.deliveryBtn).toBeExisting();
    await expect(LandingPage.dineInBtn).toBeExisting();
  });

  it('should see list of airports', async () => {
    await expect(LandingPage.airportsSection).toHaveChildren({
      gte: 2,
    });
  });

  it('should redirect to pickup page on Pickup click', async () => {
    LandingPage.pickup();
    expect(browser).toHaveUrl(`${process.env.BASE_URL}/flowType`);
    await expect(FlowPage.pickupBtn).toHaveAttr('aria-selected', 'true');
  });

  it('should see pickup service coming soon', async () => {
    const comingSoonElement = $('p*=Coming Soon');
    await expect(comingSoonElement).toHaveText('Pickup Service Coming Soon!');
  });

  it('should redirect to Delivery page on Delivery click', async () => {
    await LandingPage.open();
    LandingPage.delivery();
    expect(browser).toHaveUrl(`${process.env.BASE_URL}/flowType`);
    await expect(FlowPage.deliveryBtn).toHaveAttr('aria-selected', 'true');
    await FlowPage.foodCodeInput.isDisplayed();
    await FlowPage.foodCodeInput.isEnabled();
  });

  it('should redirect to Dine-in page on Dine-in click', async () => {
    await LandingPage.open();
    LandingPage.dineIn();
    expect(browser).toHaveUrl(`${process.env.BASE_URL}/flowType`);
    await expect(FlowPage.dineInBtn).toHaveAttr('aria-selected', 'true');
    await FlowPage.foodCodeInput.isDisplayed();
    await FlowPage.foodCodeInput.isEnabled();
  });
});
