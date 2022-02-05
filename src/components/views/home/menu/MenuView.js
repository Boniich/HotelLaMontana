export default function MenuView({title, image,readyIn}){

    return(
    
        <div className="card" style={{width: 18+'rem'}}>
         <img src={image} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">ReadyIn: {readyIn}</p>
                <p className="card-text">Price:</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
 
    )
}