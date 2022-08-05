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
  static async insert({ name, type, mascot }) {
    const { rows } = await pool.query(
      `
        INSERT INTO orders (name, type, mascot)
        VALUES ($1, $2, $3)
        RETURNING *
        `,
      [name, type, mascot]
    ); return new Order(rows[0]);
  }
  static async updateById(id, newAttrs) {
    const order = await Order.getById(id);
    if (!order) return null;
    const updatedData = { ...order, ...newAttrs };
    const { rows } = await pool.query(
      `
      UPDATE orders
      SET name = $2, type = $3, mascot = $4
      WHERE id = $1
      RETURNING *;
    `,
      [
        id,
        updatedData.name,
        updatedData.type,
        updatedData.mascot,
      ]
    );
    return new Order(rows[0]);
  }



}
module.exports = { Order };
