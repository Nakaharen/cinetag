import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Player from "./pages/Player";
import NotFound from "./pages/NotFound";
import RootPage from "pages/RootPage";

function AppRoutes() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootPage />}>
          <Route index element={<Home />}></Route>
          <Route path="favorites" element={<Favorites />}></Route> 
          <Route path="movies/:id" element={<Player />}></Route>
          <Route path="*" element={<NotFound />}></Route>  
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;