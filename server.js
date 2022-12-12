const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const app = express();
const fruits = require('./models/fruits').default;

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());


