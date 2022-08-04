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

  static async getById(id) {
    const { rows } = await pool.query(
      `
        SELECT * from killers WHERE id = $1
        `,
      [id]
    ); if (rows.length === 0) {
      return null;
    } return new Killer(rows[0]);
  }

  static async insert({ name, victims, born, convicted }) {
    const { rows } = await pool.query(
      `
        INSERT INTO killers (name, victims, born, convicted)
        VALUES ($1, $2, $3, $4)
        RETURNING *
        `,
      [name, victims, born, convicted]
    ); return new Killer(rows[0]);
  }

  static async updateById(id, newAttrs) {
    const killer = await Killer.getById(id);
    if (!killer) return null;
    const updatedData = { ...killer, ...newAttrs };
    console.log(killer);
    const { rows } = await pool.query(
      `
      UPDATE killers
      SET name = $2, victims = $3, born = $4, convicted = $5
      WHERE id = $1
      RETURNING *;
    `,
      [
        id,
        updatedData.name,
        updatedData.victims,
        updatedData.born,
        updatedData.convicted,
      ]
    );
    return new Killer(rows[0]);
  }


}
module.exports = { Killer };
