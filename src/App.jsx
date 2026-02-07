import UserProfile from './components/UserProfile';
import ContactCard from './components/ContactCard';
import './App.css';

function App() {
  return (
    <div className="page">
      
      <UserProfile
        name="Beatriz Galarza"
        bio="I’m learning React using Vite and building reusable components"
        image= "https://bsg-module9a-firstreact.s3.us-east-1.amazonaws.com/d8UbxF.jpg"
      />

       <ContactCard
        email="galarza_hernandez_01@students.smc.edu"
        phone="987-654-3210"
      />
    
     <UserProfile
        name="Student Two"
        bio="Learning React =)"
        image=""
      />

       <ContactCard
        email="studenttwo@students.smc.edu"
        phone="321-654-0987"
      />

    </div>
  );
}

export default App;