import { HashRouter, Route, Routes } from "react-router-dom";
import "./styles/App.css";

//Partials
import AppNavbar from "./components/AppNavbar";
import Footer from "./components/Footer";

//Components
import Login from "./views/Auth/Login";
import Register from "./views/Auth/Register";
import Landing from "./views/Home/Landing";
import WelcomeToApp from "./views/Auth/WelcomeToApp";
import Home from "./views/Home/Home";

// import RedirectHome from "./components/RedirectHome";
import RedirectHome from "./components/RedirectHome";
import TermsAndConditions from "./components/TermsAndConditions";
import WhereToDrive from "./views/Travel/WhereToDrive";
import BeginTrip from "./views/Travel/BeginTrip";
import ChooseTrip from "./views/Travel/ChooseTrip";

import ProfileView from "./views/Profile/ProfileView";
import MyProfileView from "./views/Profile/MyProfileView";
import TripDetail from "./components/TripDetail";
import RecoverPassword from "./components/Recoverpassword";
import SelectedTrip from "./views/Travel/SelectedTrip";
import Payment from "./views/Payment/Payment"

function App() {
  return (
    <div className="App">
      <HashRouter>
        <AppNavbar />
        <div className="container">
          <Routes>
            <Route
              path="/"
              exact
              element={
                <RedirectHome>
                  <Landing />
                </RedirectHome>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/home"
              element={
                <RedirectHome>
                  <Home />
                </RedirectHome>
              }
            />
            <Route
              path="/register/welcome"
              element={
                <RedirectHome>
                  <WelcomeToApp />
                </RedirectHome>
              }
            />
            <Route
              path="/recover"
              element={
                <RedirectHome>
                  <RecoverPassword />
                </RedirectHome>
              }
            />
            <Route path="/tyc" element={<TermsAndConditions />} />
            <Route path="/profile" element={<ProfileView />} />
            <Route path="/myprofile" element={<MyProfileView />} />
            <Route path="/tripdetail" element={<TripDetail />} />
            <Route path="/driver" element={<WhereToDrive />} />
            <Route path="/start" element={<BeginTrip />} />
            <Route path="/choose" element={<ChooseTrip/>} />
            <Route path="/selectedtrip" element={<SelectedTrip/>} />
            <Route path="/payment" element={<Payment/>}/>
          </Routes>
        </div>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
