import create from "zustand";
import { useState, useEffect } from "react";
import { getRepoInfo, getRepoStarInfo } from "apis";

export type Star = {};

export type StarsState = {
  pageNum: number;
  pageSize: number;
  total: number;
  stars: any[];
  setPageNumber: (pageNum: number) => void;
  setTotal: (total: number) => void;
  setPageSize: (pageSize: number) => void;
  setStars: (stars: any[]) => void;
};

export const useStarsData = create<StarsState>((set) => {
  return {
    pageNum: 0,
    pageSize: 30,
    total: 0,
    stars: [],
    setPageNumber: (pageNum: number) => set((state) => ({ ...state, pageNum })),
    setPageSize: (pageSize: number) => set((state) => ({ ...state, pageSize })),
    setTotal: (total: number) => set((state) => ({ ...state, total })),
    setStars: (stars: any[]) => set((state) => ({ ...state, stars })),
  };
});

export const useStarHistory = () => {
  const { setPageNumber, setPageSize, setTotal, setStars } = useStarsData();

  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  useEffect(() => {
    const fetchStars = async () => {
      setIsFetching(true);
      // const repoInfo = await getRepoInfo("bytebase", "star-history");
      const repoStarsInfo = await getRepoStarInfo("bytebase", "star-history");
      console.log( repoStarsInfo);

      setIsFetching(false);
      setIsSuccess(true);
    };
    fetchStars();
  }, []);
  return {
    isSuccess,
    isFetching,
  };
};
