import React from "react";
import ReactDOM from "react-dom";
import "@patternfly/react-core/dist/styles/base.css";
import "./app.css";
import {
  Brand,
  Button,
  Card,
  CardActions,
  CardHead,
  CardHeader,
  CardBody,
  CardFooter,
  Gallery,
  GalleryItem,
  Text,
  TextContent,
  TextVariants
} from "@patternfly/react-core";
import { TimesIcon } from "@patternfly/react-icons";
import AppPage from "./components/page";

function App() {
  return (
    <React.Fragment>
      <AppPage>
        <Gallery gutter="md">
          {Array.apply(0, Array(9)).map((x, i) => (
            <GalleryItem key={i}>
              <Card>
                <CardBody>This is a card</CardBody>
              </Card>
            </GalleryItem>
          ))}
        </Gallery>
      </AppPage>
    </React.Fragment>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
