    import { StrictMode, useRef } from "react";
    import { Home, Menu, ShoppingCart, User, Search, Heart, Clock, MapPin } from 'lucide-react';
    import './Styles/Header.css';
    import ListCommande from "./Card";
    import React from "react";

    // ADD and Remove card
    const pannier = React.createRef();
    // ADD
    const handelAdd = () => {
        pannier.current.showModal();
    }
    // Remove
    const handelRemove = () => {
        pannier.current.close()
    }

    // Activation et desactivation du pannier

    const addClassNameHidden = React.createRef();
    const addClassNameHidden2 = React.createRef();
    const pannierCard = React.createRef();


    // ...ADD.
    const handleClickAdd = (e) => {
        e.stopPropagation();
        if (pannierCard.current.style.display === 'none') {
            pannierCard.current.style.display = "block"
            addClassNameHidden2.current.classList.add('inactif_body')
            addClassNameHidden.current.classList.add('inactif');
        } else {
            pannierCard.current.style.display = 'block';
            addClassNameHidden2.current.classList.add('inactif_body')
            addClassNameHidden.current.classList.add('inactif');
        }
    }

    // ...REMOVE.
    const handelClickRemove = (e) => {
        e.stopPropagation();
        if (pannierCard.current.style.display === "block" && e.target) {
            pannierCard.current.style.display = 'none';
            addClassNameHidden.current.classList.remove('inactif');
            addClassNameHidden2.current.classList.remove('inactif_body')
        }
    }

    const handelClickClear = (e) => {
        // e.stopPropagation();
        if (pannierCard.current.style.display === "block" && e.target) {
            pannierCard.current.style.display = 'none';
            addClassNameHidden2.current.classList.remove('inactif_body')
            addClassNameHidden.current.classList.remove('inactif');
        }
    }

    function Header({ countItems, produits }) {
        // countItems = 1;
        // console.log(countItems)
        const tabMemu = [
            {
                menu: "Accueil",
                id: 1,
            },
            {
                menu: "catalogue",
                id: 2,
            },
            {
                menu: "Produit",
                id: 3,
            },
            {
                menu: "A-propos",
                id: 4,
            },
            {
                menu: "Contacts",
                id: 5
            }
        ];
        return (
            <StrictMode>
                <header>
                    <div className="logo-app navbar infos-Ui">
                        <div className="logo-div-flex">
                            <div className="logo"><h4>JD</h4></div>
                            <div>
                                <h2>Jojo-Délice</h2>
                                <p>Boulangerie de yaoundé</p>
                            </div>
                        </div>
                        <div>
                            <nav className="navbar-nav">
                                <ul className='navbar__ul'>
                                    {tabMemu.map((menuNav => <li key={menuNav.id}
                                        className='navbar__ul--naliste-menu'>
                                        <a>{menuNav.menu}</a></li>))}
                                </ul>
                            </nav>
                        </div>
                        < div className="infosUx__a">
                            <a><Search size={20} color={"black"} /></a>
                            <a><Heart size={20} color={"black"} /></a>
                            <a><ShoppingCart size={25} color={"black"} onClick={handleClickAdd} />
                                <span style={{
                                    display: produits - 1 === 0 || produits === null ?
                                        'none' : 'inline-block'
                                }}>{produits - 1 === 0 ? produits = "" : produits - 1}</span></a>
                            <a > <User size={20} color={"black"} /></a >
                        </div>
                    </div>
                    {/* <ListCommande /> */}
                </header>
            </StrictMode>
        )
    }
    export default Header;
    export {
        pannierCard,
        handleClickAdd,
        handelClickRemove,
        addClassNameHidden,
        handelClickClear,
        addClassNameHidden2
    }