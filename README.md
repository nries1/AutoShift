# AutoShift
Web scraper to automate time sheet entry in Cybershift

## What Is It?
 AutoShift is just vanilla JavaScript. It's written to run in the developer console of any web browser (Big thanks to [Babel](https://babeljs.io/) for legacy browser and Microsoft browser support).
 It does two things:
 1. Load the html contained in the CyberShift bubblesheet web page.
 2. Takes values in string format from the user and assigns those values to the following fields: In, Lunch Out, Lunch In, Out. The following fields are assigned default values to account for working from home: Total Worked, ABS Type, ABS Code, ABS hours
