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



}
module.exports = { Order };
