#Team BlwuBerrLee-Pancakes
#Softdev pd7

import csv
import json

#convert shootings csv file to json file
def convert():
    with open('../data/shootings.csv') as f:
        reader = csv.DictReader(f)
        rows = list(reader)
    with open('../data/shootings.json', 'w') as f:
        json.dump(rows, f)

# convert()

#loads json file
with open('../data/shootings.json') as f:
    data = json.load(f)

#creates array of total num of shootings per decade
def num_shootings_decade():
    years = []
    for shooting in data:
        year = int(shooting["Date"].split("/")[2]) #gets year
        if year >= 1970:
            years.append(year) #adds years to list

    current_y = 2010
    d = []
    counter = 0
    for y in years:
        if y >= current_y:
            counter += 1
        else:
            d.append(counter)
            counter = 0
            current_y -= 10
    d.append(counter)
    d.reverse() #reverse order of decades

    with open('../data/parsed_info.txt', 'a') as f:
        f.write("[1970-1979, 1980-1989, 1990-1999, 2000-2009, 2010-2019]\n")
        f.write("Total Number of Shootings per Decade:")
        f.write(str(d))
        f.close()
# num_shootings_decade()

#creates array for gender data per decade
def gender_decade():
    d = []
    m = 0 #male
    f = 0 #female
    u = 0 #unknown
    current_y = 2010
    for shooting in data:
        if int(shooting["Date"].split("/")[2]) >= current_y:
            if shooting["Gender"].lower() == "male"\
              or shooting["Gender"].lower() == "m":
                m += 1
            elif shooting["Gender"].lower() == "female"\
              or shooting["Gender"].lower() == "f":
                f += 1
            elif shooting["Gender"].lower() == "unknown":
                u += 1
            else:
                m += 1
                f += 1
        else:
            d.append([{"gender": "Male","count": m}, {"gender": "Female", "count": f},{"gender": "Unknown", "count":u}])
            current_y -= 10
            m = 0
            f = 0
            u = 0
    d.reverse()
    with open('../data/parsed_info.txt', 'a') as f:
        f.write("\nGender Data per decade [Male, Female, Unknown]:\n")
        f.write(str(d))
        f.close()
#gender_decade()

#creates a dictionary of gender by year
def gender_by_year():
    d = {}
    for shooting in data:
        #get the year
        year = int(shooting["Date"][-4:]);
        #if decade not already in dict, instantialize
        if not year in d:
            d[year] = [{"gender":"Male", "count":0}, {"gender" :"Female", "count":0},{"gender": "Unknown", "count" :0}]

        #sort input
        if "m" in shooting["Gender"].lower() and "f" in shooting["Gender"].lower():
            d[year][0]["count"] += 1
            d[year][1]["count"] += 1
        elif "m" in shooting["Gender"].lower():
            d[year][0]["count"] += 1
        elif "f" in shooting["Gender"].lower():
            d[year][1]["count"] += 1
        else:
            d[year][2]["count"] += 1

    #dump data and file write
    s = json.dumps(d)
    with open('../data/parsed_info.txt', 'a') as f:
        f.write("\n Gender by Year \n")
        f.write(s)
        f.close()
    return
gender_by_year()

#Mental Health issues per decade
def mental_health_issues_decade():
    yes = 0
    no = 0
    unknown = 0
    d = []
    current_y = 2010
    for shooting in data:
        if int(shooting["Date"].split("/")[2]) >= current_y:
            if shooting["Mental Health Issues"] == "Yes":
                yes += 1
            elif shooting["Mental Health Issues"] == "No":
                no += 1
            else:
                unknown += 1
        else:
            d.append([yes, no, unknown])
            yes = 0
            no = 0
            unknown = 0
            current_y -= 10
    d.reverse()
    with open('../data/parsed_info.txt', 'a') as f:
        f.write("\nMental Health Data per Decade [yes, no, unknown]: \n")
        f.write(str(d))
        f.close()
    return
#mental_health_issues_decade()

