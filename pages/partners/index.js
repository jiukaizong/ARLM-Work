import React from 'react';
import Card from '../../components/Card/card'
  
const Partners = () => {
  return (
    <>
    <div className="hero">
      <img className="object-cover w-full h-full" src="./assets/images/working-on-laptop.jpg" alt="lady working on laptop" />
    </div>
    <div className="content">
      <header>
        <h1>Partners</h1>
      </header>
        <div className="flex flex-wrap justify-evenly items-center gap-6">
        <Card style="bg-purple-1000" desc="info" img="./assets/images/debit-machine.jpg" alt="debit machine" />
        <Card style="bg-purple-1000" desc="info" img="./assets/images/debit-machine.jpg" alt="debit machine" />
        <Card style="bg-purple-1000" desc="info" img="./assets/images/debit-machine.jpg" alt="debit machine" />
        <Card style="bg-purple-1000" desc="info" img="./assets/images/debit-machine.jpg" alt="debit machine" />
        <Card style="bg-purple-1000" desc="info" img="./assets/images/debit-machine.jpg" alt="debit machine" />
        <Card style="bg-purple-1000" desc="info" img="./assets/images/debit-machine.jpg" alt="debit machine" />
        <Card style="bg-purple-1000" desc="info" img="./assets/images/debit-machine.jpg" alt="debit machine" />
        <Card style="bg-purple-1000" desc="info" img="./assets/images/debit-machine.jpg" alt="debit machine" />
        <Card style="bg-purple-1000" desc="info" img="./assets/images/debit-machine.jpg" alt="debit machine" />
        <Card style="bg-purple-1000" desc="info" img="./assets/images/debit-machine.jpg" alt="debit machine" />
        <Card style="bg-purple-1000" desc="info" img="./assets/images/debit-machine.jpg" alt="debit machine" />
        <Card style="bg-purple-1000" desc="info" img="./assets/images/debit-machine.jpg" alt="debit machine" />
        <Card style="bg-purple-1000" desc="info" img="./assets/images/debit-machine.jpg" alt="debit machine" />
        <Card style="bg-purple-1000" desc="info" img="./assets/images/debit-machine.jpg" alt="debit machine" />
        <Card style="bg-purple-1000" desc="info" img="./assets/images/debit-machine.jpg" alt="debit machine" />
        </div>
    </div>

    </>
  );
};
  
export default Partners;