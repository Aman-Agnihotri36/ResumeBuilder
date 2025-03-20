import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertCircle, CheckCircle, Download, FileText, FileUp } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

function Ats() {


    const matchedKeywords = [
        { keyword: "React", count: 5, important: true },
        { keyword: "TypeScript", count: 3, important: true },
        { keyword: "UI/UX", count: 2, important: false },
        { keyword: "Frontend", count: 4, important: true },
        { keyword: "JavaScript", count: 6, important: true },
    ]

    const missingKeywords = [
        { keyword: "Next.js", important: true },
        { keyword: "Redux", important: false },
        { keyword: "Tailwind CSS", important: true },
        { keyword: "CI/CD", important: false },
    ]

    const improvements = [
        "Add more specific details about your Next.js experience",
        "Include Tailwind CSS in your skills section",
        "Quantify your achievements with metrics and numbers",
        "Remove outdated skills like jQuery to focus on modern technologies",
        "Add more action verbs to strengthen your experience descriptions",
    ]
    const file = {
        name: 'xyz.pdf',
        size: 3
    }
    return (
        <div className="container mx-auto py-8 px-4 max-w-6xl">
            <div className="space-y-6">
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tight">ATS Resume Analyzer</h1>
                    <p className="text-muted-foreground">
                        Optimize your resume for Applicant Tracking Systems and increase your chances of getting an interview.
                    </p>
                </div>
            </div>


            <Tabs defaultValue="analyze" className="w-full mt-7">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="analyze">Analyze Resume</TabsTrigger>
                    <TabsTrigger value="results" >
                        Results
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="analyze" className="space-y-6 mt-6">
                    <div className="grid gap-6 md:grid-cols-2">
                        <Card>
                            <CardHeader>
                                <CardTitle>Upload Your Resume</CardTitle>
                                <CardDescription>
                                    Upload your resume in PDF or DOCX format to analyze against ATS systems.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-col items-center justify-center border-2 border-dashed border-purple-200 rounded-lg p-12 bg-purple-50/50">
                                    {file ? (
                                        <div className="flex flex-col items-center gap-2 text-center">
                                            <CheckCircle className="h-8 w-8 text-green-500" />
                                            <p className="font-medium">{file.name}</p>
                                            <p className="text-sm text-muted-foreground">{(file.size / 1024).toFixed(2)} KB</p>
                                            <Button variant="outline" size="sm" className="mt-2">
                                                Change File
                                            </Button>
                                        </div>
                                    ) : (
                                        <div className="flex flex-col items-center gap-4 text-center">
                                            <FileUp className="h-10 w-10 text-purple-500" />
                                            <div className="space-y-1">
                                                <p className="font-medium">Drag and drop your resume here</p>
                                                <p className="text-sm text-muted-foreground">Supports PDF, DOCX (Max 5MB)</p>
                                            </div>
                                            <div className="mt-2">
                                                <Input
                                                    id="resume-upload"
                                                    type="file"
                                                    accept=".pdf,.docx"
                                                    className="hidden"
                                                // onChange={handleFileChange}
                                                />
                                                <Label
                                                    htmlFor="resume-upload"
                                                    className="inline-flex h-9 items-center justify-center rounded-md bg-purple-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-purple-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring cursor-pointer"
                                                >
                                                    Browse Files
                                                </Label>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Job Description</CardTitle>
                                <CardDescription>
                                    Paste the job description to match your resume against the requirements.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Textarea
                                    placeholder="Paste job description here..."
                                    className="min-h-[220px] resize-none"
                                // value={jobDescription}
                                // onChange={(e) => setJobDescription(e.target.value)}
                                />
                            </CardContent>
                        </Card>
                    </div>

                    <div className="flex justify-center">
                        <Button
                            className="bg-purple-600 hover:bg-purple-700 text-white w-full max-w-md"
                            size="lg"
                        // disabled={!file || !jobDescription || isAnalyzing}
                        // onClick={handleAnalyze}
                        >
                            {/* {isAnalyzing ? (
                                <>
                                    <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                                    Analyzing Resume...
                                </>
                            ) : (
                                "Analyze Resume"
                            )} */}
                        </Button>
                    </div>
                </TabsContent>



                <TabsContent value="results" className="space-y-6 mt-6">
                    {(
                        <>
                            <Card>
                                <CardHeader className="pb-3">
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                        <div>
                                            <CardTitle>ATS Compatibility Score</CardTitle>
                                            <CardDescription>How well your resume matches the job description</CardDescription>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Button variant="outline" >
                                                New Analysis
                                            </Button>
                                            <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                                                <Download className="mr-2 h-4 w-4" />
                                                Download Report
                                            </Button>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-8">
                                        <div className="space-y-2">
                                            <div className="flex justify-between">
                                                <span className="text-sm font-medium">Score</span>
                                                <span className="text-sm font-medium">50%</span>
                                            </div>
                                            <Progress value={50} className="h-3 bg-purple-100" />
                                            <div className="flex justify-between text-sm text-muted-foreground">
                                                <span>Needs Improvement</span>
                                                <span>Excellent</span>
                                            </div>
                                        </div>

                                        <div className="grid gap-6 md:grid-cols-2">
                                            <div className="space-y-4">
                                                <h3 className="text-lg font-medium">Matched Keywords</h3>
                                                <div className="space-y-2">
                                                    {matchedKeywords.map((item, i) => (
                                                        <div key={i} className="flex items-center justify-between">
                                                            <div className="flex items-center gap-2">
                                                                <CheckCircle className="h-4 w-4 text-green-500" />
                                                                <span>{item.keyword}</span>
                                                                {item.important && (
                                                                    <Badge
                                                                        variant="outline"
                                                                        className="text-xs border-purple-200 bg-purple-50 text-purple-700"
                                                                    >
                                                                        Important
                                                                    </Badge>
                                                                )}
                                                            </div>
                                                            <span className="text-sm text-muted-foreground">
                                                                {item.count} {item.count === 1 ? "mention" : "mentions"}
                                                            </span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="space-y-4">
                                                <h3 className="text-lg font-medium">Missing Keywords</h3>
                                                <div className="space-y-2">
                                                    {missingKeywords.map((item, i) => (
                                                        <div key={i} className="flex items-center justify-between">
                                                            <div className="flex items-center gap-2">
                                                                <AlertCircle className="h-4 w-4 text-amber-500" />
                                                                <span>{item.keyword}</span>
                                                                {item.important && (
                                                                    <Badge
                                                                        variant="outline"
                                                                        className="text-xs border-purple-200 bg-purple-50 text-purple-700"
                                                                    >
                                                                        Important
                                                                    </Badge>
                                                                )}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Suggested Improvements</CardTitle>
                                    <CardDescription>Recommendations to improve your resumes ATS compatibility</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-3">
                                        {improvements.map((item, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <div className="mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-purple-100 flex items-center justify-center">
                                                    <span className="text-xs font-medium text-purple-700">{i + 1}</span>
                                                </div>
                                                <p>{item}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardFooter className="flex flex-col items-start gap-4 border-t px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        <FileText className="h-5 w-5 text-purple-600" />
                                        <div>
                                            <h4 className="font-medium">Need help improving your resume?</h4>
                                            <p className="text-sm text-muted-foreground">
                                                Use our Resume Builder to create an ATS-optimized resume
                                            </p>
                                        </div>
                                    </div>
                                    <Button className="bg-purple-600 hover:bg-purple-700 text-white">Open Resume Builder</Button>
                                </CardFooter>
                            </Card>
                        </>
                    )}
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default Ats
