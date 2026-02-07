// src/components/ContactCard.jsx
function ContactCard() {
  const email = "galarza_hernandez_01@students.smc.edu";
  const phone = "987-654-3210";

  return (
    <div style={{ maxWidth: "400px", margin: "20px auto", padding: "20px", borderRadius: "12px", border: "1px solid #e1e5e9", backgroundColor: "#fafafa", fontFamily: "Arial, sans-serif" }}>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Phone:</strong> {phone}</p>
    </div>
  );
}

export default ContactCard;