import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const CardTick = () => {
  const cardContent = [
    {
      title:
        "3-Step Method To Make A Profit-Generating VSL Video (Really Quick) Using ChatGPT That Hooks & Converts Your Audience Immediately",
    },
    {
      title:
        "How To Use AI Tools To Write Copies For Landing Pages, FB Ads, Emails, Etc. That Drive Huge Conversions In Your Business",
    },
    {
      title:
        "Leveraging AI Tools To Automate Email Campaigns And Nurture Leads Through The Funnel",
    },
    {
      title:
        "How To Create Visually Attractive Ad Graphics And Creatives That Steal Your Audience's Attention",
    },
    {
      title:
        "Utilizing Analytics Tools To Measure The Effectiveness Of Your Funnel And Optimize It For Better Results",
    },
    {
      title:
        "Drop Down Your Business Expenses Drastically & Boost The Revenue Through The Roof With Smart And FREE AI Tools",
    },
  ];

  return (
    <div className=" text-black p-5 ">
      <h1 className="text-2xl md:text-3xl font-extrabold p-2 text-center m-1">
        Tell Us Where You are Lagging
      </h1>

      <div className="flex flex-wrap justify-center md:justify-start md:m-20 md:mt-3">
        {cardContent.map((card, index) => (
          <div key={index} className="p-2 w-full md:w-1/2">
            <Card className="flex flex-row items-center bg-slate-100 border-2 border-black  shadow-xl">
              <input
                id="helper-checkbox"
                aria-describedby="helper-checkbox-text"
                type="checkbox"
                value=""
                className="m-2 ml-4 h-10 text-blue-600 bg-gray-100  rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <CardContent className="text-md p-3 font-medium">
                {card.title}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardTick;
