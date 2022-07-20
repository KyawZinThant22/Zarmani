import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import BlogDetails from "./pages/BlogDetails";
import Home from "./pages/Home";
function App() {
  return (
    <>
      <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs/:slug" element={<BlogDetails />} />
          </Routes>
      </Layout>
    </>
  );
}

export default App;
