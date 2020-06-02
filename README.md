# AutoShift
Autoshift is Web scraper to automate time sheet entry of work from home hours in Cybershift.
UPDATE: AutoShift can no longer be used in browsers other than Google Chrome.

It's available as a Chrome extension by invite link.

## What Is It?
 AutoShift is just vanilla JavaScript. It's written to run in the developer console of any web browser (Big thanks to [Babel](https://babeljs.io/) for legacy browser and Microsoft browser support).
 It does two things:
 1. Load the html contained in the CyberShift bubblesheet web page.
 2. Takes values in string format from the user and assigns those values to the following fields: In, Lunch Out, Lunch In, Out. The following fields are assigned default values to account for working from home: Total Worked, ABS Type, ABS Code, ABS hours

## How To Use It

AutoShift has been submitted to Google for review so that it can be published as a chrome extension. Until then, you will need to add it as an extension yourself locally

**To Automatically do your time,  follow these steps:**

**New to JavaScript?**
1. Download the ChromeExtension.zip file located in [this repo.](https://github.com/nries1/AutoShift)
2. In Google Chrome, enter chrome://extensions/ into the url bar
3. In the menu at the top, click Load Unpacked
4. Select the ChromeExtension folder and upload it
5. Navigate to [cybershift](https://nycdoe.cybershift.net/) and load your bubblesheet
6. Click the AutoShift extension icon in the top right of your Chrome window
7. Click "Do My Time"

**Done this kind of thing before?**
1. Go to [cybershift](https://nycdoe.cybershift.net/)
2. Log in and select the period of time corresponding to the *current* pay period. Click Go. Click BubbleSheet.
3. Copy the code from [doTime.js](https://github.com/nries1/AutoShift/blob/master/doTime.js). [DEPRECATED]If you're using a Microsoft browser or a very old browser, copy the code from [doTime-oldBrowserSupport.js](https://github.com/nries1/AutoShift/blob/master/doTime-oldBrowserSupport.js)
4. On the bubblesheet page, open your brower's developer console (In Chrome press Cmd+Option+j. In other browsers right click browser window and in the developer console that appears, select "Console").
6. In the console, paste in the code that you copied in step 3 and press enter.
8. After you press enter you should see your bubble sheet populate with the correct times and code.
9. Finally click Save Employee Records and your done :)
