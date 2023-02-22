import useWindowSize from "../../../hooks/useWindowSize";
import LandingPageDesktop from "./LandingPageDesktop";
import LandingPageMobile from "./LandingPageMobile";

const LandingPage = () => {

	const { width } = useWindowSize();
	const mobileBreakpoint = 640;

	return (
		<>
			{(width && width < mobileBreakpoint) && <LandingPageMobile />}
			{(width && width >= mobileBreakpoint) && <LandingPageDesktop />}
		</>
	);
}

export default LandingPage;