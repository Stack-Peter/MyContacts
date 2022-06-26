import PageHeader from "../../components/PageHeader";

export default function Home({ contact}) {
  return (
    <PageHeader title={`Editar ${contact.name || ''}`}/>
  )
}
