interface SkinCare {
    ProductName: string
    ProductPrice: number
}
let skinCare :SkinCare[] =[
    { ProductName: "vit.c Facewash",
    ProductPrice: 850
},
{ProductName: "Night cream",
ProductPrice: 1989
},
{ProductName:"hyluronic acid serum",
ProductPrice:2589
},
{ProductName:"vit.c serum",
ProductPrice: 1000
},
{
    ProductName:"Shampoo",
    ProductPrice:899
},
{
    ProductName:"Fairness cream",
    ProductPrice:650
}

]
console.log(skinCare.length)
let newobjskinCare = skinCare.filter((obj)=> {
    return obj.ProductPrice <= 1000 
})
console.log(newobjskinCare)