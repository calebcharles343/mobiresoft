import uuid from "uuid";
import pool from "../database/dbconfig";

export default class User {
  constructor(user) {
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.email = user.email;
    this.password = user.password;
    this.role = user.role || "user"; // Default role as 'user'
  }

  async signUp() {
    const text = `INSERT INTO users (id, first_name, last_name, email, password, role)
                  VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`;
    const values = [
      uuid.v4(),
      this.firstName,
      this.lastName,
      this.email,
      this.password,
      this.role,
    ];
    const { rows } = await pool.query(text, values);
    return rows[0];
  }

  static async logIn(email) {
    const text = "SELECT id, password, role FROM users WHERE email = $1";
    const values = [email];
    const { rows } = await pool.query(text, values);
    return rows[0];
  }

  static async getAllUsers() {
    const text = "SELECT * FROM users";
    const { rows } = await pool.query(text);
    return rows;
  }

  static async getUserById(id) {
    const text = "SELECT * FROM users WHERE id = $1";
    const values = [id];
    const { rows } = await pool.query(text, values);
    return rows[0];
  }

  static async deleteUser(id) {
    const text = "DELETE FROM users WHERE id = $1";
    const values = [id];
    const result = await pool.query(text, values);
    return result;
  }

  // Check if a user is the superuser
  static isSuperUser(email) {
    const superUserEmail = "superuser@example.com"; // replace with the actual superuser email
    return email === superUserEmail;
  }

  // Method to create an admin (only accessible by the superuser)
  static async createAdmin(superUserEmail, adminData) {
    if (!User.isSuperUser(superUserEmail)) {
      throw new Error("Only the superuser can create an admin.");
    }
    const { fullName, address, email, phoneNumber, description } = adminData;
    const text = `INSERT INTO admins (id, full_name, address, email, phone_number, description) 
                  VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`;
    const values = [
      uuid.v4(),
      fullName,
      address,
      email,
      phoneNumber,
      description,
    ];
    const { rows } = await pool.query(text, values);
    return rows[0];
  }

  // Method to create a tenant (only accessible by the superuser)
  static async createTenant(superUserEmail, tenantData) {
    if (!User.isSuperUser(superUserEmail)) {
      throw new Error("Only the superuser can create a tenant.");
    }
    const { fullName, address, adminName, email, description } = tenantData;
    const text = `INSERT INTO tenants (id, full_name, address, admin_name, email, description)
                  VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`;
    const values = [
      uuid.v4(),
      fullName,
      address,
      adminName,
      email,
      description,
    ];
    const { rows } = await pool.query(text, values);
    return rows[0];
  }
}
