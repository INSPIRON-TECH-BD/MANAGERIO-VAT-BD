import sqlite3
import shutil
import os

try:
    # Copy DB locally to avoid lock
    src = r"C:\Users\TeamOS\AppData\Local\Zed\db\0-stable\db.sqlite"
    dst = r"D:\000. REPOS\SECTOR-CLAUDE-ZED\MANAGERIO-VAT-BD\zed_temp.sqlite"
    shutil.copy2(src, dst)
    
    db = sqlite3.connect(dst)
    cursor = db.cursor()
    cursor.execute("SELECT name FROM sqlite_master WHERE type='table'")
    tables = cursor.fetchall()
    
    with open('tables.txt', 'w') as f:
        for t in tables:
            f.write(t[0] + '\n')
            
except Exception as e:
    with open('error.txt', 'w') as f:
        f.write(str(e))
