import hashes from '../middleware/hashes';
import pool from './dbconfig';

console.log('seeding database');

(async () => {
  const id = '8e75ed1c-c48a-4de2-9f8c-df597aeace8f';
  const password = 'micheal';
  const hashed = hashes.hashPassword(password);
  let result;
  const params = [id, 'Micheal', 'Myers', 'mikemyers@email.com', hashed, 'admin'];
  try {
    result = await pool.query(`INSERT INTO users (id, first_name, last_name, email, password, role)
      VALUES ($1, $2, $3, $4, $5, $6)`, params);
    return result;
  } catch (error) {
    return error;
  }
})();

(async () => {
  const id = '3bcbff41-7285-42f4-a934-e346382f3fbc';
  const password = 'jasonv';
  const hashed = hashes.hashPassword(password);
  let result;
  const params = [id, 'Jason', 'Voorhees', 'jasonv@email.com', hashed, 'attendant'];
  try {
    result = await pool.query(`INSERT INTO users (id, first_name, last_name, email, password, role)
      VALUES ($1, $2, $3, $4, $5, $6)`, params);
    return result;
  } catch (error) {
    return error;
  }
})();

(async () => {
  const id = '59968089-65d6-438a-b5d3-03ae275fa2de';
  const params = [id, 'Predator series'];
  let result;
  try {
    result = await pool.query(`INSERT INTO categories (id, name)
      VALUES ($1, $2)`, params);
    return result;
  } catch (error) {
    return error;
  }
})();

(async () => {
  const id = '620417b7-ab15-4679-9e5f-94e484ac9887';
  const params = [id, 'X series'];
  let result;
  try {
    result = await pool.query(`INSERT INTO categories (id, name)
      VALUES ($1, $2)`, params);
    return result;
  } catch (error) {
    return error;
  }
})();

(async () => {
  const id = '5a1f3030-cb52-462a-a81c-ab53f115ed21';
  const params = [id, 'adidas predator boot', 'predator description', '15000', '10',
    '2', 'http://sampleimage.com/image1.png'];
  let result;
  try {
    result = await pool.query(`INSERT INTO products (id, name, description, price, quantity, minimum_quantity, imgurl)
      VALUES ($1, $2, $3, $4, $5, $6, $7)`, params);
    return result;
  } catch (error) {
    return error;
  }
})();

(async () => {
  const id = '6522cc1b-c322-462a-97c1-0abd063135c6';
  const params = [id, 'Adidas x boot', 'x description', '10000', '10',
    '3', 'http://sampleimage.com/image1.jpg'];
  let result;
  try {
    result = await pool.query(`INSERT INTO products (id, name, description, price, quantity, minimum_quantity, imgurl)
      VALUES ($1, $2, $3, $4, $5, $6, $7)`, params);
    return result;
  } catch (error) {
    return error;
  }
})();

(async () => {
  const saleId = 'd88aea19-0e77-4134-a192-cb1048d13f8e';
  const productId = '6522cc1b-c322-462a-97c1-0abd063135c6';
  const sellerId = '3bcbff41-7285-42f4-a934-e346382f3fbc';
  const params = [saleId, productId, 'Adidas x boot', '10000', '1',
    '10000', sellerId];
  let result;
  try {
    result = await pool.query(`INSERT INTO sales (sale_id, product_id, name, price, quantity_sold, total, seller_id)
      VALUES ($1, $2, $3, $4, $5, $6, $7)`, params);
    return result;
  } catch (error) {
    return error;
  }
})();
