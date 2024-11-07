import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const { JWT_SECRET } = process.env;

export default class Hashes {
  static async generateToken(payload) {
    const token = await jwt.sign(payload, JWT_SECRET, { expiresIn: '120d' });
    return token;
  }

  static async verifyToken(token) {
    const decoded = await jwt.verify(token, JWT_SECRET);
    return decoded;
  }

  static hashPassword(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  }

  static comparePassword(password, hashPassword) {
    return bcrypt.compareSync(password, hashPassword);
  }
}
