import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, FileText, CheckCircle2, AlertCircle, BookOpenText, CheckCircle } from "lucide-react";

const AbstractSubmission = () => {
  const fields = [
    "Medicine",
    "Dentistry", 
    "Nursing",
    "Pharmacy",
    "Public Health",
    "Medical Technology",
    "Biomedical Sciences",
    "Medical Education",
    "Health Management"
  ];

  const guidelines = [
    "Maximum word count: 300 words",
    "Abstract must be original and unpublished",
    "Include clear objectives, methods, results, and conclusions",
    "Use Times New Roman, 12pt font",
    "Submit in .doc, .docx, or .pdf format",
    "Include author names, affiliations, and contact information"
  ];

  return (
    <section id="submission" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Abstract Submission
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We welcome abstracts across Health Professions Education: Curriculum Development, Teaching and Learning, 
            Student Assessment, Program Evaluation, Student Well-being, Academic Leadership, Faculty Development, and more. 
            Submissions are accepted from Medicine, Dentistry, Pharmacy, Nursing, Midwifery, and Allied Health.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Guidelines */}
          <div className="lg:col-span-1">
            <Card className="bg-academic-blue-light border-border shadow-card h-fit sticky top-8">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <BookOpenText className="w-6 h-6 text-academic-navy mr-3" />
                  <h3 className="text-xl font-semibold text-foreground">
                    Submission Guidelines
                  </h3>
                </div>
                
                <div className="space-y-3">
                  {guidelines.map((guideline, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-green-700 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-foreground">{guideline}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-border">
                  <h4 className="font-semibold text-foreground mb-3">Accepted Fields</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {fields.slice(0, 6).map((field, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                        <span className="text-sm text-muted-foreground">{field}</span>
                      </div>
                    ))}
                    <div className="text-sm text-muted-foreground italic">
                      +{fields.length - 6} more fields...
                    </div>
                  </div>
                </div>

                 <Button className="w-full mt-6 bg-gradient-primary hover:bg-primary-hover">
                  <FileText className="w-4 h-4 mr-2" />
                  Download Template
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Submission Form */}
          <div className="lg:col-span-2">
            <Card className="bg-card border-border shadow-card">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Upload className="w-6 h-6 text-primary mr-3" />
                  <h3 className="text-2xl font-semibold text-foreground">
                    Submit Your Abstract
                  </h3>
                </div>

                <form className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" placeholder="Enter your first name" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" placeholder="Enter your last name" className="mt-1" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" placeholder="your.email@example.com" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="+964 xxx xxx xxx" className="mt-1" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="affiliation">Institution/Affiliation *</Label>
                    <Input id="affiliation" placeholder="Your university or institution" className="mt-1" />
                  </div>

                  {/* Abstract Details */}
                  <div className="pt-4 border-t border-border">
                    <h4 className="text-lg font-semibold text-foreground mb-4">Abstract Information</h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <Label htmlFor="field">Medical Field *</Label>
                        <Select>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select your field" />
                          </SelectTrigger>
                          <SelectContent>
                            {fields.map((field) => (
                              <SelectItem key={field} value={field.toLowerCase()}>
                                {field}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="type">Presentation Type *</Label>
                        <Select>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select presentation type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="oral">Oral Presentation</SelectItem>
                            <SelectItem value="poster">Poster Presentation</SelectItem>
                            <SelectItem value="workshop">Workshop</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="mb-4">
                      <Label htmlFor="title">Abstract Title *</Label>
                      <Input id="title" placeholder="Enter your abstract title" className="mt-1" />
                    </div>

                    <div className="mb-4">
                      <Label htmlFor="authors">Co-Authors</Label>
                      <Textarea 
                        id="authors" 
                        placeholder="List co-authors with their affiliations (optional)"
                        className="mt-1"
                        rows={3}
                      />
                    </div>

                    <div className="mb-6">
                      <Label htmlFor="abstract">Abstract Content *</Label>
                      <Textarea 
                        id="abstract" 
                        placeholder="Enter your abstract content (maximum 300 words)..."
                        className="mt-1"
                        rows={8}
                      />
                      <p className="text-sm text-muted-foreground mt-1">
                        Word count: 0/300
                      </p>
                    </div>

                    {/* File Upload */}
                    <div className="mb-6">
                      <Label>Upload Abstract File (Optional)</Label>
                      <div className="mt-2 border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary transition-colors duration-300">
                        <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                        <p className="text-sm text-muted-foreground mb-2">
                          Drop your file here or click to browse
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Supported formats: .doc, .docx, .pdf (Max 5MB)
                        </p>
                        <Button variant="outline" className="mt-3">
                          Choose File
                        </Button>
                      </div>
                    </div>

                    {/* Terms and Conditions */}
                    <div className="flex items-start space-x-3 mb-6 p-4 bg-academic-blue-light rounded-lg">
                      <input type="checkbox" id="terms" className="mt-1" />
                      <label htmlFor="terms" className="text-sm text-foreground">
                        I agree that my abstract may be published in the conference proceedings 
                        and the Journal of Advances in Medical Education and Professionalism (JAMP). 
                        I confirm that this work is original and has not been published elsewhere.
                      </label>
                    </div>

                    {/* Submit Button */}
                    <Button 
                      type="submit" 
                      className="w-full bg-academic-gold hover:bg-academic-gold/90 text-academic-navy font-semibold py-3 shadow-elevated"
                    >
                      Submit Abstract
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Publication Information */}
        <div className="mt-16">
          <Card className="bg-gradient-primary border-0 shadow-hero">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="max-w-3xl mx-auto">
                <div className="w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpenText className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-3xl font-bold text-primary-foreground mb-4">Publication Opportunity</h3>
                <p className="text-lg text-primary-foreground/90 mb-4">
                  Selected accepted abstracts will be forwarded for peer review and considered for publication in the Journal of Advances in Medical Education and Professionalism (JAMP).
                </p>
                <div className="text-primary-foreground/90 text-sm mb-4">
                  <p>Scopus-indexed journal with a CiteScore of 3.6</p>
                  <p>ISSN: 2322-2220 | E-ISSN: 2322-3561</p>
                  <p><a href="https://jamp.sums.ac.ir" target="_blank" rel="noreferrer" className="underline">https://jamp.sums.ac.ir</a></p>
                  <p>The publication fees will be fully sponsored by Al-Subtain University of Medical Sciences.</p>
                </div>
                <div className="flex flex-wrap justify-center gap-4 text-sm text-primary-foreground/80">
                  <span className="flex items-center"><CheckCircle className="w-4 h-4 mr-2" />Peer-reviewed</span>
                  <span className="flex items-center"><CheckCircle className="w-4 h-4 mr-2" />Internationally indexed</span>
                  <span className="flex items-center"><CheckCircle className="w-4 h-4 mr-2" />Open access</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AbstractSubmission;