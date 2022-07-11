const scraperSetup = [
  {
    baseUrl:
      'https://www.sinclairintl.com/reloading-components/primers/index.htm',
    pistolPrimerUrl:
      'https://www.sinclairintl.com/reloading-components/primers/pistol-primers/index.htm',
    riflePrimerUrl:
      'https://www.sinclairintl.com/reloading-components/primers/pistol-primers/index.htm',
    blockSelector: '.listing',
    titleSelector: '.group1 a span',
    lowPriceSelector: '.group2 .prc span[itemprop]:nth-child(1)',
    highPriceSelector: '.group2 .prc span[itemprop]:nth-child(2)',
    statusSelector: '.group2 .status',
    brandSelector: 'span[itemprop=brand]',
    statusMustMatch: '(In Stock)',
    productPageUrlSelector: '.group1 a[href]',
  },
];

module.exports = scraperSetup;
