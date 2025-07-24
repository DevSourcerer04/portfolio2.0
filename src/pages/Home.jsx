import { ThemeToggle } from "@/components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";

export const Home = () => {
    return(
        <div className="min-h-screen *:backdrop:g-background text-foreground overfolw-x-hidden">

        {/* Theme Toggle */}
        <ThemeToggle />
        {/* Background Effects */}
        <StarBackground />
        {/* Navbar */}

        {/* Main Content */}

        {/* Footer */}
    </div>
    );
};