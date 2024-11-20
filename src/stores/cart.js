import { defineStore } from "pinia"; // On importe une function "defineStore" qui sert a crée le store 

// Le store est crée et défini pour le panier 
export const useCartStore = defineStore('cart', { // On crée une sorte de boite appelée cart
    // Ici ca me permet de stocker mes articles dans ce tableau "items"
    state: () => ({
        items: [], // A chaque fois qu'on ajoute un produit, il sera ajouté dans ce tableau-liste nommé items de la boite cart
    }),

    // Ici on crée nos actions, qui permettent d'avoir des fonctions à fin de manipuler nos données, supprimer ajouter etc..
    actions: {
        // fonction pour ajouter un item au panier dans le tableau items en tant que variable product
        addToCart(product) {
            this.items.push(product) // ca permet de push donc ajouter un "product" à la liste "items"
        },

        // fonction qui permet de supprimer un produit d'un panier grace à son index(1er produit ou 2eme)
        removeFromCart(index) {
            this.items.splice(index, 1) // permet de splice donc de supprimer un article de la liste en utilisant son index
        },
    },

    // Les getters ca sert à calculer ou récuperer des données depuis le state
    getters: {
        // Permet de connaître le nombre total d'articles dans le panier
        totalItems: (state) => state.items.length,
    },
})