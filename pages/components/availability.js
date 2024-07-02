export function Availability () {
    return (
        <div className="flex items-center gap-2">
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="8" height="8" rx="4" fill="#10B981"/>
            </svg>
            <div className="text-gray-900 font [Inter] text-base font-normal mr-4 ml-4 mt-2">
                Available for new projects
            </div> 
        </div>
    );
}