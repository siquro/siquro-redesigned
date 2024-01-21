import { useRouter } from "next/router"

const Custom404 = () => {
    const router = useRouter()

    return <main className="md:flex min-h-screen">
        <div className="w-full md:w-1/2 flex items-center justify-center">
            <div className="max-w-sm m-8">
                <div className="text-5xl">404</div>
                <p className="">Sorry, the page you are looking for could not be found.</p>
                <button className="bg-dark" onClick={() => router.push('/')}>BACK TO HOME</button>
            </div>
        </div>
    </main>
}
export default Custom404