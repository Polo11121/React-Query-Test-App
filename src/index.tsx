import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Wrapper, Main } from 'styled'
import { BlogPost, BlogPosts, AdminPosts, AdminPost } from 'pages'
import { Sidebar, SafeHydrate, GlobalLoader } from 'components'
import { ReactQueryDevtools } from 'react-query-devtools'

const App = () => (
  <SafeHydrate>
    <BrowserRouter>
      <GlobalLoader />
      <Wrapper>
        <Sidebar />
        <Main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <h1>Welcome!</h1>
                </>
              }
            />
            <Route path="/admin" element={<AdminPosts />} />
            <Route path="/admin/:postId" element={<AdminPost />} />
            <Route path="/blog" element={<BlogPosts />} />
            <Route path="/blog/:postId" element={<BlogPost />} />
          </Routes>
        </Main>
      </Wrapper>
      <ReactQueryDevtools />
    </BrowserRouter>
  </SafeHydrate>
)

export default App
