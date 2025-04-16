import React from "react";

const Pricing = () => {
  return (
    <section className="py-8 px-4 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold drop-shadow-lg mb-4">
          Transparent Pricing. Powerful Results.
        </h2>
        <p className="text-gray-600 text-lg mb-10">
          Ready to upgrade your business&apos;s online presence? Let&apos;s
          chat.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 rounded-lg overflow-hidden text-left shadow-sm">
            <tbody>
              <tr className="border-b">
                <td className="p-4 font-semibold">Starter Site</td>
                <td className="p-4 text-right border-r text-blue font-bold">
                  $1,000
                </td>
                <td className="p-4 text-center text-gray-700">
                  3 pages, responsive design, basic SEO
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-semibold">Business Site</td>
                <td className="p-4 text-right border-r text-orange font-bold">
                  $1,250
                </td>
                <td className="p-4 text-center text-gray-700">
                  5 pages, brand styling, contact form
                </td>
              </tr>
              <tr>
                <td className="p-4 font-semibold">Premium Site</td>
                <td className="p-4 border-r text-right text-purple font-bold">
                  $1,500+
                </td>
                <td className="p-4 text-center text-gray-700">
                  Full customization, animations, and more
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
