import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { AlertCircle, CheckCircle2, ShieldCheck, CalendarDays, UserRound } from "lucide-react";

const countries = [
  "Iraq",
  "Saudi Arabia",
  "United Arab Emirates",
  "Jordan",
  "Kuwait",
  "Qatar",
  "Bahrain",
  "Oman",
  "Turkey",
  "Iran",
  "United Kingdom",
  "United States",
  "Germany",
  "France",
  "India",
];

const Registration = () => {
  const [passportFile, setPassportFile] = useState<File | null>(null);
  const [agree, setAgree] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (!file) {
      setPassportFile(null);
      return;
    }
    const validTypes = ["application/pdf", "image/jpeg", "image/png"];
    const maxSize = 2 * 1024 * 1024; // 2MB
    if (!validTypes.includes(file.type)) {
      alert("Invalid file type. Please upload PDF, JPG, or PNG.");
      e.target.value = "";
      return;
    }
    if (file.size > maxSize) {
      alert("File too large. Max 2MB.");
      e.target.value = "";
      return;
    }
    setPassportFile(file);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!agree) {
      alert("Please agree to the Submission Guidelines and Submission Fees.");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      alert("Thank you! Your registration has been submitted.");
    }, 800);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Page hero */}
      <section className="relative overflow-hidden py-16 bg-gradient-to-b from-academic-blue-light to-white">
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage:
            "url( data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill='%23224466'%3E%3Ccircle cx='2' cy='2' r='1.5'/%3E%3C/g%3E%3C/svg%3E )",
        }} />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-academic-blue-light text-academic-navy px-4 py-2 rounded-full text-sm font-medium mb-5 shadow-card">
            <ShieldCheck className="w-4 h-4" />
            Secure Registration
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-academic-navy leading-tight mb-3">Conference Registration</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">Welcome to IMEConf registration. Please fill in your details below.</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <form onSubmit={onSubmit} className="space-y-8">
            {/* Personal Information */}
            <Card className="bg-card border-border shadow-card">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-2 mb-6">
                  <UserRound className="w-5 h-5 text-academic-navy" />
                  <h2 className="text-xl md:text-2xl font-semibold text-foreground">Personal Information</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" required placeholder="Enter your first name" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" required placeholder="Enter your last name" className="mt-1" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <div>
                    <Label>Date of Birth</Label>
                    <div className="grid grid-cols-3 gap-2 mt-1">
                      <Select>
                        <SelectTrigger><SelectValue placeholder="Year" /></SelectTrigger>
                        <SelectContent>
                          {Array.from({ length: 70 }, (_, i) => 2025 - i - 17).map((y) => (
                            <SelectItem value={String(y)} key={y}>{y}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Select>
                        <SelectTrigger><SelectValue placeholder="Month" /></SelectTrigger>
                        <SelectContent>
                          {Array.from({ length: 12 }, (_, i) => i + 1).map((m) => (
                            <SelectItem value={String(m)} key={m}>{m}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Select>
                        <SelectTrigger><SelectValue placeholder="Day" /></SelectTrigger>
                        <SelectContent>
                          {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
                            <SelectItem value={String(d)} key={d}>{d}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label>Gender *</Label>
                    <Select required>
                      <SelectTrigger className="mt-1"><SelectValue placeholder="Select" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="other">Prefer not to say</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>Title *</Label>
                    <Select required>
                      <SelectTrigger className="mt-1"><SelectValue placeholder="Select your title" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dr">Dr.</SelectItem>
                        <SelectItem value="prof">Prof.</SelectItem>
                        <SelectItem value="mr">Mr.</SelectItem>
                        <SelectItem value="ms">Ms.</SelectItem>
                        <SelectItem value="mrs">Mrs.</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>Country *</Label>
                    <Select required>
                      <SelectTrigger className="mt-1"><SelectValue placeholder="Select your country" /></SelectTrigger>
                      <SelectContent className="max-h-64">
                        {countries.map((c) => (
                          <SelectItem value={c} key={c}>{c}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="bg-card border-border shadow-card">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-2 mb-6">
                  <CalendarDays className="w-5 h-5 text-academic-navy" />
                  <h2 className="text-xl md:text-2xl font-semibold text-foreground">Contact Information</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" required placeholder="your.email@example.com" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" required placeholder="0791 234 5678" className="mt-1" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <Label htmlFor="address">Address *</Label>
                    <Textarea id="address" required placeholder="Your full address" className="mt-1" rows={3} />
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <Label htmlFor="affiliation">Affiliation *</Label>
                      <Input id="affiliation" required placeholder="Your institution / organization" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="job">Current Job Title</Label>
                      <Input id="job" placeholder="e.g., Assistant Professor" className="mt-1" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Participation Details */}
            <Card className="bg-card border-border shadow-card">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-2 mb-6">
                  <CheckCircle2 className="w-5 h-5 text-academic-navy" />
                  <h2 className="text-xl md:text-2xl font-semibold text-foreground">Participation Details</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label>Days Attending *</Label>
                    <Select required>
                      <SelectTrigger className="mt-1"><SelectValue placeholder="Select" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="day1">Day 1 (Oct 25)</SelectItem>
                        <SelectItem value="day2">Day 2 (Oct 26)</SelectItem>
                        <SelectItem value="day3">Day 3 (Oct 27)</SelectItem>
                        <SelectItem value="all">All Days</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="md:col-span-2">
                    <Label>Requirements</Label>
                    <Select>
                      <SelectTrigger className="mt-1"><SelectValue placeholder="Select Requirements" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">None</SelectItem>
                        <SelectItem value="visa">Visa support letter</SelectItem>
                        <SelectItem value="access">Accessibility support</SelectItem>
                        <SelectItem value="dietary">Dietary restrictions</SelectItem>
                        <SelectItem value="assistance">Special assistance</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Passport Upload */}
                <div className="mt-6">
                  <Label htmlFor="passport">Passport copy</Label>
                  <div className="mt-2 border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary transition-colors duration-300">
                    <input id="passport" type="file" accept=".pdf,.jpg,.jpeg,.png" onChange={handleFileChange} />
                    <p className="text-sm text-muted-foreground mt-2">Accepted file types: PDF, JPG, PNG. Max file size: 2MB.</p>
                    {passportFile && (
                      <p className="text-sm text-foreground mt-2">Selected: {passportFile.name}</p>
                    )}
                  </div>
                </div>

                {/* Agreement */}
                <div className="mt-6 flex items-start gap-3 p-4 bg-academic-blue-light rounded-lg">
                  <input
                    id="agree"
                    type="checkbox"
                    checked={agree}
                    onChange={(e) => setAgree(e.target.checked)}
                    className="mt-1"
                    required
                  />
                  <label htmlFor="agree" className="text-sm text-foreground">
                    * I have read and agree to the Submission Guidelines and Submission Fees
                  </label>
                </div>

                <div className="mt-4 text-sm text-muted-foreground flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 mt-0.5" />
                  <p>
                    The presenter of the accepted abstract will receive a waiver of both accommodation and registration fees.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center">
              <Button type="submit" size="lg" className="bg-gradient-primary text-primary-foreground px-10" disabled={submitting}>
                {submitting ? "Submitting..." : "Submit Registration"}
              </Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Registration;



