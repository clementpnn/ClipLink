import { useForm } from "react-hook-form"
import z from "zod"
import { useState } from "react"

// import useLinkService from "../hooks/useLinkService"
import { zodResolver } from "@hookform/resolvers/zod"
import { urlSchema } from "@/types/schema/urlSchema"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import LinkModal from "@/components/modals/linkModal"
// import Spinner from "@/assets/icons/spinner.svg?react"

// import { useToast } from "@/components/ui/useToast"

export default function LinkForm() {
  // const { toast } = useToast()
  const [isOpen, setIsOpen] = useState(false)

  const form = useForm<z.infer<typeof urlSchema>>({
    resolver: zodResolver(urlSchema),
    mode: "onSubmit",
    defaultValues: {
      link: ""
    }
  })

  // const { mutate, data, isError, error, status } = useLinkService()

  function onSubmit(values: z.infer<typeof urlSchema>) {
    // mutate(values.link)
    console.log(values.link)

    setIsOpen(true)
    form.reset()
  }

  // if (status === "success") {
  //   setIsOpen(true)
  // }

  const data = "test"
  // if (isError) {
  //   toast({
  //   variant: "destructive",
  //   title: "Error",
  //   description: "error"
  // })
  // }
  return (
    <>
      <LinkModal isOpen={isOpen} setIsOpen={setIsOpen} link={data} />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex">
          <FormField
            control={form.control}
            name="link"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="https://example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="ml-5">
            Send
            {/* {status === "pending" ? <Spinner /> : "Send"} */}
          </Button>
        </form>
        {/* <div>{data?.link}</div> */}
      </Form>
    </>
  )
}
