'''
blwuberrlee pancakes


'''
import csv
import sqlite3

global db
global c

def connect():
    f = "../data/dataset.db"
    db = sqlite3.connect(f. check_same_thread = False)
    c = db.cursor
    stmt = "CREATE TABLE IF NOT EXISTS shootings (id INTEGER, name TEXT, location TEXT, date TEXT, descr TEXT, fatals INTEGER, injured INTEGER, total INTEGER, mental INTEGER, race TEXT, gender TEXT, lat TEXT, long TEXT)"
    c.execute(stmt)
    return

def terminate():
    db.commit()
    db.close()
    return

global csvfile
global reader

def openfile():
    csvfile = open('../data/shootings.csv','r')
    reader = csv.DictReader(csvfile)
    return

def closefile():
    csvfile.close();
    return

global command = "INSERT INTO shootings VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)"
