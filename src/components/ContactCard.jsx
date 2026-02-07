export default function ContactCard({ email, phone }) {
  return (
    <div
      style={{maxWidth: "400px", margin: "20px auto", padding: "20px", borderRadius: "12px", border: "1px solid #e1e5e9", backgroundColor: "#fafafa", fontFamily: "Arial, sans-serif",
      }}
    >
      <p style={{ margin: "4px 0" }}>
        <strong>Email:</strong> {email}
      </p>

      <p style={{ margin: "4px 0" }}>
        <strong>Phone:</strong> {phone}
      </p>
    </div>
  );
}