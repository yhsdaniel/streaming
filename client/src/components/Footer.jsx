export default function Footer() {
  return (
    <footer className="py-4 bg-[#1a1a1a]">
        <div className="grid grid-cols-4 gap-4 mb-3 mx-[20%] my-auto">
            <div className="text-sm text-gray-300/50 flex flex-col">
                <a href="" className="my-2 hover:text-gray-300/65 duration-150 ease-in-out cursor-pointer">Audio Description</a>
                <a  href="" className="my-2 hover:text-gray-300/65 duration-150 ease-in-out cursor-pointer">Investor Relations</a>
                <a  href="" className="my-2 hover:text-gray-300/65 duration-150 ease-in-out cursor-pointer">Legal Notices</a>
            </div>
            <div className="text-sm text-gray-300/50 flex flex-col">
                <a  href="" className="my-2 hover:text-gray-300/65 duration-150 ease-in-out cursor-pointer">Help Center</a>
                <a  href="" className="my-2 hover:text-gray-300/65 duration-150 ease-in-out cursor-pointer">Jobs</a>
                <a  href="" className="my-2 hover:text-gray-300/65 duration-150 ease-in-out cursor-pointer">Cookie Preferences</a>
            </div>
            <div className="text-sm text-gray-300/50 flex flex-col">
                <a  href="" className="my-2 hover:text-gray-300/65 duration-150 ease-in-out cursor-pointer">Gift Cards</a>
                <a  href="" className="my-2 hover:text-gray-300/65 duration-150 ease-in-out cursor-pointer">Terms of Use</a>
                <a  href="" className="my-2 hover:text-gray-300/65 duration-150 ease-in-out cursor-pointer">Corporate Information</a>
            </div>
            <div className="text-sm text-gray-300/50 flex flex-col">
                <a  href="" className="my-2 hover:text-gray-300/65 duration-150 ease-in-out cursor-pointer">Media Center</a>
                <a  href="" className="my-2 hover:text-gray-300/65 duration-150 ease-in-out cursor-pointer">Privacy</a>
                <a  href="" className="my-2 hover:text-gray-300/65 duration-150 ease-in-out cursor-pointer">Contact Us</a>
            </div>
            <span className="text-xs text-gray-300/50">&copy; 2023-2024 Netex, Inc.</span>
        </div>
    </footer>
  )
}
