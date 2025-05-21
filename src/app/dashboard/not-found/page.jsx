export default function NotFound() {
    return (
        <div className="min-h-screen w-[400px] border border-gray-200 my-10 rounded-lg flex m-auto flex-col items-center justify-center text-center px-4">
            <img
                src="/images/not-found.png"
                alt="Not Found"
                className="w-40 h-40 mb-6"
            />
            <h2 className="text-xl font-semibold mb-2">Not Found</h2>
            <p className="text-sm text-gray-500 max-w-xs">
                Sorry, the keyword you entered cannot be found, please check again or
                search with another keyword.
            </p>
        </div>
    );
}
