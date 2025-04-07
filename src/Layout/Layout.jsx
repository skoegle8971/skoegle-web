import Footor from "./Footor";
import Navbar from "./Navbar";

export default function App({ children }) {
  return (
    <div style={styles.wrapper}>
      <Navbar />

      <main style={styles.main}>
        {children}
      </main>

      <Footor />
    </div>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  main: {
    flex: 1,
  },
};
