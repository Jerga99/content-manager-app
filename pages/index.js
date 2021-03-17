
import Layout from "components/Layout";
import ResourceHighlight from "components/ResourceHighlight";
import Newsletter from "components/Newsletter";
import ResourceList from "components/ResourceList";
import Footer from "components/Footer";
import { useEffect } from "react";

// CORS

function Home({resources}) {

  // useEffect(() => {
  //   fetch("http://localhost:3000/api/resources");
  // }, [])

  return (
    <Layout>
      <ResourceHighlight
        resources={resources.slice(0, 2)}
      />
      <Newsletter />
      <ResourceList
        resources={resources.slice(2)}
      />
      <Footer />
    </Layout>
  )
}

export async function getServerSideProps() {
  const resData = await fetch("http://localhost:3001/api/resources");
  const data = await resData.json();

  console.log(data);

  return {
    props: {
      resources: data
    }
  }
}

export default Home;
