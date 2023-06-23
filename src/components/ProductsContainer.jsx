import './App.css'
import Product from './product';

const productsData = [
  {
    photo: './assets/images/dress1.jpg',
    title: 'Frill mini dress in yellow polka dot',
    price:'10.5'
  },
  {
    photo: './assets/images/dress2.jpg',
    title: 'Midi dress in pink ditsy floral',
    price:'149.56'
  },
  {
    photo: './assets/images/dress3.jpg',
    title: 'Midi sundress with ruched front',
    price:'18.9'
  },
  {
    photo: './assets/images/dress4.jpg',
    title: 'cami maxi dress in polka dot',
    price:'25.6'
  },
  {
    photo: './assets/images/dress5.jpg',
    title: 'Midi sundress with shirring detail',
    price:'29.6'
  },
  {
    photo: './assets/images/dress6.jpg',
    title: 'Midi tea dress in blue and red spot',
    price:'49.9'
  }
]

export default function ProductsContainer() {
  const productsCount = 6;
  // console.log(<Product productObj={productsData[0]}/>);
  return (
    <section className='products'>
      <div className='menu'>
        <p>{productsCount} products</p>
        <span>
          <p>Order</p>
          <select>
            <option value="lowest" selected>Lowest</option>
            <option value="highst">Highst</option>
          </select>
        </span>
        <span>
          <p>Filter</p>
          <select>
            <option value="all" selected>All</option>
            <option value="xl">xl</option>
            <option value="sm">sm</option>
            <option value="md">md</option>
            <option value="2xl">2xl</option>
            <option value="3xl">3xl</option>
          </select>
        </span>
     </div>
      <div className='products-wrapper'>
    
        {productsData.map(item=>  <Product productObj={item} />)}
     
      </div>
    </section>
  )
}