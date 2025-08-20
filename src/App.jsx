import { Route, Routes } from "react-router-dom";
import InternetScanLayout from "./InternetScanLayout";
import AccountSecurityScan from "./StartScan";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/scanning" element={<InternetScanLayout/>} />
        <Route path="/" element={<AccountSecurityScan/>} />
      </Routes>
    </div>
  );
}
export default App;
