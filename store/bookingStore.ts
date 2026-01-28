import { create } from "zustand";

export interface BookingData {
  problemType: string[];
  location: string;
  vehicleMake: string;
  vehicleModel: string;
  vehicleYear: string;
  contactName: string;
  contactPhone: string;
  contactEmail: string;
  additionalNotes: string;
  currentStep: number;
}

interface BookingStore extends BookingData {
  updateBooking: (data: Partial<BookingData>) => void;
  nextStep: () => void;
  prevStep: () => void;
  reset: () => void;
}

const initialState: BookingData = {
  problemType: [],
  location: "",
  vehicleMake: "",
  vehicleModel: "",
  vehicleYear: "",
  contactName: "",
  contactPhone: "",
  contactEmail: "",
  additionalNotes: "",
  currentStep: 1,
};

export const useBookingStore = create<BookingStore>((set) => ({
  ...initialState,
  updateBooking: (data) => set((state) => ({ ...state, ...data })),
  nextStep: () => set((state) => ({ currentStep: state.currentStep + 1 })),
  prevStep: () => set((state) => ({ currentStep: Math.max(1, state.currentStep - 1) })),
  reset: () => set(initialState),
}));
