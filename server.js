const express = require('express');
const app = express();
var cors = require('cors')
const port = 5000;
var mysql = require('mysql');

const bodyParser = require('body-parser')

var connection = mysql.createConnection({
	host: 'localhost',
  port: 3306,
	user: 'root',
	password: 'mypassword',
  database: 'databasename'
});

app.use(cors())

app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(bodyParser.json())

app.get('/', (req, res) => {
	connection.query('show tables', function(err, rows, fields) {
		if (!err) {
      res.setHeader('Content-Type', 'application/json');
      res.set('mydata',JSON.stringify(rows))
      res.send(JSON.stringify(rows));
		} else {
			console.log(err);
		}
	});
});

app.post('/getMemberList', (req, res) => {
	connection.query('CALL getCampMember(?)', req.body.campId, function(err, rows, fields) {
		if (!err) {
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(rows));
		} else {
			console.log(err);
		}
	});
});

app.post('/getCampMemberTotal', (req, res) => {
	connection.query('CALL getCampMemberTotal(?)', req.body.campId, function(err, rows, fields) {
		if (!err) {
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(rows));
		} else {
			console.log(err);
		}
	});
});

app.post('/getCampInfo', (req, res) => {
	connection.query('CALL getCampInfo(?)', req.body.campId, function(err, rows, fields) {
		if (!err) {
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(rows));
		} else {
			console.log(err);
		}
	});
});

app.post('/updateCampInfo', (req, res) => {
	connection.query('CALL updateCampInfo(?, ?, ?, ?, ?, ?, ?, ?, ?)',
  [req.body.campId, req.body.name, req.body.description,
  req.body.startDate, req.body.endDate, req.body.location,
  req.body.expense, req.body.studentCap, req.body.staffCap ], function(err, result) {
		if (!err) {
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(result));
		} else {
			console.log(err);
		}
	});
});

app.post('/getAnnouncement', (req, res) => {
	connection.query('CALL getAnnouncement(?)', req.body.campId, function(err, rows, fields) {
		if (!err) {
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(rows));
		} else {
			console.log(err);
		}
	});
});

app.post('/addAnnouncement', (req, res) => {
	connection.query('CALL addAnnouncement(?, ?, ?, ?)', [req.body.campId, req.body.aName, req.body.description, req.body.isPublic], function(err, result) {
		if (!err) {
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(result));
		} else {
			console.log(err);
		}
	});
});

app.post('/deleteAnnouncement', (req, res) => {
	connection.query('CALL deleteAnnouncement(?, ?)', [req.body.campId, req.body.announcementID], function(err, result) {
		if (!err) {
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(result));
		} else {
			console.log(err);
		}
	});
});


app.listen(port, () => console.log(`Server started on port ${port}`));
