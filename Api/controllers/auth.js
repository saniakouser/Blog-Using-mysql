// auth.js

import { db } from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"

export const register = (req, res) => {
    const q = "SELECT * from users WHERE email=? OR username =?";
    db.query(q, [req.body.email, req.body.username], (err, data) => {
        if (err) {
            console.error("Error executing SELECT query:", err);
            return res.status(500).json("Database error");
        }
        if (data.length) return res.status(409).json("User already exists");

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const p = "INSERT INTO users(`username`, `email`, `password`) VALUES (?)";
        const values = [
            req.body.username,
            req.body.email,
            hash
        ];

        db.query(p, [values], (err, result) => {
            if (err) {
                console.error("Error executing INSERT query:", err);
                return res.status(500).json("Database error");
            }
            return res.status(200).json("User has been created");
        });
    });
};


export const login = (req, res) => {
    const { username, password } = req.body;
    const query = "SELECT * FROM users WHERE username=?";
    
    db.query(query, [username], (err, data) => {
        if (err) {
            console.error("Database error:", err);
            return res.status(500).json({ error: "Database error" });
        }
        if (data.length === 0) {
            return res.status(404).json({ error: "User not found" });
        }

        const isPasswordCorrect = bcrypt.compareSync(password, data[0].password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ error: "Wrong username or password" });
        }
        
        const token = jwt.sign({ id: data[0].id }, "jwtkey");
        const { password: userPassword, ...other } = data[0]; 
        res.cookie("access_token", token, {
            httpOnly: true
        }).status(200).json(other); 
    });
};

export const logout = (req, res) => {
    res.clearCookie("access_token", {
       sameSite: "none",
       secure: true
    });
    console.log("Cookie 'access_token' cleared.");
    res.status(200).json("User has been logged out");
 };
 

