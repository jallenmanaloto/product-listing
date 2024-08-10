"use client"

import { useDispatch } from "react-redux";
import FilterIcon from "../icons/FilterIcon";
import { setProductName } from "@/lib/features/product/searchSlice";

export default function SearchBar() {
  const dispatch = useDispatch();

  // handle changes in the search bar
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setProductName(event.target.value));
  }

  return (
    <div className="flex justify-between items-center gap-4 px-4 py-7">
      <input
        className="flex-grow border border-black px-2 py-1 rounded outline-none"
        type="text"
        placeholder="Search product.."
        onChange={handleInputChange}
        aria-label="Search product"
      />
      <h1>
        <FilterIcon />
      </h1>
    </div>
  )
}
