// microservice.js
const express = require("express");

const app = express();
const PORT = 3001;

app.use(express.json());

function recommendBreed(criteria) {
    // Simple logic for demonstration
    if (criteria.activityLevel === "high" && criteria.space === "apartment") {
        return "Jack Russell Terrier";
    } else if (criteria.activityLevel === "low" && criteria.space === "house") {
        return "Bulldog";
    } else if (criteria.allergies) {
        return "Poodle";
    } else if (criteria.experienceWithDogs) {
        return "Golden Retriever";
    }
    return "Mixed Breed";
}

app.post("/recommend-breed", (req, res) => {
    const criteria = req.body;
    const breed = recommendBreed(criteria);
    res.json({ breed });
});

/*
    LISTENER
*/
app.listen(PORT, function(){            // This is the basic syntax for what is called the 'listener' which receives incoming requests on the specified PORT.
    console.log('Express started on http://localhost:' + PORT + '; press Ctrl-C to terminate.')
});