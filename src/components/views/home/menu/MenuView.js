export default function MenuView({id,title, image, deleteFromMenu,price,readyIn,healthScore}){

    return(
    
        <div className="card" style={{width: 18+'rem'}}>
         <img src={image} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5> 
            </div>
            <div className="card-body">
                <p className="card-title">Price: $ {price}</p> 
                <p className="card-title">Ready in: {readyIn} min</p> 
                <p className="card-title">HealtScore: {healthScore}</p> 
            </div>
            <div className="card-body">
                <button className="btn delete-btn" onClick={() => deleteFromMenu(id)}>Eliminar</button>
            </div>
        </div>
 
    )
}