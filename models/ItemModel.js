const mysql = require('mysql2/promise');
const dbconfig = require('../config/db');

class Item {
  constructor(titulo, area, capacity, price) {
    this.titulo = titulo;
    this.area = area;
    this.capacity = capacity;
    this.price = price;
  }

  static async getItems(date) {
    try {
      const pool = mysql.createPool(dbconfig);
      const connection = await pool.getConnection();
      try {
        const query = `
          SELECT items.Title, items.AreaID, items.Capacity, itemprices.Price
          FROM items
          JOIN itemprices ON items.ID = itemprices.ItemID
          WHERE itemprices.Date = ?`;

        const [rows, fields] = await connection.execute(query, [date]);

        return { success: true, data: rows };
      } finally {
        connection.release(); 
      }
    } catch (error) {
      console.error('Error en getItems:', error);
      return { success: false, error: 'Error al obtener elementos.' };
    }
  }
}

module.exports = Item;
