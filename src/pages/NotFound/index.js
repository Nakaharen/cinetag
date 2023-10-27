import styles from './NotFound.module.css';

function NotFound() {
  return (
    <section className={styles.container}>
      <h2>Ooops!</h2>
      <p>O conteúdo que você procura não foi encontrado!</p>
    </section>
  )
}

export default NotFound;
