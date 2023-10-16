import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const CardSkeleton = ({ cards }) => {
  return Array(cards)
    .fill(0)
    .map((_, i) => (
      <div key={i} className="country">
        <div className="">
          <Skeleton className="country__img bg-[#e2e2e2]" />
        </div>
        <div className="p-4">
          <Skeleton count={4} className="country__row" />
        </div>
      </div>
    ));
};

export default CardSkeleton;
