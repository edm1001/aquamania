import {useParams} from 'react-router-dom';
import freshwaterFishSpecies from '../db/Fresh/FeshwaterFishData.json';

const SpeciesDetail = () => {
    const { name } = useParams();
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
    </div>
  );
  };
  export default SpeciesDetail;