import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout';

const Index = ({ data }) => {
    return (
        <Layout>
            <h1>The homepage</h1>
            {data.allMarkdownRemark.edges.map(({ node }) => (
                <Link to={node.fields.slug}>
                    <h3>{node.frontmatter.title}</h3>
                    <p>{node.frontmatter.date}</p>
                    <p>{node.excerpt}</p>
                    <p>{node.timeToRead} min read.</p>
                </Link>
            ))}
        </Layout>
    )
}

export const homepageQuery = graphql`
    query HomepageQuery{
        site {
            siteMetadata {
                title
                description
            }
        }
        allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
            edges{
                node {
                    excerpt
                    timeToRead
                    frontmatter {
                        title
                        description
                        date(formatString: "dddd, MMMM Do YYYY")
                    }
                    fields{
                        slug
                    }
                }
            }
        }
    }
`

export default Index