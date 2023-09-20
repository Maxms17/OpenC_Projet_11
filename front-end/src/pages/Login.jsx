import { connect } from "react-redux";
import { logIn, logOut } from "../redux/authSlice";

// Exemple de composant Home
const Home = ({ isLoggedIn, logIn, logOut }) => {
  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h1>Bienvenue sur la page log in</h1>
          <button onClick={logOut}>Déconnexion</button>
        </div>
      ) : (
        <div>
          <h1>Veuillez vous connecter log in</h1>
          <button onClick={logIn}>Connexion</button>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
});

export default connect(mapStateToProps, { logIn, logOut })(Home);
