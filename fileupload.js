/* Build a file upload app for the Chicago NSBE Website.  This app should be able to ask for a file from a users computer and then upload it 
into a uniquely named folder on the server.

Research and build and interface and then the app functionality.  Post the code on your Git site and then email me the link.  

Do not worry about storing the name into a database.  Using a flat file will work just fine for now.  You will need to do a fair amount 
of research and collaboration to complete this task on time.
*/

var express = require('express');
var fs = require('fs');
