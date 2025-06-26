import Footor from "./Footor";
import Navbar from "./Navbar";

export default function App({ children }) {
  return (
    <div style={styles.wrapper}>
      <div style={{position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000}}>

      <Navbar />
      </div>

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
