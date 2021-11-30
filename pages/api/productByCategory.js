import axios from 'axios';

export default async (req, res) => {
  const { id } = req.query;
  const productLimit = req.query.limit || false;
  let allProducts = [];
  let currentResult = [];
  let page = 1;

  try {
    do {
      const resp = await axios({
        method: 'GET',
        url: `https://steelvirtuegroup.salesbinder.com/api/2.0/items.json?pageLimit=100&page=${page}&categoryId=${id}`,
        auth: {
          username: process.env.API_USERNAME,
          password: process.env.API_PASSWORD,
        }
      });

      const { data } = resp;
      currentResult = data;

      let products = currentResult.items[0].filter((result) => result.quantity > 0);
      allProducts = [...allProducts, ...products];

      if (currentResult.page === currentResult.pages) {
        (productLimit)
          ? res.status(200).json(allProducts.splice(0, productLimit))
          : res.status(200).json(allProducts);
      }

      page++
      products = [];
    } while (currentResult.page < currentResult.pages)
  } catch (err) {
    console.error('uh oh: ', err);
    res.status(400).end();
  }
}