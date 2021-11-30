import axios from 'axios';

export default async (req, res) => {
  const { id } = req.query;
  try {
    const productRes = await axios({
      method: 'GET',
      url: `https://steelvirtuegroup.salesbinder.com/api/2.0/items.json?compact=true&itemIdNumber=${id}`,
      auth: {
        username: process.env.API_USERNAME,
        password: process.env.API_PASSWORD,
      }
    });
    // hero
    const { data } = await productRes;
    res.status(200).json(data.item[0]);
  } catch (err) {
    throw new Error(err);
  }
}