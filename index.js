const { default: axios } = require('axios');
const cheerio = require('cheerio');
const scraperSetup = require('./settings');

const getPistolPrimerData = () => {
  try {
    if (scraperSetup.length >= 0) {
      let data = [];
      scraperSetup.forEach(async (item) => {
        const response = await axios.get(item.pistolPrimerUrl);
        const $ = cheerio.load(response.data);

        const primerProduct = $(item.blockSelector);

        primerProduct.each(function () {
          const title = $(this).find(item.titleSelector).text();
          const status = $(this).find(item.statusSelector).text();
          const lowPrice = $(this).find(item.lowPriceSelector).text();
          const highPrice = $(this).find(item.highPriceSelector).text();
          const brand = $(this).find(item.brandSelector).text();

          data.push({
            title,
            status,
            price: `${lowPrice} - ${highPrice}`,
            brand,
            url: item.baseUrl,
          });
        });
        console.log(data);
      });
    }
  } catch (error) {
    console.error('something went wrong');
  }
};

getPistolPrimerData();
