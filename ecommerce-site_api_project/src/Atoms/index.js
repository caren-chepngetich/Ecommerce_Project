const ItemCard = ({title,price,description,image,category})=>{
    return(
        <div className="card">
            <img src={image} alt={`${title} item`}/>
            <h2>{price}</h2>
            <h2>{description}</h2>
            <h2>{category}</h2>

        </div>
    )
}
export default ItemCard