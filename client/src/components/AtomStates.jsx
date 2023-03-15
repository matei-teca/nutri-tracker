import {atom} from "jotai"


const state = {
   product: atom(null),
   searchNames:atom(null),
   modalShow:atom(false),
   user:atom(null),
   isLoggedIn:atom(false)

}
export default state
