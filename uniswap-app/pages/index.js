import Footer from "../components/Footer";
import Header from "../components/Header";
import SwapComponent from "../components/SwapComponent";

export default function Home() {
  return (
    <div className="appMain w-full h-screen flex flex-col items-center justify-center">
      <Header />
      <SwapComponent />
      {/* <Footer /> */}
    </div>
  );
}
