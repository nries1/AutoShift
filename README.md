# AutoShift
Autoshift is Web scraper to automate time sheet entry of work from home hours in Cybershift.

Publication of AutoShift as a Chrome Extension is under review.

## What Is It?
 AutoShift is just vanilla JavaScript. It's written to run in the developer console of any web browser (Big thanks to [Babel](https://babeljs.io/) for legacy browser and Microsoft browser support).
 It does two things:
 1. Load the html contained in the CyberShift bubblesheet web page.
 2. Takes values in string format from the user and assigns those values to the following fields: In, Lunch Out, Lunch In, Out. The following fields are assigned default values to account for working from home: Total Worked, ABS Type, ABS Code, ABS hours

## How To Use It

AutoShift has been submitted to Google for review so that it can be published as a chrome extension. Until then, you will need to add it as an extension yourself locally

**To Automatically do your time,  follow these steps:**
1. Download the folder ChromeExtension in this repo
1. Go to [cybershift](https://nycdoe.cybershift.net/) (You don't have to, but please for everyone's sake use Chrome)
2. Log in and select the period of time corresponding to the *current* pay period. Click Go. Click BubbleSheet.
3. If you're using Chrome, copy the code from [doTime.js](https://github.com/nries1/AutoShift/blob/master/doTime.js). If you're using a Microsoft browser or a very old browser, copy the code from [doTime-oldBrowserSupport.js](https://github.com/nries1/AutoShift/blob/master/doTime-oldBrowserSupport.js)
4. On the bubblesheet page, open your brower's developer console (In Chrome press Cmd+Option+j. In other browsers right click browser window and in the developer console that appears, select "Console").
6. In the console, paste in the code that you copied in step 3 and press enter.
7. In the console paste in the following code: `doTime('09:00 AM', '11:30 AM', '12:30 PM', '04:59 PM');` and press enter. Feel free to edit the strings in the code to match your assigned schedule. They are in the following order: start time, lunch start, lunch end, end time.
8. After you press enter you should see your bubble sheet populate with the correct times and code.
9. Finally click Save Employee Records and your done :)

