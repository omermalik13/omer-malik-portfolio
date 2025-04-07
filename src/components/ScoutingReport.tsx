
import { useState } from "react"
import ReactMarkdown from "react-markdown"
import { ChevronDown } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"

interface ReportSection {
  title: string;
  content: string;
}

interface ScoutingReportProps {
  report: {
    title: string;
    date: string;
    generatedById: string;
    sections: ReportSection[];
  };
}

const ScoutingReport = ({ report }: ScoutingReportProps) => {
  return (
    <div className="space-y-6 mb-12">
      {/* Report Header */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">{report.title}</h1>
        <div className="flex flex-col sm:flex-row sm:justify-between text-sm text-muted-foreground">
          <div>Generated on {new Date(report.date).toLocaleDateString()}</div>
          <div>Model: {report.generatedById}</div>
        </div>
        <Separator />
      </div>

      {/* Report TOC - for desktop */}
      <div className="hidden md:block">
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">Table of Contents</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-1">
              {report.sections.map((section, index) => (
                <li key={index}>
                  <a 
                    href={`#section-${index}`} 
                    className="text-primary hover:underline"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Mobile Accordion View */}
      <div className="md:hidden">
        <Accordion type="single" collapsible className="w-full">
          {report.sections.map((section, index) => (
            <AccordionItem key={index} value={`section-${index}`}>
              <AccordionTrigger className="text-xl font-semibold">
                {section.title}
              </AccordionTrigger>
              <AccordionContent>
                <div className="prose prose-sm max-w-none">
                  <ReactMarkdown>{section.content}</ReactMarkdown>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Desktop Full Content View */}
      <div className="hidden md:block space-y-8">
        {report.sections.map((section, index) => (
          <section key={index} id={`section-${index}`} className="scroll-mt-16">
            <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
            <div className="prose max-w-none">
              <ReactMarkdown>{section.content}</ReactMarkdown>
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}

export default ScoutingReport
