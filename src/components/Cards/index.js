import { useFavoriteContext } from 'contexts/Favorites';
import styles from './Cards.module.css';
import iconLike from './like.png';
import iconUnlike from './unlike.png';
import { Link } from 'react-router-dom';

function Cards({ id, title, cover}) {
  const {favorite, addFavorite} = useFavoriteContext();
  const isFavorite = favorite.some((fav) => fav.id === id);
  const icon = !isFavorite ? iconLike : iconUnlike;

  return(
    <div className={styles.container}>
      <Link className={styles.link} to={`/movies/${id}`}>
        <img src={cover} alt={title} className={styles.cover}/>
        <h2>{title}</h2>
      </Link>
      <img src={icon} alt="Favorite" className={styles.favorite} onClick={() =>{
        addFavorite({id, title, cover})
      }}/>
    </div>
  )
}

export default Cards;