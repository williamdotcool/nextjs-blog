import { useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import Date from '../components/Date'
import Layout from '../components/Layout'

import { getSortedPostsData } from '../lib/posts'

import utilStyles from '../styles/utils.module.css'

const Summary = styled.div`
  display: flex;
  margin-bottom: 40px;

  @media all and (max-width: 860px) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`

const Content = styled.div`
  max-width: 900px;
  padding: 0 6px;
`

const Title = styled.h1`
  width: 100%;
  font-weight: bold;
  font-size: 100%;
  margin-bottom: 8px;
`

const SubTitle = styled.h2`
  width: 100%;
  font-size: 100%;
`

export default function Home({ allPostsData }) {
  const [dialogOpen, setDialogOpen] = useState(false)

  const handleOpen = () => {
    setDialogOpen(true)
  }

  const handleClose = () => {
    setDialogOpen(false)
  }

  return (
    <Layout home>
      <Summary>
        <Content>
          <Title>Welcome to William's website.</Title>
          <SubTitle>A place to share my thoughts.</SubTitle>
          <p>
            I live in{' '}
            <Link href="/posts/moving-to-san-francisco">
              <a>San Francisco</a>
            </Link>
            . I really enjoy{' '}
            <Link href="/posts/holotropic-breathwork">
              <a>Holotropic Breathwork</a>
            </Link>
            , Improv, and{' '}
            <Link href="/posts/lessons-learned-kickboxing">
              <a>Kickboxing</a>
            </Link>
            . I do software consulting at{' '}
            <Link href="/posts/my-first-two-years-at-pivotal">
              <a>VMware Tanzu Labs</a>
            </Link>
            . One time I{' '}
            <Link href="/posts/learning-elixir">
              <a>learned Elixir</a>
            </Link>
            .
          </p>
          <p>
            I sometimes write code on{' '}
            <a target="_blank" href="https://github.com/williamdotcool">
              Github
            </a>
            .
          </p>
          <p>
            Check out my <Link href="/essays">essays</Link>.
          </p>
          <p style={{ color: '#366ddc' }}>
            <a href="#" onClick={handleOpen}>
              Tell me what you think
            </a>
          </p>
        </Content>
        <iframe
          width="265"
          height="470"
          src="https://www.youtube-nocookie.com/embed/D4O-JSXoUL8?modestbranding=1&controls=0&playsinline=1&loop=1&playlist=D4O-JSXoUL8&autoplay=1"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        />
      </Summary>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}
