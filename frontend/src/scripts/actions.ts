import { LoaderFunctionArgs, redirect } from "react-router-dom";

async function findAction({ request }: LoaderFunctionArgs) {
  const formData = await request.formData();
  const serial_number = formData.get("machine_serial_number") as string | null;
  if (!serial_number) {
    return { error: "Введите заводской номер вашего оборудования" };
  }
  return redirect(
    `/result?machine_serial_number=${encodeURIComponent(serial_number)}`
  );
}

export { findAction };
