import propTypes from "prop-types"
function one(){}
function Person(props){
    return(
        <div class="person"> 
            <p>Name:{props.name}</p>
            <p>Hobbies:{props.hobbie}</p>
            <p>email:{props.email+"@tlu.ee"}</p>           
        </div>
        
    );
    <>
    <button onClick={one}>Toggle show</button>
    </>
}
Person.propTypes={
    email: propTypes.string,
}
export default Person