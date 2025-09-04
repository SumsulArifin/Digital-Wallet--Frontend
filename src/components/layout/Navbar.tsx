"use client";
import Logo from "@/assets/icons/Logo";
import {
    Navbar,
    NavBody,
    NavItems,
    MobileNav,
    NavbarLogo,
    NavbarButton,
    MobileNavHeader,
    MobileNavToggle,
    MobileNavMenu,
} from "@/components/layout/resizable-navbar";
import { useState } from "react";
import { ModeToggle } from "./ModeToggler";
import { authApi, useLogoutMutation, useUserInfoQuery } from "@/redux/features/auth/auth.api";
import { useAppDispatch } from "@/redux/hook";
import { Button } from "../ui/button";
import { Link } from "react-router";
import { role } from "@/constants/role";

export function NavBar() {


    const { data } = useUserInfoQuery(undefined);
    const [logout] = useLogoutMutation();
    const dispatch = useAppDispatch();

    const handleLogout = async () => {
        await logout(undefined);
        dispatch(authApi.util.resetApiState());
    };

    const navItems = [
      
        { link: "/", label: "Home", role: "PUBLIC" },
        { link: "/about", label: "About", role: "PUBLIC" },
        { link: "/tours", label: "Tours", role: "PUBLIC" },
        { link: "/admin", label: "Dashboard", role: role.admin },
        { link: "/admin", label: "Dashboard", role: role.superAdmin },
        { link: "/user", label: "Dashboard", role: role.user },
    ];

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="relative w-full mx-auto px-4">
            <Navbar>
                {/* Desktop Navigation */}
                <NavBody>
                    <Logo />
                    <NavItems
                        items={navItems.filter(
                            (item): item is { label: string; link: string; role: string } =>
                                typeof item.label === "string" &&
                                typeof item.link === "string" &&
                                typeof item.role === "string"
                        )}
                    />
                    <div className="flex items-center gap-4">
                        <ModeToggle />
                        {data?.data?.email && (
                            <Button
                                onClick={handleLogout}
                                variant="outline"
                                className="text-sm"
                            >
                                Logout
                            </Button>
                        )}
                        {!data?.data?.email && (
                            <Button asChild className="text-sm">
                                <Link to="/login">Login</Link>
                            </Button>
                        )}
                    </div>
                </NavBody>

                {/* Mobile Navigation */}
                <MobileNav>
                    <MobileNavHeader>
                        <NavbarLogo />
                        <MobileNavToggle
                            isOpen={isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        />
                    </MobileNavHeader>

                    <MobileNavMenu
                        isOpen={isMobileMenuOpen}
                        onClose={() => setIsMobileMenuOpen(false)}
                    >
                        {navItems.map((item, idx) => (
                            <a
                                key={`mobile-link-${idx}`}
                                href={item.link}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="relative text-neutral-600 dark:text-neutral-300"
                            >
                                <span className="block">{item.label}</span>
                            </a>
                        ))}
                        <div className="flex w-full flex-col gap-4">
                            <ModeToggle />
                            <NavbarButton
                                onClick={() => setIsMobileMenuOpen(false)}
                                variant="primary"
                                className="w-full"
                            >
                                Login
                            </NavbarButton>
                            <NavbarButton
                                onClick={() => setIsMobileMenuOpen(false)}
                                variant="primary"
                                className="w-full"
                            >
                                Book a call
                            </NavbarButton>
                        </div>
                    </MobileNavMenu>
                </MobileNav>
            </Navbar>

            {/* Navbar */}
        </div>
    );
}



// export default function Navbar() {
//     return (
//         <div>
//             <h2>Hello</h2>
//         </div>
//     )

// }

// "use client";
// import Logo from "@/assets/icons/Logo";
// import {
//     Navbar,
//     NavBody,
//     NavItems,
//     MobileNav,
//     NavbarLogo,
//     NavbarButton,
//     MobileNavHeader,
//     MobileNavToggle,
//     MobileNavMenu,
// } from "@/components/layout/resizable-navbar";
// import { useState } from "react";
// import { ModeToggle } from "./ModeToggler";
// import { authApi, useLogoutMutation, useUserInfoQuery } from "@/redux/features/auth/auth.api";
// import { useAppDispatch } from "@/redux/hook";
// import { Button } from "../ui/button";
// import { Link } from "react-router";
// import { role } from "@/constants/role";

// export function NavBar() {


//     const { data } = useUserInfoQuery(undefined);
//     const [logout] = useLogoutMutation();
//     const dispatch = useAppDispatch();

//     const handleLogout = async () => {
//         await logout(undefined);
//         dispatch(authApi.util.resetApiState());
//     };

//     const navItems = [
//         {
//             name: "Home",
//             link: "home",
//         },
//         {
//             name: "Pricing",
//             link: "#pricing",
//         },
//         {
//             name: "Contact",
//             link: "#contact",
//         },
//         { link: "/", label: "Home", role: "PUBLIC" },
//         { link: "/about", label: "About", role: "PUBLIC" },
//         { link: "/tours", label: "Tours", role: "PUBLIC" },
//         { link: "/admin", label: "Dashboard", role: role.admin },
//         { link: "/admin", label: "Dashboard", role: role.superAdmin },
//         { link: "/user", label: "Dashboard", role: role.user },
//     ];

//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//     return (
//         <div className="relative w-full mx-auto px-4">
//             <Navbar>
//                 {/* Desktop Navigation */}
//                 <NavBody>
//                     <Logo />
//                     <NavItems items={navItems} />
//                     <div className="flex items-center gap-4">
//                         <ModeToggle />
//                         {data?.data?.email && (
//                             <Button
//                                 onClick={handleLogout}
//                                 variant="outline"
//                                 className="text-sm"
//                             >
//                                 Logout
//                             </Button>
//                         )}
//                         {!data?.data?.email && (
//                             <Button asChild className="text-sm">
//                                 <Link to="/login">Login</Link>
//                             </Button>
//                         )}
//                     </div>
//                 </NavBody>

//                 {/* Mobile Navigation */}
//                 <MobileNav>
//                     <MobileNavHeader>
//                         <NavbarLogo />
//                         <MobileNavToggle
//                             isOpen={isMobileMenuOpen}
//                             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//                         />
//                     </MobileNavHeader>

//                     <MobileNavMenu
//                         isOpen={isMobileMenuOpen}
//                         onClose={() => setIsMobileMenuOpen(false)}
//                     >
//                         {navItems.map((item, idx) => (
//                             <a
//                                 key={`mobile-link-${idx}`}
//                                 href={item.link}
//                                 onClick={() => setIsMobileMenuOpen(false)}
//                                 className="relative text-neutral-600 dark:text-neutral-300"
//                             >
//                                 <span className="block">{item.name}</span>
//                             </a>
//                         ))}
//                         <div className="flex w-full flex-col gap-4">
//                             <ModeToggle />
//                             <NavbarButton
//                                 onClick={() => setIsMobileMenuOpen(false)}
//                                 variant="primary"
//                                 className="w-full"
//                             >
//                                 Login
//                             </NavbarButton>
//                             <NavbarButton
//                                 onClick={() => setIsMobileMenuOpen(false)}
//                                 variant="primary"
//                                 className="w-full"
//                             >
//                                 Book a call
//                             </NavbarButton>
//                         </div>
//                     </MobileNavMenu>
//                 </MobileNav>
//             </Navbar>

//             {/* Navbar */}
//         </div>
//     );
// }



// // export default function Navbar() {
// //     return (
// //         <div>
// //             <h2>Hello</h2>
// //         </div>
// //     )

// // }