// const filterReducer = (state, action) => {
//     switch (action.type) {
//       case "LOAD_FILTER_PRODUCTS":
//         return {
//           ...state,
//           filter_products: [...action.payload],
//           all_products: [...action.payload],
//         };
                                      
//       case "SET_GRID_VIEW":
//         return {
//           ...state,
//           grid_view: true,
//         };
  
//         case "SET_List_VIEW":
//             return{
//                 ... state,
//                 grid_view: false,
//             }

        
//         // case "SHORTING_PRODUCTS":
//         //  let newSortData;
//         //  let tempSortProduct = [...action.payload]

//         // if(state.sorting_value === "a-z"){
//         //     newSortData = tempSortProduct.sort((a, b) => 
//         //         a.name.localeCompareI(b.name )
//         //     );
//         // }
//         // if(state.sorting_value === "lowest"){
//         //   const sortingProducts = (a , b)  => {
//         //    return a.prices - b.prices;
//         //   };
//         //   newSortData = tempSortProduct.sort(sortingProducts);
//         // }
//         // if(state.sorting_value === "highest"){
//         //   const sortingProducts = (a , b)  => {
//         //    return b.prices - a.prices;
//         //   };
//         //   newSortData = tempSortProduct.sort(sortingProducts);
//         // }
//         // if(state.sorting_value === "z-a"){
//         //     newSortData = tempSortProduct.sort((a, b) => 
//         //         b.name.localeCompareI(a.name )
//         //     );
//         // }
//         // return{
//         //     ...state,
//         //     filter_products: newSortData
//         // }
//       default:
//         return state;
//     }
//   };
  
//   export default filterReducer;