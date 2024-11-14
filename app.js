// microservice.js
const express = require("express");

const app = express();
const PORT = 23109;

app.use(express.json());

// Endpoint to handle breed recommendation requests
app.post('/dog-breed', (req, res) => {
    const { size, energyLevel, goodWithKids, coatType, livingSpace, experienceWithDogs } = req.body;

    // Simple logic to determine the best dog breed based on criteria
    let recommendedBreed = 'Labrador Retriever'; // Default breed

    // Simple matching based on criteria (extend as needed)
    if (size === 'small' && energyLevel === 'low' && livingSpace === 'apartment') {
        recommendedBreed = 'French Bulldog';
    } else if (size === 'medium' && energyLevel === 'high' && goodWithKids) {
        recommendedBreed = 'Golden Retriever';
    } else if (size === 'large' && energyLevel === 'high' && experienceWithDogs === 'advanced') {
        recommendedBreed = 'German Shepherd';
    }

    // Send the recommended breed back to the main app
    res.json({ breed: recommendedBreed });
});

// Start the microservice
app.listen(PORT, () => {
    console.log(`Dog breed recommendation microservice listening on port ${PORT}`);
});
/*
    LISTENER
*/
app.listen(PORT, function(){            // This is the basic syntax for what is called the 'listener' which receives incoming requests on the specified PORT.
    console.log('Express started on http://localhost:' + PORT + '; press Ctrl-C to terminate.')
});