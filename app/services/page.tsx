import { redirect } from 'next/navigation';

// Redirect to add-ons page since services is not a standalone page
export default function ServicesPage() {
  redirect('/add-ons');
}