import Navbar from "@/components/navbar/Navbar";

export default function AboutLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar />
            <main className="flex flex-col items-center p-24">
                <span className="text-2xl text-indigo-300">Hola Mundo</span>
                {children}
            </main>
        </>
    );
}