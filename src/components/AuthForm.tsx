"use client";

import React, { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
export default function AuthForm({ isRegister, action, }: {
    isRegister: boolean;
    action: (formData: FormData) => Promise<{ success: boolean, message: string, data: object }>,

}) {
    const [loading,setLoading] = useState(false)
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    
    try {
        setLoading(true)
        
        const message = await action(formData);
        console.log(message);
        
      if (!(message?.success)) {
           throw new Error(message.message );
          
      } // Call server action
      toast({ title: "Success", description: message.message });
      event.currentTarget.reset(); // Reset form after success
    } catch (error) {
        // console.log(error);
        
        const err = error as Error
      toast({ title: "Error", description: err.message, variant: "destructive" });
      }
      finally {
          setLoading(false)
      }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      {isRegister && <Input name="name" placeholder="Full Name" className="w-full"  />}
      <Input name="email" type="email" placeholder="Email" className="w-full"  />
      <Input name="password" type="password" placeholder="Password" className="w-full"  />
      <Button className="w-full" type="submit">
        {loading ? (isRegister ? "Loading..." : "Loading...") : isRegister ? "Register" : "Login"}
      </Button>
      
    </form>
  );
}
