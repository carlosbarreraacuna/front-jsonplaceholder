import { getUserById } from "@/lib/api"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Globe, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

export async function generateMetadata({ params }: { params: { id: string } }) {
  const user = await getUserById(params.id)

  if (!user) {
    return {
      title: "User Not Found",
    }
  }

  return {
    title: `${user.name} | JSONPlaceholder App`,
    description: `Profile of ${user.name}`,
  }
}

export default async function UserDetailPage({ params }: { params: { id: string } }) {
  const user = await getUserById(params.id)

  if (!user) {
    notFound()
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-6">
        <Button asChild variant="outline">
          <Link href="/users" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Users
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">{user.name}</CardTitle>
          <p className="text-muted-foreground">@{user.username}</p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="text-lg font-medium">Contact Information</h3>
              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  {user.email}
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  {user.phone}
                </p>
                <p className="flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  <a
                    href={`https://${user.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    {user.website}
                  </a>
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-medium">Address</h3>
              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {user.address.street}, {user.address.suite}
                </p>
                <p className="ml-6">
                  {user.address.city}, {user.address.zipcode}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-medium">Company</h3>
            <div>
              <p className="font-medium">{user.company.name}</p>
              <p className="text-muted-foreground">{user.company.catchPhrase}</p>
              <p className="text-sm text-muted-foreground">{user.company.bs}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

