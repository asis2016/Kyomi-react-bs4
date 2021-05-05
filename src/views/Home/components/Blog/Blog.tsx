import React from 'react'
import {Col, Row} from "react-bootstrap";
import {CardBlogPost} from "../../../../components/organisms";
import {SectionHeader} from "../../../../components/molecules";
import {BlogStyle} from "./Blog.style";
import {BlogData} from "../../data";

export const Blog = () => {
    return <BlogStyle>
        <SectionHeader description={`In hac habitasse platea dictumst. Pellentesque placerat rhoncus justo sed sollicitudin. 
                            Donec purus magna, maximus id magna eu, ullamcorper fermentum tortor. `}
                       subTitle={"Quisque porttitor metus non"}
                       title={"From the Blog"}/>
        <Row>
            {BlogData.map((item) =>
                <Col xs={3}>
                    <CardBlogPost title={item.title}
                                  image={item.img}
                                  excerpt={item.shortContent}
                                  author={item.author}/>
                </Col>
            )}
        </Row>
    </BlogStyle>
}

export default Blog