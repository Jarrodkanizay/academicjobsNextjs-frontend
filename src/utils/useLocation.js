import { useStore } from '@/lib/store/store';
import { countryMappings} from "@/utils/data";
const useLocation = () => {
    const { region, setRegion } = useStore();

    const fetchLocation = async () => {
        if (region === 'Global') {
            try {
                const response = await fetch(
                    'https://api.geoapify.com/v1/ipinfo?apiKey=ea0e191c22a94bf39e0e58ffbe2d6b66'
                );
                const result = await response.json();
                //return result.country.name;
                //console.log("result.country.name1", result.country.name)
                
                setRegion(countryMappings[result.country.name.toLowerCase()]) 
                console.log("result.country.name2", countryMappings[result.country.name.toLowerCase()])
            } catch (error) {
                //return '';
            }
        } else {
            //return region;
        }
    };

    return { fetchLocation };
};

export default useLocation;
