import { Store } from "@/app/types"

const URL = `${process.env.NEXT_PUBLIC_STORE_API_URL}`

const getStore = async (id: string): Promise<Store> => {
  const res = await fetch(`${URL}/${id}`)
  
  return res.json()
}

export default getStore
