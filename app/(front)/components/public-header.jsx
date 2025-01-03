"use client"

import React from 'react'


import {
    Navbar,
    Collapse,
    Typography,
    Button,
    IconButton,
    List,
    ListItem,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Badge,
} from "@material-tailwind/react";
import {
    ChevronDownIcon,
    Bars3Icon,
    XMarkIcon,
    ChevronUpIcon,
    ShoppingCartIcon,
} from "@heroicons/react/24/outline";

const nestedMenuItems = [
    {
        title: "Hero",
    },
    {
        title: "Features",
    },
    {
        title: "Testimonials",
    },
    {
        title: "Ecommerce",
    },
];

function NavListMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [openNestedMenu, setopenNestedMenu] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const renderItems = nestedMenuItems.map(({ title }, key) => (
        <a href="#" key={key}>
            <MenuItem>{title}</MenuItem>
        </a>
    ));

    return (
        <React.Fragment>
            <Menu
                open={isMenuOpen}
                handler={setIsMenuOpen}
                placement="bottom"
                allowHover={true}
            >
                <MenuHandler>
                    <Typography as="div" variant="small" className="font-medium">
                        <ListItem
                            className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
                            selected={isMenuOpen || isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen((cur) => !cur)}
                        >
                            categories
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen ? "rotate-180" : ""
                                    }`}
                            />
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`block h-3 w-3 transition-transform lg:hidden ${isMobileMenuOpen ? "rotate-180" : ""
                                    }`}
                            />
                        </ListItem>
                    </Typography>
                </MenuHandler>
                <MenuList className="hidden rounded-xl lg:block">
                    <Menu
                        placement="right-start"
                        allowHover
                        offset={15}
                        open={openNestedMenu}
                        handler={setopenNestedMenu}
                    >
                        <MenuHandler className="flex items-center justify-between">
                            <MenuItem>
                                Figma
                                <ChevronUpIcon
                                    strokeWidth={2.5}
                                    className={`h-3.5 w-3.5 transition-transform ${isMenuOpen ? "rotate-90" : ""
                                        }`}
                                />
                            </MenuItem>
                        </MenuHandler>
                        <MenuList className="rounded-xl">{renderItems}</MenuList>
                    </Menu>
                    <MenuItem>React</MenuItem>
                    <MenuItem>TailwindCSS</MenuItem>
                </MenuList>
            </Menu>
            <div className="block lg:hidden">
                <Collapse open={isMobileMenuOpen}>
                    <Menu
                        placement="bottom"
                        allowHover
                        offset={6}
                        open={openNestedMenu}
                        handler={setopenNestedMenu}
                    >
                        <MenuHandler className="flex items-center justify-between">
                            <MenuItem>
                                Figma
                                <ChevronUpIcon
                                    strokeWidth={2.5}
                                    className={`h-3.5 w-3.5 transition-transform ${isMenuOpen ? "rotate-90" : ""
                                        }`}
                                />
                            </MenuItem>
                        </MenuHandler>
                        <MenuList className="block rounded-xl lg:hidden">
                            {renderItems}
                        </MenuList>
                    </Menu>
                    <MenuItem>React</MenuItem>
                    <MenuItem>TailwindCSS</MenuItem>
                </Collapse>
            </div>
        </React.Fragment>
    );
}

function NavList() {
    return (
        <List className="mb-6 mt-4 p-0 lg:mb-0 lg:mt-0 lg:flex-row lg:p-1">
            <Typography
                as="a"
                href="#"
                variant="small"
                color="blue-gray"
                className="font-medium"
            >
                <ListItem className="flex items-center gap-2 py-2 pr-4">Home</ListItem>
            </Typography>
            <Typography
                as="a"
                href="/"
                variant="small"
                color="blue-gray"
                className="font-medium"
            >
                <ListItem className="flex items-center gap-2 py-2 pr-4">
                    About
                </ListItem>
            </Typography>
            <NavListMenu />
            <Badge content={5}>
                <Button className='flex iteam-center gap-5'>
                    <ShoppingCartIcon className='fill-white size-5' />Cart
                </Button>
            </Badge>
        </List>
    );
}

export function PublicHeader() {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 320 && setOpenNav(false),
        );
    }, []);

    return (
        <Navbar className="mx-auto w-full px-4 py-2">
            <div className="  flex items-center justify-between text-blue-gray-900">
                <Typography
                    as="a"
                    href="/"
                    variant="h6"
                    className="mr-4 cursor-pointer py-1.5 text-2xl"
                >
                    Shopper
                </Typography>
                <div className="hidden lg:block">
                    <NavList />
                </div>
                <div className="hidden gap-2 lg:flex">
                    <Button size="sm">Get Started</Button>
                    <Button variant="outlined" size="sm">
                        Log In
                    </Button>
                </div>
                <IconButton
                    variant="text"
                    className="lg:hidden"
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                    ) : (
                        <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                    )}
                </IconButton>
            </div>
            <Collapse open={openNav}>
                <NavList />
                <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
                    <Button size="sm" fullWidth>
                        Get Started
                    </Button>
                    <Button variant="outlined" size="sm" fullWidth>
                        Log In
                    </Button>
                </div>
            </Collapse>
        </Navbar>
    );
}
