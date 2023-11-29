import { useForm } from "react-hook-form"
import useLinkService from "../hooks/useLinkService"
import { zodResolver } from "@hookform/resolvers/zod"
import { urlSchema } from "../types/schema/URLSchema"

type FormData = {
  link: string
}

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(urlSchema)
  })
  const { mutate, data, isError, status } = useLinkService()

  const onSubmit = (formData: FormData) => {
    mutate(formData.link)
  }

  if (status === "pending") {
    return <div>loading</div>
  }

  if (isError) {
    return <div>Error</div>
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit(onSubmit)} className="p-6 max-w-sm mx-auto bg-white rounded-md shadow-md">
        <div className="mb-4">
          <label htmlFor="link" className="block text-gray-700 text-sm font-semibold mb-2">
            Enter URL
          </label>
          <input
            {...register("link")}
            type="text"
            id="link"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="https://example.com"
          />
          {errors.link && <p className="text-red-500 text-xs italic">{errors.link.message}</p>}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Shorten URL
        </button>
      </form>
      <div>{data?.link}</div>
    </div>
  )
}
