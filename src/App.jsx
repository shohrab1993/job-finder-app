import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./components/ui/Layout";
import AddNewJob from "./pages/AddNewJob";
import EditJob from "./pages/EditJob";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="add-new-job" element={<AddNewJob />} />
            <Route path="edit-job" element={<EditJob />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
