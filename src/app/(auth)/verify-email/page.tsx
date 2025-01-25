"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // For navigation
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { verifyEmailAction } from "@/actions/auth.action";

import { useSearchParams } from "next/navigation";
export default function OtpPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const email = searchParams.get("email") || ""; // Get the email from query params
    const [otpExpire,setOtpExpire] = useState(false)    
  const [otp, setOtp] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

      useEffect(() => {
    if (!email) {
      // Redirect if no email is provided in the query params
      router.push("/register");
    }
  }, [email, router]);
  const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Only allow 6 digits
    if (/^[0-9]{0,6}$/.test(value)) {
      setOtp(value);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (otp.length !== 6) {
      toast({
        title: "Error",
        description: "Please enter a valid 6-digit OTP.",
        variant: "destructive",
      });
      return;
    }

    try {
      setLoading(true);

      // Simulate OTP verification process
      const response = await verifyEmailAction(email,otp); // Replace this with your OTP verification API call

      if (!response.error) {
        toast({
          title: "OTP Verified",
          description: "OTP successfully verified.",
          variant: "success",
        });
        // Redirect or perform another action after OTP verification success
        // For example, you can redirect to the login page
        router.push("/login");
      } else {
        toast({
          title: "Error",
          description: response.message || "Failed to verify OTP.",
          variant: "destructive",
        });
        if (response.message === "User not found") {
            router.push("/register");  // Redirect back to login
            
        }
        
        if (response.message === "OTP has expired") {
          setOtpExpire(true)
        }
      }
    } 
    catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong while verifying OTP.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };
const handleResendOtp = async () => {
    try {
      setLoading(true);

      const response = await verifyEmailAction(email, "");

      if (!response.error) {
        toast({
          title: "OTP Resent",
          description: "A new OTP has been sent to your email.",
          variant: "success",
        });
        setOtpExpire(false);
        setOtp("");
      } else {
        toast({
          title: "Error",
          description: response.message || "Failed to resend OTP.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong while resending OTP.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">Enter OTP</h2>
        {!otpExpire ?
            (<form onSubmit={handleSubmit} className="space-y-4">
          <Input
            name="otp"
            value={otp}
            onChange={handleOtpChange}
            maxLength={6}
            placeholder="Enter 6-digit OTP"
            className="w-full"
            required
          />
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Verifying..." : "Verify OTP"}
          </Button>
          
        </form>):
                  (<Button onClick={handleResendOtp} className="w-full"
                      disabled={loading}
                  >
            {loading ? "Requesting":"Send Another Request"}
          </Button>)
        }
      </div>
    </div>
  );
}
