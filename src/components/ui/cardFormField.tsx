import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function CardFormField() {
  return (
    <Card className="mx-auto border-none pt-10 ">
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Name the Call</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter name hear"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Notes</Label>
            <Input placeholder="Enter message hear" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="first-name">Start Date and Time</Label>
              <Input id="first-name" placeholder="MM/DD/YYYY" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="last-name">End Date and Time</Label>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select Person" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Raam</SelectItem>
                  <SelectItem value="dark">Vijith</SelectItem>
                  <SelectItem value="system">Raam Vijith</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="first-name">Call to</Label>
              <Select>
              <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select Person" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Raam</SelectItem>
                  <SelectItem value="dark">Vijith</SelectItem>
                  <SelectItem value="system">Raam Vijith</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2 justify-between">
              <Label htmlFor="last-name">Call by</Label>
              <Select>
              <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select Person" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Raam</SelectItem>
                  <SelectItem value="dark">Vijith</SelectItem>
                  <SelectItem value="system">Raam Vijith</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
