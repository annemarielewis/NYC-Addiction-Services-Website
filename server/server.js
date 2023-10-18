//step 6 -->
//purpose = make all of the info on our backend able to be easily processed/read by the front end/client side
//we will need express for this!

//QUESTION: Is express only needed for this page/could you explain more what it does?

//We will want endpoints that have index and show routes for all three collections

const express = require("express");
const db = require("./db");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

const { Detox } = require("./models");
const { Rehab } = require("./models");
// const movieController = require("./Controllers/movieController");
// const actorController = require("./Controllers/actorController");
// const reviewController = require("./Controllers/reviewController");
// require() imports here ^ ///////

const PORT = process.env.PORT || 3001;

const app = express();

//middleware:
app.use(logger("dev")); //morgan (logger) prints our requests in terminal)
app.use(bodyParser.json());
app.use(cors());
//middleware here ^//

//QUESTON: HOW DO WE MAKE THIS "/" ATTACHED TO OUR INDEX.HTML INSIDE OUR HOME-PAGE FOLDER?//

app.get("/", (req, res) => res.send("This is root!"));

//get all detoxes:
app.get("/detoxes", async function (req, res) {
  try {
    const detoxes = await Detox.find();
    //console.log(detoxes);
    res.json(detoxes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//get all rehabs:
app.get("/rehabs", async function (req, res) {
  try {
    const rehabs = await Rehab.find();
    //console.log(detoxes);
    res.json(rehabs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/divided", async function (req, res) {
  try {
    const sexedRehabs = await Rehab.find({ sexseparated: true });
    if (sexedRehabs.length > 0) {
    res.json(sexedRehabs)
      console.log(sexedRehabs);
    } else {
      res
        .status(404)
        .send(
          "Rehab with the specified criteria does not exist in our database. We recommend searching on Google!"
        );
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

app.get("/coconditions", async function (req, res) {
  try {
    const conditionRehabs = await Rehab.find({ coconditions: true });
    if (conditionRehabs.length > 0) {
    res.json(conditionRehabs)
    } else {
      res
        .status(404)
        .send(
          "Rehab with the specified criteria does not exist in our database. We recommend searching on Google!"
        );
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

app.get("/combined", async function (req, res) {
  try {
    const combinedRehabs = await Rehab.find({
      coconditions: true,
      sexseparated: true
    });

    if (combinedRehabs.length > 0) {
      // Both conditions are met, so respond with the data
      res.json(combinedRehabs);
    } else {
      // No rehabs meet both conditions, so respond with an error message
      res.status(404).send("Rehab with both specified criteria does not exist in our database.");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
});






//find rehabs that have only womens and only mens units and save them to a new database called sexed_rehabs:
app.get("/divide", async function (req, res) {
  try {
    const sexedRehabs = await Rehab.find({ sexseparated: true });
    if (sexedRehabs.length > 0) {
      await Rehab.aggregate([
        { $match: { completed: true } },
        //CREATE FROM AGGREGATE:
        { $out: "sexed_rehabs" },
      ]);
      console.log(sexedRehabs);
    } else {
      res
        .status(404)
        .send(
          "Rehab with the specified criteria does not exist in our database. We recommend searching on Google!"
        );
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

// app.post("/movies", movieController.createMovie);

// app.put("/movies/:id", movieController.updateMovie);

// app.put("/movies/:id", movieController.updateMovie);

// app.delete("/movies/:id", movieController.deleteMovie);

// app.get("/actors", actorController.getAllActors);

// app.get("/actors/:id", actorController.getOneActor);

// app.get("/reviews", reviewController.getAllReviews);

// app.get("/reviews/:id", reviewController.getOneReview);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
