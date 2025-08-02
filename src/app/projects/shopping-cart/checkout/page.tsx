
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowLeft, CreditCard } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function CheckoutPage() {
    const router = useRouter();
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [cardHolder, setCardHolder] = useState('');

    const isFormComplete = cardNumber && expiryDate && cvv && cardHolder;

    const handlePayment = () => {
        if (isFormComplete) {
            router.push('/projects/shopping-cart/checkout/success');
        }
    }

  return (
    <div className="bg-background">
      <header className="border-b sticky top-0 bg-background/95 z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
            <h2 className="font-headline text-2xl font-bold">Checkout</h2>
            <Button asChild variant="outline">
              <Link href="/projects/shopping-cart">
                <ArrowLeft className="mr-2" />
                Back to Cart
              </Link>
            </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-md mx-auto">
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline flex items-center gap-2"><CreditCard /> Payment Details</CardTitle>
                    <CardDescription>Enter your payment information to complete the purchase.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="card-number">Card Number</Label>
                        <Input id="card-number" placeholder="4242 4242 4242 4242" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="expiry-date">Expiry Date</Label>
                            <Input id="expiry-date" placeholder="MM/YY" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="cvv">CVV</Label>
                            <Input id="cvv" placeholder="123" value={cvv} onChange={(e) => setCvv(e.target.value)} />
                        </div>
                    </div>
                     <div className="space-y-2">
                        <Label htmlFor="card-holder">Card Holder Name</Label>
                        <Input id="card-holder" placeholder="CardHolderName" value={cardHolder} onChange={(e) => setCardHolder(e.target.value)} />
                    </div>
                    <Button className="w-full" onClick={handlePayment} disabled={!isFormComplete}>
                        Pay Now
                    </Button>
                </CardContent>
            </Card>
        </div>
      </main>
    </div>
  );
}
