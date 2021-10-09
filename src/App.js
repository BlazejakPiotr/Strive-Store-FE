import Menu from "./Components/Nav/Menu";
import Home from "./Components/Home/Home";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <ReactQueryDevtools /> */}
      <Router>
        <Menu />
        <Route path="/" exact component={Home} />
        {/* <Route path="/products/:productID" exact component={} />
      <Route path="/products/add" exact component={}  /> */}
        <Footer />
      </Router>
    </QueryClientProvider>
  );
}

export default App;
