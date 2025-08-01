'use client';

import {
  AlertCircle,
  Calendar as CalendarIcon,
  Check,
  ChevronDown,
  Download,
  Eye,
  EyeOff,
  Upload,
  ChevronsUpDown,
  Move
} from 'lucide-react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import React from 'react';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Slider } from '@/components/ui/slider';


const frameworks = [
  { value: 'react', label: 'React' },
  { value: 'angular', label: 'Angular' },
  { value: 'vue', label: 'Vue' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'solid', label: 'Solid' },
];

export default function PlaygroundPage() {
  const { toast } = useToast();
  const [hideElement, setHideElement] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>(undefined);
  const [openCombobox, setOpenCombobox] = React.useState(false);
  const [comboboxValue, setComboboxValue] = React.useState('');
  const [keyboardLog, setKeyboardLog] = React.useState<string[]>([]);
  const [clickLog, setClickLog] = React.useState<string[]>([]);

  const [isDragging, setIsDragging] = React.useState(false);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const [offset, setOffset] = React.useState({ x: 0, y: 0 });
  const dragRef = React.useRef<HTMLDivElement>(null);
  const [toggleState, setToggleState] = React.useState(false);


  React.useEffect(() => {
    // This now correctly runs only on the client
    setDate(new Date());
  }, []);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (dragRef.current) {
        setIsDragging(true);
        setOffset({
            x: e.clientX - dragRef.current.offsetLeft,
            y: e.clientY - dragRef.current.offsetTop,
        });
    }
  };
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (isDragging) {
          setPosition({
              x: e.clientX - offset.x,
              y: e.clientY - offset.y,
          });
      }
  };

  const handleMouseUp = () => {
      setIsDragging(false);
  };
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setKeyboardLog(prev => [`Key down: ${e.key}`, ...prev].slice(0, 5));
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setKeyboardLog(prev => [`Key up: ${e.key}`, ...prev].slice(0, 5));
  };

  const logClick = (message: string) => {
    setClickLog(prev => [message, ...prev].slice(0,5));
  }

  const nestedFrameContent = `
    <body style="background-color: #E0E8F0; border: 2px solid #29ABE2; border-radius: 8px; padding: 1rem; font-family: sans-serif;">
      <h3 style="color: #000;">Nested Frame</h3>
      <p style="color: #555;">This is the content of the nested iframe.</p>
      <button onclick="alert('Button in nested frame clicked!')" style="padding: 8px 12px; border-radius: 4px; background-color: #9C27B0; color: white; border: none; cursor: pointer;">Click me</button>
    </body>
  `;

  const frameContent = `
    <body style="background-color: #F0F4F8; padding: 1rem; font-family: sans-serif;">
      <h3 style="color: #000;">Outer Frame</h3>
      <p style="color: #555;">This is the content of the outer iframe.</p>
      <iframe
        title="Nested Frame"
        srcDoc="${nestedFrameContent.replace(/"/g, '&quot;')}"
        style="width: 100%; height: 100px; border-radius: 8px; border: 1px solid #ccc;"
      ></iframe>
    </body>
  `;

  return (
    <div className="container py-12">
      <div className="mb-8 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">
          Practice Playground
        </h1>
        <p className="mt-2 max-w-2xl mx-auto text-muted-foreground md:text-lg">
          Interact with these components to test your automation scripts.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Basic Controls */}
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Basic Controls</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label>Radio Buttons</Label>
              <RadioGroup defaultValue="option-one">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-one" id="r1" />
                  <Label htmlFor="r1">Option One</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-two" id="r2" />
                  <Label htmlFor="r2">Option Two</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="space-y-2">
              <Label>Checkboxes</Label>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms">Accept terms and conditions</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="newsletter" defaultChecked />
                <Label htmlFor="newsletter">Subscribe to newsletter</Label>
              </div>
            </div>
             <div className="space-y-2">
                <Label>Switch & Toggle</Label>
                <div className="flex items-center space-x-2">
                    <Switch
                        id="airplane-mode"
                        checked={toggleState}
                        onCheckedChange={setToggleState}
                    />
                    <Label htmlFor="airplane-mode">{toggleState ? 'ON' : 'OFF'}</Label>
                </div>
            </div>
          </CardContent>
        </Card>

        {/* Dropdowns */}
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Dropdowns</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label>Standard Dropdown</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Suggestive Dropdown (Combobox)</Label>
              <Popover open={openCombobox} onOpenChange={setOpenCombobox}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={openCombobox}
                    className="w-full justify-between"
                  >
                    {comboboxValue
                      ? frameworks.find((f) => f.value === comboboxValue)?.label
                      : 'Select framework...'}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[--radix-popover-trigger-width] p-0">
                  <Command>
                    <CommandInput placeholder="Search framework..." />
                    <CommandEmpty>No framework found.</CommandEmpty>
                    <CommandList>
                      <CommandGroup>
                        {frameworks.map((framework) => (
                          <CommandItem
                            key={framework.value}
                            value={framework.value}
                            onSelect={(currentValue) => {
                              setComboboxValue(currentValue === comboboxValue ? '' : currentValue);
                              setOpenCombobox(false);
                            }}
                          >
                            <Check
                              className={cn(
                                'mr-2 h-4 w-4',
                                comboboxValue === framework.value
                                  ? 'opacity-100'
                                  : 'opacity-0'
                              )}
                            />
                            {framework.label}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>
          </CardContent>
        </Card>

        {/* Popups & Alerts */}
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Popups & Alerts</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
             <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline" className="w-full">
                  Show Alert
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>This is an alert!</AlertDialogTitle>
                  <AlertDialogDescription>
                    You can use this to confirm user actions.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>OK</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
            <Button
              className="w-full"
              onClick={() =>
                toast({
                  title: 'Heads up!',
                  description: 'This is a toast notification.',
                })
              }
            >
              Show Toast Notification
            </Button>
          </CardContent>
        </Card>

        {/* File Handling */}
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">File Handling</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="file-upload">File Upload</Label>
              <div className="flex items-center gap-2">
                <Input id="file-upload" type="file" />
                <Button size="icon" variant="ghost">
                  <Upload className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="space-y-2">
              <Label>File Download</Label>
              <a href="/sample.txt" download>
                <Button variant="outline" className="w-full">
                  <Download className="mr-2 h-4 w-4" />
                  Download sample.txt
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Dynamic Elements */}
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Dynamic Elements</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-center">
            <Button onClick={() => setHideElement(!hideElement)} className="w-full">
              {hideElement ? <EyeOff className="mr-2"/> : <Eye className="mr-2"/>}
              {hideElement ? 'Show Element' : 'Hide Element'}
            </Button>
            {!hideElement && (
              <Alert className="mt-4 text-left">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Voila!</AlertTitle>
                <AlertDescription>
                  You can see me now. Test if you can locate this element.
                </AlertDescription>
              </Alert>
            )}
          </CardContent>
        </Card>
        
        {/* Click Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Click Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
              <Button className="w-full" onClick={() => logClick('Single click triggered.')}>Single Click</Button>
              <Button className="w-full" onDoubleClick={() => logClick('Double click triggered.')}>Double Click</Button>
              <Button className="w-full" onContextMenu={(e) => {e.preventDefault(); logClick('Right click triggered.')}}>Right Click</Button>
              <ScrollArea className="h-20 mt-2 w-full rounded-md border p-2 text-xs">
                    {clickLog.map((log, i) => <div key={i}>{log}</div>)}
                    {clickLog.length === 0 && <span className="text-muted-foreground">Click the buttons above...</span>}
                </ScrollArea>
          </CardContent>
        </Card>
        
        {/* Tables */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="font-headline">Web Tables</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>John Doe</TableCell>
                  <TableCell>Software Engineer</TableCell>
                  <TableCell>john.doe@example.com</TableCell>
                  <TableCell>Member</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Jane Smith</TableCell>
                  <TableCell>Project Manager</TableCell>
                  <TableCell>jane.smith@example.com</TableCell>
                  <TableCell>Admin</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Sam Brown</TableCell>
                  <TableCell>UI/UX Designer</TableCell>
                  <TableCell>sam.brown@example.com</TableCell>
                  <TableCell>Member</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        
        {/* Frames */}
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Frames</CardTitle>
          </CardHeader>
          <CardContent>
            <iframe
              title="Outer Frame"
              srcDoc={frameContent}
              className="w-full h-48 rounded-md border"
            >
            </iframe>
            <p className="mt-2 text-sm text-muted-foreground">The element above is an iframe containing a nested iframe.</p>
          </CardContent>
        </Card>
        
        {/* Tabs */}
        <Card>
            <CardHeader><CardTitle className="font-headline">Switch Tabs</CardTitle></CardHeader>
            <CardContent>
                 <Tabs defaultValue="account">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="account">Account</TabsTrigger>
                        <TabsTrigger value="password">Password</TabsTrigger>
                    </TabsList>
                    <TabsContent value="account">
                        <Card>
                            <CardHeader><CardTitle>Account</CardTitle></CardHeader>
                            <CardContent className="space-y-2">
                                <p>This is the account tab.</p>
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="password">
                         <Card>
                            <CardHeader><CardTitle>Password</CardTitle></CardHeader>
                            <CardContent className="space-y-2">
                                <p>This is the password tab.</p>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </CardContent>
        </Card>

        {/* Scroll */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="font-headline">Scroll</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>Vertical Scroll</Label>
              <ScrollArea className="h-40 w-full rounded-md border p-4">
                <p>
                  Jokester began sneaking into the castle in the middle of the night
                  and leaving jokes all over the place: under the king's pillow, in
                  his soup, even in the royal toilet. The king was furious, but he
                  couldn't seem to stop Jokester. And then, one day, the people of
                  the kingdom discovered that the jokes left by Jokester were so
                  good that they couldn't help but laugh. And once they started
                  laughing, they couldn't stop.
                </p>
              </ScrollArea>
            </div>
            <div>
                <Label>Horizontal Scroll</Label>
                <ScrollArea className="w-full whitespace-nowrap rounded-md border">
                    <div className="flex w-max space-x-4 p-4">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                             <Card key={i}><CardContent className="p-6">Card {i}</CardContent></Card>
                        ))}
                    </div>
                    <ScrollBar orientation="horizontal" />
                </ScrollArea>
            </div>
          </CardContent>
        </Card>

        {/* User Interactions */}
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">User Interactions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
                <Label>Mouse Hover</Label>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant="outline" className="w-full">Hover over me</Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Great! You triggered the tooltip.</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
            <div className="space-y-2">
                <Label htmlFor="keyboard-input">Keyboard Actions</Label>
                <Input id="keyboard-input" placeholder="Type here..." onKeyDown={handleKeyDown} onKeyUp={handleKeyUp} />
                <ScrollArea className="h-24 mt-2 w-full rounded-md border p-2 text-xs">
                    {keyboardLog.map((log, i) => <div key={i}>{log}</div>)}
                    {keyboardLog.length === 0 && <span className="text-muted-foreground">Press keys in the input above...</span>}
                </ScrollArea>
            </div>
          </CardContent>
        </Card>
        
        {/* Simple List */}
        <Card>
            <CardHeader><CardTitle>Simple List</CardTitle></CardHeader>
            <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                    <li>First item</li>
                    <li>Second item</li>
                    <li>Third item</li>
                    <li>Fourth item</li>
                </ul>
            </CardContent>
        </Card>
        
        {/* Drag and Drop */}
        <Card onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} onMouseLeave={handleMouseUp} className="overflow-hidden">
            <CardHeader><CardTitle>Drag and Drop</CardTitle></CardHeader>
            <CardContent>
                <div className="relative h-48 w-full rounded-md border-2 border-dashed">
                    <div
                        ref={dragRef}
                        onMouseDown={handleMouseDown}
                        className="absolute cursor-grab p-2 bg-primary text-primary-foreground rounded-lg shadow-lg"
                        style={{ left: `${position.x}px`, top: `${position.y}px` }}
                    >
                       <Move className="h-5 w-5 inline-block mr-2" /> Drag me
                    </div>
                </div>
            </CardContent>
        </Card>
        
        {/* Slider */}
         <Card>
            <CardHeader><CardTitle>Slider</CardTitle></CardHeader>
            <CardContent>
                <Slider defaultValue={[50]} max={100} step={1} />
            </CardContent>
        </Card>


        {/* Date Picker */}
        <Card>
            <CardHeader><CardTitle className="font-headline">Date Picker</CardTitle></CardHeader>
            <CardContent>
                <Popover>
                    <PopoverTrigger asChild>
                    <Button
                        variant={"outline"}
                        className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                        )}
                    >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                    />
                    </PopoverContent>
                </Popover>
            </CardContent>
        </Card>

         {/* Window/Tab Management */}
         <Card>
            <CardHeader><CardTitle className="font-headline">Window/Tab</CardTitle></CardHeader>
            <CardContent>
                <Button asChild className="w-full">
                    <Link href="/" target="_blank">Open Home in New Tab</Link>
                </Button>
                <p className="mt-2 text-sm text-muted-foreground">Click the button to test handling new browser tabs.</p>
            </CardContent>
        </Card>

      </div>
    </div>
  );
}
