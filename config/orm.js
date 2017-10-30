// Import MySQL connection.
var connection = require("../config/connection.js");

//Helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// ["?", "?", "?"].toString() => "?,?,?";
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Cheeseburger => 'Cheeseburger')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {burger_name: 'Cheeseburger'} => ["burger_name='Cheeseburger'"]
      // e.g. {devoured: true} => ["devoured=true"]
      arr.push(key + "=" + value);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
}



// Object for all our SQL statement functions.
var orm = {
	//Selects all from the burgers table in mysql
	selectAll: function(tableInput, cb){
		var queryString = 'SELECT * FROM ' + tableInput;

		connection.query(queryString, function(err, result){
			if(err) throw err;
			cb(result);
		});
	},
    //Puts new burgers into the db
	insertOne: function(table, col, vals, cb){
		var queryString = 'INSERT INTO ' + table;
		queryString = queryString + ' (';
		queryString = queryString + col.toString(); 
		queryString = queryString + ') ';
		queryString = queryString + 'VALUES (';
		queryString = queryString + printQuestionMarks(vals.length);
		queryString = queryString + ') ';

		connection.query(queryString, vals, function(err, result){
			if(err) throw err;
			cb(result);
		});
	},
	// An example of objColVals would be {burger_name: Cheeseburger, devoured: true}
	updateOne: function(table, objColVals, condition, cb){
		var queryString = 'UPDATE ' + table;
		queryString = queryString + ' SET ';
		queryString = queryString + objToSql(objColVals);
		queryString = queryString + ' WHERE ';
		queryString = queryString + condition;

		console.log(queryString);

		connection.query(queryString, function(err, result){
			if(err) throw err;
			cb(result);
		});
	}
};

// Export the orm object for the model (burger.js).
module.exports = orm;