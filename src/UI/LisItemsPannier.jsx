import { useState } from "react";
import "../assets/rodion-kutsaiev-x4z7GiV5_-0-unsplash.jpg";
import ListCommande from "../Card";
import { Minus, Plus, Trash2 } from "lucide-react";
import AddRemoveCountItems from "./AddRemoveCountItems.jsx";


function ListCommandeItems({ ProductItems, nbrItems, setNbrItems, addCountItems, setItems }) {
    const [countProduct, SetCountProduct] = useState(1);
    function deleteDoublonItem(array) {
         const pannierUnique = Array.from(
            new Map(
                array.map((p) => [JSON.stringify(p), p])
            ).values()
        );

        return pannierUnique;
        // lter((items, index, arr)=> index === arr[arr.length - 1] || items.nom !== ProductItems[index + 1].nom)
    }
    const pbCopy = deleteDoublonItem(ProductItems)
    // delete pbCopy[0];
    pbCopy.shift();

    // Fonction d'elimination des doublons

    return (
        <>
            {pbCopy.map((items, index, array) =>
                <section key={`${items.nom}-${items.id+1}}`}>
                    <section key={items.nom} className="flex-start end">
                        <div className='details-produits'>
                            <div className='img-produits'>
                                <img src={items.img} alt="" />
                            </div>
                            <div className='values-produits'>
                                <ul>
                                    <li>{items.cat}</li>
                                    <li>{items.nom}</li>
                                    <li>{items.price}</li>
                                </ul>
                                {/* {console.log(items.price)} */}
                            </div>
                        </div>
                        {/* <div className='add-remove-elem'>
                        <Trash2 color={'red'} />
                        <div>
                            <Minus key={items.nom} onClick={() => (nbrItems === 0 ? 0 : nbrItems - 1)} />{nbrItems}
                            <Plus  key={items.img} onClick={() => (nbrItems + 1)} />
                        </div>
                    </div> */}
                        <AddRemoveCountItems items={items}
                            countProduct={nbrItems} index={index}
                            SetCountProduct={setNbrItems}
                            array={setItems} key={items.img}
                            addCountItems={addCountItems}
                        />
                    </section>
                </section>
            )}
        </>
    )
}

export default ListCommandeItems;
