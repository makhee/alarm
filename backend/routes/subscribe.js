const express = require('express');
const router = express.Router();
const mysql = require('../model/db_connect');

mysql.connect();

mysql.query('SELECT * FROM subscribers',
  function (error, results, fields) {
    console.log(error);
    console.log('The solution is: ', results);
  });

mysql.end();

router.get('/', (req, res) => {
  res.json({
    data: 'Invalid Request Bad'
  });
});
module.exports = router;