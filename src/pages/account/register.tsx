import Register from "../../components/RegisterSection";

export default function RegisterPage() {
  const handleRegister = async (data: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    marketingConsent: boolean;
  }) => {
    // Connect this function to your registration API.
    // Do not store passwords in localStorage or browser storage.
    console.log("Registration form submitted:", {
      ...data,
      password: "[REDACTED]",
    });
  };

  return (
    <>
      <Register
        eyebrow="THE AUREL ACCOUNT"
        title="Make it personal."
        description="Create your AUREL account for a more considered shopping experience, with your orders and details together in one place."
        loginUrl="/account"
        supportEmail="support@yourdomain.com"
        onRegister={handleRegister}
      />
    </>
  );
}
