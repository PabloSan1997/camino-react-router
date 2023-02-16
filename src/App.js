import { HashRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./auth.js";
import { BlogPage } from "./blogPage.js";
import { BlogPost } from "./BlogPost.js";
import { HomePage } from "./HomePage.js";
import { LogoutPage } from "./logaoutpage.js";
import { LoginPage } from "./loginPage.js";
import { Menu } from "./menu.js";
import { ProfilePage } from "./profilePage.js";

// Ruta: /#/
function App() {
  return (
    <HashRouter>
      <AuthProvider>
        <Menu />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />}>
            <Route path=":slug" element={<BlogPost />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/logout" element={<LogoutPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<p>No found</p>} />
        </Routes>
      </AuthProvider>
    </HashRouter>
  );
}

export default App;
