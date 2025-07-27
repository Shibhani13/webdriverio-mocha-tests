module.exports = {
  async hideAds() {
    await browser.execute(() => {
      const ads = document.querySelectorAll('.ad-banner, .popup, .promo');
      ads.forEach(ad => ad.style.display = 'none');
    });
    await browser.execute(() => {
      document.querySelectorAll('iframe[id^="google_ads_iframe"]').forEach(ad => {
        ad.style.display = 'none'; // Or use `visibility: hidden`
      });
    });
  }
};