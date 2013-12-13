var items;
$(document).ready(function() {
    $(function stupidTable() {
        $(".table").stupidtable();
    });
});

function grabItem(newItemName, newItemAisle) {
    $.ajax({
        'url': "https://api.usergrid.com/cattiee/sandbox/items?ql=select * where name = '" + newItemName + "'",
        'type': 'GET',
        'success': function(data) {
            if (data.entities.length > 0) {
                items = data.entities;
                var itemsList = $('<tr>');
                for (var i = 0; i < items.length; i++) {
                    console.log(items[i]);
                    itemsList += '<tr>' + '<td>' + items[i].name + '</td>' + '<td>' + items[i].aisle + '</td>' + '</tr>';
                    $('.table').append(itemsList);
                }
            } else {
                promptTest(newItemName, newItemAisle);
            }
        }
    });
}

function promptTest(newItemName, newItemAisle) {
    newItemAisle = prompt('Item not found. Enter an Aisle number.');
    if ($.isNumeric(newItemAisle)) {
        addItem(newItemName, newItemAisle);
    } else {
        return false;
    }
}

function Item(newItemName, newItemAisle) {
    var obj = {};
    obj.name = newItemName;
    obj.aisle = newItemAisle; // || 0; 
    return obj;
}
//function to add Item to API and append to list

function addItem(newItemName, newItemAisle) {
    this.name = newItemName;
    this.aisle = newItemAisle;
    var newItem = new Item(newItemName, newItemAisle);
    console.log(JSON.stringify(newItem));
    $.ajax({
        'url': 'https://api.usergrid.com/cattiee/sandbox/items',
        'type': 'POST',
        'data': JSON.stringify(newItem),
        'success': function(data) {
            console.log(data);
            var newItemHtml = '<tr>' + '<td>' + newItem.name + '</td>' + '<td>' + newItem.aisle + '</td>';
            newItemHtml += "</tr>";
            $('.table').append(newItemHtml);
        }
    });
}
$(document).ready(function() {
    $.ajax({
        'url': 'https://api.usergrid.com/cattiee/sandbox/items',
        'type': 'GET',
        'success': function(data) {
            console.log(data.entities);
            items = data.entities;
            var itemsList = $('<tr>');
            for (var i = 0; i < items.length; i++) {
                console.log(items[i]);
                itemsList += '<tr>' + '<td>' + items[i].name + '</td>' + '<td>' + items[i].aisle + '</td>';
            }
            itemsList += '</tr>';
            //console.log(itemsList);
            $('.table').append(itemsList);
        }
    });
    $('#submitItemTable').on('submit', function(event) {
        event.preventDefault();
        var newItemName = $(this).find('#newItemName').val();
        grabItem(newItemName);
        $('#newItemName').val('');
        console.log(newItemName);
    });
});