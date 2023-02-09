import "./NewCollections.css";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import img from '../../utils/assets/logo.jpg'

const NewCollections = () => {
  const handleDragStart = (e) => e.preventDefault();

  const items = [
    <img src={img} onDragStart={handleDragStart} role="presentation" />,
    <img src={img} onDragStart={handleDragStart} role="presentation" />,
    <img src={img} onDragStart={handleDragStart} role="presentation" />,
  ];

  return (
    <div className="newCollections">
      <div className="newCollectionsTitle">
        <div className="strip"></div>
        <p>New Collections</p>
      </div>
      <AliceCarousel mouseTracking autoHeight items={items} />

      
    </div>
  );
};

export default NewCollections;
