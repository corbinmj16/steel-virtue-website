import axios from 'axios';

export default async (req, res) => {
  try {
    const resp = await axios({
      method: 'GET',
      url: `https://${process.env.API_KEY}:x@steelvirtuegroup.salesbinder.com/api/2.0/categories.json?`,
      auth: {
        username: process.env.API_USERNAME,
        password: process.env.API_PASSWORD,
      }
    });

    const { categories } = resp.data;
    const cats = categories[0];

    res.status(200).json(cats);
    
      
  } catch (err) {
    console.error('uh oh: ', err);
    res.status(400).end();
  }
}