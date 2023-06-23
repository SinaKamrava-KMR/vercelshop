import './App';


export default function product(props) {
  console.log(props);
  const data = props.productObj;
  // const data ={};
  return (
    <div className='product'>
      
      <img src={data.photo} alt="product" />
      <p>{ data.title}</p>
      <div>
        <p>${data.price}</p>
        <button>Add To Cart</button>
      </div>
    </div>
  )
}