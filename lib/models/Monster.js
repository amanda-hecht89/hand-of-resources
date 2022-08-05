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

  static async getById(id) {
    const { rows } = await pool.query(
      `
        SELECT * from monsters WHERE id = $1
        `,
      [id]
    ); if (rows.length === 0) {
      return null;
    } return new Monster(rows[0]);
  }
  static async insert({ name, location, movie }) {
    const { rows } = await pool.query(
      `
        INSERT INTO monsters (name, location, movie)
        VALUES ($1, $2, $3)
        RETURNING *
        `,
      [name, location, movie]
    ); return new Monster(rows[0]);
  }
  static async updateById(id, newAttrs) {
    const monster = await Monster.getById(id);
    if (!monster) return null;
    const updatedData = { ...monster, ...newAttrs };
    const { rows } = await pool.query(
      `
      UPDATE monsters
      SET name = $2, location = $3, movie = $4
      WHERE id = $1
      RETURNING *;
    `,
      [
        id,
        updatedData.name,
        updatedData.location,
        updatedData.movie,
      ]
    );
    return new Monster(rows[0]);
  }

  static async delete(id) {
    const { rows } = await pool.query(
      `
      DELETE from monsters
      WHERE id = $1
      RETURNING *
      `,
      [id]

    ); return new Monster(rows[0]);
  }


}
module.exports = { Monster };
