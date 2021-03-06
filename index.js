
const produit1 = {name: 'Stylo', poids: 0.1, quantity: 10, prixHT: 3, tauxTVA: 5}
const produit2 = {name: 'Carnet', poids: 0.5, quantity: 5, prixHT: 10, tauxTVA: 15}
const produit3 = {name: 'Pochette', poids: 0.3, quantity: 3, prixHT: 5, tauxTVA: 10}


// Calcul de la TVA
export const calculerTVA = (panier) => {

    const tauxTVA = panier.tauxTVA;
    const prixHT = panier.prixHT;
    const prixTTC = Math.ceil(prixHT * (1 + tauxTVA / 100));
    console.log(`Prix HT: ${prixHT}€, TVA: ${tauxTVA}%, Prix TTC: ${prixTTC}€`);
    return prixTTC
}

// Calcul du frais de port
const calculerFraisDePort = (panier) => {
    const quantity = panier.quantity;
    const poids = panier.poids * quantity;

    const fraisDePort = Math.ceil((poids * 0.75) * quantity);
    console.log(`Poids du panier: ${poids}kg, Frais de port: ${fraisDePort}€`);
    return fraisDePort
}

// Calcul du panier
const calculerTotal = (panier) => {
    const prixTTC = calculerTVA(panier)
    const fraisDePort = calculerFraisDePort(panier)
    const quantity = panier.quantity;

    const calculerTotal = Math.ceil((prixTTC * quantity) + fraisDePort);
    console.log(`Prix du panier: ${calculerTotal}€`);
}


// Test
calculerTVA(produit1)
calculerFraisDePort(produit1)
calculerTotal(produit1)