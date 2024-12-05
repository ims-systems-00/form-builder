import { useJsApiLoader, Libraries } from "@react-google-maps/api";
const googleLibraries: Libraries = ["places"];

export const useGoogle = (apiKey?: string) => {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: apiKey || "",
    libraries: googleLibraries,
  });

  return { isGoogleJsAPILoaded: isLoaded, googleJsAPIError: loadError };
};
