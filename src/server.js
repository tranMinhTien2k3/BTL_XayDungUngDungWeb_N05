const express = require('express');
const path = require('path');

const webRouter = require('./router/web')

const app = express();
const port = 3000;

app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, 'public')))

app.use('/', webRouter);

app.listen(port, () => {
    console.log(`server running on http://localhost:${port}/`);
});
