#blwuberrlee pancakes
#Bayan Berri, Vivien Lee, Carol Pan, Joyce Woo
#SoftDev2 pd7
#P01
#


''' List of methods
get_all() - retrieves all data stored in database
'''

global db
import sqlite3

#open database
def open_db():
    global db
    f = "data/sample.db"
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

print get_all()
