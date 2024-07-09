import { create } from 'zustand'

const useStore = create(set => ({
  id: '',
  playerNum: 0,
  setId: (id) => set({ id }),
  setPlayerNum: (num) => set({ playerNum: num })
}));

export default useStore;
