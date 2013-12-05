/*Basic query usage
The following examples show how to query the Apigee API to return 
the first 5 entities in the users collection that contain the property status:'active'.

var dataClient = new Apigee.Client({
    orgName:'cattiee', //your Apigee organization name
    appName:'cattiee'
});    		
			
var options = {
	endpoint:"items", //the collection to query
	qs:{ql:"status = 'active' limit = 5"} //the query string - note the use of the 'ql' property
};

//Call request to initiate the API call
dataClient.request(options, function (error, response) {
	if (error){
		//error
	} else {
		//success
	}	
});
*/


//write error handling here
function completeTask(task){
    if (typeof task.type == 'undefined'){
        throw ('"Item is undefined" + items[i]');
    }
}


$(document).ready(function() { 
/*
            1. Set your account details in the app

            - Enter your orgName below — it’s the username you picked when you signed up at apigee.com
            - Keep the appName as “sandbox”: it’s a context we automatically created for you. 
            It’s completely open by default, but don’t worry, other apps you create are not!      */
    var client = new Apigee.Client({
        orgName: 'cattiee',
        appName: 'sandbox'
    });
/*
            2. Set some details for your first object

            Great, we know where your where account is now!
            Let’s try to create a book, save it on Apigee, and output it on the page.
            
            - Keep the type as “book”.
            - Enter the title of your favorite book below, instead of “the old man and the sea”.    */
    var items = {
        type: 'items',
        name: 'oranges',
        aisle: 1
    };
/*
            3. Now, run it!
            
            You’re good to go! Open index.html in a web browser to see it running!
            
            - This app will NOT work in Internet Explorer due to their lack of CORS support.
            - Please use Firefox, Chrome or Safari, etc. instead.      */
    client.createEntity(items, function(error, response) {
        if (error) { // Error - the item was not saved properly
            alert("Could not create the item. Did you enter your orgName (username) correctly on line 18 of index.html?");
        } else { // Success - the book was created properly
            // The saved object is returned in the “response” variable,
            // defined on line 46. The code below outputs it on the page!
            document.getElementsByTagName('body')[0].innerHTML += "Success! Here is the object we stored; " + "notice the timestamps and unique id we created for you:" + "<br/><br/>" + JSON.stringify(response.get());
        }
/*
            4. Congrats, you’re done!

            - You can try adding more properties after line 34 and reloading the page!
            - You can then see the admin view of this data by logging in at https://apigee.com/usergrid
            - Or you can go explore more advanced examples in our docs: http://apigee.com/docs/usergrid         */
        
        //end Apigee directions
        

  
       
        
        var items = [{
            type: 'items',
            name: 'Oranges',
            aisle: 4
        }];
        
        var itemsList = '<table class = "table">';
        for (var i = 0; i < items.length; i++) {
          $('.table').append('<tr>' + '<td>' + items[i].name + '</td>' + '<td>' + items[i].aisle + '</td>' + '</tr>');
            
            try {
            itemsList += completeTask(items[i]);
        } catch (error) {
            console.log("There was an error:" + error);
        }
            
            itemsList += '</table>';
            console.log(itemsList);
            $('.panel panel-default').append(itemsList);
        }

       
// function append item to list form
        $('#submitItemTable').on('submit', function() {
            event.preventDefault();
            var submitItem = $(this).find('input').val();
            addItem(submitItem);
            console.log(submitItem);
        });

/*
function append items to database list
if item is found return item name and aisle number // call function append to list form
else   items not found alert 'would you like to add this item to the database' 
'this requires the item name and aisle number' 
*/


//Object Constructor Function

        function Item(description) {
            var obj = {};
            obj.name = name;
            obj.aisle = 1;
            return obj;
        }

        function addItem(description) {
            var newItem = new Item();
            items.push(newItem);
            client.createEntity.push(newItem);
            
            
            //  ???  append to Apigee  query database for item 
 /*           if (queryDatabase === true){
                $('.panel panel-default').append(itemsList);
                console.log(newItem);
            else {
                return ("Item is not found, would you like to add this item to the database?");
                }
            } */
         }

       
        
        
        
//function to sort aisle content in ascending or descending order
        
        //close document.ready
    });
});
