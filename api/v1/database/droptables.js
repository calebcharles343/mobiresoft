import pool from "./dbconfig";

console.log("Dropping tables...");

(async () => {
  await pool.query("DROP TABLE IF EXISTS users CASCADE");
})();
