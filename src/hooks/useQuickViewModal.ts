import { create } from "zustand";
import { Product } from "@/app/types";

interface QuickViewModalStore {
  isOpen: boolean,
  data?: Product,
  onOpen: (data: Product) => void,
  onClose: () => void,
}

const useQuickViewModal = create<QuickViewModalStore>((set) => ({
  isOpen: false,
  data: undefined,
  onOpen: (data: Product) => set({ data, isOpen: true }),
  onClose: () => set({ isOpen: false })
}))

export default useQuickViewModal