def race_by_decade():
    d = {}
    for shooting in data:
        #get the decade
        decade = int(shooting["Date"][-4:-1] + "0");
        #if decade not already in dict, instantialize
        if not decade in d:
            d[decade] = [{"race" : "White", "count" : 0}, {"race" : "Black", "count" : 0}, {"race" : "Latino", "count" : 0}, {"race" : "Asian", "count" : 0}, {"race" : "Unknown", "count" : 0}, {"race" : "Other", "count" : 0}]

        #sort input
        if "white" in shooting["Race"].lower():
            d[decade][0]["count"] += 1
        elif "black" in shooting["Race"].lower():
            d[decade][1]["count"] += 1
        elif "latino" in shooting["Race"].lower():
            d[decade][2]["count"] += 1
        elif "asian" in shooting["Race"].lower():
            d[decade][3]["count"] += 1
        elif "unknown" in shooting["Race"].lower():
            d[decade][4]["count"] += 1
        else:
            d[decade][5]["count"] += 1

    #dump data and file write
    s = json.dumps(d)
    with open('../data/parsed_info.txt', 'a') as f:
        f.write("\n Race by Decade \n")
        f.write(s)
        f.close()
    return

#race_by_decade();

def race_by_year():
    d = {}
    for shooting in data:
        #get the year
        year = int(shooting["Date"][-4:]);
        #if decade not already in dict, instantialize
        if not year in d:
            d[year] =  [{"race" : "White", "count" : 0}, {"race" : "Black", "count" : 0}, {"race" : "Latino", "count" : 0}, {"race" : "Asian", "count" : 0}, {"race" : "Unknown", "count" : 0}, {"race" : "Other", "count" : 0}]

        #sort input
        if "white" in shooting["Race"].lower():
            d[year][0]["count"] += 1
        elif "black" in shooting["Race"].lower():
            d[year][1]["count"] += 1
        elif "latino" in shooting["Race"].lower():
            d[year][2]["count"] += 1
        elif "asian" in shooting["Race"].lower():
            d[year][3]["count"] += 1
        elif "unknown" in shooting["Race"].lower():
            d[year][4]["count"] += 1
        else:
            d[year][5]["count"] += 1

    #dump data and file write
    s = json.dumps(d)
    with open('../data/parsed_info.txt', 'a') as f:
        f.write("\n Race by Year \n")
        f.write(s)
        f.close()
    return

race_by_year()


def shootings_in_year(decade):
    d = [0,0,0,0,0,0,0,0,0,0]
    for shooting in data:
        #get the year of the shooting
        year = shooting["Date"][-4:]
        if year[0:3] == str(decade)[0:3]: #if the decade matches
            d[int(year[-1:])] += 1 #add in at right interval

    #dump data and file write
    s = json.dumps(d)
    with open('../data/parsed_info.txt', 'a') as f:
        f.write("\n\n Shootings in a Decade: " + str(decade) + " \n")
        f.write(s)
        f.close()
    return

#shootings_in_year(1970)
#shootings_in_year(1980)
#shootings_in_year(1990)
#shootings_in_year(2000)
#shootings_in_year(2010)

def fatals_by_year(decade):
    d = {"count":0, 1: "", 2: "", 3: ""}
    for shooting in data:
        #get the year of the shooting
        year = shooting["Date"][-4:]
        if year[0:3] == str(decade)[0:3]: #if the decade matches
            d["count"] += shooting["Fatalities"]
            if (d[1] == "") or (d[1]["Fatalities"] < shooting["Fatalities"]):
                d[3] = d[2]
                d[2] = d[1]
                d[1] = shooting
            elif (d[2] == "") or (d[2]["Fatalities"] < shooting["Fatalities"]):
                d[3] = d[2]
                d[2] = shooting
            elif (d[3] == "") or (d[3]["Fatalities"] < shooting["Fatalities"]):
                d[3] = shooting
    #dump data and file write
    s = json.dumps(d)
    with open('../data/parsed_info.txt', 'a') as f:
        f.write("\n\n Fatals in a Decade: " + str(decade) + " \n")
        f.write(s)
        f.close()
    return

fatals_by_year(1970)
fatals_by_year(1980)
fatals_by_year(1990)
fatals_by_year(2000)
fatals_by_year(2010)
