
import Navbar from "components/Navbar";
import ResourceHighlight from "components/ResourceHighlight";
import Newsletter from "components/Newsletter";
import ResourceList from "components/ResourceList";
import Footer from "components/Footer";

function Home() {

  return (
    <>
      <Navbar />
      <ResourceHighlight />
      <Newsletter />
      <ResourceList />
      <Footer />
    </>
  )
}


export default Home;
