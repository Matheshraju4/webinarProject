import React from "react";

interface Testimonial {
  username: string;
  review: string;
  imgUrl: string;
}

const testimonials: Testimonial[] = [
  {
    username: "Kenzie Edgar",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sunt ratione dolor exercitationem minima quas itaque saepe quasi architecto vel! Accusantium, vero sint recusandae cum tempora nemo commodi soluta deleniti.",
    imgUrl: "https://i.pravatar.cc/100?img=1",
  },
  {
    username: "Stevie Tifft",
    review:
      "Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Dolore quod necessitatibus, labore sapiente, est, dignissimos ullam error ipsam sint quam tempora vel.",
    imgUrl: "https://i.pravatar.cc/100?img=2",
  },
  {
    username: "Tommie Ewart",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, obcaecati ullam excepturi dicta error deleniti sequi.",
    imgUrl: "https://i.pravatar.cc/100?img=3",
  },
  {
    username: "Charlie Howse",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto inventore voluptatum nostrum atque, corrupti, vitae esse id accusamus dignissimos neque reprehenderit natus, hic sequi itaque dicta nisi voluptatem! Culpa, iusto.",
    imgUrl: "https://i.pravatar.cc/100?img=4",
  },
  {
    username: "Nevada Herbertson",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, voluptatem porro obcaecati dicta, quibusdam sunt ipsum, laboriosam nostrum facere exercitationem pariatur deserunt tempora molestiae assumenda nesciunt alias eius? Illo, autem!",
    imgUrl: "https://i.pravatar.cc/100?img=5",
  },
  {
    username: "Kris Stanton",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iusto, explicabo, cupiditate quas totam!",
    imgUrl: "https://i.pravatar.cc/100?img=6",
  },
];

const Testimonial: React.FC = () => {
  return (
    <div>
      {/* Import Material Design Icons */}
      <style>
        {`
          @import url('https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css');
        `}
      </style>

      <div className="min-w-screen min-h-screen bg-gray-50 flex items-center justify-center py-5">
        <div className="w-full bg-white border-t border-b border-gray-200 px-5 py-16 md:py-24 text-gray-800">
          <div className="w-full max-w-6xl mx-auto">
            <div className="text-center max-w-xl mx-auto">
              <h1 className="text-2xl md:text-3xl font-bold mb-5 text-gray-600">
                What people are saying.
              </h1>
              <h3 className="text-xl mb-5 font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h3>
              <div className="text-center mb-10">
                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
              </div>
            </div>
            <div className="-mx-3 md:grid md:grid-cols-2 items-start">
              {testimonials.map((testimonial, index) => (
                <div className="px-3 md:w-full " key={index}>
                  <div className="w-full mx-auto rounded-lg bg-white border shadow-lg border-gray-200 p-5 text-gray-800 font-light mb-6">
                    <div className="w-full flex mb-4 items-center">
                      <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                        <img
                          src={testimonial.imgUrl}
                          alt={testimonial.username}
                        />
                      </div>
                      <div className="flex-grow pl-3">
                        <h6 className="font-bold text-sm uppercase text-gray-600">
                          {testimonial.username}
                        </h6>
                      </div>
                    </div>
                    <div className="w-full">
                      <p className="text-sm leading-tight">
                        <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                          &quot;
                        </span>
                        {testimonial.review}
                        <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                          &quot;
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
