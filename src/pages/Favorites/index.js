import Title from "../../components/Title";
import Banner from "../../components/Banner";
import Cards from "../../components/Cards";
import styles from './Favorites.module.css';
import { useFavoriteContext } from "contexts/Favorites";

function Favorites() {
  const { favorite } = useFavoriteContext()
  return (
    <>
      <Banner image="favorites" />
      <Title>
        <h1>Meus favoritos</h1>
      </Title>
      <section className={styles.container}>
        {favorite.map((fav) => {
          return <Cards {...fav} key={fav.id} />
        })}
      </section>    
    </>
  )
}

export default Favorites;