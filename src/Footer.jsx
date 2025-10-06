import { Clock, Facebook, Instagram, Locate, Mail, MapIcon, MapPin, MessageCircleWarning, Phone, Timer } from "lucide-react";
import './Styles/Footer.css'


function Footer() {


    return (
        <footer style={{backgroundColor: "rgb(35, 35, 78)"}}>
        <section className="footer">
            <div className="footer__nouveaute">
                <h2>Restez infromé de nos nouveautés</h2>
                <p>Recevez nos offre speciales et découvrez nos produits en avant-première</p>
                <div className="footer__abonner">
                    <label htmlFor="emails">
                        <input type="email" id="emails" name="emails" 
                        placeholder="Votre adresse email"/>
                        <button type="button" className="footer__btn-abonner">S'abonner</button>
                    </label>
                </div>
            </div>
             <hr />
            <section className="footer__infos">
                <div className="footer__jojo-delice">
                    <div className="JD">
                        <div className="jd">JD</div>
                        <h2>Jojo-Délice</h2>
                        <p className="JD-p">Boulangerie artisanale</p>
                    </div>
                    <p>Depuis 1995, nous préparons avec passion pain frais, viénnoiseries
                        et patisserie pour les habiitants de joundé 
                    </p>
                    <div className="Logo-reseau">
                        <Facebook color="#fff"/> 
                        <Instagram color="#fff"/> 
                        <MessageCircleWarning color="#fff"/>
                    </div>
                </div>
                <div className="footer__contact">
                    <h2 style={{marginTop: "-30px", color: "rgb(254, 245, 3)"}}>Contact</h2>
                    <h2 style={{marginTop:"30px"}}><MapPin color="red" className="mapin"/> MBANKOLO, Quatier Résidentiel</h2>
                    <p>Yaoundé, Cameroun</p>
                    <address>
                        <p><Phone color="green"/>  +237 6XX XX XX XX</p>
                        <p><Mail color="yellow"/>  contact@jojo-delice.cm</p>
                    </address>
                </div>
                <div className="footer__horaires">
                    <h2 style={{color:"rgb(254, 245, 3)"}}>Horaires</h2>
                    <ul>
                        <li className="clock"><Clock color="green" size={20} className="Clocks"/>  
                        Lundi-Dimanche</li>
                        <li>6h00-20h00</li>
                        <li>Service continu</li>
                    </ul>
                    <p className="timer"><Timer color="red" size={15} className="Timres"/>  Livraisons : 8h00 - 18h00</p>
                </div>
                <div className="footer__lien-rapide">
                    <h2 style={{color: "rgb(254, 245, 3)"}}>Liens rapides</h2>
                    <ul className="liens">
                        <li>Accueil</li>
                        <li>Notre catalogue</li>
                        <li>Tous les produits</li>
                        <li>A propos</li>
                        <li>Contact</li>
                    </ul>
                    <h2 style={{color:'#fff', marginTop:'20px'}}>Services</h2>
                    <ul className="services">
                        <li>Click & collect</li>
                        <li>Livraison à  domicile</li>
                        <li>Gateaux sur mesure</li>
                        <li>Commande entreprises</li>
                    </ul>
                </div>
            </section>
            <hr />
            <div className="footer__infos-finale">
                <p>&copy; 2025 Jojo-Délice. Tous droits réservés.</p>
               <p>Contidions d'utilisation</p>
               <p>Politique de confidentialité</p>
               <p>Paiement sécurisé <span className="footer__momo">M</span><span className="footer__om">
                O</span></p>
            </div>
        </section>
        </footer>
    )
}


export default Footer;