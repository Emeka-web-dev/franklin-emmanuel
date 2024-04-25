import { create } from "zustand";

type StoreProps = {
  name: {
    caption: string;
    socialLinks: any[];
  };
  setCaption?: (item: string) => void;
  setSocialLinks?: (item: []) => void;
};

export const useStore = create<StoreProps>((set) => ({
  name: {
    caption: "",
    socialLinks: [],
  },
  setCaption: (item) =>
    set((state) => ({
      name: {
        ...state.name,
        caption: item,
      },
    })),

  setSocialLinks: (item) =>
    set((state) => ({
      name: {
        ...state.name,
        socialLinks: item,
      },
    })),
}));
