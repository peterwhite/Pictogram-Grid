# Pictogram Grid

## Synopsis
The pictogram, also known as a isotype, uses a series of repeating icons to represent data in a visual way. For further information, refer to this article by [Robert Kosara](https://eagereyes.org/techniques/isotype).

Pictogram Grid was created to generate IE6 compatible pictograms from JSON using Underscore.js 1.8.3. It can create a single Pictogram Grid or a series of them.

## Installation
### Running Pictogram Grid
+ Include Underscore.js and PictogramGrid.js
+ Call the PictogramGenerator function, includng your JSON (as below) and a target_id, where the pictogram grid should be placed - PictogramGenerator(obj, target_id) 
+ Modify the default CSS to suit your requirements

### Pictogram Grid Format Object Example
```javascript
"1": [{
        "meta": [{
            "title": "How 100 People Felt After Debugging IE6 Issues"
        }],
        "values": [{
            "legend": "Noticeably Better",
            "weight": 30,
            "colour": "green", //Will be added as a CSS class to the individual icon
            "image": "person_green.jpg" 
        }, {
            "legend": "Not Different Than Before",
            "weight": 28,
            "colour": "yellow", //Will be added as a class to the individual icon
            "image": "person_yellow.jpg"
        }, {
            "legend": "Noticeably Worse",
            "weight": 42,
            "colour": "red", //Will be added as a class to the individual icon
            "image": "person_red.jpg"
        }]
    }]
```
