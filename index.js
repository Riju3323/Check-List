let express = require('express');
let app = express();

var newListItems = [
];

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"))

app.get('/', function(req, res) {

  var today = new Date();
  var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };
  var day = today.toLocaleDateString("en-US", options);

  res.render("list", {day: day, newTask: newListItems});
});

app.post('/', function(req,res) {

  let task = req.body.newTask;
  newListItems.push(task);
  res.redirect("/");
})

app.listen(3000, () => console.log('To Do List is listening on port 3000!'));