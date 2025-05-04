import React from 'react';
import {Link} from 'react-router-dom';

// CSS Files
import '../StyleSheets/mainstyles.css';
import '../StyleSheets/cardStyles.css';
import '../StyleSheets/bootstrapstyles.css';
import arabic_songs_styles from '../StyleSheets/generalCategories.module.css'; 

// Images
import album from '../images/tamerhosny.jfif';

// Icons
import {RiVoiceprintFill} from 'react-icons/ri';
import {IoMdArrowDropdownCircle} from 'react-icons/io';
import {FiPlayCircle} from 'react-icons/fi';
import {HiDotsCircleHorizontal} from 'react-icons/hi';

const InternationalSongs = () => {

    const tracks = [
        {
            image: album,
            albumName:"ay7aga",
            artist:"tamerhosny",
            songName:"Anything But Ordinslkfm;lsdmf;lsdmf;lmsdf;msdlfary",
            artistName: "Avril Lavigneasndkansldkanskdna;sjlbfajsdkas;dkjn",
            category: "music",
            categoryName: "Music"
        },
        {
            image: album,
            albumName:"ay7aga",
            artist:"tamerhosny",
            songName:"Anything But Ordinslkfm;lsdmf;lsdmf;lmsdf;msdlfary",
            artistName: "Avril Lavigneasndkansldkanskdna;sjlbfajsdkas;dkjn",
            category: "music",
            categoryName: "Music"
        },
        {
            image: album,
            albumName:"ay7aga",
            artist:"tamerhosny",
            songName:"Anything But Ordinslkfm;lsdmf;lsdmf;lmsdf;msdlfary",
            artistName: "Avril Lavigneasndkansldkanskdna;sjlbfajsdkas;dkjn",
            category: "song",
            categoryName: "Song"
        },
        {
            image: album,
            albumName:"ay7aga",
            artist:"tamerhosny",
            songName:"Anything But Ordinslkfm;lsdmf;lsdmf;lmsdf;msdlfary",
            artistName: "Avril Lavigneasndkansldkanskdna;sjlbfajsdkas;dkjn",
            category: "music",
            categoryName: "Music"
        },
        {
            image: album,
            albumName:"ay7aga",
            artist:"tamerhosny",
            songName:"Anything But Ordinslkfm;lsdmf;lsdmf;lmsdf;msdlfary",
            artistName: "Avril Lavigneasndkansldkanskdna;sjlbfajsdkas;dkjn",
            category: "music",
            categoryName: "Music"
        },
        {
            image: album,
            albumName:"ay7aga",
            artist:"tamerhosny",
            songName:"Anything But Ordinslkfm;lsdmf;lsdmf;lmsdf;msdlfary",
            artistName: "Avril Lavigneasndkansldkanskdna;sjlbfajsdkas;dkjn",
            category: "song",
            categoryName: "Song"
        },
        {
            image: album,
            albumName:"ay7aga",
            artist:"tamerhosny",
            songName:"Anything But Ordinslkfm;lsdmf;lsdmf;lmsdf;msdlfary",
            artistName: "Avril Lavigneasndkansldkanskdna;sjlbfajsdkas;dkjn",
            category: "song",
            categoryName: "Song"
        },
        {
            image: album,
            albumName:"ay7aga",
            artist:"tamerhosny",
            songName:"Anything But Ordinslkfm;lsdmf;lsdmf;lmsdf;msdlfary",
            artistName: "Avril Lavigneasndkansldkanskdna;sjlbfajsdkas;dkjn",
            category: "music",
            categoryName: "Music"
        },
        {
            image: album,
            albumName:"ay7aga",
            artist:"tamerhosny",
            songName:"Anything But Ordinslkfm;lsdmf;lsdmf;lmsdf;msdlfary",
            artistName: "Avril Lavigneasndkansldkanskdna;sjlbfajsdkas;dkjn",
            category: "music",
            categoryName: "Music"
        },
        {
            image: album,
            albumName:"ay7aga",
            artist:"tamerhosny",
            songName:"Anything But Ordinslkfm;lsdmf;lsdmf;lmsdf;msdlfary",
            artistName: "Avril Lavigneasndkansldkanskdna;sjlbfajsdkas;dkjn",
            category: "music",
            categoryName: "Music"
        },
        {
            image: album,
            albumName:"ay7aga",
            artist:"tamerhosny",
            songName:"Anything But Ordinslkfm;lsdmf;lsdmf;lmsdf;msdlfary",
            artistName: "Avril Lavigneasndkansldkanskdna;sjlbfajsdkas;dkjn",
            category: "music",
            categoryName: "Music"
        }
    ]

    return(
        <div className='mb-6'>

            {/* Title / Order By */}
            <div className={`${arabic_songs_styles.main_page_title_container}` + " row m-0 mt-4 mb-4 ml-4 mr-4 pb-2 "} style={{width:'470px'}}>
                <div className={' row m-0 align-items-center pr-3'}>
                    <div className={`${arabic_songs_styles.main_page_title_icon}` + ' mr-2 '}>
                        <RiVoiceprintFill/>
                    </div>
                    <p className={`${arabic_songs_styles.main_page_title}` + ' m-0 '}>Vocal / International Songs</p>
                </div>
                <div className={`${arabic_songs_styles.orderby_dropdown}`}>
                    <div className={`${arabic_songs_styles.orderby_title_container}` + ' row m-0 pr-2 pl-2 pt-1 pb-1 '}>
                        <p className={' m-0 mr-1'}>Order By</p>
                        <IoMdArrowDropdownCircle/>
                    </div>
                    <div className={`${arabic_songs_styles.orderby_dropdown_content}`}>
                        <Link to='' className={'link_decoration_none'} style={{borderBottomStyle:'solid'}}>
                            <p className="m-0">Random</p>
                        </Link>
                        <Link to='' className={'link_decoration_none'}>
                            <p className="m-0">Alphabet</p>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Tracks */}
            <div className={'row m-0 pl-2 pr-2 '}>
                
                {tracks.map((data,index)=>{
                    return(
                        <div key={index} className={'col-lg-2 mb-3 p-0'}>
                            <div className={" cardContainer row m-0 w-100 "}>
                                <img alt="test.png" src={data.image} width={200} height={200}/>
                                <div className={' cardIconsContainer row m-0 '}>
                                    <div className={" cardIcons "}>
                                        <FiPlayCircle size={50}/>
                                    </div>
                                    <div className={" cardDropDown "} style={{marginLeft:'auto'}}> 
                                        <div className={" cardIcons "}>
                                            <HiDotsCircleHorizontal size={25}/>
                                        </div>
                                        <div className={" cardDropDownContent "}>
                                            <Link to={`/artist/${data.artist}`} className={'link_decoration_none'} style={{borderBottomStyle:'solid'}}>
                                                <p className="m-0">Go To Artist</p>
                                            </Link>
                                            <Link to={`/album/${data.albumName}`} className={'link_decoration_none'}>
                                                <p className="m-0">Go To Album</p>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className={' song_name m-0 text-white '}>{data.songName}</p>
                            <p className={' artist_name m-0 '}>{data.artistName}</p>
                            <p className={ 
                                    data.category === "music" ? 
                                        ' track_category mb-0 mt-1 pl-2 pr-2 '
                                    :
                                    data.category === "song" &&
                                        ' track_category mb-0 mt-1 pl-2 pr-2 bg-primary '
                                }>
                                {data.categoryName}
                            </p>
                        </div>
                    )
                })}

            </div>

        </div>
    );
};

export default InternationalSongs;