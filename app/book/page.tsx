"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useBookingStore } from "@/store/bookingStore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { services } from "@/data/services";
import { ChevronRight, ChevronLeft, Check } from "lucide-react";

const problemTypes = [
  "Battery Issue",
  "Flat Tyre",
  "AC Not Working",
  "Engine Overheating",
  "Won't Start",
  "Brake Problem",
  "Check Engine Light",
  "Other",
];

const bookingSchema = z.object({
  problemType: z.array(z.string()).min(1, "Select at least one problem type"),
  location: z.string().min(5, "Location is required"),
  vehicleMake: z.string().min(2, "Vehicle make is required"),
  vehicleModel: z.string().min(2, "Vehicle model is required"),
  vehicleYear: z.string().min(4, "Vehicle year is required"),
  contactName: z.string().min(2, "Name is required"),
  contactPhone: z.string().min(9, "Valid phone number is required"),
  contactEmail: z.string().email("Valid email is required"),
  additionalNotes: z.string().optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

function BookingForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { updateBooking, nextStep, prevStep, currentStep, ...bookingData } =
    useBookingStore();
  const [selectedProblems, setSelectedProblems] = useState<string[]>(
    bookingData.problemType || []
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: bookingData,
  });

  useEffect(() => {
    const serviceId = searchParams.get("service");
    if (serviceId) {
      const service = services.find((s) => s.id === serviceId);
      if (service) {
        setSelectedProblems([service.name]);
        setValue("problemType", [service.name]);
      }
    }
  }, [searchParams, setValue]);

  const toggleProblem = (problem: string) => {
    const updated = selectedProblems.includes(problem)
      ? selectedProblems.filter((p) => p !== problem)
      : [...selectedProblems, problem];
    setSelectedProblems(updated);
    setValue("problemType", updated);
  };

  const onSubmit = (data: BookingFormData) => {
    updateBooking({ ...data, problemType: selectedProblems });
    router.push("/success");
  };

  const steps = [
    {
      title: "Problem Type",
      component: (
        <div className="space-y-4">
          <p className="text-silver-400 mb-6">
            Select the issue(s) you&apos;re experiencing
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {problemTypes.map((problem) => (
              <button
                key={problem}
                type="button"
                onClick={() => toggleProblem(problem)}
                className={`p-4 rounded-2xl border-2 font-semibold text-sm transition-all ${
                  selectedProblems.includes(problem)
                    ? "border-amber-400 bg-amber-50 text-amber-600"
                    : "border-silver-300 text-charcoal-200 hover:border-amber-400"
                }`}
              >
                {problem}
              </button>
            ))}
          </div>
          {errors.problemType && (
            <p className="text-red-500 text-sm">{errors.problemType.message}</p>
          )}
        </div>
      ),
    },
    {
      title: "Location & Vehicle",
      component: (
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-charcoal-200 mb-2">
              Location *
            </label>
            <Input
              {...register("location")}
              placeholder="Enter your address or location"
            />
            {errors.location && (
              <p className="text-red-500 text-sm mt-1">
                {errors.location.message}
              </p>
            )}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-semibold text-charcoal-200 mb-2">
                Make *
              </label>
              <Input
                {...register("vehicleMake")}
                placeholder="e.g., Toyota"
              />
              {errors.vehicleMake && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.vehicleMake.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-semibold text-charcoal-200 mb-2">
                Model *
              </label>
              <Input
                {...register("vehicleModel")}
                placeholder="e.g., Camry"
              />
              {errors.vehicleModel && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.vehicleModel.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-semibold text-charcoal-200 mb-2">
                Year *
              </label>
              <Input
                {...register("vehicleYear")}
                type="number"
                placeholder="e.g., 2020"
                min="1990"
                max={new Date().getFullYear() + 1}
              />
              {errors.vehicleYear && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.vehicleYear.message}
                </p>
              )}
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Contact Details",
      component: (
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-charcoal-200 mb-2">
              Full Name *
            </label>
            <Input {...register("contactName")} placeholder="Your name" />
            {errors.contactName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.contactName.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-semibold text-charcoal-200 mb-2">
              Phone Number *
            </label>
            <Input
              {...register("contactPhone")}
              type="tel"
              placeholder="+971 50 123 4567"
            />
            {errors.contactPhone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.contactPhone.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-semibold text-charcoal-200 mb-2">
              Email *
            </label>
            <Input
              {...register("contactEmail")}
              type="email"
              placeholder="your.email@example.com"
            />
            {errors.contactEmail && (
              <p className="text-red-500 text-sm mt-1">
                {errors.contactEmail.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-semibold text-charcoal-200 mb-2">
              Additional Notes (Optional)
            </label>
            <Textarea
              {...register("additionalNotes")}
              placeholder="Any additional information about the issue..."
              rows={4}
            />
          </div>
        </div>
      ),
    },
    {
      title: "Confirmation",
      component: (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Booking Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-silver-400 mb-2">Problem Type</p>
                <div className="flex flex-wrap gap-2">
                  {selectedProblems.map((p) => (
                    <Badge key={p} variant="default">
                      {p}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm text-silver-400 mb-1">Location</p>
                <p className="font-semibold">{watch("location")}</p>
              </div>
              <div>
                <p className="text-sm text-silver-400 mb-1">Vehicle</p>
                <p className="font-semibold">
                  {watch("vehicleYear")} {watch("vehicleMake")}{" "}
                  {watch("vehicleModel")}
                </p>
              </div>
              <div>
                <p className="text-sm text-silver-400 mb-1">Contact</p>
                <p className="font-semibold">{watch("contactName")}</p>
                <p className="text-sm">{watch("contactPhone")}</p>
                <p className="text-sm">{watch("contactEmail")}</p>
              </div>
            </CardContent>
          </Card>
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4">
            <p className="text-sm text-charcoal-200">
              <strong>Mechanic dispatched within minutes.</strong> You&apos;ll receive
              a confirmation call shortly.
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-gradient-to-b from-white to-silver-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-charcoal-200 mb-4">
            Book a Mechanic
          </h1>
          <p className="text-silver-400">
            Fill in the details below. We&apos;ll reach you fast!
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8 flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center flex-1">
              <div className="flex flex-col items-center flex-1">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                    currentStep > index + 1
                      ? "bg-amber-400 text-white"
                      : currentStep === index + 1
                      ? "bg-amber-400 text-white"
                      : "bg-silver-200 text-silver-400"
                  }`}
                >
                  {currentStep > index + 1 ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    index + 1
                  )}
                </div>
                <span className="text-xs mt-2 text-silver-400 hidden sm:block text-center">
                  {step.title}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`h-1 flex-1 mx-2 ${
                    currentStep > index + 1
                      ? "bg-amber-400"
                      : "bg-silver-200"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Step {currentStep}: {steps[currentStep - 1].title}</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              {steps[currentStep - 1].component}
            </CardContent>
          </Card>

          <div className="flex justify-between">
            {currentStep > 1 && (
              <Button type="button" variant="outline" onClick={prevStep}>
                <ChevronLeft className="w-4 h-4 mr-2" />
                Previous
              </Button>
            )}
            <div className="ml-auto">
              {currentStep < steps.length ? (
                <Button
                  type="button"
                  onClick={() => {
                    if (currentStep === 1 && selectedProblems.length === 0) {
                      return;
                    }
                    nextStep();
                  }}
                  disabled={currentStep === 1 && selectedProblems.length === 0}
                >
                  Next
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button type="submit" variant="emergency">
                  Confirm Booking
                </Button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function BookingPage() {
  return (
    <Suspense fallback={
      <div className="pt-32 pb-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-silver-400">Loading...</p>
        </div>
      </div>
    }>
      <BookingForm />
    </Suspense>
  );
}
