export default function NestedGroupLayout({ children }) {
  return (
    <div style={{ textAlign: "center" }}>
      <p>Nested - Group - Layout</p>
      {children}
      <p>Nested - Group - Layout</p>
    </div>
  );
}
