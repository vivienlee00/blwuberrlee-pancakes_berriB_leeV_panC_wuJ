'''
blwuberrlee pancakes


'''
import csv
import sqlite3

global db
global c

def connect():
    global db
    global c
    f = "../data/dataset.db"
    db = sqlite3.connect(f, check_same_thread = False)
    c = db.cursor()
    stmt = "CREATE TABLE IF NOT EXISTS shootings (id INTEGER PRIMARY KEY, name TEXT, location TEXT, date TEXT, descr TEXT, fatals INTEGER, injured INTEGER, total INTEGER, mental INTEGER, race TEXT, gender TEXT, lat TEXT, long TEXT)"
    c.execute(stmt)
    return

def terminate():
    global db
    db.commit()
    db.close()
    return

global csvfile
global reader

def openfile():
    global csvfile
    global reader
    csvfile = open('../data/shootings.csv','r')
    reader = csv.DictReader(csvfile)
    return

def closefile():
    global csvfile
    csvfile.close();
    return


global command
command = "INSERT INTO shootings VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)"

def transfer():
    global reader
    global c
    connect()
    openfile()
    for r in reader:
        c.execute(command, (r["S#"], r["Title"], r["Location"], r["Date"], r["Summary"], r["Fatalities"], r["Injured"], r["Total victims"], r["Mental Health Issues"], r["Race"], r["Gender"], r["Latitude"], r["Longitude"]))
    closefile()
    terminate()
    return

transfer()
