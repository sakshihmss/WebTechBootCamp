var products = [
	{id : 6, name : 'Pen', cost : 50, units : 20, category : 'stationary'},
	{id : 9, name : 'Ten', cost : 70, units : 70, category : 'stationary'},
	{id : 3, name : 'Len', cost : 60, units : 60, category : 'grocery'},
	{id : 5, name : 'Zen', cost : 30, units : 30, category : 'grocery'},
	{id : 1, name : 'Ken', cost : 20, units : 80, category : 'utencil'},
];

var items = products.filter(function(product) {
		return product.category == 'stationary';
})


const max = products.reduce(function(prev, current) {
    return (prev.cost > current.cost) ? prev : current
})

var sum = products.reduce(function (a, b) {
        return b['units'] == null ? a : a + b['units'];
    }, 0);

console.log(items);	

products.forEach(function (product) {
  console.log("We have " + product.units + " units of " + product.name + " at Rs." + product.cost + " each")
});

var products1 = products;
products1.forEach(function (product) {
  product.cost *= 0.9;
});



// Array methods:
// 	filter
// 	forEach
// 	map
// 	reduce

// 1. find out all the stationary products

// 2. find out the maximum cost from the product list

// 3. create a new array of products where the cost is discounted by 10%

const discountedProducts = products.map(product => ({...product, cost : product.cost*0.9}));
// 4. find the sum of units 

// 5. print the following for each product
// 		We have 20 units of pen at Rs.50 each


// Important Note :  DO NOT USE the FOR loop