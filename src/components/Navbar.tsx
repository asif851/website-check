import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
  } from "@/components/ui/navigation-menu";
  import Link from "next/link";
  
  const menuItems = [
    { href: "/blogs", label: "Blogs" },
    { href: "/about", label: "About us" },
    { href: "/contact", label: "Contact us" },
  ];
  
  const NavBar = () => {
    return (
      <NavigationMenu className="mx-auto sticky top-0 shadow-sm bg-white/85 dark:bg-black/85">
        <NavigationMenuList className="py-4 px-10 w-screen">
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Logo
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
  
          {menuItems.map((item) => (
            <NavigationMenuItem key={item.href}>
              <Link href={item.href} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {item.label}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    );
  };
  
  export default NavBar;
  