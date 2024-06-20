import { Grid } from "@chakra-ui/react";
import type { ServerEntity } from "features/home/models";
import { ServerTile } from "../ui/server-tile";

interface ServersBlockProps {
  servers: Array<ServerEntity>;
}

export const ServersBlock = ({ servers = [] }: ServersBlockProps) => (
  <Grid gridTemplateColumns="repeat(3, 1fr)" gap="64px 100px">
    {servers.map((server) => (
      <ServerTile
        key={server.id}
        id={server.id}
        name={server.name}
        link={server.link}
        onlineCount={server.onlineCount}
        registeredCount={server.registeredCount}
      />
    ))}
  </Grid>
);
