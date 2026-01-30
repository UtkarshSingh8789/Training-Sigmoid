const style = {width: 200,backgroundColor: "white",borderRadius: 10,borderColor: "gray",borderWidth: 1,padding: 20};
export default function Product({id,product_name,product_price,product_category,product_img}) {
  return (
    <div style={style}>
      <div style={{ display: "flex" }}>
        <img
          src={product_img}
          alt={product_name}
          style={{
            width: 30,
            height: 30,
            borderRadius: 20
          }}
        />
        <div style={{ fontSize: 10, marginLeft: 10 }}>
          <b>{product_name}</b>
          <div>{product_category}</div>
          <div style={{ fontWeight: "bold", marginTop: 4 }}>
            ₹ {product_price}
          </div>
        </div>
      </div>
    </div>
  );
}
