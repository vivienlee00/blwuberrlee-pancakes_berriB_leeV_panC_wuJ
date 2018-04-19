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
            d[decade] = {"White":0, "Black":0, "Latino": 0, "Asian" : 0, "Unknown" : 0, "Other" : 0}
            
        #sort input
        if "white" in shooting["Race"].lower():
            d[decade]["White"] += 1
        elif "black" in shooting["Race"].lower():
            d[decade]["Black"] += 1
        elif "latino" in shooting["Race"].lower():
            d[decade]["Latino"] += 1
        elif "asian" in shooting["Race"].lower():
            d[decade]["Asian"] += 1
        elif "unknown" in shooting["Race"].lower():
            d[decade]["Unknown"] += 1
        else:
            d[decade]["Other"] += 1

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
            d[year] = {"White":0, "Black":0, "Latino": 0, "Asian" : 0, "Unknown" : 0, "Other" : 0}
            
        #sort input
        if "white" in shooting["Race"].lower():
            d[year]["White"] += 1
        elif "black" in shooting["Race"].lower():
            d[year]["Black"] += 1
        elif "latino" in shooting["Race"].lower():
            d[year]["Latino"] += 1
        elif "asian" in shooting["Race"].lower():
            d[year]["Asian"] += 1
        elif "unknown" in shooting["Race"].lower():
            d[year]["Unknown"] += 1
        else:
            d[year]["Other"] += 1

    #dump data and file write        
    s = json.dumps(d)
    with open('../data/parsed_info.txt', 'a') as f:
        f.write("\n Race by Year \n")
        f.write(s)
        f.close()
    return

#race_by_year()
