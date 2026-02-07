import UserProfile from "./components/UserProfile";
import UserProfileTwo from "./components/UserProfileTwo";
import ContactCard from "./components/ContactCard";
import "./App.css";

function App() {
  return (
    <div className="page">
      <UserProfile />
      <ContactCard />
      <UserProfileTwo />
      <ContactCard />
    </div>
  );
}

export default App;