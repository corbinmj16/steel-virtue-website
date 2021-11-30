import axios from 'axios';

export default async (req, res) => {

  try {
    const resp = await axios({
      method: 'GET',
      url: `https://steelvirtuegroup.salesbinder.com/api/2.0/items.json`,
      auth: {
        username: process.env.API_USERNAME,
        password: process.env.API_PASSWORD,
      }
    });

    const { data } = resp;
    res.status(200).json(data.items[0]);
  } catch (err) {
    res.status(400).end();
    throw new Error('api error: ', err);
  }
}