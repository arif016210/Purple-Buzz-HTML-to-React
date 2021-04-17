import { Helmet } from "react-helmet";
import PageRoute from "./PageRoute/PageRoute";


function App() {
  return (
    <div>

      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap" rel="stylesheet" />
      </Helmet>

      <PageRoute></PageRoute>

    </div>
  );
}

export default App;
