import React from "react";
import {graphql} from 'gatsby';
import SingleLayout from '../components/SingleLayout';
import Image from "gatsby-image"

const Markdown = ({data}) => {
    const { markdownRemark } = data
    return (
        <SingleLayout>
            {markdownRemark.frontmatter.banner && (
                <Image className="banner-image"
                fluid={markdownRemark.frontmatter.banner.childImageSharp.fluid}
                alt="Banner Image"
                />
            )}
            <h1>{markdownRemark.frontmatter.title}</h1>
            <p>{markdownRemark.frontmatter.description}</p>
            <div dangerouslySetInnerHTML={{__html: markdownRemark.html}}/>
        </SingleLayout>
    )
}



export const pageQuery = graphql `
    query($slug: String) {
        markdownRemark(fields: {slug:{eq:$slug}}){
            html
            frontmatter{
                description
                title
                banner{
                    childImageSharp {
                        fluid{
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`
export default Markdown