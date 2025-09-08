import { redirect } from 'next/navigation';

// Redirect to add-ons page since operations is not a standalone service
export default function OperationsPage() {
  redirect('/add-ons');
}