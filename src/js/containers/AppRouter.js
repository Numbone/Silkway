import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Context } from '../..'
import { authRoutes, publicRoutes } from '../routes/routes'
import { observer } from "mobx-react-lite";
import Header from '../components/Header';
import Footer from '../components/Footer';
import HomePage from '../pages/HomePage';

const AppRouter = observer(() => {
  const { user } = useContext(Context)
  console.log(user, "approuter")
  return (
    <>

      <Routes>
        {user.isAuth && authRoutes.map(({ path, element }) =>
          <Route key={path} path={path} element={element} />
        )
        }
        {publicRoutes.map(({ path, element }) =>
          <Route key={path} path={path} element={element} />
        )
        }
        <Route path='/' element={<HomePage/>}></Route>
      </Routes>

    </>
  )
})

export default AppRouter