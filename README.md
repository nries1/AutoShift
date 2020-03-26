# AutoShift
Web scraper to automate time sheet entry in Cybershift

## What Is It?
 AutoShift is just vanilla JavaScript. It's written to run in the developer console of any web browser (Big thanks to [Babel](https://babeljs.io/) for legacy browser and Microsoft browser support).
 It does two things:
 1. Load the html contained in the CyberShift bubblesheet web page.
 2. Takes values in string format from the user and assigns those values to the following fields: In, Lunch Out, Lunch In, Out. The following fields are assigned default values to account for working from home: Total Worked, ABS Type, ABS Code, ABS hours

## How To Use It

**To Automatically do you time,  follow these steps:**
1. Go to [cybershift](https://nycdoe.cybershift.net/) (You don't have to, but please for everyone's sake use Chrome)
2. Select the period of time corresponding to the current pay period. Do not select a period that includes days that you have already entered. I put in some protections against editing already entered time. But idk exactly how Cybershift handles changes to those "readonly" fields. So, to be safe just select days in the current pay period.
3. If you're using Chrome, copy the code
