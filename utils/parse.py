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

print(data[0]['Title'])
