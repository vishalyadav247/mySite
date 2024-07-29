import React from 'react'
import { Box, Typography } from '@mui/material';
import Wedo from '../images/wedo.jpg';

export default function TopSkills() {
    const TextCss = {
        color: "#fff",
        textShadow:'1px 2px 3px grey',
        textAlign: "center",
        fontSize: { xs: "30px", md: "30px" },
        fontWeight: "500",
        width: { xs: "100%", lg: "250px", xl: "95%" },
        height: { xs: "40px", sm: "30px", lg: "65px" },
        display:{xs:'none'},
        margin: "auto",
        fontFamily: "poppins"
    }
    const skillImage = {
        display: 'flex', 
        justifyContent: 'center'
    }
    return (
        <>
            <Box className='weDo siteWidth' sx={{ display: "grid", gap:'50px',gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" }, overflow: "hidden",marginBottom:'80px' }}>
                <Box sx={{ display: "grid",gap:'20px',gridTemplateColumns: { xs: "1fr 1fr", sm: "1fr 1fr" } }} className="wedoLeft">
                    <Box sx={{ border: "2px solid #aba0c5" }} className="center skillPill">
                        <Box sx={{ position: "absolute" }}>
                            <Box sx={skillImage}>
                                <svg viewBox="0 0 512 512" fill="#000000" height="80px" width="80px"><path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"></path></svg>
                            </Box>
                            <Typography sx={TextCss}>REACT JS </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ border: "2px solid #ff8a80"}} className="center skillPill">
                        <Box sx={{ position: "absolute" }}>
                            <Box sx={skillImage}>
                                <svg viewBox="0 0 48 48" width="90px" height="80px"><path fill="#252f3e" d="M13.527,21.529c0,0.597,0.064,1.08,0.176,1.435c0.128,0.355,0.287,0.742,0.511,1.161 c0.08,0.129,0.112,0.258,0.112,0.371c0,0.161-0.096,0.322-0.303,0.484l-1.006,0.677c-0.144,0.097-0.287,0.145-0.415,0.145 c-0.16,0-0.319-0.081-0.479-0.226c-0.224-0.242-0.415-0.5-0.575-0.758c-0.16-0.274-0.319-0.58-0.495-0.951 c-1.245,1.483-2.81,2.225-4.694,2.225c-1.341,0-2.411-0.387-3.193-1.161s-1.181-1.806-1.181-3.096c0-1.37,0.479-2.483,1.453-3.321 s2.267-1.258,3.911-1.258c0.543,0,1.102,0.048,1.692,0.129s1.197,0.21,1.836,0.355v-1.177c0-1.225-0.255-2.08-0.75-2.58 c-0.511-0.5-1.373-0.742-2.602-0.742c-0.559,0-1.133,0.064-1.724,0.21c-0.591,0.145-1.165,0.322-1.724,0.548 c-0.255,0.113-0.447,0.177-0.559,0.21c-0.112,0.032-0.192,0.048-0.255,0.048c-0.224,0-0.335-0.161-0.335-0.5v-0.79 c0-0.258,0.032-0.451,0.112-0.564c0.08-0.113,0.224-0.226,0.447-0.339c0.559-0.29,1.229-0.532,2.012-0.726 c0.782-0.21,1.612-0.306,2.49-0.306c1.9,0,3.289,0.435,4.183,1.306c0.878,0.871,1.325,2.193,1.325,3.966v5.224H13.527z M7.045,23.979c0.527,0,1.07-0.097,1.644-0.29c0.575-0.193,1.086-0.548,1.517-1.032c0.255-0.306,0.447-0.645,0.543-1.032 c0.096-0.387,0.16-0.855,0.16-1.403v-0.677c-0.463-0.113-0.958-0.21-1.469-0.274c-0.511-0.064-1.006-0.097-1.501-0.097 c-1.07,0-1.852,0.21-2.379,0.645s-0.782,1.048-0.782,1.854c0,0.758,0.192,1.322,0.591,1.709 C5.752,23.786,6.311,23.979,7.045,23.979z M19.865,25.721c-0.287,0-0.479-0.048-0.607-0.161c-0.128-0.097-0.239-0.322-0.335-0.629 l-3.752-12.463c-0.096-0.322-0.144-0.532-0.144-0.645c0-0.258,0.128-0.403,0.383-0.403h1.565c0.303,0,0.511,0.048,0.623,0.161 c0.128,0.097,0.223,0.322,0.319,0.629l2.682,10.674l2.49-10.674c0.08-0.322,0.176-0.532,0.303-0.629 c0.128-0.097,0.351-0.161,0.639-0.161h1.277c0.303,0,0.511,0.048,0.639,0.161c0.128,0.097,0.239,0.322,0.303,0.629l2.522,10.803 l2.762-10.803c0.096-0.322,0.208-0.532,0.319-0.629c0.128-0.097,0.335-0.161,0.623-0.161h1.485c0.255,0,0.399,0.129,0.399,0.403 c0,0.081-0.016,0.161-0.032,0.258s-0.048,0.226-0.112,0.403l-3.847,12.463c-0.096,0.322-0.208,0.532-0.335,0.629 s-0.335,0.161-0.607,0.161h-1.373c-0.303,0-0.511-0.048-0.639-0.161c-0.128-0.113-0.239-0.322-0.303-0.645l-2.474-10.4 L22.18,24.915c-0.08,0.322-0.176,0.532-0.303,0.645c-0.128,0.113-0.351,0.161-0.639,0.161H19.865z M40.379,26.156 c-0.83,0-1.66-0.097-2.458-0.29c-0.798-0.193-1.421-0.403-1.836-0.645c-0.255-0.145-0.431-0.306-0.495-0.451 c-0.064-0.145-0.096-0.306-0.096-0.451v-0.822c0-0.339,0.128-0.5,0.367-0.5c0.096,0,0.192,0.016,0.287,0.048 c0.096,0.032,0.239,0.097,0.399,0.161c0.543,0.242,1.133,0.435,1.756,0.564c0.639,0.129,1.261,0.193,1.9,0.193 c1.006,0,1.788-0.177,2.331-0.532c0.543-0.355,0.83-0.871,0.83-1.532c0-0.451-0.144-0.822-0.431-1.129 c-0.287-0.306-0.83-0.58-1.612-0.838l-2.315-0.726c-1.165-0.371-2.027-0.919-2.554-1.645c-0.527-0.709-0.798-1.499-0.798-2.338 c0-0.677,0.144-1.274,0.431-1.79s0.671-0.967,1.149-1.322c0.479-0.371,1.022-0.645,1.66-0.838C39.533,11.081,40.203,11,40.906,11 c0.351,0,0.718,0.016,1.07,0.064c0.367,0.048,0.702,0.113,1.038,0.177c0.319,0.081,0.623,0.161,0.91,0.258s0.511,0.193,0.671,0.29 c0.224,0.129,0.383,0.258,0.479,0.403c0.096,0.129,0.144,0.306,0.144,0.532v0.758c0,0.339-0.128,0.516-0.367,0.516 c-0.128,0-0.335-0.064-0.607-0.193c-0.91-0.419-1.932-0.629-3.065-0.629c-0.91,0-1.628,0.145-2.123,0.451 c-0.495,0.306-0.75,0.774-0.75,1.435c0,0.451,0.16,0.838,0.479,1.145c0.319,0.306,0.91,0.613,1.756,0.887l2.267,0.726 c1.149,0.371,1.98,0.887,2.474,1.548s0.734,1.419,0.734,2.257c0,0.693-0.144,1.322-0.415,1.87 c-0.287,0.548-0.671,1.032-1.165,1.419c-0.495,0.403-1.086,0.693-1.772,0.903C41.943,26.043,41.193,26.156,40.379,26.156z" /><path fill="#f90" d="M43.396,33.992c-5.252,3.918-12.883,5.998-19.445,5.998c-9.195,0-17.481-3.434-23.739-9.142 c-0.495-0.451-0.048-1.064,0.543-0.709c6.769,3.966,15.118,6.369,23.755,6.369c5.827,0,12.229-1.225,18.119-3.741 C43.508,32.364,44.258,33.347,43.396,33.992z M45.583,31.477c-0.671-0.871-4.438-0.419-6.146-0.21 c-0.511,0.064-0.591-0.387-0.128-0.726c3.001-2.128,7.934-1.516,8.509-0.806c0.575,0.726-0.16,5.708-2.969,8.094 c-0.431,0.371-0.846,0.177-0.655-0.306C44.833,35.927,46.254,32.331,45.583,31.477z" /></svg>
                            </Box>
                            <Typography sx={TextCss}>AWS</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ border: "2px solid #343148" }} className="center skillPill">
                        <Box sx={{ position: "absolute" }}>
                            <Box sx={skillImage}>
                                <svg viewBox="0 0 48 48" width="100px" height="100px"><path fill="#7cb342" d="M37.216,11.78c-0.023-0.211-0.211-0.305-0.351-0.305s-3.21-0.234-3.21-0.234s-2.132-2.132-2.39-2.343 c-0.234-0.234-0.68-0.164-0.867-0.117c-0.023,0-0.469,0.141-1.195,0.375c-0.726-2.086-1.968-3.984-4.194-3.984h-0.211 C24.187,4.375,23.391,4,22.735,4c-5.155,0-7.639,6.444-8.412,9.725c-2.015,0.633-3.445,1.054-3.609,1.125 c-1.125,0.351-1.148,0.375-1.289,1.429c-0.117,0.797-3.046,23.456-3.046,23.456L29.179,44l12.373-2.671 C41.575,41.282,37.24,11.991,37.216,11.78z M27.937,9.483c-0.562,0.164-1.242,0.375-1.921,0.609V9.671 c0-1.265-0.164-2.296-0.469-3.117C26.718,6.695,27.445,7.984,27.937,9.483L27.937,9.483z M24.117,6.812 c0.305,0.797,0.516,1.922,0.516,3.468v0.234c-1.265,0.398-2.601,0.797-3.984,1.242C21.422,8.804,22.899,7.351,24.117,6.812 L24.117,6.812z M22.617,5.359c0.234,0,0.469,0.094,0.656,0.234c-1.664,0.773-3.421,2.718-4.148,6.655 c-1.101,0.351-2.156,0.656-3.163,0.984C16.806,10.233,18.915,5.359,22.617,5.359z" /><path fill="#558b2f" d="M36.865,11.428c-0.141,0-3.21-0.234-3.21-0.234s-2.132-2.132-2.39-2.343 C31.17,8.757,31.053,8.71,30.96,8.71L29.249,44l12.373-2.671c0,0-4.335-29.338-4.359-29.549 C37.169,11.569,37.005,11.475,36.865,11.428z" /><path fill="#fff" d="M24.792,18.593l-1.475,4.449c0,0-1.337-0.715-2.927-0.715c-2.374,0-2.489,1.498-2.489,1.867 c0,2.028,5.301,2.812,5.301,7.583c0,3.757-2.374,6.177-5.578,6.177c-3.872,0-5.808-2.397-5.808-2.397l1.037-3.411 c0,0,2.028,1.752,3.734,1.752c1.129,0,1.59-0.876,1.59-1.521c0-2.651-4.333-2.766-4.333-7.145c0-3.665,2.628-7.214,7.952-7.214 C23.777,17.994,24.792,18.593,24.792,18.593z" /></svg>
                            </Box>
                            <Typography sx={TextCss}>SHOPIFY</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ border: "2px solid #7fcdcd" }} className="center skillPill">
                        <Box sx={{ position: "absolute" }}>
                            <Box sx={skillImage}>
                                <svg viewBox="0 0 48 48" width="96px" height="96px"><path fill="#1b7ad4" d="M24,4C12.97,4,4,12.976,4,24s8.97,20,19.999,20C35.03,44,44,35.024,44,24S35.03,4,24,4z"/><path d="M24,43.001C13.521,43.001,4.995,34.477,4.995,24c0-10.476,8.525-18.999,19.004-18.999 c10.48,0,19.006,8.523,19.006,18.999C43.005,34.477,34.479,43.001,24,43.001z M20.778,38.651C21.83,38.883,22.912,39,24.001,39 c1.344,0,2.682-0.181,3.984-0.539l-3.676-10.072L20.778,38.651z M9.416,20.488C9.14,21.632,9.001,22.808,9.001,24 c0,4.864,2.259,9.284,6.111,12.093L9.416,20.488z M38.753,21.289c-0.211,0.895-0.507,1.818-0.893,2.783l-3.829,11.082 C37.169,32.322,39,28.265,39,24C39,23.088,38.917,22.182,38.753,21.289z M20.025,30.673l2.442-7.328l-2.265-6.308 c-0.613-0.051-1.086-0.112-1.086-0.112c-0.854-0.053-1.5-0.783-1.47-1.694c0.03-0.921,0.735-1.616,1.641-1.616l0.222,0.014 c1.825,0.125,3.188,0.188,4.051,0.188c1.606,0,4.162-0.195,4.188-0.197c0.001,0,0.002,0,0.003,0c1.006,0,1.715,0.637,1.77,1.549 c0.045,0.76-0.455,1.633-1.473,1.757c-0.078,0.009-0.294,0.034-0.596,0.062l4.483,13.401l0.693-2.308 c0.786-2.016,1.177-3.647,1.177-4.888c0-1.386-0.644-2.439-1.211-3.368c-0.117-0.191-0.228-0.373-0.327-0.546l-0.197-0.318 c-0.778-1.26-1.511-2.449-1.511-3.931c0-1.329,0.831-2.61,2.067-3.307C30.121,9.961,27.091,9,24.001,9 c-4.183,0-8.113,1.719-10.948,4.751c1.342-0.057,2.676-0.159,2.693-0.16l0.134-0.005c0.882,0,1.588,0.668,1.641,1.554 c0.045,0.76-0.457,1.634-1.478,1.757c-0.068,0.008-0.285,0.033-0.592,0.062L20.025,30.673z" opacity=".05"/><path d="M24,42.501C13.796,42.501,5.495,34.202,5.495,24c0-10.2,8.301-18.499,18.504-18.499 C34.203,5.501,42.505,13.8,42.505,24C42.505,34.202,34.204,42.501,24,42.501z M20.126,39.009c1.258,0.326,2.559,0.491,3.875,0.491 c1.571,0,3.128-0.238,4.637-0.709l-4.343-11.898L20.126,39.009z M9.365,18.892C8.791,20.532,8.501,22.245,8.501,24 c0,5.553,2.88,10.554,7.599,13.339L9.365,18.892z M38.622,18.85c-0.106,1.604-0.502,3.227-1.225,5.036l-4.404,12.743 C37.039,33.739,39.5,29.021,39.5,24C39.5,22.245,39.2,20.5,38.622,18.85z M20.026,32.253l2.971-8.915l-2.433-6.775 c-0.747-0.052-1.384-0.134-1.384-0.134c-0.606-0.039-1.055-0.537-1.034-1.182c0.021-0.646,0.512-1.132,1.141-1.132 c0.119,0.005,2.741,0.202,4.272,0.202c1.636,0,4.2-0.196,4.226-0.198c0.003,0,0.005,0,0.008,0c0.714,0,1.191,0.455,1.229,1.081 c0.033,0.545-0.312,1.143-1.034,1.23c-0.028,0.003-0.539,0.064-1.211,0.114l5.185,15.498l1.146-3.816 c0.8-2.048,1.198-3.728,1.198-5.032c0-1.527-0.712-2.693-1.285-3.629c-0.114-0.187-0.223-0.364-0.32-0.534l-0.205-0.332 c-0.739-1.197-1.437-2.328-1.437-3.669c0-1.431,1.13-2.757,2.557-3.191C30.893,9.678,27.52,8.5,24.001,8.5 c-4.695,0-9.141,2.146-12.074,5.785c1.621-0.024,3.834-0.194,3.858-0.196l0.094-0.003c0.624,0,1.104,0.456,1.142,1.083 c0.033,0.546-0.313,1.144-1.039,1.231c-0.027,0.003-0.535,0.064-1.208,0.114L20.026,32.253z" opacity=".07"/><path fill="#fff" d="M23.999,6.001c-9.93,0-18.004,8.075-18.004,17.999S14.072,42.001,24,42.001 c9.929,0,18.005-8.077,18.005-18.001S33.929,6.001,23.999,6.001z M8.001,24c0-2.324,0.497-4.521,1.384-6.512L17.019,38.4 C11.681,35.806,8.001,30.336,8.001,24z M24.001,40c-1.57,0-3.084-0.226-4.52-0.652l4.8-13.952l4.918,13.477 c0.033,0.077,0.078,0.149,0.118,0.22C27.65,39.676,25.862,40,24.001,40z M26.095,16.085c0.962-0.047,1.832-0.152,1.832-0.152 c0.861-0.104,0.757-1.373-0.104-1.316c0,0-2.589,0.2-4.264,0.2c-1.569,0-4.217-0.2-4.217-0.2c-0.86-0.059-0.96,1.26-0.098,1.316 c0,0,0.818,0.106,1.679,0.152l2.603,7.248l-3.5,10.501l-5.931-17.778c0.964-0.047,1.828-0.152,1.828-0.152 c0.866-0.104,0.761-1.373-0.099-1.316c0,0-2.595,0.2-4.264,0.2c-0.304,0-0.383,0.035-0.611-0.039C13.848,10.666,18.612,8,24.001,8 c4.167,0,7.96,1.584,10.804,4.198c-0.071-0.002-0.135-0.008-0.206-0.008c-1.57,0-3.041,1.375-3.041,2.84 c0,1.315,0.763,2.423,1.576,3.752c0.607,1.062,1.67,2.435,1.67,4.412c0,1.375-0.405,3.095-1.219,5.175l-1.599,5.326L26.095,16.085z M32.047,37.835L36.932,23.7c0.913-2.286,1.219-4.109,1.219-5.737c0-0.586-0.037-1.135-0.108-1.645C39.289,18.604,40,21.219,40,24 C40,29.902,36.805,35.063,32.047,37.835z"/></svg>
                            </Box>
                            <Typography sx={TextCss}>WORDPRESS</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box className="wedoRight" sx={{ display: { xs: "none", lg: "block" },height:'400px',padding:'40px 0px' }}>
                    <img src={Wedo} alt="Website & Design" loading='lazy' />
                </Box>
            </Box>
        </>
    )
}
