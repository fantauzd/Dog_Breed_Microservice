// test

// microservice.js
const express = require("express");

const app = express();
const PORT = 23109;

app.use(express.json());

// AKC master list of dogs
const dogBreeds = [
    { name: 'Labrador Retriever', size: 8, energyLevel: 7, goodWithKids: 10, coatType: 3, livingSpace: 5, experienceWithDogs: 5 },
    { name: 'Golden Retriever', size: 7, energyLevel: 8, goodWithKids: 9, coatType: 4, livingSpace: 5, experienceWithDogs: 5 },
    { name: 'German Shepherd', size: 9, energyLevel: 8, goodWithKids: 7, coatType: 3, livingSpace: 6, experienceWithDogs: 8 },
    { name: 'Bulldog', size: 5, energyLevel: 3, goodWithKids: 8, coatType: 1, livingSpace: 4, experienceWithDogs: 3 },
    { name: 'Beagle', size: 4, energyLevel: 7, goodWithKids: 9, coatType: 2, livingSpace: 5, experienceWithDogs: 4 },
    { name: 'Poodle', size: 5, energyLevel: 6, goodWithKids: 8, coatType: 7, livingSpace: 5, experienceWithDogs: 4 },
    { name: 'Rottweiler', size: 9, energyLevel: 7, goodWithKids: 6, coatType: 3, livingSpace: 6, experienceWithDogs: 7 },
    { name: 'Yorkshire Terrier', size: 2, energyLevel: 5, goodWithKids: 7, coatType: 6, livingSpace: 2, experienceWithDogs: 3 },
    { name: 'Boxer', size: 7, energyLevel: 8, goodWithKids: 8, coatType: 2, livingSpace: 5, experienceWithDogs: 6 },
    { name: 'Dachshund', size: 3, energyLevel: 5, goodWithKids: 7, coatType: 1, livingSpace: 3, experienceWithDogs: 2 },
    { name: 'Great Dane', size: 10, energyLevel: 6, goodWithKids: 8, coatType: 3, livingSpace: 7, experienceWithDogs: 7 },
    { name: 'Siberian Husky', size: 8, energyLevel: 9, goodWithKids: 7, coatType: 10, livingSpace: 8, experienceWithDogs: 9 },
    { name: 'Corgi', size: 4, energyLevel: 7, goodWithKids: 9, coatType: 3, livingSpace: 4, experienceWithDogs: 4 },
    { name: 'Shih Tzu', size: 3, energyLevel: 4, goodWithKids: 8, coatType: 8, livingSpace: 3, experienceWithDogs: 2 },
    { name: 'Doberman Pinscher', size: 9, energyLevel: 8, goodWithKids: 6, coatType: 2, livingSpace: 6, experienceWithDogs: 8 },
    { name: 'Australian Shepherd', size: 6, energyLevel: 9, goodWithKids: 9, coatType: 4, livingSpace: 6, experienceWithDogs: 6 },
    { name: 'French Bulldog', size: 3, energyLevel: 3, goodWithKids: 8, coatType: 1, livingSpace: 3, experienceWithDogs: 2 },
    { name: 'Pomeranian', size: 2, energyLevel: 6, goodWithKids: 7, coatType: 9, livingSpace: 2, experienceWithDogs: 3 },
    { name: 'Mastiff', size: 10, energyLevel: 5, goodWithKids: 7, coatType: 3, livingSpace: 8, experienceWithDogs: 7 },
    { name: 'Chihuahua', size: 1, energyLevel: 5, goodWithKids: 6, coatType: 2, livingSpace: 1, experienceWithDogs: 2 },
    { name: 'Bichon Frise', size: 3, energyLevel: 5, goodWithKids: 8, coatType: 4, livingSpace: 3, experienceWithDogs: 3 },
    { name: 'Akita', size: 8, energyLevel: 7, goodWithKids: 6, coatType: 7, livingSpace: 6, experienceWithDogs: 8 },
    { name: 'Collie', size: 6, energyLevel: 8, goodWithKids: 9, coatType: 6, livingSpace: 5, experienceWithDogs: 5 },
    { name: 'Newfoundland', size: 9, energyLevel: 6, goodWithKids: 10, coatType: 8, livingSpace: 8, experienceWithDogs: 6 },
    { name: 'Cocker Spaniel', size: 5, energyLevel: 6, goodWithKids: 9, coatType: 5, livingSpace: 4, experienceWithDogs: 4 }
];


function calculateScore(userCriteria, breed) {
    // Calculate the absolute difference for each attribute and sum them to get a "distance" score
    let score = 0;
    score += Math.abs(userCriteria.size - breed.size);
    score += Math.abs(userCriteria.energyLevel - breed.energyLevel);
    score += Math.abs(userCriteria.goodWithKids - breed.goodWithKids);
    score += Math.abs(userCriteria.coatType - breed.coatType);
    score += Math.abs(userCriteria.livingSpace - breed.livingSpace);
    score += Math.abs(userCriteria.experienceWithDogs - breed.experienceWithDogs);
    return score;
}

app.post('/dog-breed', (req, res) => {
    const userCriteria = req.body;
    // initialize best match to null
    let bestMatch = null;
    let lowestScore = Infinity;
    // loop through the breeds and save the best match
    dogBreeds.forEach(breed => {
        const score = calculateScore(userCriteria, breed);
        if (score < lowestScore) {
            lowestScore = score;
            bestMatch = breed;
        }
    });

    res.json({ breed: bestMatch.name });
});


/*
    LISTENER
*/
app.listen(PORT, function(){            // This is the basic syntax for what is called the 'listener' which receives incoming requests on the specified PORT.
    console.log('Express started on http://localhost:' + PORT + '; press Ctrl-C to terminate.')
});