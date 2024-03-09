import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const RouteChangeListener = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle route changes
    console.log(`Route changed to ${location.pathname}`);
    // Set the background color based on the route if needed
    const newBackgroundColor = determineBackgroundColor(location.pathname);
    document.body.style.backgroundColor = newBackgroundColor;
  }, [location]);

  const determineBackgroundColor = (pathname) => {
    // Implement your logic to determine the background color based on the route
    // Example: Change color based on specific routes
    if (pathname === "/input") {
      return "#ccc";
    } else if (pathname === "/gallery") {
      return "#001";
    } else {
      return "#000c"; // Default color
    }
  };

  return null;
};

export default RouteChangeListener;
