import { useState, useEffect } from "react";
import { db } from "../../firebase";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ReviewCarousel() {
    const [reviews, setReviews] = useState([]);
    const [startIndex, setStartIndex] = useState(0);
    const reviewsPerPage = 2;

    useEffect(() => {
        const fetchReviews = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "reviews"));
            const fetchedReviews = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
            }));
            setReviews(fetchedReviews);
        } catch (error) {
            console.error("Error fetching reviews:", error);
        }
        };

        fetchReviews();
    }, []);

    const handleNext = () => {
        if (startIndex + reviewsPerPage < reviews.length) {
        setStartIndex(startIndex + reviewsPerPage);
        }
    };

    const handlePrev = () => {
        if (startIndex - reviewsPerPage >= 0) {
        setStartIndex(startIndex - reviewsPerPage);
        }
    };

    return (
        <div className="bg-[#f5f2ed] py-10 px-4 md:px-8 mt-10 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-[#4b2e24] mb-6">
            Recent Reviews
        </h2>

        <div className="flex justify-between items-center gap-4">
            <button onClick={handlePrev} className="text-[#4b2e24] hover:text-black">
            <ChevronLeft size={32} />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
            {reviews
                .slice(startIndex, startIndex + reviewsPerPage)
                .map((review) => (
                <div
                    key={review.id}
                    className="border border-[#d2b48c] bg-white p-4 rounded-lg shadow-sm"
                >
                    <div className="text-[#4b2e24] font-semibold text-lg mb-2">
                    {review.name}
                    </div>
                    <div className="text-yellow-500 mb-2">
                    {"★".repeat(review.rating)}{" "}
                    <span className="text-sm text-gray-500 ml-2">
                        {review.date}
                    </span>
                    </div>
                    <p className="text-gray-700 text-sm italic">"{review.comment}"</p>
                </div>
                ))}
            </div>

            <button onClick={handleNext} className="text-[#4b2e24] hover:text-black">
            <ChevronRight size={32} />
            </button>
        </div>
        </div>
    );
}
