# Team Blwuberrlee Pancakes

(Because Team Team was off-limits)
By: Bayan Berri, Vivien Lee, Carol Pan, and Joyce Wu


## Description of data set:

Our dataset can be found [here](https://www.kaggle.com/zusmani/us-mass-shootings-last-50-years/data)

This dataset is a .csv file that features information on various mass shootings that have happened in the United States in the past 50 years. Information provided includes the title/name of the shooting, location, date, number of casualties, weapon used, race of the perpetrator, and more.

We feel that this dataset is especially relevant today because of recent mass shootings that have occurred in the United States and calls for gun control. By graphing the information seen in this dataset we can get a better idea of how the frequency of mass shootings in the US has changed over a period of time.


## Interaction:

Without user interaction, our page will display a horizontal timeline marked with bullet-shaped ticks. Users can interact with the page by hovering over the bullets, which will then display more information on the specific shooting. 

Through this, our user will be able to gain insight on questions such as “How many mass shootings actually occur in the United States?” and will also provide some scope on how factors such as race and location have an impact on the occurrence of shootings. 


## D3 Features:

The timeline can be expanded/zoomed into. For example, when zoomed out all the way, the timeline shows all 50 years of data, but the user can choose a specific decade, click on it, and then the timeline stretches to only show the decade on-screen. This continues to a single-year view as well. 

The timeline will also be a "heat map": depending on the view, each time interval will be shaded differently based on number of occurances. For example, a decade with more occurances of shootings will be shaded darker than a decade with fewer.


## Gallery Examples:

http://charts.animateddata.co.uk/f1/

https://github.com/marmelab/EventDrops

Both of these gallery examples are similar to the idea that we have, as they both feature a horizontal timeline format. Ordered by date, each event is represented as a single line or dot on the timeline that the user can then hover over to get more information on the event.

## Sketch:

![Image of timeline](https://raw.githubusercontent.com/vivienlee00/blwuberrlee-pancakes_berriB_leeV_panC_wuJ/master/static/img/image1.jpg)

## How to Use:

### 1. 

You will need to download Flask to run a Flask app! To do this, create a virtual environment with any name.
```
$ pip install virtualenv
$ virtualenv <name>
```
On Mac/Linux, start up your venv with:
```
$ . <name>/bin/activate
```
On Windows:
```
$ . <name>/Scripts/activate
```
In your activated venv, run the following:
```
$ pip install flask
```
### 2. Run the python file `app.py`.
```
$ python app.py
```
### 3. Open up `localhost:5000` in any web browser
### 4. Check out our data!
