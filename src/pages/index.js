import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout';
import {Helmet} from 'react-helmet';

const Index = ({ data }) => {
    return (
        <Layout>
            <Helmet 
                htmlAttributes={{lang: 'en'}}
                meta={[
                    {name: 'description', content: data.site.siteMetadata.description},
                ]}
                title={data.site.siteMetadata.title}
            />
            <h1>Loner</h1>
            <h3>Featured Posts</h3>
            <div className='post-container'>
                {data.allMarkdownRemark.edges.map(({ node }) => (
                    <div className="post-card">
                        <Link to={node.fields.slug}>
                            <div class="post-card-content">
                                <h3>{node.frontmatter.title}</h3>
                                <div className='post-card-meta'>
                                    <p>{node.frontmatter.date}</p>
                                    <p>{node.timeToRead} min read</p>
                                </div>
                                <p>{node.excerpt}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
            <Link to="/all-reviews/" className='button'>See All Reviews</Link>
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
        allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, limit:4) {
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