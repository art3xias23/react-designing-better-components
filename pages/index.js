import App from "./components/App";
import { ThemeProvider } from "../contexts/ThemeContext";

const IndexPage = () => {
  return (
    <ThemeProvider startingTheme="light">
      <App />
    </ThemeProvider>
  );
};

export default IndexPage;
