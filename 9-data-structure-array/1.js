const myArr = [ 'item1', 'item2', ['subSubItem1', 'subSubItem2' ] ]
//['Spain', 'item1', 'SET item2', ['Berlin','subSubItem1' ], 'Germany' ]

const myArr2 = [ 'item1', 'item2', ['subSubItem1', 'subSubItem2' ] ]
myArr2.unshift("Spain");
console.log(myArr2);//[ 'Spain', 'item1', 'item2', [ 'subSubItem1', 'subSubItem2' ] ]
myArr2[2] ="SET item2";
console.log(myArr2);//[ 'Spain', 'item1', 'Set item2', [ 'subSubItem1', 'subSubItem2' ] ]
myArr2[3].unshift("Berlin");
console.log(myArr2);//[ 'Spain', 'item1', 'SET item2', [ 'Berlin', 'subSubItem1', 'subSubItem2'  ] ]  
myArr2[3].pop();
console.log(myArr2);//[ 'Spain', 'item1', 'SET item2', [ 'Berlin', 'subSubItem1' ] ]  
myArr2.push("Germany");
console.log(myArr2);//[ 'Spain', 'item1', 'SET item2', [ 'Berlin', 'subSubItem1' ], 'Germany' ] 

//Bu methodlarin hepsi mutate oldugu icin orijinal arrayi degitirdi.
//toSpliced(), toSorted() ve toReversed() yani eklendi ve mutate yapmiyor. Kisacasi arrayi degistirmiyor
