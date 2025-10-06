import { useState } from 'react';
import bread1 from './assets/mohamed-hassouna-N4gtuEZ5gWc-unsplash (1).jpg';
import vienne from './assets/jonathan-farber-ubkpJUe0I5s-unsplash.jpg';
import gateau1 from "./assets/katie-rosario-QNyRp21hb5I-unsplash.jpg";
import boisson1 from "./assets/rodion-kutsaiev-x4z7GiV5_-0-unsplash.jpg";
import boisson2 from "./assets/amin-ramezani-E43znrodEXg-unsplash.jpg";
import cake from "./assets/deva-williamson-S2jw81lfrG0-unsplash.jpg";
import { Minus, Plus, Star, Trash2 } from 'lucide-react';
import './Styles/ProduitPhares.css';
import React from 'react';
import ListCommande from './Card.jsx';
import Button from './UI/BtnAdd.jsx';
import { addClassNameHidden } from './Header.jsx';

// Variable Items 
const ProductItems = [
    {
        src: bread1,
        categorie: "Pain quotidien",
        nom: "Baguette Traditionnelle",
        description: "Pain frais cuit au four traditionnel, croustillant à souhait",
        nbrEtoile: "4.9",
        prix: 135,
        id: 1
    },
    {
        src: vienne,
        categorie: "Viennoiserie",
        nom: "Croissant au Beurre",
        description: "Croissant feuilleté au beurre, parfait pour le petit-déjeuner",
        nbrEtoile: "4.7",
        prix: 200,
        id: 2
    },
    {
        src: gateau1,
        categorie: "Gâteaux",
        nom: "Gâteaux a la fraise",
        description: "Gâteau au chocolat maison pour 6-8 personnes",
        nbrEtoile: "4.8",
        prix: 10000,
        id: 3
    },
    {
        src: boisson1,
        categorie: "Boisson",
        nom: "Jus de fruits",
        description: "simple à boire , accésible à tous, sucré et frais",
        nbrEtoile: "4.3",
        prix: 7000,
        id: 4
    },
    {
        src: boisson2,
        categorie: "Boisson",
        nom: "jus au miel",
        description: "rafraîchissement sucré et vitaminé, enrichie en vitamine E",
        nbrEtoile: "4.5",
        prix: 7000,
        id: 5
    },
    {
        src: cake,
        categorie: "Gâteaux",
        nom: "Cake",
        description: "cake suré, utile pour augmenter les calorie et faire le plein d'énergie",
        nbrEtoile: "5",
        prix: 3000,
        id: 6
    }
];
function ProductPhare({ setProduits,
    setCountItems,
    produits, countItems, iteratorId, setIteratorId }) {

    // const [countItems, setCountItems] = useState(0);
    // const initalisserItems = { img: null, cat: null, nom: null, price: null, };
    // const [produits, setProduits] = useState([initalisserItems]);
    function deleteDoublonItem(array) {
         const pannierUnique = Array.from(
            new Map(
                array.map((p) => [JSON.stringify(p), p])
            ).values()
        );

        return pannierUnique;

        // return array.filter((items, index, arr)=> index === arr[arr.length - 1] || items.nom !== ProductItems[index + 1].nom)
    }

    const products = deleteDoublonItem([...produits]);
    console.log(products)

    return (
        <>
            <section className="items-produit">
                <div className="text-intro-prod">
                    <div className="text-prod">Produits phares</div>
                    <h2>Nos spécialités <span>du jour</span> </h2>
                    <p>Découvrez nos produits les plus appréciés,
                        préparés avec amour par nos boulangers artisans</p>
                </div>
                <section className='Product-phares' id='produits-btn'>

                    {ProductItems.map((items, index, array) =>
                        <div className='div-produit' key={`${items.nom}${""}${items.categorie}${""}`} ref={addClassNameHidden}>
                            <div className='bg-img-product' style={{
                                backgroundImage: `url("${items.src}")`
                            }} ></div>
                            <div className='flex-items'>
                                <p className='categorie'><span>{items.categorie}</span></p>
                                <p className='star'><Star size="20" color={"yellow"} fill='yellow' /> {items.nbrEtoile}</p>
                            </div>
                            <h2 className='nom'>{items.nom}</h2>
                            <p className='description'>{items.description}</p>
                            <p className='prix'>{items.prix} FCFA <span>{`${items.prix === 200 ? 250 + "FCFA" : ""}`}</span></p>
                            {/* <button className='btn-ajout-pannier' key={items.src} onClick={(e) => {
                                e.preventDefault();
                                let i = 0
                                setProduits([
                                    ...produits, 
                                    {
                                    img: items.src,
                                    cat: items.categorie,
                                    nom: items.nom,
                                    price: items.prix,
                                    count: numberIterator + 1,
                                }]) ;
                                setCountItems(n => n + 1);
                                alert(countItems);
                                i++;
                                // alert(i);
                            }}>
                                <Plus size="15" color={'#fff'} /> Ajouter au pannier
                            </button> */}
                            <div>
                                <Button
                                    items={items} key={items.nom}
                                    setProduits={setProduits}
                                    setCountItems={setCountItems}
                                    produits={products}
                                    countItems={countItems}
                                    setAddCountItems={setIteratorId}
                                    index={index}
                                    array={array} />
                            </div>

                        </div>
                    )}
                </section>
                <button className='btn-voir-tous'>Voir tous les produits</button>
            </section>
            {/* Suppresion de l'index suivant */}
            {/* {console.log(pbCopy.filter((item,index, array)=> index === array.length - 1 || item.img !== array[index + 1].img))} */}
            {/* suppresion de l'index precedent */}
            {/* {console.log(pbCopy.filter((item,index, array)=> index === 0 || item.img !== array[index-1] ))} */}
            <ListCommande ProductItems={products}
                nbrItems={countItems}
                setNbrItems={setCountItems}
                addCountItems={iteratorId}
                setItems={setProduits} />

        </>
    )
}
export default ProductPhare;
export { ProductItems };