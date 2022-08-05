const pool = require('../utils/pool');

class Fish {
  id;
  name;
  habitat;
  ocean;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.habitat = row.habitat;
    this.ocean = row.ocean;
  }

  static async getAll() {
    const { rows } = await pool.query(
      `
      SELECT * FROM fishes;
      `
    ); return rows.map((row) => new Fish(row));
  }

  static async getById(id) {
    const { rows } = await pool.query(
      `
        SELECT * from fishes WHERE id = $1
        `,
      [id]
    ); if (rows.length === 0) {
      return null;
    } return new Fish(rows[0]);
  }



}
module.exports = { Fish };
