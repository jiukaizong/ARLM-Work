import Link from "next/link";
import Card from '../../components/Card/card'
export default function Business() {
  return (
    <>
    <div className="hero w-full h-screen flex flex-col md:flex-row items-center justify-center">
      <div className="w-full md:w-[%40] mx-auto content flex justify-center">
        <p className="text-2xl w-full md:w-2/3 mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales morbi integer interdum et ut.
        </p>
      </div>
      <div className="bg-flx-pink w-full h-full md:w-[%40]">
        <img className="object-cover w-full h-full" src="./assets/images/working-on-laptop.jpg" alt="lady working on laptop" />
      </div>

    </div>
    <div className="content">
      <header>
        <h1>Businesses</h1>
      </header>
      <div className="w-full lg:w-10/12 mx-auto flex flex-col gap-4 md:flex-row justify-between items-center">
        <Card style="bg-purple-1000" img="./assets/images/debit-machine.jpg" alt="debit machine"/>
        <div className="w-full md:w-1/3">
          <h3>What is FlexPay?</h3>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales morbi integer interdum et ut.
          </p>
        </div>
      </div>
      <div>
        <h3>How FlexPay Works?</h3>
        <div className="mt-10 flex flex-col md:flex-row items-center justify-center md:justify-between gap-y-4">
        <Card style="bg-pink-1100" desc="Better consumer experience" img="assets/images/coin-hand.jpg" alt="coin hovering above hand"/>
        <Card style="bg-pink-1100" desc="Sales performance uplifts" img="assets/images/people-icons.jpg" alt="three people with a coin hovering above their hand"/>
        <Card style="bg-pink-1100" desc="Simplicity for merchants" img="assets/images/coins-hand.jpg" alt="multiple coins hovering above hand"/>
        </div>
      </div>
      <div>
        <h3>More benefits</h3>
        <div className="mt-10 flex flex-col md:flex-row items-center justify-center md:justify-between gap-y-4">
        <Card style="bg-pink-1100" desc="Better consumer experience" img="assets/images/coin-hand.jpg" alt="coin hovering above hand"/>
        <Card style="bg-pink-1100" desc="Sales performance uplifts" img="assets/images/people-icons.jpg" alt="three people with a coin hovering above their hand"/>
        <Card style="bg-pink-1100" desc="Simplicity for merchants" img="assets/images/coins-hand.jpg" alt="multiple coins hovering above hand"/>
        </div>
      </div>
      <div className="w-full lg:w-10/12 mx-auto flex flex-col gap-4 md:flex-row justify-between items-center">
        <Card style="bg-purple-1000" img="./assets/images/step-img4.jpg" alt="debit machine"/>
        <div className="w-full md:w-1/3">
          <h3>Your one-stop solution</h3>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales morbi integer interdum et ut.
          </p>
        </div>
      </div>
    </div>
    <div className="w-full bg-pink-1100 py-8">
      <div className="w-1/2 mx-auto flex flex-col items-center gap-6">
        <h4 className="text-white text-xl font-600 text-center md:text-left">Get more customer who shop more often.</h4>
        <div className="flex justify-center gap-x-4">
          <button>Get Started</button>
          <button>Contact Us</button>
        </div>
      </div>
    </div>
    </>
  );
}