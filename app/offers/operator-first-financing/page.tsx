import { redirect } from 'next/navigation';

// Redirect to pricing page since financing info would be there
export default function OperatorFirstFinancingPage() {
  redirect('/pricing');
}