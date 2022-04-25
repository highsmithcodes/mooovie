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
            <div dangerouslySetInnerHTML={{__html: markdownRemark.html}}/>
            <div className="single-post-meta">
                <p>{markdownRemark.frontmatter.date}</p>
                <p>{markdownRemark.frontmatter.categories.map(category => <span>{category}</span>)} </p>
            </div>
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
                date(formatString: "dddd, MMMM Do YYYY")
                categories
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