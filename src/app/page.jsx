import Layout from '../Layout/Layout'
import IotHomes from '../Components/IotHomes'
import IotBlogs from '../Components/IotBlogs'
import  IotProjects from '../Components/IotProjects'
import IotServices from '../Components/IotServices'
import IotTech from '../Components/IotTech'
export default function App(){
  return(
   <Layout>
    <div>
    <IotHomes/>
    <br/>
    {/* <IotProjects/> */}
    {/* <br/> */}
    <IotTech/>
    <br/>
    <IotServices/>
    <br/>
    <IotBlogs/>
    </div>
    </Layout>
  )
}
