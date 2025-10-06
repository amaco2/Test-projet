import { useState } from "react";
import { Minus, Plus, Trash2 } from "lucide-react";
import ListCommande from "../Card";


function Button({ items, setProduits,
    setCountItems, produits,
    countItems, setAddCountItems }) {
    // Fonction d'elimination des doublons
    function deleteDoublonItem(array) {
       const pannierUnique = Array.from(
            new Map(
                array.map((p) => [JSON.stringify(p), p])
            ).values()
        );

        return pannierUnique;
    }
    // return array.filter((items, index, arr)=> index === arr[arr.length - 1] || items.nom !== ProductItems[index + 1].nom)

const productsItems = deleteDoublonItem(produits)
const [countProducts, SetCountProducts] = useState(0);
return (
    <>
        <button className='btn-ajout-pannier' key={items.id} onClick={(e) => {
            e.preventDefault();
            setProduits([
                ...productsItems,
                {
                    img: items.src,
                    cat: items.categorie,
                    nom: items.nom,
                    price: items.prix,
                    id: items.id++,
                }]);
            SetCountProducts(1 + countProducts);
            setCountItems(countItems + 1);
            setAddCountItems(countProducts + 1);
            //    handelAdd();
        }}>
            <Plus size="15" color={'#fff'} /> Ajouter au pannier
        </button>

    </>
)
}


export default Button;