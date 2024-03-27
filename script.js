// 1. Daxil olunan ədədin sadə yoxsa mürəkkəb olduğunu tapın.

// let num = +prompt("Bir qiymet daxil edin: ");
// for (let i = 2; i < num; i++) {
//   if (num % i == 0) {
//     result = true;
//     break;
//   } else {
//     result = false;
//   }
// }

// if (result == true) {
//   console.log("Murekkeb");
// } else {
//   console.log("sade");
// }

// ------------------------------------------------------------------------------------

// 2. Daxil olunan ədədin mükəmməl olub olmadığını tapın.

// let num = +prompt("Bir qiymet daxil edin: ");
// let sum = 0;
// for (let i = 1; i < num; i++) {
//   if (( num % i == 0)) {
//     sum = sum + i;
//   }
// }
// if (num == sum) {
//   console.log("Mükemmel eded");
// } else {
//   console.log("Mükemmel eded deyil");
// }

// ---------------------------------------------------------------------------------------

// 3. Daxil olunan 2 ədəd arasındakı mükəmməl ədədləri göstərin.
// let num1 = +prompt("Ilk ededi daxil edin: ");
// let num2 = +prompt("Ikinci ededi daxil edin: ");

// for (let i = num1; i <= num2; i++) {
//   let sum = 0;
//   for (let j = 1; j < i; j++) {
//     if (i % j == 0) {
//       sum = sum + j
//     }
//   }
//   if (sum == i) {
//     console.log(
//       `${num1} ve ${num2} qiymetleri arasindaki mukemmel eded: ${i}`
//     );
//   }
// }

// ---------------------------------------------------------------------------------

// 4. Daxil olunan 2 ədəd arasındakı sadə ədədləri göstərin.
// let num1 = +prompt("Ilk ededi daxil edin: ");
// let num2 = +prompt("Ikinci ededi daxil edin: ");
// console.log(`${num1} ve ${num2} arasindaki sade ededler: `);
// for (i = num1 + 1; i < num2; i++) {
//   for (let j = 2; j < i; j++) {
//     if (i % j == 0) {
//       result = true;
//       break;
//     } else {
//       result = false;
//     }
//   }

//   if (result == false) {
//     console.log(` ${i}`);
//   }
// }

// ------------------------------------------------------------------------------------------

// 5. Daxil olunan 2 ədəd arasındakı sonu 7 ilə bitən ədədləri göstərin.
// let num1 = +prompt("Ilk ededi daxil edin: ");
// let num2 = +prompt("Ikinci ededi daxil edin: ");

// for(let i=num1; i<num2; i++){
//    if(i%10==7){
//     console.log(i)
//    }
// }
