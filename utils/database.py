#blwuberrlee pancakes
#Bayan Berri, Vivien Lee, Carol Pan, Joyce Woo
#SoftDev2 pd7
#P01
#


''' List of methods
get_all() - retrieves all data stored in database

by_decade() - parses data and counts by decade

by_year() - parses data and counts by year
'''

global db
import sqlite3

#open database
def open_db():
    global db
    f = "../data/dataset.db"
    db = sqlite3.connect(f, check_same_thread = False)
    return db.cursor()

#close database
def close_db():
    global db
    db.commit()
    db.close()
    return

#GET DATA
#----------------------------------------
def get_all():
    global db
    try:
        c= open_db()
        command = "SELECT * FROM shootings"
        c.execute(command)
        data= c.fetchall()
       # print data
        close_db()
    except:
        print "Error: could not retrieve data"
        return None
    return data
#========================================

#Return Instance By Decade
#----------------------------------------
def by_decade():
    data = get_all()
    ret = {}
    for entry in data:
        decade = entry[3][-4:-1] + "0"
        if decade in ret:
            ret[decade] += 1;
        else:
            ret[decade] = 1;
    return ret
#========================================

#Return Instance By Year
#----------------------------------------
def by_year():
    data = get_all()
    ret = {}
    for entry in data:
        year = entry[3][-4:]
        if decade in ret:
            ret[decade] += 1;
        else:
            ret[decade] = 1;
    return ret
#========================================

#print get_all()
print by_decade()
#print by_decade().get("1990")
