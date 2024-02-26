function calculateMatchScore(adopter, pet) {
  let score = 0;
  if (adopter.preference.includes(pet.type.toLowerCase())) {
    score = 100;
  } else {
    return (score = 0);
  }

  const filteredPreference = adopter.personalityPreference.filter(
    (preference) => pet.personality.includes(preference)
  );

  const preferenceScore =
    (filteredPreference.length / adopter.personalityPreference.length) * 100;

  score = (score + preferenceScore) / 2;
  score = Math.floor((score / 100) * 10);


  return score;
}

export function findBestMatches(adopters, pets) {
  const bestMatchedList = [];
  adopters.forEach((adopter) => {
    let matchedPets = [];
    pets.forEach((pet) => {
      const score = calculateMatchScore(adopter, pet);
      if (!!score) {
        matchedPets.push({ ...pet, score });
      }
    });
    if (!!matchedPets.length) {
      let adoptersBestMatched = {
        ...adopter,
        bestMatched: [...matchedPets],
      };
      bestMatchedList.push({ ...adoptersBestMatched });
    }
  });
  bestMatchedList.sort((a, b) => {
    if (a.score !== b.score) {
      return b.score - a.score;
    } else {
      return new Date(a.signedUpDate) - new Date(b.signedUpDate);
    }
  });

  return bestMatchedList;
}
