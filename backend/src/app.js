

const usersRouter = require('./routes/users/users.router')
const newsRouter = require('./routes/news/news.router')
const opinionsRouter = require('./routes/opinions/opinions.router')
const stocksRouter = require('./routes/stocks/stocks.router')
const newsCategoryRouter = require('./routes/newsCategory/newsCategory.router')

const express = require('express');
const cors = require('cors')

const app = express();

app.use(express.json());

app.use(cors());

app.use('/users', usersRouter);
app.use('/news', newsRouter);
app.use('/opinions', opinionsRouter);
app.use('/stocks', stocksRouter);
app.use('/newsCategory', newsCategoryRouter);




module.exports = app;