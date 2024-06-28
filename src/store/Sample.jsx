/* eslint-disable react-refresh/only-export-components */
import { create } from "zustand";


const MyFirstStore = ( set ) => ({
    text: 'Hello',
    customers: 0,
    increaseCustomer: () => set((state) => ({customers: state.customers + 1})),
    decreaseCustomer: () => set((state) => ({customers: state.customers - 1}))
})

const useMyFirstStore = create(MyFirstStore);

export default useMyFirstStore;

