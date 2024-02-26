import { configureStore } from "@reduxjs/toolkit";
import pets from '../reducers/pets.slice'
import adopters from '../reducers/adopters.slice'

const store = configureStore({
    reducer:{
        pets,
        adopters
    }
})

export default store