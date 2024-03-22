import Profile from "./components/Profile";
import userData from "./userData.json";

function App() {
  return (
    <div>
      <Profile
        username={userData.username}
        tag={userData.tag}
        stats={userData.stats}
        location={userData.location}
        avatar={userData.avatar}
      />
    </div>
  );
}

export default App;
