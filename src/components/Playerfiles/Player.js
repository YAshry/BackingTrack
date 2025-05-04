import React from 'react';
import {Link} from 'react-router-dom';

// CSS Files
import '../StyleSheets/mainstyles.css';
import '../StyleSheets/bootstrapstyles.css';
import player_styles from './player.module.css';

// Images
import album from '../images/tamerhosny.jfif';

// Icons
import {ImPriceTag} from 'react-icons/im';
import {MdFavorite} from 'react-icons/md';
import { IoRepeat } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import {BiRewind, BiFastForward, BiPlay, BiPause, BiShuffle, BiVolumeFull, BiVolumeMute} from 'react-icons/bi';
import {FaCartArrowDown} from 'react-icons/fa';

const Player = () => {
    return(
        <div>

            <div className={`${player_styles.player_row_container}` + ' row m-0 p-2 align-items-center '}>
                <div className={'col-lg-3'}>
                    <div className={'d-flex m-0'}>
                        <img src={album} width={70} height={70} className={`${player_styles.player_image}`}/>
                        <div className={'row m-0 pl-2 pr-2'}>
                            <div className={'col-lg-12 p-0'}>
                                <p className={`${player_styles.track_name}` + ' m-0 '}>3eesh Besho2ak</p>
                                <p className={`${player_styles.track_artist}` + ' m-0 '}>Tamer Hosny</p>
                                <div className={`${player_styles.track_price_tag}` + ' mt-2 pl-1 pr-1 '}>
                                    <ImPriceTag className='mr-1'/>
                                    <p className={'m-0'}><span>EGP</span> 1000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'col-lg-6'}>
                    <div className={`${player_styles.middle_container}` + ' row m-0 '}>
                        
                        <div className={`${player_styles.rewind_icon}` + ' pointer hover_main '}>
                            <BiRewind size={30}/>
                        </div>
                        
                        <div className={`${player_styles.play_icon}` + ' pointer hover_main '}>
                            <BiPlay size={30}/>
                            {/* <BiPause size={30}/> */}
                        </div>
                        
                        <div className={`${player_styles.forward_icon}` + ' pr-2 pointer hover_main '}>
                            <BiFastForward size={30}/>
                        </div>
                        
                        <p className={'m-0'}>02:02 / 03:00</p>
                        
                        <div className={'row m-0 align-items-center pr-2 pl-2'}>
                            <input type="range" min="1" max="100" className={`${player_styles.slider}`}/>
                        </div>
                        
                        <p className={'m-0 pr-2'}>03:00</p>
                        
                        <div className={`${player_styles.shuffle_icon}` + ' pointer hover_main pr-2 '}>
                            <IoRepeat size={24}/>
                        </div>

                        <div className={`${player_styles.shuffle_icon}` + ' pointer hover_main '}>
                            <BiShuffle size={20}/>
                        </div>
                    </div>
                </div>
                <div className={'col-lg-2 ml-auto'}>
                    <div className={'row m-0 align-items-center justify-content-end'} >
                        <div className={`${player_styles.volume_icon}` + ' pointer mr-3 '}>
                            <FaRegHeart size={22}/>
                            {/* <MdFavorite size={22}/> */}
                        </div>
                        <div className={`${player_styles.volume_icon}` + ' pointer mr-3 '}>
                            <BiVolumeFull size={22}/>
                            {/* <BiVolumeMute size={22}/> */}
                        </div>
                        <div className={`${player_styles.addtocart_icon}` + ' pointer '}>
                            <FaCartArrowDown size={22}/>
                        </div>
                    </div>
                </div>

            </div>
        
        </div>
    );
};

export default Player;