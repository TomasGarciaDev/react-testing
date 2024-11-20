import "./App.css";
import { AppProviders } from "./providers/app-providers";
import { MuiMode } from "./components/mui/Mui-mode";

function App() {
  return (
    <AppProviders>
      <div className='App'>
        <MuiMode />
      </div>
    </AppProviders>
  );
}

export default App;
