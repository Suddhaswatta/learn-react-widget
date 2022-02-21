import React from "react";

const SearchWiki = ({term})=>{

    const onChange = searchTerm =>{
        term(searchTerm) // Passes Search term to parent component
    }
    return(
        <React.Fragment>
            <form>
                <input name="search" type="text" onChange={(e)=>{onChange(e.target.value)}}/>
            </form>
        </React.Fragment>
    )

}

export default SearchWiki;