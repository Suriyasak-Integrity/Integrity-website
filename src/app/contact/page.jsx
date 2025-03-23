import { ContactForm } from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <div className="bg-white dark:bg-gray-900 pt-16 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-primary dark:text-white text-center mb-2">Contact Us</h1>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
          Have questions about our services? Want to request a quote? Get in touch with our team and we'll get back to you as soon as possible.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
              <div className="px-6 py-8">
                <h2 className="text-2xl font-semibold text-primary dark:text-white mb-6">Send Us a Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
              <div className="px-6 py-8">
                <h2 className="text-2xl font-semibold text-primary dark:text-white mb-6">Contact Information</h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-secondary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="ml-3 text-gray-700 dark:text-gray-300">
                      <h3 className="text-lg font-medium text-primary dark:text-white">Head Office</h3>
                      <p className="mt-1">123 Sukhumvit Road, Bangkok</p>
                      <p>Thailand 10110</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-secondary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="ml-3 text-gray-700 dark:text-gray-300">
                      <h3 className="text-lg font-medium text-primary dark:text-white">Phone</h3>
                      <p className="mt-1">+66 2 123 4567</p>
                      <p>Mon-Fri: 8:30am - 5:30pm</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-secondary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="ml-3 text-gray-700 dark:text-gray-300">
                      <h3 className="text-lg font-medium text-primary dark:text-white">Email</h3>
                      <p className="mt-1">info@integritylogistics.th</p>
                      <p>support@integritylogistics.th</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-8 h-[400px] bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
              <iframe
                className="border-0 w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.5812570574933!2d100.54200631431867!3d13.730740901200057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d61f1a8959839%3A0xaac6d8831b316dc4!2sSukhumvit%20Rd%2C%20Khlong%20Toei%2C%20Bangkok%2C%20Thailand!5e0!3m2!1sen!2sus!4v1647934276157!5m2!1sen!2sus"
                width="100%"
                height="100%"
                allowFullScreen={true}
                loading="lazy"
                title="Google Map of Bangkok office location"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
