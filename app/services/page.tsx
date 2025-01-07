import React from 'react';

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-8">
          Salesforce Marketing Cloud Services
        </h1>
        <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto">
          Transform your marketing strategy with our comprehensive Salesforce Marketing Cloud solutions
        </p>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Card 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Implementation & Setup
            </h3>
            <p className="text-gray-600">
              Expert configuration and deployment of Salesforce Marketing Cloud tailored to your business needs
            </p>
          </div>

          {/* Service Card 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Journey Builder Optimization
            </h3>
            <p className="text-gray-600">
              Create and optimize customer journeys that drive engagement and conversions
            </p>
          </div>

          {/* Service Card 3 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Email Studio Excellence
            </h3>
            <p className="text-gray-600">
              Design and implement effective email marketing campaigns with advanced personalization
            </p>
          </div>

          {/* Service Card 4 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Data Integration
            </h3>
            <p className="text-gray-600">
              Seamless integration of your data sources for unified customer views and better targeting
            </p>
          </div>

          {/* Service Card 5 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Analytics & Reporting
            </h3>
            <p className="text-gray-600">
              Advanced reporting solutions to track campaign performance and ROI
            </p>
          </div>

          {/* Service Card 6 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Training & Support
            </h3>
            <p className="text-gray-600">
              Comprehensive training and ongoing support for your marketing team
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 text-white py-16 mt-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Marketing?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you leverage Salesforce Marketing Cloud to achieve your business goals.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Contact Us Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
