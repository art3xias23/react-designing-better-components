import Header from "./Header";
import Speakers from "./Speakers";
import Layout from "./Layout";
import { AuthProvider } from "../../contexts/AuthContext";

export default function App() {
  return (
    <AuthProvider initialLoggedInUser={"Ronald"}>
      <Layout>
        <Header />
        <Speakers />
      </Layout>
    </AuthProvider>
  );
}
