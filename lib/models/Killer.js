const pool = require('../utils/pool');

class Killer {
  id;
  name;
  victims;
  born;
  convicted;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.victims = row.victims;
    this.born = row.born;
    this.convicted = row.convicted;
  }

  static async getAll() {
    const { rows } = await pool.query(
      `
      SELECT * FROM killers;
      `
    ); return rows.map((row) => new Killer(row));
  }
}
module.exports = { Killer };
