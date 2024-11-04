import React from 'react';
import { useEffect, useState , useContext } from 'react';
import { Typography, Box } from '@mui/material';
import moment from 'moment';
import { Link, useParams } from "react-router-dom";

import SingleHeading from '../components/SingleHeading';
import HeaderDiv from '../components/HeaderDiv';
import bgImage from '../images/blogBg.jpg';
import { blogData , blogCategories, popularBlogPosts } from '../app';

export default function SinglePost() {

  const data = useContext(blogData);
  const categories = useContext(blogCategories);
  const popularPost = useContext(popularBlogPosts);

  const categoriesLinkCss = {
    color: 'black',
    fontSize: '12px',
    fontFamily: 'open sans',
    textDecoration: 'none'
  }

  const loaderCss = {
    width: '100%',
    height: '90vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#272bff',
    fontSize: '30px'
  }
  const titleCss = {
    fontSize: '32px',
    marginBottom: '30px',
    fontFamily: 'poppins'
  }

  let categoriesTiles = Object.values(categories);

  // import slug from path 
  const { slug } = useParams();

  // single post data
  const [post, setPost] = useState({});

  // single post content
  const [singlePostContent, setSinglePostContent] = useState({});

  const topScroll = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  // Single post data
  useEffect(() => {

    function my() {
      const p1 = new Promise((resolve, reject) => {
        for (let i of data) {
          if (i.slug === slug) {
            const post = i;
            resolve(post)
          }
        }
      });
      p1.then((value) => {
        let check = value.content.rendered;
        check = check.replace(/src/g, " ");
        check = check.replace(/data-orig-/g, "src");
        setPost(value);
        setSinglePostContent(check)
      })

    }
    my()

  }, [slug, data])

  return (
    <>
      <HeaderDiv />

      <SingleHeading
        heightSm='160px'
        heightLg='200px'
        titleSizeSm='28px'
        titleSizeLg='35px'
        bgText='Blogs'
        bgImage={bgImage} />

      {post.id ? (
        <Box sx={{ backgroundColor: '#f8f8f8', padding: { xs: '50px 20px', md: '50px 30px', lg: '65px 0px' } }} >
          <Box sx={{ maxWidth: "1200px", margin: "auto", display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: '30px' }}>
            {/* left sildebar */}
            <Box sx={{ width: { xs: '100%', md: '27%' } }} className='blogSidebar'>
              <Box >
                <Typography sx={{ backgroundColor: '#1a66fbd4', padding: '5px 11px 5px 11px', color: '#fff', fontSize: '16px', fontWeight: '500', fontFamily: 'poppins' }}>All Categories</Typography>
                {categories ? (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginTop: '10px' }}>
                    {
                      categoriesTiles.map(categoryElement => (
                        <Box sx={{ backgroundColor: '#fff', borderRadius: '5px', padding: '2px 15px 6px 15px', display: 'inline-block' }} key={categoryElement}>
                          <Link to={`/categories/${categoryElement}`} style={categoriesLinkCss} onClick={topScroll}>{categoryElement}</Link>
                        </Box>
                      ))
                    }
                  </Box>
                )
                  : 'loading'}
              </Box>
              <Box sx={{ margin: '30px 0px' }}>
                <Typography sx={{ backgroundColor: '#1a66fbd4', padding: '5px 11px 5px 11px', color: '#fff', fontSize: '16px', fontWeight: '500', fontFamily: 'poppins' }}>Popular Posts</Typography>
                {popularPost[0] ? (
                  <Box>
                    {
                      popularPost.map(post => (
                        <Box key={post.id} sx={{ backgroundColor: '#fff', margin: '10px 0px', padding: '10px' }}>
                          <Link to={`/posts/${post.slug}`} style={{ color: '#000000', textDecoration: 'none' }} onClick={topScroll} >
                            <Typography dangerouslySetInnerHTML={{ __html: post.title.rendered }} sx={{ fontFamily: 'open sans', fontWeight: '500', fontSize: '14px' }} />
                          </Link>
                          <Typography sx={{ marginTop: '15px', fontFamily: 'open sans', color: '#5c5d66', fontSize: '12px' }}>{moment(post.date).format('MMMM Do , YYYY')}</Typography>
                        </Box>
                      ))
                    }
                  </Box>
                )
                  : 'loading'}
              </Box>

            </Box>
            {/* single post content */}
            <Box sx={{ width: { xs: '100%', md: '73%',backgroundColor:'#ffffff',padding:'20px',paddingTop:'0' } }}>
              <Typography sx={titleCss} dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
              <img src={post.yoast_head_json.og_image[0].url} alt="blogImage" />
              <Typography sx={{ fontFamily: "open sans", fontSize: '17px',color:'#020111',fontWeight:'500' }} dangerouslySetInnerHTML={{ __html: singlePostContent }} />
              <Typography sx={{ margin: '70px 0px 20px 0px', borderBottom: '1px solid rgb(252, 176, 64)', borderTop: '1px solid rgb(252, 176, 64)', padding: '10px 0px' }}>
                <span>{moment(post.date).format('MMMM Do , YYYY')}</span>
                <span> | Category : {categories[post.categories[0]]} {post.categories[1] ? ", " + categories[post.categories[1]] : ""}</span>
              </Typography>
              <Typography sx={{ fontFamily: 'poppins', fontSize: '20px', color: '#00438b' }}>About the Author: {post.author_name}</Typography>
              <Box sx={{ display: 'flex', margin: '30px 0px 20px 0px' }}>
                <img src={post.author_image} alt="blogImage" style={{ width: '90px' }} />
                <Typography sx={{ padding: '0px 0px 0px 20px' }}>{post.author_description}</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      )
        : <Box sx={loaderCss}><Box style={{ width: '149px' }}> <span>Loading</span><span className='ani'>...</span></Box></Box>}

    </>
  )
}
