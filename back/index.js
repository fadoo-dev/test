const express = require('express');
const bodyParser = require('body-parser');
const rp = require('request-promise');
const $ = require('cheerio');
const parse = require('node-html-parser');
const sanitizeHtml = require('sanitize-html');
const cors = require('cors');
const { dir } = require('console');

const app = express();

app.use(bodyParser.json());
app.use(cors());
const url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States';


app.post('/html', (req, res) => {
  const { url } = req.body;
  console.log(url);
    rp(url)
      .then(function(html){
        const clean = html;
        // const clean = sanitizeHtml(dirty, {
        //     allowedTags: sanitizeHtml.defaults.allowedTags  
        //   });
        console.log(clean.search("script"));
        res.send({clean});
      })
      .catch(function(err){
        //handle error
        res.send(err);
      });
});
var stringToHTML = function (str) {
	var parser = new DOMParser();
    var doc = parser.parseFromString(str, 'text/html');
    alert(doc.body)
	return doc.body;
};

app.listen(8080, ()=> {
    console.log(`listening at ${8080}`);
});