const express = require('express');
const connection = require('../config/dbConnect');

const Signup = (req, res) =>{
    let user = req.body;
    express.query =  "select firstname,lastname,email,mobile from user where email=?";
    connection.query(express.query, [user.email], (err, results) => {
        if(!err) {
            if(results.length <= 0) {
                express.query = "insert into user(firstname, lastname, email, mobile, password) values(?,?,?,?,?)"; 
                connection.query(express.query, [user.firstname, user.lastname, user.email, user.mobile, user.password], (err, results)=> {
                    if(!err) {
                        return res.status(200).json({message: "sucessfully inserted"})
                    }else {
                        return res.status(500).json(err);
                    }
                })
            }else {
                return res.status(400).json({message: 'Emaily Already Exist.'})
            }
        }else {
            return res.status(500).json(err);
        }
    })
};

module.exports = {Signup};