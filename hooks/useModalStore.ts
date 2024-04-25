import { create } from "zustand";

export type ModalType = "toggle" | "search";

type UseSearchProps = {
  type: ModalType | null;
  isOpen: boolean;
  onOpen: (type: ModalType) => void;
  onClose: () => void;
  toggle: () => void;
};

export const useModalStore = create<UseSearchProps>((set, get) => ({
  type: null,
  isOpen: false,
  onClose: () => set({ isOpen: false, type: null }),
  onOpen: (type) => set({ isOpen: true, type }),
  toggle: () => set({ isOpen: !get().isOpen }),
}));
