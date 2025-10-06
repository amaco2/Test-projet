import { Minus, Plus, Star, Trash2, X } from 'lucide-react';
import { handelClickClear, handelClickRemove, pannierCard } from './Header';
import { useState } from 'react';
import './assets/mohamed-hassouna-N4gtuEZ5gWc-unsplash (1).jpg';
import './assets/jonathan-farber-ubkpJUe0I5s-unsplash.jpg';
import "./assets/katie-rosario-QNyRp21hb5I-unsplash.jpg";
import "./assets/rodion-kutsaiev-x4z7GiV5_-0-unsplash.jpg";
import "./assets/amin-ramezani-E43znrodEXg-unsplash.jpg";
import "./assets/deva-williamson-S2jw81lfrG0-unsplash.jpg";
import ListCommandeItems from './UI/LisItemsPannier';
import './Styles/Card.css'




function ListCommande({ ProductItems, nbrItems, setNbrItems, addCountItems, setItems }) {
  //    Suppresion des doublons dans le tableau
           function deleteDoublonItem(array) {
    return [...new Set(array.map(produit=>JSON.stringify(produit, null, 2)))]
    .map(produit=>JSON.parse(produit));
    // return array.filter((items, index, arr)=> index === arr[arr.length - 1] || items.nom !== ProductItems[index + 1].nom)
}
const productsItems = deleteDoublonItem([...ProductItems])
  return (
    <>
      <section className='pannier-card' ref={pannierCard} onClick={(e)=>{
        e.stopPropagation();
      }}>
        <X size={20} onClick={handelClickClear} style={{float: "left",marginTop:'-50px',cursor:"pointer"}}/>
          <ListCommandeItems ProductItems={productsItems}
            nbrItems={nbrItems}
            setNbrItems={setNbrItems} 
            addCountItems={addCountItems}
            setItems={setItems}
            />
      </section>
    </>
  )
}

export default ListCommande;
