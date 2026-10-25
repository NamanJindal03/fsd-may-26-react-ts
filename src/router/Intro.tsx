import { Route, Routes } from "react-router-dom"
import BlogPage from "./pages/BlogPage"
import IndividualBlogPage from "./pages/IndividualBlogPage"
import BlogContainer from "./pages/BlogContainer"
import NotFound from "./pages/NotFound"
import LoginCheck from "./pages/LoginCheck"
import LoginPage from "./pages/LoginPage"

export default function Intro() {
  return (
    <Routes>
        <Route path="/" element={<LoginCheck />}>
            <Route path='/blog' element={<BlogContainer />}>
                <Route index element={<BlogPage />}/>
                <Route path=":blogId" element={<IndividualBlogPage/>} />
            </Route>
            <Route path='/home' element={<> Home Component</>}/>
            {/* <Route path='/*' element={<> Not Component</>}/> */}

        </Route>
        <Route path='/login' element={<LoginPage />} />
        <Route path='*' element={<NotFound />} />
    </Routes>
  )
}
