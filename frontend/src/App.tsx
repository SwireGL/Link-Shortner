import LinkShortner from "./features/links/linkShortner.tsx";
import {Route, Routes} from "react-router-dom";
import {Typography} from "@mui/material";

const App = () => {
    return (
        <>
            <main>
                <Routes>
                    <Route path="/" element={<LinkShortner />} />
                    <Route path="*" element={<Typography variant="h2">Not Found</Typography>} />
                </Routes>
            </main>
        </>
    );
};

export default App;