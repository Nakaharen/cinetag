import Title from "../../components/Title";
import Banner from "../../components/Banner";
import Cards from "../../components/Cards";
import videos from '../../json/db';
import styles from './Home.module.css';

function Home() {
  return (
    <>
      <Banner image="home" />
      <Title>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Title>
      <section className={styles.container}>
        {videos.map((video) => {
          return <Cards {...video} key={video.id} />
        })}
      </section>    
    </>
  )
}

export default Home;