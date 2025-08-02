
'use client';

import React, { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Search, PlusCircle, MinusCircle, Trash2, ArrowLeft, XCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';

type Product = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  imageHint: string;
};

type CartItem = {
  product: Product;
  quantity: number;
};

const allProducts: Product[] = [
  { id: 1, name: 'Wireless Mouse', price: 25.99, imageUrl: 'https://placehold.co/600x400.png', imageHint: 'wireless mouse' },
  { id: 2, name: 'Mechanical Keyboard', price: 89.99, imageUrl: 'https://placehold.co/600x400.png', imageHint: 'mechanical keyboard' },
  { id: 3, name: 'USB-C Hub', price: 45.50, imageUrl: 'https://placehold.co/600x400.png', imageHint: 'usb hub' },
  { id: 4, name: 'Monitor Stand', price: 32.00, imageUrl: 'https://placehold.co/600x400.png', imageHint: 'monitor stand' },
  { id: 5, name: 'Webcam', price: 55.00, imageUrl: 'https://placehold.co/600x400.png', imageHint: 'webcam' },
  { id: 6, name: 'Desk Pad', price: 15.00, imageUrl: 'https://placehold.co/600x400.png', imageHint: 'desk pad' },
];

export default function ShoppingCartProjectPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState<CartItem[]>([]);

  const filteredProducts = useMemo(() => {
    if (!searchQuery) return allProducts;
    return allProducts.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()));
  }, [searchQuery]);

  const addToCart = (product: Product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.product.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { product, quantity: 1 }];
    });
  };

  const updateQuantity = (productId: number, newQuantity: number) => {
    setCart(prevCart => {
      if (newQuantity <= 0) {
        return prevCart.filter(item => item.product.id !== productId);
      }
      return prevCart.map(item =>
        item.product.id === productId ? { ...item, quantity: newQuantity } : item
      );
    });
  };

  const removeFromCart = (productId: number) => {
    setCart(prevCart => prevCart.filter(item => item.product.id !== productId));
  }

  const cartCount = useMemo(() => cart.reduce((total, item) => total + item.quantity, 0), [cart]);
  const cartTotal = useMemo(() => cart.reduce((total, item) => total + item.product.price * item.quantity, 0), [cart]);

  return (
    <div className="bg-background">
      <header className="border-b sticky top-0 bg-background/95 z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
            <h2 className="font-headline text-2xl font-bold">E-commerce Store</h2>
            <div className="flex items-center gap-4">
                <div className="relative">
                    <ShoppingCart className="h-6 w-6"/>
                    {cartCount > 0 && <Badge variant="destructive" className="absolute -top-2 -right-3 px-2">{cartCount}</Badge>}
                </div>
                 <Button asChild variant="outline" size="sm">
                  <Link href="/projects">
                    <ArrowLeft className="mr-2" />
                    Back
                  </Link>
                </Button>
            </div>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
                <div className="mb-8">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input
                            placeholder="Search for a product..."
                            className="pl-10 w-full"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {filteredProducts.map(product => (
                        <Card key={product.id} className="flex flex-col">
                            <CardHeader className="p-0">
                                <div className="relative aspect-video">
                                    <Image
                                        src={product.imageUrl}
                                        alt={product.name}
                                        fill
                                        className="object-cover rounded-t-lg"
                                        data-ai-hint={product.imageHint}
                                    />
                                </div>
                            </CardHeader>
                            <CardContent className="p-4 flex-1">
                                <h3 className="font-semibold">{product.name}</h3>
                                <p className="text-muted-foreground mt-1">${product.price.toFixed(2)}</p>
                            </CardContent>
                            <CardFooter className="p-4 pt-0">
                                <Button className="w-full" onClick={() => addToCart(product)}>Add to Cart</Button>
                            </CardFooter>
                        </Card>
                    ))}
                    {filteredProducts.length === 0 && (
                        <div className="md:col-span-2 xl:col-span-3 text-center text-muted-foreground py-10">
                            <p>No products found matching your search.</p>
                        </div>
                    )}
                </div>
            </div>

            <aside className="lg:col-span-1">
                 <Card>
                    <CardHeader>
                        <CardTitle className="font-headline flex items-center gap-2">
                            <ShoppingCart />
                            Your Cart
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        {cart.length === 0 ? (
                            <p className="text-muted-foreground text-center">Your cart is empty.</p>
                        ) : (
                            <div className="space-y-4">
                                {cart.map(item => (
                                    <div key={item.product.id} className="flex items-center gap-4">
                                        <div className="relative w-16 h-16">
                                            <Image src={item.product.imageUrl} alt={item.product.name} fill className="rounded-md object-cover" data-ai-hint={item.product.imageHint}/>
                                        </div>
                                        <div className="flex-1">
                                            <p className="font-semibold text-sm">{item.product.name}</p>
                                            <p className="text-xs text-muted-foreground">${item.product.price.toFixed(2)}</p>
                                            <div className="flex items-center gap-2 mt-1">
                                                <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => updateQuantity(item.product.id, item.quantity - 1)}><MinusCircle className="h-4 w-4"/></Button>
                                                <span className="w-4 text-center">{item.quantity}</span>
                                                <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => updateQuantity(item.product.id, item.quantity + 1)}><PlusCircle className="h-4 w-4"/></Button>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-bold text-sm">${(item.product.price * item.quantity).toFixed(2)}</p>
                                            <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive/70 hover:text-destructive" onClick={() => removeFromCart(item.product.id)}>
                                                <Trash2 className="h-4 w-4"/>
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                                <Separator />
                                <div className="flex justify-between font-bold">
                                    <p>Total</p>
                                    <p>${cartTotal.toFixed(2)}</p>
                                </div>
                                <Button asChild className="w-full" disabled={cart.length === 0}>
                                    <Link href="/projects/shopping-cart/checkout">Proceed to Checkout</Link>
                                </Button>
                            </div>
                        )}
                    </CardContent>
                 </Card>
            </aside>
        </div>
      </main>
    </div>
  );
}
