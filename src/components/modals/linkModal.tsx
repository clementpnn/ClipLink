import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { LinkModalProps } from "@/types/linkModalPropsTypes"
import CopyToClipboard from "@/components/buttons/copyToClipboard"

export default function LinkModal({ isOpen, setIsOpen, link }: LinkModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Your link is here !!!</DialogTitle>
          <DialogDescription>
            <div className="rounded-md border px-4 py-2 text-sm shadow-sm flex justify-between items-center">
              {link}
              <CopyToClipboard link={link} />
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
