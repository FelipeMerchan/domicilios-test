import React, { useState, useEffect } from 'react'

import { FormEditor } from '../components/FormEditor'
import { Post } from '../components/Post'
import { PageLoading } from '../components/PageLoading'
import '../assets/styles/pages/Home.scss'
import api from '../api'

export const Home = () => {
  const [summary, setSummary] = useState({
    form: {
      user: 'Juan Rodriguez',
      summary: '',
      likes: 0,
      avatarUrl: 'https://res.cloudinary.com/dy1xcx7kw/image/upload/v1615181820/Domicilios%20Test/juan-rodriguez_bpd5jp.jpg',
      comments: []
    }
  })
  const [posts, setPost] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const handleChange = e => {
    setSummary({
      form: {
        ...summary.form,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)

    try {
      await api.posts.create(summary.form)
      setLoading(false)

      window.location.href = window.location.href;
    } catch (error) {
      setError(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    setLoading(true)
    const fetchPosts = async () => {
      try {
        const posts = await api.posts.list()
        setPost(posts)
        setLoading(false)
      } catch (error) {
        setError(error)
        setLoading(false)
      }
    }
    fetchPosts()
  }, [])

  return (
    <>
      <main className="Home">
        <div className="wrapper">
          <div className="Home-content">
            <FormEditor
              onChange={handleChange}
              onSubmit={handleSubmit}
              formValues={summary.form}
              error={error}
            />
            {loading ? (
              <PageLoading />
            ) : (
              posts.map(post => <Post key={post.id} {...post} />)
            )}
            {error ? (
              `Error: ${error.message}`
            ) : ''}
          </div>
        </div>
      </main>
    </>
  )
}