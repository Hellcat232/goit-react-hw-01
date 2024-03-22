import Profile from "../Profile/Profile.jsx";
import userData from "../../userData.json";
import css from "./App.module.css";

function App() {
  return (
    <div className={css["main-app"]}>
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
