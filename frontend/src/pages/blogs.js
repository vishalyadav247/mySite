import { Box, Typography, Divider } from '@mui/material';
import { Link, useLocation, useParams } from "react-router-dom";
import moment from 'moment';


import SingleHeading from '../components/SingleHeading';
import HeaderDiv from '../components/HeaderDiv';
import bgImage from '../images/blogBg.jpg';
import { blogData, blogCategories, popularBlogPosts } from '../app';
import { useContext, useState, useEffect } from 'react';

export default function Blogs() {

  const totalBlogs = useContext(blogData);
  const categories = useContext(blogCategories);
  const popularPost = useContext(popularBlogPosts);
  const [data, setData] = useState([])

  const location = useLocation();
  const currentPath = location.pathname;
  const { categoryName } = useParams();

  useEffect(() => {

    if (currentPath.includes('/blogs')) {
      setData(totalBlogs);
    }
    else {

      let catId = 0;
      for (let i in categories) {
        if (categories[i] === categoryName) {
          catId = i;
        }
      }

      const p4 = new Promise((resolve, reject) => {
        let catPostS = []
        for (let i in totalBlogs) {
          let catIdArr = totalBlogs[i].categories;
          for (let j in catIdArr) {
            if (catId === `${catIdArr[j]}`) {
              catPostS.push(totalBlogs[i])
            }
          }
        }

        resolve(catPostS)
      })
      p4.then((value) => {
        setData(value)
      })
    }
  },[categories,categoryName,currentPath,totalBlogs]);

  const wrapperCss = {
    display: "grid",
    gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" },
    gridGap: "30px",
    width: { xs: '100%', md: '73%' }
  }
  const itemCss = {
    overflow: "hidden !important"
  }
  const BlogTitle = {
    fontFamily: "poppins",
    fontSize: { xs: "24px", sm: "16px" },
    fontWeight: "500",
    lineHeight: "30px",
    maxHeight: '65px',
    overflow: 'hidden',
  }
  const MiddleSpan = {
    borderLeft: "1px solid black",
    borderRight: "1px solid black",
    padding: "0px 5px",
    margin: "0px 5px"
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

  const categoriesLinkCss = {
    color: 'black',
    fontSize: '12px',
    fontFamily: 'open sans',
    textDecoration: 'none'
  }

  let categoriesTiles = Object.values(categories);

  const topScroll = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

  }

  return (
    <>
      <HeaderDiv />

      <SingleHeading
        heightSm='200px'
        heightLg='200px'
        titleSizeSm='28px'
        titleSizeLg='35px'
        bgText='Blogs'
        bgImage={bgImage} />

      {data ? (
        <Box sx={{ backgroundColor: '#f8f8f8', paddingTop: {xs:'35px',md:'80px'}, paddingBottom: '80px' }} >
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: { xs: '10px', md: '50px' } }} className='siteWidth'>
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
            {/* blog content */}
           
            <Box className="blogsWrapper" sx={wrapperCss}>
              {data.map(post => (
                <Box className="blogItem" sx={itemCss} key={post.id}>
                  <Box className='blogImageWrapper'>
                    <img src={post.yoast_head_json.og_image[0].url} alt="blogImage" />
                  </Box>
                  <Box className='blogContent' sx={{ backgroundColor: { xs: '#98b6d34d', sm: '#fff' }, padding: "15px 15px 20px 15px", marginTop: "-6px" }}>
                    <Link to={`/posts/${post.slug}`} style={{ color: 'black', textDecoration: 'none' }}>
                      <Typography className='blogTitle' sx={BlogTitle} dangerouslySetInnerHTML={{ __html: post.title.rendered }} onClick={topScroll} />
                    </Link>
                    <Divider sx={{ width: "100%", height: "1px", backgroundColor: "black", margin: { xs: "15px 0px 50px 0px", sm: "15px 0px 30px 0px" } }} />
                    <Typography sx={{ fontSize: '12px', fontFamily: 'open sans' }}>
                      <span>By {post.author_name}</span>
                      <span style={MiddleSpan}>{moment(post.date).format('ll')}</span>
                      <span style={{ display: 'block' }}> categories :&nbsp;
                        <Link to={`/categories/${categories[post.categories[0]]}`} style={categoriesLinkCss} onClick={topScroll}>{categories[post.categories[0]]}</Link>
                        <Link to={`/categories/${categories[post.categories[1]]}`} style={categoriesLinkCss} onClick={topScroll}>{post.categories[1] ? ", " + categories[post.categories[1]] : ""}</Link>
                        <Link to={`/categories/${categories[post.categories[2]]}`} style={categoriesLinkCss} onClick={topScroll}>{post.categories[2] ? ", " + categories[post.categories[2]] : ""}</Link>
                      </span>
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      )
        : <Box sx={loaderCss}><Box style={{ width: '149px' }}> <span>Loading</span><span className='ani'>...</span></Box></Box>}

    </>
  )
}
