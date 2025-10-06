/* eslint-disable no-unused-vars */
import { StrictMode, useState } from "react";
import { Home, Menu, ShoppingCart, User, Search, Heart, Clock, MapPin } from 'lucide-react';
import bread from "./assets/img_breack.jpg";
import './Styles/HomePagesjsx.css'
import 'typeface-open-sans';
import bg_Img from './assets/herry-sutanto-SU4fLpg2zgw-unsplash.jpg';
import ProductPhare, { ProductItems } from './ProduitPhares.jsx';
import Header, { addClassNameHidden, addClassNameHidden2, handelClickRemove, handleClickAdd } from "./Header.jsx";
import ProgrammeFidelite from "./ProgrammeFidelite.jsx";
import Footer from "./Footer.jsx";
function deleteDoublonItem(array) {
         const pannierUnique = Array.from(
            new Map(
                array.map((p) => [JSON.stringify(p), p])
            ).values()
        );

        return pannierUnique;

    // return array.filter((items, index, arr)=> index === arr[arr.length - 1] || items.nom !== ProductItems[index + 1].nom)
}
// ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIGdlEbNJjKEam0vikTngMQraGYbaxGY9c19b4lUfqeJv desirelafouine@gmail.com

function HomePagejsx() {
    let srcImgBread = bread;
    const [addCountItems, setAddCountItems] = useState(0)
    const [countItems, setCountItems] = useState(0);
    const initalisserItems = { img: null, cat: null, nom: null, price: null, id: 0 };
    const [produits, setProduits] = useState([initalisserItems]);
    const pbCopy = deleteDoublonItem([...produits]);
    return (
        <div onClick={handelClickRemove} ref={addClassNameHidden2}>
            <Header countItems={countItems} produits={pbCopy.length} />
            <section className="bg-img-after-header" style={{
                backgroundImage: `url("${bg_Img}")`
            }}>
                <h2>La douceur artisanal <br /> au coeur de Mbankolo</h2>
                <a href="#produits-btn"><button className="btn-voir-produits">Voir nos produits</button></a>
            </section>
            <main >
                <section className="text-intro img-intro btn-intro display-grid">
                    <div>
                        <div className="div-intro">
                            <p>🍞 Fraîcheur quotidienne depuis 1995</p>
                        </div>
                        <div className="text-intro__contenu-secondaire">
                            <h1>Jojo-Délice <br />
                                <span>Yaoundé</span>
                            </h1>
                            <p className="text">Votre boulangerie artisanale au cœur de MBANKOLO. Pain frais,
                                pâtisseries et gâteaux sur mesure, maintenant disponibles en ligne
                                avec livraison rapide.</p>
                            <p className="horaire lieu flex">
                                <p className="horaire__p">
                                    <Clock size={15} color={"green"} />  6h -
                                    20h tous les jours</p>
                                <p className="lieu__p"><MapPin size={15} color={"red"} />
                                    MBANKOLO, Yaoundé</p>
                            </p>
                            <div className="btn-intro__div-btn">
                                <button className="div-btn__btn-commander">
                                    <ShoppingCart size={20} color={`#000`} /> Commander maintenant</button>
                                <button className="div-btn__btn-voir-catalogue">Voir le catalogue</button>
                            </div>
                            <div className="text-intro__offre-special"><h2>🎉 Offre de lancement</h2>
                                <p>Livraison gratuite pour toute commande supérieure
                                    à 5 000 FCFA jusqu'au 31 Décembre 2025</p></div>
                        </div>
                    </div>
                    <div>
                        <div className="img-intro__div-img">
                            <img src={srcImgBread} />
                            <p className="img-intro__prix-baquette">Prix baguette<br />
                                <span>135 FCFA</span></p>
                            <p className="img-intro__avis">
                                <div>4.8</div>
                                Excellent
                                250+ avis</p>
                        </div>

                    </div>
                </section>
                <ProductPhare setCountItems={setCountItems}
                    countItems={countItems}
                    setProduits={setProduits} produits={pbCopy}
                    iteratorId={addCountItems}
                    setIteratorId={setAddCountItems} />
                <ProgrammeFidelite />
            </main>
            <section>
                <Footer />
            </section>
        </div>
    );
}

export default HomePagejsx;