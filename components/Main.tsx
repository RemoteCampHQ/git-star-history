import { useStarsData, useStarHistory } from 'hooks';
import Link from 'next/link';

export const Main = ({ searchBox, chart }: { searchBox?: React.ReactNode,chart: React.ReactNode  }) => {
  useStarHistory();
  const { total } = useStarsData();

  return (
    <section className="w-full flex flex-col items-center bg-bearlyWhite">
      <div className="w-full flex justify-center">
      </div>
      <Link href="/contact">
        <div className="md:w-[60%] my-2 text-lg sm:w-full flex sm:flex-col sm:items-center md:justify-between items-center">
        </div>
      </Link>

      <div className="md:w-[60%] min-h-[80vh] sm:w-full">{searchBox}</div>
      <div>{chart}</div>
      {/* <BackTop>
        <button className="btn btn-circle btn-outline">UP</button>
      </BackTop> */}
    </section>
  );
};
