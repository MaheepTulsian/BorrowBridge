import {create} from 'zustand';
import {devtools, persist} from 'zustand/middleware'

const store = (set) => ({
    walletaddress: "",
    setaddress: (add) => {
        set(() => ({
            walletaddress: add
        }))
    },
    connected: "false",
    setconnected: ()=> {
        set((state)=>({
            connected: !state.connected
        }))
    }
    
}) 

const usestore = create(
    devtools(
        persist(store, {
            name: "Wallet",
        })
    )
)

export default usestore;