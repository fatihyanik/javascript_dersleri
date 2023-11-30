// length
let str = "murat fatih"
console.log(str.length); // 11

//charAt()
let str1 = "murat fatih"
console.log(str1.charAt(6)); // f

// concat()
let str2 = "murat fatih"
let str3 = " yanik"
console.log(str2.concat(str3)); // murat fatih yanik

// indexOf()
let str4 = "yanik"
console.log(str4.indexOf("p")); // -1
console.log(str4.indexOf("a")); // 1

// lastOfIndex()
let str5 = "en iyi develepor Saliha abla"
console.log(str5.lastIndexOf("e")); // 12
console.log(str5.lastIndexOf("e", 12)); // 12
console.log(str5.lastIndexOf("e", 11)) // 10
console.log(str5.lastIndexOf("a", 24)) // 24

// toLowerCase()
let str6 = "EN iyI dEvElepOr Saliha abla"
console.log(str6.toLowerCase()); // en iyi develepor saliha abla

// toLowerCase()
let str7 = "EN iyI dEvElepOr Saliha abla"
console.log(str7.toUpperCase()); // EN IYI DEVELEPOR SALIHA ABLA

//startsWith()
let str8 = "en iyi develepor Saliha abla"
console.log(str8.startsWith("en iyi")); // true
console.log(str8.startsWith("eniyi")); // false
console.log(str8.startsWith("En iyi")); // false

//startsWith()
let str9 = "en iyi develepor Saliha abla"
console.log(str9.length);
console.log(str9.endsWith("Saliha")); // false
console.log(str9.endsWith("abla")); // true
console.log(str9.endsWith("Saliha abla")); // true

//trim() : basindaki ve sonundaki bosluklari siler
let str10 = "       en iyi develepor Saliha abla     "
console.log(str10.trim()); // en iyi develepor Saliha abla
console.log(str10.trim().length); // en iyi develepor Saliha abla
let str11 = "       en iyi develepor Saliha abla"
console.log(str11.length);

// replace()
let str12 = "Murat, Fatih, Yanik, Murat"
console.log(str12.replace("Murat", "Ersan")); // Ersan, Fatih, Yanik, Murat
console.log(str12.replace("Yanik", "Bahadir")); // Murat, Fatih, Bahadir, Murat

// replaceAll()
let str13 = "Murat, Fatih, Yanik, Murat"
console.log(str13.replaceAll("Murat", "Ersan")); // Ersan, Fatih, Yanik, Ersan
console.log(str13.replaceAll("Yanik", "Bahadir")); // Murat, Fatih, Bahadir, Murat

