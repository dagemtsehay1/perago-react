import { useState } from "react";
import logo from "../imgs/logo.png";
import {
  Navbar,
  Center,
  Tooltip,
  UnstyledButton,
  createStyles,
  Stack,
} from "@mantine/core";
import {
  TablerIcon,
  IconHome2,
  IconUserPlus,
  IconSettings,
} from "@tabler/icons";
import { Link } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  link: {
    width: 50,
    height: 50,
    borderRadius: theme.radius.md,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[0],
    },
  },

  active: {
    // "&, &:hover": {
    //   backgroundColor: theme.fn.variant({
    //     variant: "light",
    //     color: theme.primaryColor,
    //   }).background,
    //   color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
    //     .color,
    // },
  },
}));

interface NavbarLinkProps {
  icon: TablerIcon;
  label: string;
  active?: boolean;
  onClick?(): void;
}

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
  const { classes, cx } = useStyles();
  return (
    <Tooltip label={label} position="right" transitionDuration={0}>
      <UnstyledButton
        onClick={onClick}
        className={cx(classes.link, { [classes.active]: active })}
      >
        <Icon stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}

const mockdata = [
  { icon: IconHome2, label: "Home" },
  { icon: IconUserPlus, label: "Add Employee Hierarchy" },
  { icon: IconSettings, label: "Settings" },
];

export function NavbarMinimal() {
  const [active, setActive] = useState(2);

  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => {
        setActive(index);
        if(index == 0){
          window.location.href = "/"
        }
        if(index == 1){
          window.location.href = "add"
        }
        if(index == 2){
          window.location.href = "update"
        }
      }}
    />
  ));

  return (
    <Navbar height={750} width={{ base: 80 }} p="md">
      <Center>
        <img src={logo} />
      </Center>
      <Navbar.Section grow mt={50}>
        <Stack justify="center" spacing={0}>
          {links}
        </Stack>
      </Navbar.Section>
    </Navbar>
  );
}
