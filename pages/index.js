import Layout from "../components/Layout"
import Header from "../components/Header"
import data from "../data/data.json"
export default class extends React.Component {
    render(){
        return(
            <Layout>
                <Header data={data.components.header}></Header>
            </Layout>

        )
    }

}