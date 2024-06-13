import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { SquareCheckBig } from "lucide-react";

const CardSection = () => {
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
    <div className="md:mb-32 mb-52  ">
      <h1 className="text-2xl md:text-3xl font-extrabold p-2 text-center m-1">
        Here is what you are Going to Learn
      </h1>
      <div className="flex flex-wrap justify-center md:justify-start md:m-20 md:mt-3">
        {cardContent.map((card, index) => (
          <div key={index} className="p-2 w-full md:w-1/2">
            <Card className="flex flex-row items-center bg-yellow-200 border-2 border-black">
              <SquareCheckBig
                color="#1cc430"
                className="w-16 md:w-8 h-8 ml-4"
              />
              <CardContent className="text-lg p-3 font-medium">
                {card.title}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSection;
