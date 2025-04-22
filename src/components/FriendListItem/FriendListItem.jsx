import Container from "../Container/Container";

const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusStyle = {
    color: isOnline ? "green" : "red",
  };

  return (
    <Container>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p style={statusStyle}>{isOnline ? "Online" : "Offline"}</p>
    </Container>
  );
};


export default FriendListItem;
