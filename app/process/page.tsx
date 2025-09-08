import { redirect } from 'next/navigation';

// Redirect to about page since process info is now in the about page
export default function ProcessPage() {
  redirect('/about');
}