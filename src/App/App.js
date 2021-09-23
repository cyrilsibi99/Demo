import { CssBaseline } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddUser from "../components/AddUser";
import AllUsers from "../components/AllUsers";
import EditUser from "../components/EditUser";
import Header from "../components/Header";
import Home from "../components/Home";
import NotFound from "../components/NotFound";
import Sidebar from "../components/Sidebar";
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';

const useStyles = makeStyles({
  mainApp: {
    paddingLeft: "240px",
    width: "100%",
  },
});
function App() {
  const classes = useStyles();

  // let store = createStore();
  return (
    <>
      {/* <Provider store={store}> */}
      <BrowserRouter>
        <Header />
        <Sidebar />
        <div className={classes.mainApp}>
          <Switch>
            
            <Route exact path="/" component={Home} />
            <Route path="/users" component={AllUsers} />
            <Route path="/add" component={AddUser} />
            <Route path="/edit/:id" component={EditUser} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
      <CssBaseline />

      {/* </Provider> */}
    </>
  );
}

export default App;
