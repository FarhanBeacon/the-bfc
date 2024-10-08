import { Outlet, useNavigation } from "react-router-dom";
import { ProgressBar } from "react-loader-spinner";
import Footer from "../Footer/Footer";

const Home = () => {
  const navigation = useNavigation();
  return (
    <div>
      <h1 className="text-5xl font-bold text-center">The BFC Kitchen</h1>
      {navigation.state === "loading" ? (
        <div className="flex justify-center h-dvh items-center">
          <ProgressBar
            visible={true}
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="progress-bar-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      ) : (
        <Outlet></Outlet>
      )}
      <Footer></Footer>
    </div>
  );
};

export default Home;
