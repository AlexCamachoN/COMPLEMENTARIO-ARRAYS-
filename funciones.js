//-----------DESAFIO COMPLEMENTARIO-------------------
//-----------ORDENANDO ARRRAYS DE OBJETOS-----------------
//El arrays es materials 

alert(`Bienvenido! a tu tienda de arte Camacho`);
let materials = [
    {id: 1, name:"lienzo", price: 10, stock:20},
    {id: 2, name:"pincel", price: 5, stock:10},
    {id: 3, name:"bastidor", price: 15, stock:15},
    {id: 4, name:"caballete", price: 200, stock:20},
    {id: 5, name:"paleta", price: 20, stock:60},
    {id: 6, name:"aceite linaza", price: 50, stock:80},
    {id: 6, name:"oleo", price: 220, stock:40},
];

materials.sort((a,b) =>{
    if(a.name < b.name) {//esta ordenando de acuerdo a  los nombres de los productos y en orden alfabetico
        return -1;
    }
    if (a.name > b.name) {
        return 1;
    }

    return 0;
});

console.log(materials);
