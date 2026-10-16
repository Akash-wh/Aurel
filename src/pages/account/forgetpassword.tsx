import ForgetPassword from "../../components/ForgetPassword";

export default function ForgotPassword() {
  const handleResetPassword = async (email: string) => {
    // Replace this with your real password-reset API.
    const response = await fetch("/api/account/forgot-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      throw new Error("Unable to process the password reset request.");
    }
  };

  return (
    <>
      <ForgetPassword
        eyebrow="THE AUREL ACCOUNT"
        title="Let's get you back."
        description="A password reset is just a few steps away. Enter your registered email address to get started."
        loginUrl="/account"
        registerUrl="/account/register"
        supportEmail="support@yourdomain.com"
        onResetPassword={handleResetPassword}
      />
    </>
  );
}
