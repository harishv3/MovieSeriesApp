import Routers from "./routers";
import { ErrorBoundary } from "react-error-boundary";

function App() {
  return (
    <ErrorBoundary>
      <Routers/>
    </ErrorBoundary>
  );
}

export default App;
