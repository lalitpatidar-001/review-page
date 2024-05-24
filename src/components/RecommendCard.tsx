"use client"

import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { useState } from 'react';

interface RecommendCardProps {
    title: string,
    message: string,
}

const RecommendCard: React.FC<RecommendCardProps> = ({ title, message }) => {
    const [recommened, setRecommend] = useState<boolean | null>(null);
    return (
        <div className='flex flex-col'>
            <h2 className='text-xl text-black font-semibold capitalize'>{title}</h2>
            <span className="text-sm text-gray-400 capitalize">{message}</span>
            <div className='flex gap-10 pl-4'>
                <div
                className='flex gap-1 items-center cursor-pointer'
                onClick={()=>setRecommend(recommened===false?null:false)}
                >
                    {
                        recommened===false ? <ThumbDownIcon
                        style={{color:"red" , fontSize:30}} /> : <ThumbDownOffAltIcon style={{fontSize:30}}/>
                    }
                    <span className='text-sm font-semibold '>No</span>
                </div>
                <div 
                className='flex gap-1 items-center cursor-pointer'
                onClick={()=>setRecommend(recommened?null:true)}
                >
                    {
                        recommened===true ? <ThumbUpIcon style={{color:"green",fontSize:30}} /> : <ThumbUpOffAltIcon 
                        style={{fontSize:30}}
                        />
                    }
                    <span className='text-sm font-semibold '>Yes</span>
                </div>
            </div>
        </div>
    );
}

export default RecommendCard;