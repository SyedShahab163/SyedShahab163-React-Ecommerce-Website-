import { createContext, useContext, useReducer, useEffect } from "react";
import { useProductContext } from "./ContextProduct"
import reducer from "../reducer/filterReducers";
// import FilterContext from "../Context/filter_context.js";

const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: false,
  sorting_value: "lowest",
  filters: {
    text: " ",
    category:"all",
    company: "all",
    colors: "all",
  }

};

export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();

  const [state, dispatch] = useReducer(reducer, initialState);

  // to set the grid view
  const setGridView = () => {
    return dispatch({ type: "SET_GRID_VIEW" });
  };

  const setListView = () => {
    return dispatch({ type: "SET_List_VIEW" });
  };
    //  shoring function
     const sorting = (event) => { 
      let userValue = event.target.value;
       dispatch({type: "GET_SORT_VALUE", payload: userValue});
     };

     //update the filter values
     const updateFiltersValue= (event) => {
      let name = event.target.name;
      let value = event.target.value;
      
      
      return dispatch ({type: "UPDATE_FILTERS_VALUE",payload: {name, value}});
     };

     useEffect(() => {
      dispatch({ type: "FILTER_PRODUCTS" });
      dispatch({ type: "SORTING_PRODUCTS" });
    }, [products, state.sorting_value, state.filters]); 

    useEffect(() => {
      dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
    }, [products]);

  return (
    <FilterContext.Provider
    value={{
      ...state,
      setGridView,
      setListView,
      sorting,
      updateFiltersValue,
    }}>
    {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};