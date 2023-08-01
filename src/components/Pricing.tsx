"use client";
import React, { useState } from "react";
import { LuCheck, LuCheckCircle2, LuCircle, LuX } from "react-icons/lu";

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState(2);
  const pricingDetails = [
    {
      id: 0,
      label: "Analyse de vos besoins",
      active: selectedPlan >= 0 ? true : false,
    },
    {
      id: 1,
      label: "Recommendations professionnelles",
      active: selectedPlan >= 0 ? true : false,
    },
    {
      id: 2,
      label: "Proposition de templates de sites",
      active: selectedPlan >= 0 ? true : false,
    },
    {
      id: 3,
      label: "Mise en place du site",
      active: selectedPlan >= 1 ? true : false,
    },
    {
      id: 4,
      label: "Email professionnel",
      active: selectedPlan >= 1 ? true : false,
    },
    {
      id: 5,
      label: "Nom de domaine",
      active: selectedPlan >= 2 ? true : false,
    },
    {
      id: 6,
      label: "Support premium",
      active: selectedPlan >= 2 ? true : false,
    },
    {
      id: 7,
      label: "Formation",
      active: selectedPlan >= 3 ? true : false,
    },
    {
      id: 8,
      label: "Développement sur mesure",
      active: selectedPlan >= 3 ? true : false,
    },
    {
      id: 9,
      label: "Pleine proporiété",
      active: selectedPlan >= 3 ? true : false,
    },
  ];
  const plans = [
    {
      id: 0,
      label: "Analyse",
      "price-month": 0,
      "price-quarter": 0,
      discount: null,
    },
    {
      id: 1,
      label: "Standard",
      "price-month": 69,
      "price-quarter": 189,
      discount: 10,
    },
    {
      id: 2,
      label: "Pro",
      "price-month": 99,
      "price-quarter": 269,
      discount: 19,
    },
    {
      id: 3,
      label: "Business",
      "price-month": 129,
      "price-quarter": 299,
      discount: 29,
    },
  ];
  function handleChangePlan(planToChange: number) {
    setSelectedPlan(planToChange);
  }
  const [isChecked, setIsChecked] = useState(true);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div
      className="my-16 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8"
      id="pricing"
    >
      <h2 className="text-2xl font-bold sm:text-3xl text-center">
        Nos packages
      </h2>
      <div className="text-center my-10">
        <label className="themeSwitcherTwo shadow-card relative inline-flex cursor-pointer select-none items-center justify-center rounded-md bg-white p-1">
          <input
            type="checkbox"
            className="sr-only"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <span
            className={`flex items-center space-x-[6px] py-2 px-[18px] text-sm font-medium ${
              !isChecked
                ? "text-white bg-kago-blue"
                : "text-body-color shadow-md shadow-kago-blue/10"
            }`}
          >
            Mensuel
          </span>
          <span
            className={`flex items-center space-x-[6px] py-2 px-[18px] text-sm font-medium ${
              isChecked
                ? "text-white bg-kago-blue"
                : "text-body-color shadow-md shadow-kago-blue/10"
            }`}
          >
            Trimestriel
          </span>
        </label>
      </div>

      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2">
          <ul role="list" className="mb-8 space-y-4 text-left">
            {pricingDetails.map((detail) => (
              <li key={detail.id} className="flex items-center space-x-3">
                <span
                  className={
                    detail.active === true ? "text-green-500" : "text-gray-200"
                  }
                >
                  {detail.active ? <LuCheck size={20} /> : <LuX size={20} />}
                </span>
                <span>{detail.label}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-1/2 grid grid-cols-1 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`${
                selectedPlan === plan.id
                  ? "bg-kago-blue text-white"
                  : "bg-white shadow-md shadow-kago-blue/10"
              } flex items-center justify-between px-8 py-4 cursor-pointer rounded-xl h-24`}
              onClick={() => handleChangePlan(plan.id)}
            >
              <div className="flex items-center space-y-1">
                {selectedPlan === plan.id ? (
                  <span className="text-white">
                    <LuCheckCircle2 size={30} />
                  </span>
                ) : (
                  <span className="text-kago-blue">
                    <LuCircle size={30} />
                  </span>
                )}
                <h2
                  className={`${
                    selectedPlan === plan.id ? "text-white" : "text-black"
                  } text-lg font-medium sm:text-xl ml-5`}
                >
                  {plan.label}
                </h2>
              </div>
              <h2 className="text-2xl font-semibold text-black sm:text-3xl">
                <div className="flex flex-col items-center space-y-1">
                  {plan.discount && isChecked ? (
                    <div
                      className={`${
                        selectedPlan === plan.id
                          ? "text-kago-blue bg-white"
                          : "text-white bg-kago-blue"
                      } px-2 text-xs rounded-full sm:px-4 sm:py-1`}
                    >
                      Économie de {plan.discount}%
                    </div>
                  ) : (
                    <></>
                  )}

                  <h2 className="text-2xl font-semibold sm:text-3xl">
                    {plan["price-month"] === 0 ? (
                      <span
                        className={`${
                          selectedPlan === plan.id ? "text-white" : "text-black"
                        } text-base font-medium`}
                      >
                        Gratuit
                      </span>
                    ) : (
                      <span
                        className={
                          selectedPlan === plan.id ? "text-white" : "text-black"
                        }
                      >
                        €
                        {!isChecked
                          ? plan["price-month"]
                          : plan["price-quarter"]}
                        <span className="text-base font-medium">
                          {!isChecked ? "/Mois" : "/Trim."}
                        </span>
                      </span>
                    )}
                  </h2>
                </div>
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
