const state = {
  iceCream: []
}

const getIceCream = async () => {
 const response = await fetch(`https://fsa-crud-2aa9294fe819.herokuapp.com/api/2406-FTB-ET-WEB-FT/recipes`);
 const responseJson = await response.json();
 const allIceCream = responseJson.data


renderIceCream();
}
const renderIceCream = () => {
  const ul = document.querySelector(`ul`);
  const iceCreamNames = state.iceCream.map((singleIceCream) => {
    return singleIceCream.name
  })
  console.log(iceCreamNames)
  
}
getIceCream();