const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render('main');
});

app.listen(port, () => {
    console.log(`server running on http://localhost:${port}/`);
});
