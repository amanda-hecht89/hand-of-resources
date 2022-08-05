const pool = require('../utils/pool');

class Order {
  id;
  name;
  type;
  mascot;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.type = row.type;
    this.mascot = row.mascot;
  }

  static async getAll() {
    const { rows } = await pool.query(
      `
      SELECT * FROM orders;
      `
    ); return rows.map((row) => new Order(row));
  }

  static async getById(id) {
    const { rows } = await pool.query(
      `
        SELECT * from orders WHERE id = $1
        `,
      [id]
    ); if (rows.length === 0) {
      return null;
    } return new Order(rows[0]);
  }



}
module.exports = { Order };
