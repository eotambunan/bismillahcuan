import { Autocomplete, Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";

interface Generate {
 name: string;
 salutation: string;
}

export default function Generate() {
 const { control, handleSubmit } = useForm<Generate>();
 const [link, setLink] = useState<string>("");
 const { toast } = useToast();

 const copyToClipboard = async () => {
  try {
   await navigator.clipboard.writeText(link);
   toast({
    title: "Success",
    description: "Berhasil menyimpan ke clipboard",
   });
  } catch (err) {
   console.error("Failed to copy: ", err);
   toast({
    title: "Failed",
    description: "Gagal menyimpan ke clipboard",
   });

  }
 };

 const handleGenerate: SubmitHandler<Generate> = async (data) => {
  const generatedLink = `https://bismillahcuan.vercel.app/evander?name=${data.name}&salutation=${data?.salutation||""}`;
  setLink(generatedLink);
 };

 const salutationList = [
  {
   label: "Bapak",
   value: "bapak",
  },
  {
   label: "Ibu",
   value: "bapak",
  },
  {
   label: "Sahabat",
   value: "sahabat",
  },
  {
   label: "No Salutation",
   value: "",
  },
 ];

 return (
  <div className="flex flex-col gap-12 p-4 h-screen">
   <Controller
    name="name"
    control={control}
    render={({ field }) => (
     <TextField
      {...field}
      id="standard-basic"
      label="Name"
      variant="outlined"
     />
    )}
   />
   <Controller
    name="salutation"
    control={control}
    render={({ field }) => (
     //@ts-ignore
     <Autocomplete
      noOptionsText=""
      disablePortal
      options={salutationList}
      getOptionLabel={(option) => option.label}
      onChange={(_, value) => field.onChange(value?.value)}
      renderInput={(params) => <TextField {...params} label="Salutation" />}
     />
    )}
   />
   {link && (
    <>
     <p className="text-center">{link}</p>
     <button onClick={copyToClipboard}>
      <ContentCopyIcon />
     </button>
    </>
   )}
   <Button 
   onClick={handleSubmit(handleGenerate)}
   className="bg-fuchsia-600 text-white w-1/2 mx-auto"
   >Generate Link</Button>
   <Toaster
   
   />
  </div>
 );
}
