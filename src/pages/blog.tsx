import styled from "@emotion/styled";
import type { FunctionComponent } from "react";

type Post = {
    title: string;
    date: string;
    slug: string;
    excerpt: string;
    timeToRead: number;
}

interface BlogProps {
    posts: Post[];
}
 
const Blog: FunctionComponent<BlogProps> = () => {
    return ( 
        <BlogWrapper>
            <h1>Blog Posts:</h1>
        </BlogWrapper>
     );
}

const BlogWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background-color: #fafafa;
    padding: 20px;
`;
 
export default Blog;