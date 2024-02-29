import type * as i from '@types';
import { create } from 'zustand';

type ExampleStore = {
  data: Partial<i.ExampleData>;
  setData: (data: Partial<i.ExampleData>) => void;
};

export const useExampleStore = create<ExampleStore>()((set) => ({
  data: null,
  setData(data) {
    set((state) => ({
      data: {
        ...state.data,
        ...data,
      },
    }));
  },
}));
