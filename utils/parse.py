#Team BlwuBerrLee-Pancakes
#Softdev pd7

import csv
import json
import codecs

#convert shootings csv file to json file
def convert():
    d = "{"
    f = open('../data/shootings.csv', 'r')
    s = f.read()
    data = s.split(',')
    #S#,Title,Location,Date,Summary,Fatalities,Injured,Total victims,Mental Health Issues,Race,Gender,Latitude,Longitude
    for(i = 0; i < 12; i++):
        for(row = 1; row < data.length/13, row++):
            if i == 0:
            else if i == 1:

    # data = []
    # with codecs.open('../data/shootings.csv', 'r', encoding='utf-8', errors='ignore') as f:
    #     for row in csv.DictReader(f):
    #         data.append(row)
    # json_data = json.dumps(data)
    # print json_data

    # f = open('../data/shootings.csv', 'r')
    # s = f.read()
    # str = unicode(s, errors='ignore')
    # #print(str)
    # reader = csv.DictReader(str)
    # rows = list(reader)
    # with open('../data/shootings.json', 'w') as f:
    #     json.dumps(rows, f)

convert()
