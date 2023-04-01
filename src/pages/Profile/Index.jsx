import { useDispatch, useSelector } from 'react-redux'
import Template from '../../layouts/Template/Index'
import ProfileForm from './components/ProfileForm'

function Index() {
  const user = useSelector((store) => store.auth?.user)
  const dispatch = useDispatch()

  return (
    <Template>
        <h1>
          {user?.role === 'seller' && 'Bienvenido vendedor'}
          {user?.role === 'buyer' && 'Bienvenido comprador'} - {user.name}
        </h1>
        <ProfileForm  user ={user} />
    </Template>
  )
}

export default Index