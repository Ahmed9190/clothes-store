import { Route, Switch } from "react-router";
import "./App.css";
import HomePage from "./pages/homepage/homepage";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
