import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Product } from "@/app/types";
import { toast } from 'react-hot-toast'

interface BagStore {
  items: Product[],
  addItem: (data: Product) => void,
  removeItem: (id: string) => void,
  removeAll: () => void,
}

const useBag = create(
  persist<BagStore>((set, get) => ({
    items: [],
    addItem: (data: Product) => {
      const currentItems = get().items
      const exsistingItem = currentItems.find((item) => item.id === data.id)

      if (exsistingItem) {
        return toast('Item already in cart.')
      }

      set({ items: [...get().items, data] })
      toast.success('Item added to bag.')
    },
    removeItem: (id: string) => {
      set({ items: [...get().items.filter((item) => item.id !== id)] })
      toast.success('Item removed from bag.')
    },
    removeAll: () => set({ items: [] })
  }), {
    name: 'bag-storage',
    storage: createJSONStorage(() => localStorage)
  })
)

export default useBag