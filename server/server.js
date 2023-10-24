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
//app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//middleware here ^//

//QUESTON: HOW DO WE MAKE THIS "/" ATTACHED TO OUR INDEX.HTML INSIDE OUR HOME-PAGE FOLDER?//

//app.get("/", (req, res) => res.send("This is root!"));

//CRUD: READ
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

app.get("/rehabs/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const rehab = await Rehab.findById(id);
    if (rehab) {
      res.json(rehab);
    } else {
      res
        .status(404)
        .send("Rehab with the specifications not exists in our database");
    }
  } catch (error) {
    res.status(500).send(`Error: ${error.message}`);
  } //why do we need the catch if we have an else?
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

//rehabs with a specific ID
app.get("/divided", async function (req, res) {
  try {
    const sexedRehabs = await Rehab.find({ sexseparated: true });
    if (sexedRehabs.length > 0) {
      res.json(sexedRehabs);
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
      res.json(conditionRehabs);
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
      sexseparated: true,
    });

    if (combinedRehabs.length > 0) {
      // Both conditions are met, so respond with the data
      res.json(combinedRehabs);
    } else {
      // No rehabs meet both conditions, so respond with an error message
      res
        .status(404)
        .send(
          "Rehab with both specified criteria does not exist in our database."
        );
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

//CRUD: CREATE

app.post("/newrehab", async function createRehab(req, res) {
  try {
    const rehabData = await new Rehab(req.body);
    await rehabData.save();
    console.log(rehabData);
    return res.status(201).json({ rehabData });
  } catch (error) {
    // Use "error" instead of "e"
    return res.status(500).json({ error: error.message });
  }
});

//CRUD: Delete
app.delete("/deleterehab/:id", async function (req, res) {
  try {
    let id = req.params.id;
    if (await Rehab.findById(id)) {
      await Rehab.findByIdAndRemove(id);
      return res.status(200).json({ message: "Rehab deleted successfully" });
    } else {
      return res.status(404).json({ error: "Rehab not found" });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

//CRUD: PATCH:
// app.patch("/patchrehab/:id", async (req, res) => {
//   const { id } = req.body;
//   console.log(id)
//   const updateFields = req.body;
//   // This assumes that the request body contains the fields to be updated.
//   try {
//     // Find the rehab document by its ID and update it with the specified fields.
//     const rehab = await Rehab.findByIdAndUpdate(id, updateFields, {
//       new: true,
//     });

//     if (!rehab) {
//       return res.status(404).json({ error: "Rehab not found" });
//     }

//     return res.status(200).json({ rehab });
//   } catch (error) {
//     return res.status(500).json({ error: error.message });
//   }
// });

// app.patch("/:id", movieController.updateMovie);

// app.delete("/:id", movieController.deleteMovie);

// //CRUD UPDATE

// async function updateMovie(req, res) {
//   try {
//     const id = req.params.id;
//     const movie = await Movie.findByIdAndUpdate(id, req.body, { new: true });
//     if ((movie = true)) {
//       return res.status(200).json(movie);
//     }
//     throw new Error("movie not found"); //what is throw?
//   } catch (e) {
//     return res.status(500).send(e.message);
//   }
// }

// //CRUD: DELETE
// async function deleteMovie(req, res) {
//   try {
//     let movie = await Movie.findByIdAndDelete(req.params.id);
//     if ((movie = true)) {
//       return res.status(200).json(movie);
//     }
//     throw new Error("movie not found");
//   } catch (e) {
//     return res.status(500).send(error.message);
//   }
// }

// app.post("/movies", movieController.createMovie);

// app.put("/movies/:id", movieController.updateMovie);

// app.put("/movies/:id", movieController.updateMovie);

// app.delete("/movies/:id", movieController.deleteMovie);

// app.get("/actors", actorController.getAllActors);

// app.get("/actors/:id", actorController.getOneActor);

// app.get("/reviews", reviewController.getAllReviews);

// app.get("/reviews/:id", reviewController.getOneReview);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
