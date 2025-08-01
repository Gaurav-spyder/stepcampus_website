import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ShoppingCart, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const products = [
  {
    name: 'Classic Black T-Shirt',
    price: '$29.99',
    rating: 4.5,
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'black t-shirt',
  },
  {
    name: 'Modern Blue Jeans',
    price: '$79.99',
    rating: 4.8,
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'blue jeans',
  },
  {
    name: 'Stylish White Sneakers',
    price: '$99.99',
    rating: 4.7,
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'white sneakers',
  },
  {
    name: 'Leather Crossbody Bag',
    price: '$129.99',
    rating: 4.6,
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'leather bag',
  },
];

export default function EcommerceProjectPage() {
  return (
    <div className="bg-background">
      <header className="border-b sticky top-0 bg-background/95 z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
          <Link href="/projects" className="font-headline text-2xl font-bold">
            ShopCo
          </Link>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-6 w-6" />
              <span className="sr-only">Shopping Cart</span>
            </Button>
            <Button asChild>
              <Link href="/login">Login</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">
            Featured Products
          </h1>
          <p className="mt-2 max-w-2xl mx-auto text-muted-foreground md:text-lg">
            This is a practice page. Use the "Login" button to test your automation scripts.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <Card key={product.name} className="overflow-hidden">
              <CardHeader className="p-0">
                 <Image
                    src={product.imageUrl}
                    alt={product.name}
                    width={600}
                    height={400}
                    className="w-full object-cover aspect-[4/3]"
                    data-ai-hint={product.imageHint}
                  />
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-lg font-headline mb-2">{product.name}</CardTitle>
                <div className="flex justify-between items-center">
                  <p className="text-lg font-semibold">{product.price}</p>
                   <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    <span className="text-muted-foreground">{product.rating}</span>
                  </div>
                </div>
              </CardContent>
               <CardFooter className="p-4 pt-0">
                 <Button className="w-full">Add to Cart</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>

      <footer className="bg-secondary text-secondary-foreground mt-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center">
            <p className="text-sm">&copy; {new Date().getFullYear()} ShopCo. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
