import styles from "./App.module.css";
import Container from "./components/Container/Container";
import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";
import TransactionsHistory from "./components/TransactionHistory/TransactionHistory";
import userData from "./json/userData.json";
import friends from "./json/friends.json";
import trnsaction from "./json/transactions.json";

const App = () => {
  return (
    <>
      <h2 className={styles.title}>TASK 1</h2>
      <Container>
        <Profile
          name={userData.username}
          tag={userData.tag}
          location={userData.location}
          image={userData.avatar}
          stats={userData.stats}
        />
      </Container>

      <h2 className={styles.title}>TASK 2</h2>
      <FriendList friends={friends} />

      <h2 className={styles.title}>TASK 3</h2>
      <TransactionsHistory transactions={trnsaction}/>
    </>
  );
};

export default App;
