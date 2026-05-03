import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";

type contactInfoType = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  variant: "email" | "phone" | "address";
};
export default function Page() {
  const contactStyles = {
    email: {
      bg: "bg-purple-50",
      text: "text-purple-600",
      hover: "group-hover:bg-purple-500",
    },
    phone: {
      bg: "bg-orange-50",
      text: "text-orange-600",
      hover: "group-hover:bg-orange-500",
    },
    address: {
      bg: "bg-blue-50",
      text: "text-blue-600",
      hover: "group-hover:bg-blue-500",
    },
  };
  const contactInfo: contactInfoType[] = [
    {
      icon: Mail,
      title: "Email",
      description: "contact@gmail.com",
      variant: "email",
    },
    {
      icon: Phone,
      title: "Phone",
      description: "+1 (123) 456-7890",
      variant: "phone",
    },
    {
      icon: MapPin,
      title: "Address",
      description: "123 Main Street, City, State 12345",
      variant: "address",
    },
  ];
  return (
    <>
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold">Contact Us</h2>
            <p className="text-neutral-500">
              Have questions or need assistance? Our team is here to help you.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="py-12 px-4 sm:px-6 lg:px-8 border">
              <h3 className="text-xl font-bold mb-2">Get in Touch</h3>
              <p className="text-neutral-500 mb-4">
                Have questions or need assistance? Our team is here to help you.
              </p>
              <div className="space-y-4">
                {contactInfo.map((item, index) => {
                  const style = contactStyles[item.variant];
                  return (
                    <div
                      className="group flex items-center gap-6 p-4 border shadow-xs rounded-lg"
                      key={item.title}
                    >
                      <div
                        className={`w-12 h-12 flex items-center justify-center bg-${style.bg} text-${style.text} rounded-lg group-hover:bg-${style.hover} transition-colors ease-in-out duration-300`}
                      >
                        <item.icon />
                      </div>
                      <div>
                        <p className="text-sm text-neutral-800 font-medium mb-1">
                          {item.title}
                        </p>
                        <p className="text-xs text-neutral-500">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="rounded-lg shadow-lg h-[450px] md:h-full overflow-hidden">
              <iframe
                title="Shambel Map Address"
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15661.323927841268!2d39.724097449999995!3d11.0886912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x16479f34d3c1a713%3A0x508b31699cdf4c75!2skuteba%20adebabay!5e0!3m2!1sen!2set!4v1777626800126!5m2!1sen!2set"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-20 bg-neutral-800 text-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-neutral-300 mb-6">
            Join thousands of satisfied customers and transform your workflow
            today.
          </p>
          <Button className="h-12 px-4 md:px-6 rounded-lg bg-neutral-50 text-neutral-800 hover:bg-neutral-100 text-base ">
            Get Started
          </Button>
        </div>
      </section>
    </>
  );
}
