import { create } from 'zustand'

export const usePiratesStore = create((set) => ({

  isMusicPlaying: false,
  playMusic: () => set((state) => ({ isMusicPlaying: true })),
  // removeAllBears: () => set({ bears: 0 }),
}))