import "./App.css";
import StarbucksMain2 from "./components/Starbucks-main/Starbucks-main2";
import StarbucksMain3 from "./components/Starbucks-main/Starbucks-main3";
import { StarbucksNavBar } from  "./components/Starbucks-navbar/Starbubucks-navbar";
import StarbucksMain from "./components/Starbucks-main/Starbucks-main";
import StarbucksConditions from "./components/Starbucks-main/Starbucks-conditions";
import StarbucksFooter from "./components/Starbucks-footer/Starbucks-footer";

function App() {
  return (
    <>
      <StarbucksNavBar />

      <StarbucksMain2 textoH={'Lavender meets matcha'} textoS={'Try the new Iced Lavender Cream Oatmilk Matcha, featuring dairy cold foam with subtle floral notes.'} btn={'Order now'}  img={"../public/2.jpg"} des={"Oat Milk Matcha with Lavender Iced Cream, featuring cold milk foam with subtle floral notes."}/>

      <StarbucksMain textoH={'Positively refreshing'} textoS={'With 140 calories in a grande, our Lemonade Starbucks Refreshers® beverages are a beautiful choice. Enjoy Strawberry Açaí, Pineapple Passionfruit or Mango Dragonfruit.'} btn={'Order now'} img={"../public/3.jpg"} colorSelected={"#cee8c9"} des={"three large glasses, one of strawberry açaí, passion fruit with pineapple or dragon fruit"} /> 

      <StarbucksMain2 textoH={'Go for goodness'} textoS={'High in protein, our vegetarian Egg White & Roasted Red Pepper Egg Bites are the perfect take-along with 170 calories per serving.'} btn={'Order now'}  img={"../public/4.jpg"} colorSelected={"#dbe6f2"} des={"Our Vegetarian Egg White and Roasted Red Pepper Egg Bites are the perfect complement at 170 calories per serving."} />
      
      <StarbucksMain3 textoH={'Earn Cash Back and Bonus Stars'} textoS={'Enjoy 2% Cash Back and Bonus Stars on qualifying in-app purchases by linking an eligible Bank of America debit or credit card to your Starbucks Rewards account.*'} btn={'Get started'}  img={"../public/7.jpg"} colorSelected={"#f2f0eb"} sizeText={"19px"} sizeTitle={"24px"} des={"three people laughing while enjoying their delicious starbucks in a group"}/>

      <StarbucksConditions />

      <StarbucksFooter />
    </>
  );
}

export default App;
