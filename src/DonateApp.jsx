import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import DonateForm from "./DonateForm";
import DonationCardText from "./DonationCardText";

export function DonateApp() {
  return (
    <PayPalScriptProvider
      options={{
        "client-id":
          "AQakenSQLxZzDtdRrZLDBcnBkOptgFnXZBCSvfDxyFieQv8tnVEk5QlBZr0a-8RjToitvoEg6m_Xy4jn",
        components: "buttons",
        currency: "USD",
      }}
    >
      <DonationCardText>
        <DonateForm />
      </DonationCardText>
    </PayPalScriptProvider>
  );
}
