import "./SearchBar.css"
function SearchBar({type , placeholder ,onChange}){
    return(
        <input type={type} placeholder={placeholder} onChange={onChange} />
    )
}
export default SearchBar; 