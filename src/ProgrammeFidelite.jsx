import { CloudLightningIcon, Crown, Gift, Star } from "lucide-react";
import { StrictMode } from "react";
import './Styles/ProgrammeFidelite.css'


function ProgrammeFidelite() {

    return (
        <section className="fidelite">
            <section className="reduction">
                <div>
                    <div className="jojo-fidelite">
                        <p className="reduction--fidelite-p">Programme de fidelité</p>
                    <h2>Jojo-<span>Fidélité</span></h2>
                    <p>Plus vous commandez, plus vous économisez!
                        Gagnez des points à  chaque achat et débloquez
                        des avantages exlcusifs.
                    </p>
                    </div>
                    <div className="reduction__div--reduct">
                        <div className="cloud-ligthtningIcon">
                            <CloudLightningIcon size={30} color="yellow" /><p>Votre statut actuel</p>
                        </div>
                        <div className="div--reduct-bronze">
                            <p className="star"><Star size={20} color="red" fill="red" className="star"/>Bronze <br /><span>32500 points</span></p>
                            <p className="flex-5">5% de réduction active</p>
                        </div>
                        <div>
                            <div className="div--reduct-progression">
                                <p>Progression vers argent</p>
                                <p>17500 points restants</p>
                            </div>
                            <div className="div-reduct-progressbar">
                                <div className="reduct-progressbar--gb-color">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="offre">
                <div className="offre__bronze">
                    <p><Star color="red" size={30} /></p>
                    <p>Bonze <span className="span-bronze">Actuel</span> <br />
                        Dès le premier achat</p>
                    <ul>
                        <li>5% de réduction</li>
                        <li>Notification SMS</li>
                    </ul>
                </div>
                <div className="offre__argent">
                    <p><Gift size={30} /></p>
                    <p>Argent <span>suivant</span><br />
                        A partir de 50 000 FCFA</p>

                    <ul>
                        <li>10% de réduction</li>
                        <li>Livraison graduite</li>
                        <li>Produits en avant-première</li>
                    </ul>
                </div>
                <div className="offre__or">
                    <p><Crown size={30} color="red" /></p>
                    <p>Or <br />A partir de 150 000FCFA</p>
                    <ul>
                        <li>15% de réduction</li>
                        <li>Gateau d'anniversaire offert</li>
                        <li>Support prioritaire</li>
                    </ul>
                </div>
            </section>
            <section className="fonctionnement-section-parent">
                <h2>Comment ça marche ?</h2>
            <section className="fonctionnement-children">
                <div className="commandez">
                    <div className="grid1">1</div><br />
                    <h3>Commandez</h3><br />
                    <p style={{marginLeft: "-5px"}}> 1 FCFA = 1 point</p>
                </div>
                <div className="cumulez">
                    <div className="grid2"><span>2</span></div><br />
                    <h3>Cumulez</h3><br />
                    <p>Points + avantages</p>
                </div>
                <div className="economisez">
                    <div className="grid3"><span>3</span></div><br />
                    <h3>Economisez</h3><br />
                    <p>Réduction automatique</p>
                </div>
            </section>
            </section>
            <button className="rejointre-programm" type="button"
                aria-hidden="true">
                Rejoindre le programme
            </button>
        </section>
    );
}

export default ProgrammeFidelite;