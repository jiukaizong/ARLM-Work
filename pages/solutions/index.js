import React from 'react'
import Link from "next/link";
import Card from '../../components/Card/card'
const Solutions = () => {
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
          <h1>Solutions</h1>
        </header>
        <div className="w-full lg:w-10/12 mx-auto flex flex-col gap-4 md:flex-row justify-between items-center">
          <Card style="bg-purple-1000" img="./assets/images/debit-machine.jpg" alt="debit machine" />
          <div className="w-full md:w-1/3">
            <h3>E-commerce FLXPAY solution</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales morbi integer interdum et ut.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-10/12 mx-auto flex flex-col gap-4 md:flex-row justify-between items-center">
          <Card style="bg-purple-1000" img="./assets/images/debit-machine.jpg" alt="debit machine" />
          <div className="w-full md:w-1/3">
            <h3>In Store FlXPAY Solution</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales morbi integer interdum et ut.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-10/12 mx-auto flex flex-col gap-4 md:flex-row justify-between items-center">
          <Card style="bg-purple-1000" img="./assets/images/debit-machine.jpg" alt="debit machine" />
          <div className="w-full md:w-1/3">
            <h3>Interest free payment solutions</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales morbi integer interdum et ut.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-10/12 mx-auto flex flex-col gap-4 md:flex-row justify-between items-center">
          <Card style="bg-purple-1000" img="./assets/images/debit-machine.jpg" alt="debit machine" />
          <div className="w-full md:w-1/3">
            <h3>Installment loan solutions</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales morbi integer interdum et ut.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Solutions