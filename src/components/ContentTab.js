import React from "react";
import { Box, Tab, Typography, Grid } from "@mui/material";
import { TabPanel, TabContext, TabList } from "@mui/lab";

import { useState } from "react";

// Main function
export default function ContentTab() {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const style = {
    mainContainer: {
      marginTop: 6.5,
      marginLeft: "220px",
      padding: 3,
    },

    TabsContainer: {
      mt: 3,
    },
    HeaderContainer: {
      color: "rgb(255, 255, 255)",
    },
  };

  //Clock
  var today = new Date().toLocaleDateString(undefined, {
    day: "2-digit",
    month: "long",
    weekday: "long",
  });

  return (
    <Box sx={style.mainContainer}>
      {/* Header Container */}
      <Box sx={style.HeaderContainer}>
        <Grid container spacing={2}>
          <Grid item xs={9}>
            <Typography variant="h4">{today}</Typography>
          </Grid>

          <Grid item xs={3}>
            <input type="text" />
          </Grid>
        </Grid>
      </Box>

      <Box sx={style.TabsContainer}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange}>
              <Tab label="Todos" value="1" />
              <Tab label="Item Two" value="2" />
              <Tab label="Item Three" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">Item One</TabPanel>
          <TabPanel value="2">Item Two</TabPanel>
          <TabPanel value="3">Item Three</TabPanel>
        </TabContext>
      </Box>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin efficitur
        ante eu dui interdum suscipit. Duis ut lorem laoreet, congue enim
        blandit, vehicula lorem. Suspendisse potenti. Integer tristique nisi
        augue, nec sodales est lacinia eu. Phasellus aliquet ornare finibus.
        Praesent sodales nisi et venenatis fermentum. Etiam ultricies tempus
        leo, in euismod magna iaculis non. In dapibus purus quis elit sodales,
        posuere congue lectus molestie. Aenean convallis fermentum arcu, a
        ultricies lacus suscipit eu. Ut sed mauris sem. Integer facilisis
        scelerisque placerat. Ut tincidunt cursus mauris, quis sollicitudin
        felis varius vel. Fusce tellus massa, interdum eu egestas non, interdum
        ut lacus. Curabitur sodales scelerisque nibh facilisis vehicula. Proin
        pretium mi non nulla placerat dapibus. Nam vitae odio hendrerit, semper
        nibh sit amet, fermentum urna. Nullam ornare dapibus nisi, et placerat
        nisi lobortis vel. Aliquam porttitor purus sed sodales pellentesque. Sed
        et felis posuere, auctor turpis nec, ullamcorper libero. Nam mattis
        posuere vestibulum. Aliquam non dolor dictum, varius elit a, vehicula
        odio. Quisque id augue finibus, sodales felis eget, volutpat lectus. Sed
        laoreet porttitor maximus. Pellentesque ac varius lacus. Quisque blandit
        nisl velit, et sagittis justo iaculis eleifend. Vivamus a odio diam.
        Vivamus tempus laoreet sagittis. Duis sollicitudin, nibh vitae cursus
        congue, odio nunc maximus nisl, eget porttitor massa odio at ante. Sed
        nec consequat massa. Nullam a nulla nec enim posuere volutpat ac non
        diam. Quisque ullamcorper mattis odio, a iaculis ex lacinia eu. Ut
        fringilla massa eu leo ultrices elementum. Aenean in nibh viverra,
        convallis magna nec, faucibus arcu. In eu feugiat diam, ac egestas
        nulla. Aliquam condimentum arcu et erat placerat ullamcorper sed id
        elit. Nullam nec orci a risus commodo blandit. Maecenas tincidunt risus
        ex. Curabitur pulvinar placerat massa ut luctus. Suspendisse blandit
        commodo turpis, ut sodales mi elementum id. Morbi facilisis tristique
        aliquam. Aliquam ipsum nisi, aliquet ac nisl nec, faucibus auctor augue.
        Proin lacus tortor, pellentesque ut odio eleifend, tempus mattis lacus.
        Nunc ut euismod mauris. Nullam quis massa vitae odio pulvinar interdum
        eu non urna. Aliquam ut finibus purus. Duis sagittis, sem non placerat
        porta, quam ante auctor metus, vitae ornare sem velit eget metus.
        Vestibulum a dapibus nisl. Cras ultrices dictum maximus. Fusce vitae
        pellentesque mauris. Class aptent taciti sociosqu ad litora torquent per
        conubia nostra, per inceptos himenaeos. Fusce eget finibus eros, nec
        tincidunt purus. Nullam dolor elit, imperdiet a enim vel, maximus semper
        nibh. Pellentesque ornare risus at lacus bibendum, eget sodales nisi
        cursus. Pellentesque sapien tortor, vestibulum sed dui vitae, luctus
        venenatis nisi. Fusce efficitur ullamcorper tortor sed lobortis.
        Pellentesque sed tincidunt lacus, vel consectetur augue. Cras eu libero
        eget tellus ultrices aliquam. Sed posuere tristique tortor sit amet
        rhoncus. Sed at rutrum urna. Aliquam sit amet quam mi. Aenean egestas id
        nibh suscipit lacinia. Nulla dictum leo sed ultricies finibus. Cras
        cursus augue id enim convallis, ultricies molestie ante aliquet. Duis
        est turpis, commodo a diam pretium, rhoncus posuere velit. Sed id ligula
        lorem. Vestibulum id pharetra felis, sit amet dapibus nibh. Nulla vel
        malesuada nisl. Vivamus tristique aliquet mauris non vehicula. Praesent
        efficitur tellus ac ultrices laoreet. Cras vitae lorem eleifend,
        tincidunt magna a, eleifend erat. Nulla magna dolor, pretium sed
        elementum id, faucibus et augue. Nam ac libero at nibh tincidunt
        facilisis. Phasellus sed scelerisque nisi. Nam ut turpis urna. Donec leo
        leo, ornare quis lacinia et, interdum sagittis libero. Vestibulum ante
        ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
        Quisque interdum dui dolor, ac scelerisque ipsum tincidunt non. Nunc
        hendrerit nulla tortor, condimentum varius elit ullamcorper tempus.
        Donec ac neque ullamcorper, mattis enim sed, facilisis lectus. Cras
        faucibus eros eget nisl suscipit placerat. Morbi sodales ligula nunc, ac
        molestie risus imperdiet vitae. Curabitur at eleifend dui. Nullam at
        maximus ex, non accumsan elit. Pellentesque posuere ex non vestibulum
        commodo. Proin congue dignissim ante, non malesuada magna dignissim a.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Nunc rutrum erat eu fermentum hendrerit. Vestibulum quis dolor
        placerat, dictum elit sed, porta erat. Vestibulum vitae odio et ipsum
        viverra pellentesque. Fusce viverra congue ex quis commodo. Nunc
        vulputate id eros eget pellentesque. Sed ullamcorper, dolor quis viverra
        tempus, massa dolor blandit lorem, quis posuere nunc velit bibendum
        nisi. Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Nulla vestibulum pretium rutrum. Nam
        tincidunt vitae lorem id vulputate. Etiam fringilla condimentum
        tincidunt. Pellentesque euismod nisi ac tincidunt ultricies. Duis dictum
        sed est vitae hendrerit. In hac habitasse platea dictumst. Sed bibendum
        fringilla congue. Proin elementum ornare nunc tristique elementum. In at
        lacinia ipsum, rhoncus accumsan odio. Suspendisse lectus mi, varius nec
        mauris in, efficitur consequat mi. Proin eu est ornare tortor congue
        hendrerit efficitur vel magna. Pellentesque vitae velit malesuada,
        ullamcorper felis quis, facilisis velit. Aliquam consectetur augue nisi,
        at consequat diam iaculis sed. Vivamus maximus aliquam leo, ac finibus
        est.
      </p>
    </Box>
  );
}
