let prices=[250,645,300,900,50];
for(let val of prices)
{
    console.log(`value before offer = ${val}`);
    val-=(val/10);
    console.log(`value after offer = ${val}`);
}