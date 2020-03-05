import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  TreeView,
  processTreeViewItems,
  handleTreeViewCheckChange,
  moveTreeViewItem,
  TreeViewDragAnalyzer,
  TreeViewDragClue
} from "@progress/kendo-react-treeview";
import "@progress/kendo-react-animation";
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem,Form,FormControl }  from 'react-bootstrap'

const tree = [
  {
    text: "Parent 1",
    //expanded: true,
    items: [
      {
        text: "Child 1",
        items: [
          { text: " Grand Child 1" },
          { text: " Grand Child 2" },
          { text: "Grand Child 3" }
        ]
      },
      { text: "Child 2" },
      { text: "Child 3" }
    ]
  },
  {
    text: "Parent 2",
    items: [
      {
        text: "Child 1",
        items: [
          { text: "Grand child 1" },
          { text: "Grand child 2" },
          { text: "Grand child 3" }
        ]
      },
      { text: "Child 2" },
      { text: "Child 3" }
    ]
  }
];

class App extends React.Component {
  render() {
    return (
        <div>
           <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">TreeView</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
  <br />
  

  <br />
 
  <TreeView
        data={tree}
        expandIcons={true}
        onExpandChange={this.onExpandChange}
        onItemClick={this.onItemClick}
        aria-multiselectable={true}
      />
        </div>
     
    );
  }
  onItemClick = event => {
    event.item.selected = !event.item.selected;
    this.forceUpdate();
  };
  onExpandChange = event => {
    event.item.expanded = !event.item.expanded;
    this.forceUpdate();
  };
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
