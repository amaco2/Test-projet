    import { Minus, Plus, Trash2 } from "lucide-react";
    import { useState } from "react";
import { ProductItems } from "../ProduitPhares";


    function AddRemoveCountItems({ items,
        countProduct, index,
        SetCountProduct, array,
        addCountItems }) {

        const [countProducts, SetCountProducts] = useState(addCountItems);
        return (
            <div className='add-remove-elem' key={index}>
                <Trash2 color={'red'} size={19}/>
                <div>
                    <Minus size={13} key={items.nom} onClick={() =>{
                        SetCountProducts(countProducts === 0 ? 0 :
                            countProducts - 1);
                            SetCountProduct(countProducts === 0 ? 0: countProducts - 1);
                            }} />{countProducts}
                    <Plus size={13} key={items.img} onClick={() =>{
                        SetCountProducts(countProducts + 1);
                        SetCountProduct(countProducts + 1)}} />
                </div>
            </div>
        )
    }

    export default AddRemoveCountItems;