"use client"

import { useState } from "react"
import { Plus, Search, FileText, Download, Edit, Trash2, MoreHorizontal, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Link from "next/link"

// Sample resume data
const sampleResumes = [
    {
        id: 1,
        title: "Software Developer Resume",
        lastEdited: "2 days ago",
        thumbnail: "/placeholder.svg?height=200&width=150",
    },
    {
        id: 2,
        title: "Product Manager CV",
        lastEdited: "1 week ago",
        thumbnail: "/placeholder.svg?height=200&width=150",
    },
    {
        id: 3,
        title: "UX Designer Portfolio",
        lastEdited: "3 weeks ago",
        thumbnail: "/placeholder.svg?height=200&width=150",
    },
    {
        id: 4,
        title: "Marketing Specialist Resume",
        lastEdited: "1 month ago",
        thumbnail: "/placeholder.svg?height=200&width=150",
    },
]

export default function ResumeDashboard() {
    const [resumes, setResumes] = useState(sampleResumes)
    const [searchQuery, setSearchQuery] = useState("")

    const filteredResumes = resumes.filter((resume) => resume.title.toLowerCase().includes(searchQuery.toLowerCase()))

    const handleDeleteResume = (id: number) => {
        setResumes(resumes.filter((resume) => resume.id !== id))
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}

            <div className="flex">
                {/* Sidebar */}
                <aside className="hidden w-64 flex-col border-r bg-white p-4 md:flex">
                    <div className="mb-8 space-y-1">
                        <Button variant="default" className="w-full justify-start bg-purple-600 hover:bg-purple-700">
                            <FileText className="mr-2 h-4 w-4" />
                            My Resumes
                        </Button>
                        <Button variant="ghost" className="w-full justify-start text-gray-600 hover:text-purple-700" asChild>
                            <Link href="/profile">
                                <User className="mr-2 h-4 w-4" />
                                Profile
                            </Link>
                        </Button>
                    </div>
                    <div className="mt-auto">
                        <Button variant="outline" className="w-full justify-start text-gray-600 hover:text-purple-700">
                            <span>Help & Support</span>
                        </Button>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1 p-4 md:p-6">
                    <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900">My Resumes</h2>
                            <p className="text-gray-500">Manage and create professional resumes</p>
                        </div>
                        <Button className="bg-purple-600 hover:bg-purple-700">
                            <Plus className="mr-2 h-4 w-4" />
                            Create New Resume
                        </Button>
                    </div>

                    {/* Search */}
                    <div className="mb-6">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                            <Input
                                placeholder="Search resumes..."
                                className="pl-10"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Resume Grid */}
                    {filteredResumes.length > 0 ? (
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {filteredResumes.map((resume) => (
                                <Card key={resume.id} className="overflow-hidden transition-all hover:shadow-md">
                                    <div className="aspect-[3/4] overflow-hidden bg-purple-50">
                                        <img
                                            src={resume.thumbnail || "/placeholder.svg"}
                                            alt={resume.title}
                                            className="h-full w-full object-cover transition-transform hover:scale-105"
                                        />
                                    </div>
                                    <CardContent className="p-4">
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <h3 className="font-medium text-gray-900">{resume.title}</h3>
                                                <p className="text-sm text-gray-500">Last edited: {resume.lastEdited}</p>
                                            </div>
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button variant="ghost" size="icon" className="h-8 w-8">
                                                        <MoreHorizontal className="h-4 w-4" />
                                                        <span className="sr-only">Open menu</span>
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end">
                                                    <DropdownMenuItem className="flex cursor-pointer items-center">
                                                        <Edit className="mr-2 h-4 w-4" />
                                                        <span>Edit</span>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem className="flex cursor-pointer items-center">
                                                        <Download className="mr-2 h-4 w-4" />
                                                        <span>Download</span>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem
                                                        className="flex cursor-pointer items-center text-red-600"
                                                        onClick={() => handleDeleteResume(resume.id)}
                                                    >
                                                        <Trash2 className="mr-2 h-4 w-4" />
                                                        <span>Delete</span>
                                                    </DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </div>
                                    </CardContent>
                                    <CardFooter className="border-t bg-gray-50 p-3">
                                        <Button
                                            variant="outline"
                                            className="w-full text-purple-700 hover:bg-purple-50 hover:text-purple-800"
                                        >
                                            <Edit className="mr-2 h-4 w-4" />
                                            Edit Resume
                                        </Button>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    ) : (
                        <div className="flex h-64 flex-col items-center justify-center rounded-lg border border-dashed bg-white p-8 text-center">
                            <FileText className="mb-4 h-12 w-12 text-gray-300" />
                            <h3 className="mb-1 text-lg font-medium text-gray-900">No resumes found</h3>
                            <p className="mb-4 text-gray-500">
                                {searchQuery ? "Try a different search term" : "Create your first resume to get started"}
                            </p>
                            {!searchQuery && (
                                <Button className="bg-purple-600 hover:bg-purple-700">
                                    <Plus className="mr-2 h-4 w-4" />
                                    Create New Resume
                                </Button>
                            )}
                        </div>
                    )}
                </main>
            </div>
        </div>
    )
}

