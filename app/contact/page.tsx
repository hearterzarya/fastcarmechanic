"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import { getWhatsAppUrl, formatWhatsAppMessage } from "@/lib/utils";

const PHONE_NUMBER = "+971501234567";
const WHATSAPP_NUMBER = "+971501234567";
const EMAIL = "support@mechanicuae.ae";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(9, "Valid phone number is required"),
  subject: z.string().min(5, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    console.log("Contact form submitted:", data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  const whatsappMessage = formatWhatsAppMessage({
    location: "UAE",
    issue: "General inquiry",
  });

  return (
    <div className="pt-32 pb-24 min-h-screen bg-gradient-to-b from-white to-silver-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold text-charcoal-200 mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-silver-400 max-w-2xl mx-auto">
            Get in touch with us. We're here to help 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6 space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-amber-400 mt-1" />
                  <div>
                    <h3 className="font-semibold text-charcoal-200 mb-1">
                      Phone
                    </h3>
                    <a
                      href={`tel:${PHONE_NUMBER}`}
                      className="text-silver-400 hover:text-amber-400"
                    >
                      {PHONE_NUMBER}
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MessageCircle className="w-6 h-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-charcoal-200 mb-1">
                      WhatsApp
                    </h3>
                    <a
                      href={getWhatsAppUrl(WHATSAPP_NUMBER, whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-silver-400 hover:text-amber-400"
                    >
                      Chat with us
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-cyan-400 mt-1" />
                  <div>
                    <h3 className="font-semibold text-charcoal-200 mb-1">
                      Email
                    </h3>
                    <a
                      href={`mailto:${EMAIL}`}
                      className="text-silver-400 hover:text-amber-400"
                    >
                      {EMAIL}
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-amber-400 mt-1" />
                  <div>
                    <h3 className="font-semibold text-charcoal-200 mb-1">
                      Service Area
                    </h3>
                    <p className="text-silver-400">
                      All UAE Emirates - 24/7 Available
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-3">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="block w-full"
              >
                <Button variant="default" className="w-full">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
              </a>
              <a
                href={getWhatsAppUrl(WHATSAPP_NUMBER, whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <Button variant="outline" className="w-full">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp
                </Button>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-charcoal-200 mb-6">
                Send us a Message
              </h2>
              {submitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-2xl text-green-700">
                  Thank you! We'll get back to you soon.
                </div>
              )}
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-charcoal-200 mb-2">
                    Name *
                  </label>
                  <Input {...register("name")} placeholder="Your name" />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-charcoal-200 mb-2">
                    Email *
                  </label>
                  <Input
                    {...register("email")}
                    type="email"
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-charcoal-200 mb-2">
                    Phone *
                  </label>
                  <Input
                    {...register("phone")}
                    type="tel"
                    placeholder="+971 50 123 4567"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-charcoal-200 mb-2">
                    Subject *
                  </label>
                  <Input
                    {...register("subject")}
                    placeholder="What is this regarding?"
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.subject.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-charcoal-200 mb-2">
                    Message *
                  </label>
                  <Textarea
                    {...register("message")}
                    placeholder="Tell us how we can help..."
                    rows={5}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>
                <Button type="submit" variant="default" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
