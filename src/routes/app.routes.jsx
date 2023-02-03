import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { MovieNoteDetails } from "../pages/MovieNoteDetails";
import { NewMovieNote } from "../pages/NewMovieNote";
import { Profile} from "../pages/Profile";

export function AppRoutes (){
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:id" element={<MovieNoteDetails />} />
            <Route path="/new" element={<NewMovieNote />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
    )
}