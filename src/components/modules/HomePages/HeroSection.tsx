import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const HeroSection = () => {
    return (
        <section>
            <div className="container">
                <div className=" grid items-center gap-8 lg:grid-cols-2">
                    <div className="flex flex-col items-center p-16 text-center lg:items-start lg:text-left">

                        <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
                            Welcome to Our Digital Wallet
                        </h1>
                        <p className="text-muted-foreground mb-8 max-w-xl lg:text-xl">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig
                            doloremque mollitia fugiat omnis! Porro facilis quo animi
                            consequatur. Explicabo.
                        </p>
                        <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
                            <Button>
                                Agent
                                <ArrowRight className="size-4" />
                            </Button>
                            <Button variant="outline">User</Button>
                        </div>
                    </div>
                    <img
                        src="https://i.postimg.cc/x1QKXBmL/Digital-Wallet-vs-Mobile-Wallet.webp"
                        alt="placeholder hero"
                        className="h-full w-full object-cover rounded-[15px]"
                    />
                </div>
            </div>
        </section>
    );
};

export { HeroSection };