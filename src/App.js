import { HashRouter, Routes, Route } from "react-router-dom";
import { BlogPage } from "./blogPage.js";
import { BlogPost } from "./BlogPost.js";
import { HomePage } from "./HomePage.js";
import { Menu } from "./menu.js";
import { ProfilePage } from "./profilePage.js";

// Ruta: /#/
function App() {
  return (
    <HashRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />}>
          <Route path=":slug" element={<BlogPost />} />
        </Route>
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<p>No found</p>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
