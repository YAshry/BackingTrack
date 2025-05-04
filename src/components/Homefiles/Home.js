import React from 'react';
import {Link} from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';

// CSS Files
import '../StyleSheets/mainstyles.css';
import '../StyleSheets/cardStyles.css';
import '../StyleSheets/bootstrapstyles.css';
import home_styles from '../Homefiles/home.module.css';

// Images
import bg_image from '../images/bg-image.jpeg';
import search_logo from '../images/search.png';
import album from '../images/tamerhosny.jfif';

// Icons
import {CgTrending} from 'react-icons/cg';
import {FiPlayCircle} from 'react-icons/fi';
import {HiDotsCircleHorizontal} from 'react-icons/hi';
import {GiMusicalScore} from 'react-icons/gi';

const Home = () => {
    
    const trendingSections = [
        [
            {
                image:album,
                songName:"Anything But Ordinslkfm;lsdmf;lsdmf;lmsdf;msdlfary",
                artistName:"Avril Lavigneasndkansldkanskdna;sjlbfajsdkas;dkjn",
                category:"music",
                categoryName:"Music",
            },
            {
                image:album,
                songName:"Anything But Ordinslkfm;lsdmf;lsdmf;lmsdf;msdlfary",
                artistName:"Avril Lavigneasndkansldkanskdna;sjlbfajsdkas;dkjn",
                category:"song",
                categoryName:"Song",
            },
            {
                image:album,
                songName:"Anything But Ordinslkfm;lsdmf;lsdmf;lmsdf;msdlfary",
                artistName:"Avril Lavigneasndkansldkanskdna;sjlbfajsdkas;dkjn",
                category:"music",
                categoryName:"Music",
            },
            {
                image:album,
                songName:"Anything But Ordinslkfm;lsdmf;lsdmf;lmsdf;msdlfary",
                artistName:"Avril Lavigneasndkansldkanskdna;sjlbfajsdkas;dkjn",
                category:"song",
                categoryName:"Song",
            },
            {
                image:album,
                songName:"Anything But Ordinslkfm;lsdmf;lsdmf;lmsdf;msdlfary",
                artistName:"Avril Lavigneasndkansldkanskdna;sjlbfajsdkas;dkjn",
                category:"music",
                categoryName:"Music",
            },
        ],

        [
            {
                image:album,
                songName:"Anything But Ordinslkfm;lsdmf;lsdmf;lmsdf;msdlfary",
                artistName:"Avril Lavigneasndkansldkanskdna;sjlbfajsdkas;dkjn",
                category:"song",
                categoryName:"Song",
            },
            {
                image:album,
                songName:"Anything But Ordinslkfm;lsdmf;lsdmf;lmsdf;msdlfary",
                artistName:"Avril Lavigneasndkansldkanskdna;sjlbfajsdkas;dkjn",
                category:"song",
                categoryName:"Song",
            },
            {
                image:album,
                songName:"Anything But Ordinslkfm;lsdmf;lsdmf;lmsdf;msdlfary",
                artistName:"Avril Lavigneasndkansldkanskdna;sjlbfajsdkas;dkjn",
                category:"music",
                categoryName:"Music",
            },
            {
                image:album,
                songName:"Anything But Ordinslkfm;lsdmf;lsdmf;lmsdf;msdlfary",
                artistName:"Avril Lavigneasndkansldkanskdna;sjlbfajsdkas;dkjn",
                category:"song",
                categoryName:"Song",
            },
            {
                image:album,
                songName:"Anything But Ordinslkfm;lsdmf;lsdmf;lmsdf;msdlfary",
                artistName:"Avril Lavigneasndkansldkanskdna;sjlbfajsdkas;dkjn",
                category:"music",
                categoryName:"Music",
            }
        ]
    ]

    const recentlyCreatedSection = [
        [
            {
                image:album,
                songName:"Anything But Ordinslkfm;lsdmf;lsdmf;lmsdf;msdlfary",
                artistName:"Avril Lavigneasndkansldkanskdna;sjlbfajsdkas;dkjn",
                category:"music",
                categoryName:"Music",
            },
            {
                image:album,
                songName:"Anything But Ordinslkfm;lsdmf;lsdmf;lmsdf;msdlfary",
                artistName:"Avril Lavigneasndkansldkanskdna;sjlbfajsdkas;dkjn",
                category:"song",
                categoryName:"Song",
            },
            {
                image:album,
                songName:"Anything But Ordinslkfm;lsdmf;lsdmf;lmsdf;msdlfary",
                artistName:"Avril Lavigneasndkansldkanskdna;sjlbfajsdkas;dkjn",
                category:"music",
                categoryName:"Music",
            },
            {
                image:album,
                songName:"Anything But Ordinslkfm;lsdmf;lsdmf;lmsdf;msdlfary",
                artistName:"Avril Lavigneasndkansldkanskdna;sjlbfajsdkas;dkjn",
                category:"song",
                categoryName:"Song",
            },
            {
                image:album,
                songName:"Anything But Ordinslkfm;lsdmf;lsdmf;lmsdf;msdlfary",
                artistName:"Avril Lavigneasndkansldkanskdna;sjlbfajsdkas;dkjn",
                category:"music",
                categoryName:"Music",
            },
        ],

        [
            {
                image:album,
                songName:"Anything But Ordinslkfm;lsdmf;lsdmf;lmsdf;msdlfary",
                artistName:"Avril Lavigneasndkansldkanskdna;sjlbfajsdkas;dkjn",
                category:"song",
                categoryName:"Song",
            },
            {
                image:album,
                songName:"Anything But Ordinslkfm;lsdmf;lsdmf;lmsdf;msdlfary",
                artistName:"Avril Lavigneasndkansldkanskdna;sjlbfajsdkas;dkjn",
                category:"song",
                categoryName:"Song",
            },
            {
                image:album,
                songName:"Anything But Ordinslkfm;lsdmf;lsdmf;lmsdf;msdlfary",
                artistName:"Avril Lavigneasndkansldkanskdna;sjlbfajsdkas;dkjn",
                category:"music",
                categoryName:"Music",
            },
            {
                image:album,
                songName:"Anything But Ordinslkfm;lsdmf;lsdmf;lmsdf;msdlfary",
                artistName:"Avril Lavigneasndkansldkanskdna;sjlbfajsdkas;dkjn",
                category:"song",
                categoryName:"Song",
            },
            {
                image:album,
                songName:"Anything But Ordinslkfm;lsdmf;lsdmf;lmsdf;msdlfary",
                artistName:"Avril Lavigneasndkansldkanskdna;sjlbfajsdkas;dkjn",
                category:"music",
                categoryName:"Music",
            }
        ]
    ]

    return(
        <div className='mb-6'>
            
            {/* Search Bar */}
            <div className={`${home_styles.search}` + ' row m-0 mt-5 mb-5 '}>
                <input type="text" placeholder='Search for backing tracks'/>
                <div className={`${home_styles.search_icon}`}>
                    <img src={search_logo} width={25} height={25}/>
                </div>
            </div>

            {/* Section 1 Background Image */}
            <div className={'row m-0 justify-content-center mb-5 '}>
                <div className={`${home_styles.quote_design}`}>
                    <img src={bg_image} width={900} height={400}/>
                    <div className={`${home_styles.quote_text}`}>
                        <p>Play And Sing With Our<br/> Professional Backing Tracks</p>
                    </div>
                </div>
            </div>
            
            {/* Trending Section */}
            <section className='mb-5'>
                
                <div className={`${home_styles.section_title_container}` + ' row w-100 m-0 pl-4 pr-4 mb-4 align-items-center'}>
                    <div className={`${home_styles.section_icon}` + ' mr-2 '}>
                        <CgTrending/>
                    </div>
                    <p className={`${home_styles.section_title}` + ' m-0 '}>Trending Now</p>
                </div>

                <Carousel className='mt-3' indicators={false}> 
                    {trendingSections.map((section, index)=>{
                        return(
                            <Carousel.Item key={index} interval={4000} className='pl-2 pr-5 justify-content-center'>
                                <div className={'row m-0 pl-4 pr-4 justify-content-center'}>

                                    {section.map((item, index)=>{
                                        return(
                                            <div key={index} className={'col-lg-2 p-0'}>
                                                <div className={" row m-0 w-100 cardContainer "}>
                                                    <img src={item.image} width={200} height={200}/>
                                                    <div className={' row m-0 cardIconsContainer '}>
                                                        <div className={" cardIcons "}>
                                                            <FiPlayCircle size={50}/>
                                                        </div>
                                                        <div className={" cardDropDown "} style={{marginLeft:'auto'}}> 
                                                            <div className={" cardIcons "}>
                                                                <HiDotsCircleHorizontal size={25}/>
                                                            </div>
                                                            <div className={" cardDropDownContent "}>
                                                                <Link to='/artist' className={'link_decoration_none'} style={{borderBottomStyle:'solid'}}>
                                                                    <p className="m-0">Go To Artist</p>
                                                                </Link>
                                                                <Link to='/album' className={'link_decoration_none'}>
                                                                    <p className="m-0">Go To Album</p>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className={' song_name m-0 text-white '}>{item.songName}</p>
                                                <p className={' artist_name m-0 '}>{item.artistName}</p>
                                                <p className={ 
                                                        item.category == "music" ? 
                                                            ' track_category mb-0 mt-1 pl-2 pr-2 '
                                                        :
                                                        item.category == "song" &&
                                                            ' track_category mb-0 mt-1 pl-2 pr-2 bg-primary '
                                                    }>
                                                    {item.categoryName}
                                                </p>
                                                
                                            </div>
                                        )
                                    })}                

                                </div>
                            </Carousel.Item>
                        )
                    })}
                </Carousel>

            </section>

            {/* Recently Created */}
            <section>

                <div className={`${home_styles.section_title_container}` + ' row w-100 m-0 pl-4 pr-4 mb-4 align-items-center'}>
                    <div className={`${home_styles.section_icon}` + ' mr-2 '}>
                        <GiMusicalScore/>
                    </div>
                    <p className={`${home_styles.section_title}` + ' m-0 '}>Newly Developed</p>
                </div>

                <Carousel className='mt-3' indicators={false}> 
                    {recentlyCreatedSection.map((section, index)=>{
                        return(
                            <Carousel.Item key={index} interval={4000} className='pl-2 pr-5 justify-content-center'>
                                <div className={'row m-0 pl-4 pr-4 justify-content-center'}>

                                    {section.map((item, index)=>{
                                        return(
                                            <div key={index} className={'col-lg-2 p-0'}>
                                                <div className={" row m-0 w-100 cardContainer "}>
                                                    <img src={item.image} width={200} height={200}/>
                                                    <div className={' row m-0 cardIconsContainer '}>
                                                        <div className={" cardIcons "}>
                                                            <FiPlayCircle size={50}/>
                                                        </div>
                                                        <div className={" cardDropDown "} style={{marginLeft:'auto'}}> 
                                                            <div className={" cardIcons "}>
                                                                <HiDotsCircleHorizontal size={25}/>
                                                            </div>
                                                            <div className={" cardDropDownContent "}>
                                                                <Link to='/artist' className={'link_decoration_none'} style={{borderBottomStyle:'solid'}}>
                                                                    <p className="m-0">Go To Artist</p>
                                                                </Link>
                                                                <Link to='/album' className={'link_decoration_none'}>
                                                                    <p className="m-0">Go To Album</p>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className={' song_name m-0 text-white '}>{item.songName}</p>
                                                <p className={' artist_name m-0 '}>{item.artistName}</p>
                                                <p className={ 
                                                        item.category == "music" ? 
                                                            ' track_category mb-0 mt-1 pl-2 pr-2 '
                                                        :
                                                        item.category == "song" &&
                                                            ' track_category mb-0 mt-1 pl-2 pr-2 bg-primary '
                                                    }>
                                                    {item.categoryName}
                                                </p>
                                                
                                            </div>
                                        )
                                    })}                

                                </div>
                            </Carousel.Item>
                        )
                    })}
                </Carousel>

            </section>

        </div>
    );
};

export default Home;