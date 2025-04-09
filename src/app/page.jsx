import Layout from '../Layout/Layout'
import IotBlogs from '../Components/IotBlogs'
import  IotProjects from '../Components/IotProjects'
import IotServices from '../Components/IotServices'
import IotTech from '../Components/IotTech'
export default function App(){
  return(
   <Layout>
  <IotBlogs/>
  <IotServices/>
  <IotProjects/>
  <IotTech/>
    
    </Layout>
  )
}