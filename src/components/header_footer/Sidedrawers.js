import { Drawer, List, ListItem } from "@mui/material";

const Sidedrawers = (props) => {
  const links = [
    { where: "about", value: "درباره من" },
    { where: "contact", value: "ارتباط با من" },
    { where: "favorite", value: "علاقه مندی ها" },
    { where: "experience", value: "تجربه ها" },
    { where: "projects", value: "پروژ ها" },
  ];

  const renderItem = (item) => (
    <ListItem button onClick={() => alert(item.where)} key={item.where}>
      {item.value}
    </ListItem>
  );

  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClick={() => props.onClose(false)}
    >
      <List>{links.map((item) => renderItem(item))}</List>
    </Drawer>
  );
};

export default Sidedrawers;
