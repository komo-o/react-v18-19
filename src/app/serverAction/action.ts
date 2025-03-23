"use server";

export async function action(prevState: number | null, formData: FormData) {
  const delay = formData.get("delay");
  await new Promise((resolve) => setTimeout(resolve, Number(delay) || 1000));
  return (prevState || 0) + 1;
}
