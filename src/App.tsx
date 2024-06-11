import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Top from "./pages/Top";

import "./App.css";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Top />
      </QueryClientProvider>
    </>
  );
}

export default App;
