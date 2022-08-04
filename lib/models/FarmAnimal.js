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
    ); return rows.map((row) => new Animal(row));
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


  static async insert({ name, says, image }) {
    const { rows } = await pool.query(
      `
        INSERT INTO animals (name, says, image)
        VALUES ($1, $2, $3)
        RETURNING *
        `,
      [name, says, image]
    ); return new Animal(rows[0]);
  }


  static async updateById(id, newAttrs) {
    const animal = await Animal.getById(id);
    if (!animal) return null;
    const updatedData = { ...animal, ...newAttrs };
    const { rows } = await pool.query(
      `
      UPDATE animals
      SET name = $2, says = $3, image = $4
      WHERE id = $1
      RETURNING *;
    `,
      [
        id,
        updatedData.name,
        updatedData.says,
        updatedData.image,
      ]
    );
    return new Animal(rows[0]);
  }


}
module.exports = { Animal };
