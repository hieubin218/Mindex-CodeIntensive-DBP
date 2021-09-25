import React from "react";
import { FormControl, InputLabel, NativeSelect, FormHelperText } from "@material-ui/core";



// Props value và onHandleSelectedCountry được truyền từ Component Cha vào Compt Con 
const CountriesDropBar = ({selectedCountryId, onHandleSelectedCountry, countries}) => {
    return (
        <FormControl style={{marginTop: "30px"}}>


            <InputLabel htmlFor="country-selector" shrink>
                Countries or Territories
            </InputLabel>

            {/* <NativeSelect> tag has attribute value, onChange,... */}
            {/*get id from inputProps and stick in htmlFor to output the country information* */}

            {/** value={} là giá trị của dropbar khi user chọn country và display trên dropbar */}

            <NativeSelect value={selectedCountryId}
                          onChange={onHandleSelectedCountry}
                          inputProps={{
                              name: "country",
                              id: "country-selector",
                          }}>

                            {
                                countries.map(({Country, ISO2}) => {
                                return (
                                    <option key={ISO2} value={ISO2.toLowerCase()}>
                                        {Country}
                                    </option>
                                )
                                })
                            }
            </NativeSelect>

            <FormHelperText>
                Select Your Country/Territory
            </FormHelperText>

        </FormControl>

    )

};

export default CountriesDropBar;



/** NOTE:
 * thuộc tính Shrink trong <InputLabel> có tác dụng làm label thu nhỏ lại
 * cần import những thẻ tag vào @material-UI 
 */




// const CountriesDropBar = (props) => {
//     // receive props countries [] from parents component
//     const {countries, isLoading, onHandleSelectedCountry} = props;
   

//     return (
//         <div>
//             <select
//                     style={{width: "220px",
//                             height: "40px"}}
//                     placehoder="Select a country"
//                     defaultValue="vietnam"
//                     onChange={() => onHandleSelectedCountry}
//             >
//                 {
//                     countries &&
//                         countries.map((eachCountry) => {
//                             // Extract key value from received props
//                             const {Slug, Country} = eachCountry;
//                             return (
//                                 <option key={Slug} value={Slug}>
//                                     {Country}
//                                 </option>
//                             );
//                         })
//                 }      
//             </select>
//         </div>
//     )
// }
// export default CountriesDropBar;