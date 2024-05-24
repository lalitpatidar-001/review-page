"use client"
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import { useState } from 'react';
import yellow_star from "@/assets/yellow-star.png"
import Image from 'next/image';

interface RatingCardProps {
title:string,
message:string,
}

const RatingCard: React.FC<RatingCardProps> = ({title,message}) => {

    const [ratings, setRatings] = useState<number>(null);

    const handleClickRating = (rating: number) => {
        setRatings(rating)
    }

    return (
        <div>
            <h2 className='text-xl text-black font-semibold capitalize'>{title}</h2>
            <span className="text-sm text-gray-400 capitalize">{message}</span>
            <div className='flex gap-2 items-center pl-4'>

                {
                    [0, 1, 2, 3, 4].map((index) => (
                        <div 
                        className='cursor-pointer'
                        onClick={()=>handleClickRating(index+1)
                        }
                        >
                            {ratings >= index+1 ? <StarIcon style={{ color: "#FFD14F", fontSize: 30 }} /> : <StarBorderIcon style={{ fontSize: 30 }} />}
                        </div>
                    ))

                }

            </div>
        </div>
    );
}

export default RatingCard;