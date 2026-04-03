const Card = () =>  {
    return ( 
      <div className="product-card">
      <img src="9.jpg"  className="product-image" />
      <div className="product-details">
        <h3 className="productname">product</h3>
        <div className="seller-info">
          <div><img src="11.jpg" className="seller-profile-pic" /></div>
          <div className="seller-details">
            <p>sellerName</p>
            <span>location</span>
          </div>
        </div>
      </div>
    </div>
)
}
 
export default Card;