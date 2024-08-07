import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import { Button } from "@/components/ui/button"
  import CardFormField from "./cardFormField"
  export function AlertDialogDemo() {
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild >
          <Button >Log a Call</Button>
        </AlertDialogTrigger>
        <AlertDialogContent >
          <AlertDialogHeader>
            <AlertDialogTitle>Log a Call</AlertDialogTitle>
            <AlertDialogDescription>
              <CardFormField/>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <div className="flex flex-row justify-between w-full">
            <AlertDialogCancel className="w-6/12 bg-gray-400 m-2">Cancel</AlertDialogCancel>
            <AlertDialogAction className="w-6/12 bg-black text-white">Continue</AlertDialogAction>
            </div>
            
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }
  