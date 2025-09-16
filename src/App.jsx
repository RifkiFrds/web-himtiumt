import { BrowserRouter as Router } from "react-router";
import AppRoutes from "./routes";
import ScrollToTop from "./lib/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppRoutes />
    </Router>
  );
}

export default App;
