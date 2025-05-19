import { useEffect, useState } from "react";

const WhatsAppIcon = () => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setAnimate(true);
            setTimeout(() => setAnimate(false), 1000); // Animation lasts 1 second
        }, 120000); // Trigger every 2 minutes (120,000 ms)

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);

    const handleClick = () => {
        window.open("https://wa.me/03361989322", "_blank"); // Open WhatsApp link in a new tab
    };

    return (
        <div
            onClick={handleClick}
            className={`fixed bottom-4 left-4 z-50 cursor-pointer p-3 bg-green-500 rounded-full shadow-lg hover:bg-green-600 ${animate ? "animate-bounce" : ""
                }`}
            title="Chat with us on WhatsApp"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                width="40"
                height="40"
                fill="white"   /* inherits text color; swap to any color you like */
            >
                <path d="M128 0C57.42 0 0 57.42 0 128a127.2 127.2 0 0017.24 65.11L0 256l65.79-17.29A127.83 127.83 0 00128 256c70.58 0 128-57.42 128-128S198.58 0 128 0zm0 234.67a106.2 106.2 0 01-54-14.68l-3.83-2.23-38.85 10.22 10.4-38.11-2.49-3.93A106.7 106.7 0 0121.33 128c0-58.73 47.94-106.67 106.67-106.67S234.67 69.27 234.67 128 186.73 234.67 128 234.67zm58.37-78.5c-3.19-1.59-18.87-9.31-21.79-10.37s-5.05-1.59-7.16 1.59-8.21 10.37-10.06 12.51-3.71 2.38-6.9.79-13.45-4.94-25.61-15.76c-9.47-8.45-15.85-18.9-17.7-22.08s-.2-4.91 1.39-6.5c1.43-1.43 3.19-3.72 4.78-5.58s2.39-3.19 3.59-5.31.6-4-0.2-5.58-7.16-17.54-9.8-24.06c-2.59-6.21-5.23-5.34-7.16-5.44l-6.13-.12a11.62 11.62 0 00-8.47 3.71c-2.98 3.19-11.13 10.88-11.13 26.56s11.4 30.84 12.97 33a150.77 150.77 0 0058.54 57.26c8.19 4.49 14.62 7.17 19.63 9.18 8.25 3.32 15.77 2.85 21.71 1.73 6.62-1.25 18.87-7.73 21.54-15.19s2.67-13.84 1.9-15.19-2.91-2.11-6.1-3.7z" />
            </svg>

        </div>
    );
};

export default WhatsAppIcon;