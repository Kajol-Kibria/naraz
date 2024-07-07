export default async function getAllProducts(){
    const res = await fetch('https://fakestoreapi.com/products');
    return res.json();
}
export async function getProduct(id){
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    return res.json();
}
export async function getCategory(category){
    const res = await fetch(`https://fakestoreapi.com/products/category/${category}`);
    return res.json();
}
