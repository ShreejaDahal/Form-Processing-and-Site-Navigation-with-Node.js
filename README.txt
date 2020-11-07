For this assignment you are asked to create a fairly fully functioning web application that gathers and lists contact information.  You will write server code in Node.js and use EJS for dynamic page generation.  You must submit all files used by your application (the javascript, ejs, and anything else).  Please note, any links or paths to files or pages need to be written in such a way that your program doesn’t need to be run on a particular machine, with a particular directory structure.

Part 1:    Design an HTML page (file) that collects the following information for a direct mail marketer:

First Name         (input box)

Last Name         (input box)

Street             (input box)

City             (input box)

State             (drop down selection menu) (NJ, NY, PA, CT)

Zip             (input box)

Phone             (input box)

Email             (input box)

Mr./Mrs./Ms./Dr.     (Radio Button)

Contact Medium:     Mail/Phone/Email (Check box)

 

Include a Submit button that sends the POST request to your local host’s resource (/mailer). The form should look something like the screen shot below:

spam.png

Part 2:    Using the Node.js web server we’ve started writing in class (see Moodle), create code to serve your form in response to GET requests to /mailer.  When receiving POST requests to /mailer, the server code should gather the form data and create a new JavaScript object with the appropriate properties to represent the data corresponding to the contact.

 

Store the contact object in a global list (array).  You’ll use this list in part 3 of this assignment.

 

Finally, after storing the contact data in your list, respond to the POST with an HTML page showing the provided contact information.  The resulting HTML page could look something like this:

 

Contact Information Submitted

Name: Mr. John Doe

Address: 100 Main Street, Mahwah, NJ 07430

Contact by Phone: (201) 888-8888

Contact by Mail: No

Contact by Email: jdoe@ramapo.edu




Part 3:  On both the /mailer form page (served in response to GET) and the /mailer result page (the response to the POST after contact data has been saved), provide a hyperlink to a /contacts page.  The /contacts page (GET or POST) response should be an HTML page with a table of all contacts, with all of their properties (columns for name, address info, email, phone, etc.).  

 

Note, to do this, you’ll need to pass the entire contact array (you added to in part 2) to an ejs file that can loop through the data to build the table.