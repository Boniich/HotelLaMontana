import "./TitleAndDescription.css"
export const TitleAndDescription = ({title,description}) =>{

    return(
        <div className='title-description'>
        <h1>{title}</h1>
        <p>{description}</p>
    </div>
    )
}