import RatingCard from "./RatingCard";
import RecommendCard from "./RecommendCard";

interface ReviewCardProps {
    
}
 
const ReviewCard: React.FC<ReviewCardProps> = () => {
    return (  
        <div className="h-screen w-full flex items-center justify-center p-3">
            <div className="shadow-md drop-shadow-sm rounded-xl  drop-shadow-black shadow-black h-[80vh] w-full p-2">
               <h1 className="text-2xl font-bold ">Leave a review</h1>
               <div className="p-3 flex flex-col gap-3">
                    <RatingCard
                    title="Safety"
                    message="Rate our service for safety assurance."
                    />
                    <RatingCard
                    title="Communication"
                    message="Please rate our service's communication effectiveness."
                    />

                    <RecommendCard
                    title="Would you recommened Trausti?"
                    message="do you liked trausti and recommend to other"
                    />
               </div>
            </div>
        </div>
    );
}
 
export default ReviewCard;