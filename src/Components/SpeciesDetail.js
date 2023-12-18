import {useParams} from 'react-router-dom';
import freshwaterFishSpecies from '../db/Fresh/FeshwaterFishData';

const SpeciesDetail = () => {
    const { name } = useParams();
    // Fetch and display details for the species with the given name
    const selectedSpecies = freshwaterFishSpecies.find(species => species.name === decodeURIComponent(name));

  if (!selectedSpecies) {
    return <div>Species not found</div>;
  }

  return (
    <div>
      <h1>{selectedSpecies.name}</h1>
      <img src={selectedSpecies.img} alt={selectedSpecies.name} />
      <p>{selectedSpecies.description}</p>
      <p>Temperament: {selectedSpecies.temperament}</p>
      <p>Max Growth Size: {selectedSpecies.maxGrowthSize}</p>
      {/* Add more details as needed */}
    </div>
  );
  };
  export default SpeciesDetail;