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

/*function completeTask(task) {
 if (typeof task.name == 'undefined'){
        fireQ(newItemName);
        throw ('"Item is undefined" + items[i]');
    
var newItemAisle;
var newItemName;
if (task.newItem === 'undefined'){ 
                grabItem(newItemName, newItemAisle);
            }
            
} */          

var items;
    
//ajax request for item  //only fired on submit
function promptTest(newItemName){
    
    var newItemAisle = prompt('Item not found. Enter an Aisle number.');
    if($.isNumeric(newItemAisle)) {
        addItem(newItemName, newItemAisle);
    } else {
        return false;
    }
    //else grabItem(newItemName, newItemAisle);
}
function grabItem(newItemName, newItemAisle) {
        $.ajax({
            'url': "https://api.usergrid.com/cattiee/sandbox/items?ql=select * where name = '"+ newItemName +"'",
            //pass newItemName to api ?ql
            'type': 'GET',
            'success': function(data) {
                if(data.entities.length > 0) {
                items = data.entities;
                    var itemsList = $('<tr>'); // + '<td>' + items[i].name + '</td>' + '<td>' + items[i].aisle + '</td>';
                    for (var i = 0; i < items.length; i++) {
                         // console.log(items[i]);// first call to console
                        itemsList += '<tr>' + '<td>' + items[i].name + '</td>' + '<td>' + items[i].aisle + '</td>';
                        $('.table').append(itemsList);// append itemsList to the table
                    }
                } else {
                    promptTest(newItemName);
                    //
                    //var newItemAisle = prompt('Item not found. Enter an Aisle number.');
                    //if prompt cancel 
                    //if(newItemAisle != "" && newItemAisle !== null) {
                    /* */
                    //addItem(newItemName, newItemAisle);
                }
            }
        });
            //append to list
}        
            

    function Item(newItemName, newItemAisle) { // I added a second parameter to the argument here
        var obj = {};
        obj.name = newItemName;
        obj.aisle = newItemAisle; // || 0; // this means - if newItemAisle is null, default to zero
        return obj;
    }
    //function to add Item to API and append to list

    function addItem(newItemName, newItemAisle) {
        this.name = newItemName;
        this.aisle = newItemAisle;
        var newItem = new Item(newItemName, newItemAisle);
        //console.log(JSON.stringify(newItem));
        $.ajax({
            'url': 'https://api.usergrid.com/cattiee/sandbox/items',
            'type': 'POST',
            'data': JSON.stringify(newItem),
            'success': function(data) {
                console.log(data);
               var newItemHtml = '<tr>' + '<td>' + newItem.name + '</td>' + '<td>' + newItem.aisle + '</td>'; 
                 
            newItemHtml += "</tr>";
            $('.table').append(newItemHtml);// add the name and aisle number to table
            } 
        });
       /* items.push(newItem);
        console.log(newItem);
        $('.table').append(newItem);*/
    }
    
    

$(document).ready(function(){  
    $.ajax({
        'url': 'https://api.usergrid.com/cattiee/sandbox/items',
        'type': 'GET',
        'success': function(data) {
            console.log(data.entities);
            items = data.entities;
            var itemsList = $('<tr>'); // + '<td>' + items[i].name + '</td>' + '<td>' + items[i].aisle + '</td>';
            for (var i = 0; i < items.length; i++) {
                //   console.log(items[i]);// first call to console
                itemsList += '<tr>' + '<td>' + items[i].name + '</td>' + '<td>' + items[i].aisle + '</td>';
/* try {
                itemsList += completeTask(items[i]);
                } catch (error) {
                    console.log("There was an error:" + error);
                }*/
            }
            //console.log(itemExists);//checking for query success 
            itemsList += '</tr>';
            //console.log(itemsList);
            $('.table').append(itemsList);
        }
    });
 


    //  }           
    // $('newItemAisle').val('formula to reorder-ascending'); 
    $('#submitItemTable').on('submit', function(event) {
        event.preventDefault();
        var newItemName = $(this).find('#newItemName').val();
        var newItemAisle = $(this).find('#newItemAisle').val();
        //completeTask(newItemName, newItemAisle);
        grabItem(newItemName,newItemAisle);
        //addItem(newItemName, newItemAisle);
        console.log(newItemName, newItemAisle);
    });




});




















