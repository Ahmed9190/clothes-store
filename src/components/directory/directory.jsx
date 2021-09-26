import { Component } from "react";
import MenuItem from "../menu-item/menu-item";
import sections from "./directory.data";

import "./directory.scss";

export class Directory extends Component {
  state = {
    sections: sections,
  };
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} imageUrl={imageUrl} title={title} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
