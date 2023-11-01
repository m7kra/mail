/*
Price formula:
https://www.ctt.pt/empresas/solucoes-de-gestao-e-setoriais/solucoes-setoriais/editores-e-livreiros/correio-editorial-nacional
Price of Saco Multipostal
https://www.ctt.pt/empresas/solucoes-de-gestao-e-setoriais/solucoes-setoriais/editores-e-livreiros/saco-multipostal-nacional
These pages were accessed on 2023-11-01
*/
export default function calculatePrice(weight: number): number {
    if (weight <= 0) return NaN;

    weight /= 1000;
    if (weight <= 0.1) return 0.267 + 1.014 * weight;
    if (weight <= 0.250) return 0.173 + 1.945 * weight;
    if (weight <= 0.500) return 0.126 + 2.446 * weight;
    if (weight <= 2) return 1.375 + 0.568 * weight;
    // This last formula assumes that we are in Portugal's mainland
    if (weight <= 5) return calculatePrice(2000) + 1.1 * weight;
    
    return NaN;
}