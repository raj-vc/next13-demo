export default function NestedLayout({ children }) {
  return (
    <div style={{ textAlign: "center" }}>
      <p>Nested layout</p>
      {children}
      <p>Nested layout</p>
    </div>
  );
}
