import { useRef, useEffect } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";

export default function DonateButton({ amount }) {
  // ** `amountRef` keeps track of the selected donation amount when a change is made in the `AmountPicker` component without rerendering the Donate button **
  const amountRef = useRef(amount);

  useEffect(() => {
    amountRef.current = amount;
  }, [amount]);

  return (
    <PayPalButtons
      style={{ label: "donate" }}
      fundingSource="paypal"
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: amountRef.current,
                breakdown: {
                  item_total: {
                    currency_code: "USD",
                    value: amountRef.current,
                  },
                },
              },
              items: [
                {
                  name: "Donation to Kitty's House",
                  description:
                    "All proceeds directly support Kitty's House Cat Rescue. Thank you.",
                  quantity: "1",
                  unit_amount: {
                    currency_code: "USD",
                    value: amountRef.current,
                  },
                  category: "DONATION",
                },
              ],
            },
          ],
        });
      }}
      onApprove={(data, actions) =>
        actions.order.capture().then((details) => {
          const name = details.payer.name.given_name;
          alert(`Donation completed by ${name} for \$${amountRef.current}`);
        })
      }
    />
  );
}
