import { Category } from "@/app/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`

console.log(process.env.NEXT_PUBLIC_API_URL);


const GetCategories = async (): Promise<Category[]> => {
  const res = await fetch(URL)

  return res.json()
}

export default GetCategories
