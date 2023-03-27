
import './App.css';
import NavBar from "./components/NavBar";
import Caroussela from './components/Caroussela';
import MediaCard from "./components/MediaCard"
import { Categories } from './components/Categories';

function App() {

  const productsArray= [

    {
      photoUrl:"https://media.terminalx.com/pub/media/catalog/product/cache/92af6b9c945798a7e3b64d91033084b3/z/5/z536010030-11679472411.jpg",
      productsDescritpion:"מכנסיים מחויטים עם גומי",
      quantuity:10
    },
    {
      photoUrl:"https://media.terminalx.com/pub/media/catalog/product/cache/92af6b9c945798a7e3b64d91033084b3/z/5/z536010030-11679472411.jpg",
      productsDescritpion:"מכנסיים מחויטים עם גומי",
      quantuity:10
    }
    ,
    {
      photoUrl:"https://media.terminalx.com/pub/media/catalog/product/cache/92af6b9c945798a7e3b64d91033084b3/z/5/z536010030-11679472411.jpg",
      productsDescritpion:"מכנסיים מחויטים עם גומי",
      quantuity:10
    }
    , 
    {
      photoUrl:"https://media.terminalx.com/pub/media/catalog/product/cache/92af6b9c945798a7e3b64d91033084b3/z/5/z536010030-11679472411.jpg",
      productsDescritpion:"מכנסיים מחויטים עם גומי",
      quantuity:10
    },
    {
      photoUrl:"https://media.terminalx.com/pub/media/catalog/product/cache/92af6b9c945798a7e3b64d91033084b3/z/5/z536010030-11679472411.jpg",
      productsDescritpion:"מכנסיים מחויטים עם גומי",
      quantuity:10
    },
    {
      photoUrl:"https://media.terminalx.com/pub/media/catalog/product/cache/92af6b9c945798a7e3b64d91033084b3/z/5/z536010030-11679472411.jpg",
      productsDescritpion:"מכנסיים מחויטים עם גומי",
      quantuity:10
    }
    ,
    {
      photoUrl:"https://media.terminalx.com/pub/media/catalog/product/cache/92af6b9c945798a7e3b64d91033084b3/z/5/z536010030-11679472411.jpg",
      productsDescritpion:"מכנסיים מחויטים עם גומי",
      quantuity:10
    }
    , 
    {
      photoUrl:"https://media.terminalx.com/pub/media/catalog/product/cache/92af6b9c945798a7e3b64d91033084b3/z/5/z536010030-11679472411.jpg",
      productsDescritpion:"מכנסיים מחויטים עם גומי",
      quantuity:10
    },
    {
      photoUrl:"https://media.terminalx.com/pub/media/catalog/product/cache/92af6b9c945798a7e3b64d91033084b3/z/5/z536010030-11679472411.jpg",
      productsDescritpion:"מכנסיים מחויטים עם גומי",
      quantuity:10
    }
    , 
    {
      photoUrl:"https://media.terminalx.com/pub/media/catalog/product/cache/92af6b9c945798a7e3b64d91033084b3/z/5/z536010030-11679472411.jpg",
      productsDescritpion:"מכנסיים מחויטים עם גומי",
      quantuity:10
    }
  ]

  return (
    <div className="App">
       <NavBar />
       <Caroussela />
       <div className='main-page-container'>
            <div className='app-cards-container'>

                {
                  productsArray.map((item,index)=>{

                  return (
                    <MediaCard Url={item.photoUrl} description={item.productsDescritpion} quantuity={item.quantuity}/>
                    )

                  })
                  }

            </div>
            <div className='categauris-app-container'>
                 <Categories />
            </div>
       </div>
    
    </div>
  );
}

export default App;
