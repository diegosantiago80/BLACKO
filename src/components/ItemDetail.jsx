const ItemDetail = ({ item }) => {
    return (
        <div>
            <h1>{item.title}</h1>
            <h2>{item.category}</h2>
            <h3>{item.description}</h3>
            <img src={item.pictureUrl} alt={item.title} /><br></br>
            <b>${item.price}</b>
        </div>
    );
};

export default ItemDetail;
