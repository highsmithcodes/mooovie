import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/Layout';

const Index = ({ data }) => {
    return (
        <Layout>
            <Img fluid={data.file.childImageSharp.fluid} />
            <h1>The homepage</h1>
        </Layout>
    )
}

export const homepageQuery = graphql`
    query HomepageQuery{
        file(relativePath: {eq: "x-movie.jpeg"}){
            childImageSharp {
                fixed {
                    ...GatsbyImageSharpFixed
                }
                fluid{
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`

export default Index