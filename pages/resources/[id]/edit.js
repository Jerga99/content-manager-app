
import Layout from "components/Layout";
import ResourceForm from "components/ResourceForm";

const ResourceEdit = ({resource}) => {

  const updateResource = (formData) => {
    alert(JSON.stringify(formData));
  }

  return (
    <Layout>
      <div className="container">
        <div className="columns">
          <div className="column is-8 is-offset-2">
            <ResourceForm
              initialData={resource}
              onFormSubmit={updateResource}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps({params}) {
  const dataRes = await fetch(`http://localhost:3001/api/resources/${params.id}`);
  const data = await dataRes.json();

  return {
    props: {
      resource: data
    }
  }
}

export default ResourceEdit;
