const { DatabaseSync } = require('node:sqlite');
try {
  const db = new DatabaseSync('zed_temp.sqlite');
  const tables = db.prepare("SELECT name FROM sqlite_master WHERE type='table'").all();
  console.log("Tables:", tables.map(t => t.name).join(', '));
  
  const relevant = tables.filter(t => t.name.includes('message') || t.name.includes('chat') || t.name.includes('conversation') || t.name.includes('panel'));
  if (relevant.length > 0) {
     for (const r of relevant) {
         console.log(`\nTable ${r.name} columns:`);
         const cols = db.prepare(`PRAGMA table_info(${r.name})`).all();
         console.log(cols.map(c => c.name).join(', '));
         
         if (r.name.includes('message')) {
            console.log(`\nSample data from ${r.name}:`);
            const rows = db.prepare(`SELECT * FROM ${r.name} LIMIT 3`).all();
            console.log(JSON.stringify(rows, null, 2));
         }
     }
  }
} catch (err) {
  console.error(err);
}
