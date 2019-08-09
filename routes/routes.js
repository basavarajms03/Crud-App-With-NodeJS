const express = require('express');
const router = express.Router();

const connection = require('../config/connection');

router.get('/', (request, response) => {
    connection.query('select * from customer', (error, results) => {
        response.render('index', {
            results,
            title : 'Welcome to Node js and express js'
        });
    });
});

router.get('/add_customer', (req, res) => {
    res.render('add_customer', {
        title: "Add New Customer"
    });
});

router.post('/add_customer', (req, res) => {
    var stmt = `insert into customer values('', '${req.body.fname}', '${req.body.lname}', '${req.body.email}', '${req.body.date}', '${req.body.number}')`;
    connection.query(stmt, function(err, results){
        if(!err){
            res.render('add_customer', {
                successInfo : true
            });
        }else{
            throw err;
        }
    })
});

router.get('/update_customer', (req, res) => {
    res.render('update_customer', {
        title : "Update Customer Information"
    });
});

router.post('/update_customer', (req, res) => {
    var stmt  = 'select * from customer where email = ?';
    let returnerror;
    connection.query(stmt,req.body.email, (error, results) => {
        if(results.length == 0){
            returnerror = true;
        }
        res.render('update_customer', {
            returnerror,
            results
        });
    });
});

router.get('/delete_customer/:id', (req, res) => {
    var stmt = 'delete from customer where id = ?';
    connection.query(stmt, req.params.id, (error) => {
        if(!error){
            res.render('index', {
                DeleteSuccess: true
            });
        }
    });
});


module.exports = router;