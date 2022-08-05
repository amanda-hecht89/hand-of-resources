const pool = require('../utils/pool');

class Monster {
  id;
  name;
  location;
  movie;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.location = row.location;
    this.movie = row.movie;
  }

  static async getAll() {
    const { rows } = await pool.query(
      `
      SELECT * FROM monsters;
      `
    ); return rows.map((row) => new Monster(row));
  }
}
module.exports = { Monster };
