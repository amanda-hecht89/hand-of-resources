const pool = require('../utils/pool');

class Animal {
  id;
  name;
  says;
  image;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.says = row.says;
    this.image = row.image;
  }

  static async getAll() {
    const { rows } = await pool.query(
      `
      SELECT * FROM animals;
      `
    );
    return rows.map((row) => new Animal(row));
  }

  
  static async getById(id) {
    const { rows } = await pool.query(
      `
        SELECT * from animals WHERE id = $1
        `,
      [id]
    ); if (rows.length === 0) {
      return null;
    } return new Animal(rows[0]);
  }



}
module.exports = { Animal };
