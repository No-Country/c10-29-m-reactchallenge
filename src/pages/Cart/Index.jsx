import Template from '../../layouts/Template/Index'
import Cart from '../../components/Cart'
import Pay from "../../pays/Pay"
function Index() { 
  
  return (
    <Template>
        <Cart />
        {/* <Pay />/ */}
    </Template>
  )
}

export default Index